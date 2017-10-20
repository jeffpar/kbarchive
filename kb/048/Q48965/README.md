---
layout: page
title: "Q48965: qsort() Appears Extremely Slow in Worst-Case Situations"
permalink: /kb/048/Q48965/
---

## Q48965: qsort() Appears Extremely Slow in Worst-Case Situations

{% raw %}

	Article: Q48965
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QuickC | mspl13_c
	Last Modified: 16-JAN-1990
	
	Question:
	
	When using qsort() in a worst-case situation (e.g. the array is
	already sorted in reverse order), the qsort() library routine appears
	to take an extremely long time. Have I done something wrong in my
	program or does a problem exist with Microsoft's qsort() algorithm?
	
	Response:
	
	The qsort() routine that was provided by Microsoft was optimized for
	both speed and stack usage [stack space is important because qsort()
	is heavily recursive]. Therefore, in a worst-case situation, which
	could recurse up to the number of elements in the list, qsort()
	sacrifices speed for stack space. This behavior allows larger lists to
	be sorted without stack overflow problems. Furthermore, Microsoft's
	qsort() routine is very competitive in sorting random files, the type
	of array for which quick sorts are designed.
	
	If used judiciously, Microsoft's qsort() is a very effective sort
	routine. In worst-case situations, Microsoft's qsort() is slower than
	some other sorting routines, but successfully sorts larger arrays
	without stack overflow problems.
	
	Microsoft is researching this problem and will post new information as
	it becomes available.

{% endraw %}
