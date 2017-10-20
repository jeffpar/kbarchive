---
layout: page
title: "Q103722: FIX: &#95;&#95;far Not Accepted in CodeView 4.0x Watch Window"
permalink: /kb/103/Q103722/
---

## Q103722: FIX: &#95;&#95;far Not Accepted in CodeView 4.0x Watch Window

{% raw %}

	Article: Q103722
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01 
	- Microsoft CodeView for Windows, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The keyword __far generates an error when used in a variable watch expression;
	for example, "(char __far *) var". One of the following errors is generated,
	depending upon whether you have the ANSI or the C++ expression evaluator
	loaded:
	
	  CAN0030: Error: expression cannot be evaluated
	
	  -or-
	
	  CXX0030: Error: expression cannot be evaluated
	
	RESOLUTION
	==========
	
	To work around the problem, use the keyword _far or far instead of __far.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView for MS-DOS versions 4.0
	and 4.01 and CodeView for Windows versions 4.0 and 4.01. The problem was
	corrected in CodeView version 4.1.
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView400 kbCodeView401
	Version           : :4.0,4.01
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
