---
layout: page
title: "Q165419: FIX: SQL Debugger Displays Incorrect Value for Float Variables"
permalink: /kb/165/Q165419/
---

## Q165419: FIX: SQL Debugger Displays Incorrect Value for Float Variables

	Article: Q165419
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbEEdition kbVC kbVC500bug kbVC600fixkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The value of FLOAT variables inside the SQL Debugger is displayed incorrectly
	for any value other than zero.
	
	For example, a float that you expect to contain the value 1.1 is displayed as the
	value 4.6508221013814e-104.
	
	
	RESOLUTION
	==========
	
	This only effects the display of FLOAT values. Modify the values of FLOAT
	variables with the debugger and the changes will be made correctly.
	
	To workaround this, you can assign the value of the FLOAT variable to a
	
	  CHAR variable and examine the CHAR variable in the debugger. For example:
	
	     DECLARE @floatVar FLOAT
	     DECLARE @strVar CHAR (10)
	
	     SELECT @floatVar = 1.1
	     SELECT @strVar = CONVERT ( CHAR(10), @floatVar )
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	Additional query words: kbvc500bug kbvc600fix kbEEdition kbSQL kbDebug
	
	======================================================================
	Keywords          : kbEEdition kbVC kbVC500bug kbVC600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
