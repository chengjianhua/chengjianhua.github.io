---
title: exists与not exists的概念与用法
date: 2016-03-23 23:57:28
tags: [SQL, Note]
---

### **原理：**利用`exists`或`not exists`查询时，它是对父句中的每一次循环都执行查询子句来判断当前循环指向的元组是否满足查询子句的结果集不为（为）空，如果满足了的话，就将当前元组输出到父句的结果集中。

<!-- more -->

#### `exists`

```sql
select ...
from ...
where exists
(
	查询子句;
)
```

如果有结果集被返回，则父句中的`where`语句的结果为真，那么输出当前元组到结果集中。

#### `not exists`

```sql
select ...
from ...
where not exists
(
	查询子句;
)
```

如果子句返回的结果集为空（不存在满足查询子句条件的元组），那么输出当前元组到结果集中，否则不输出。

### 示例

*摘自leetcode*


----------

职员：
|Id|Name|Salary|DepartmentId|
|:----|:-----| :-----|:-----|
| 1  | Joe   | 70000 | 1 |
| 2  | Henry | 80000 | 2 |
| 3  | Sam   | 60000 | 2 |
| 4  | Max   | 90000 | 1 |

部门：
| Id | Name     |
| :-----|:-----|
| 1  | IT       |
| 2  | Sales    |

要求输出每个部门薪水最高的员工的信息，输出格式及结果应为如下：

| Department | Employee | Salary |
|:-----| :-----|:-----|
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |


----------


解决方法：

```sql
SELECT D.Name,A.Name,A.Salary
FROM
    Employee A,
    Department D   
WHERE A.DepartmentId = D.Id
  AND NOT EXISTS
  (SELECT 1 FROM Employee B WHERE B.Salary > A.Salary AND A.DepartmentId = B.DepartmentId)
```

`SELECT 1 FROM Employee B WHERE ...`这里为何是`SELECT 1`呢？
因为上面说过只判断有没有结果集返回，无论返回的是什么都能用来做判断。
