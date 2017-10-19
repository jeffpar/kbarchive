---
layout: page
title: "Q129897: PRB: Procedure too Large Error When Compiling in VB 4.0"
permalink: /kb/129/Q129897/
---

## Q129897: PRB: Procedure too Large Error When Compiling in VB 4.0

	Article: Q129897
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some procedures that compile in Visual Basic version 3.0 generate the following
	compile-time error message in Visual Basic version 4.0:
	
	  Procedure too large
	
	CAUSE
	=====
	
	The maximum size of the internal code for an individual procedure in Visual
	Basic version 3.0 is 64K bytes. Microsoft Visual Basic version 4.0 for Windows
	uses Microsoft Visual Basic for Applications, which generates more generic
	internal code than does Microsoft Visual Basic version 3.0. This generic code
	allows for compatibility with a wider range of processors. This makes the
	internal code larger, so it can cause very large procedures to exceed the 64K
	limit and fail to compile.
	
	WORKAROUND
	==========
	
	Split the large procedure into two or more smaller procedures.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 conversion vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
