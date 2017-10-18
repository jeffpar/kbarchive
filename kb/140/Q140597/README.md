---
layout: page
title: "Q140597: FIX: Fatal Error LNK1561: Entry Point Must Be Defined"
permalink: kb/140/Q140597/
---

## Q140597: FIX: Fatal Error LNK1561: Entry Point Must Be Defined

	Article: Q140597
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500fix kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build an AppWizard-generated application that has a directory with a
	trailing backslash (\) specified in the Additional Include Directories field of
	the C/C++ Preprocessor settings, you receive this error:
	
	  
	
	  Compiling...
	  StdAfx.cpp
	  LINK : fatal error LNK1561: entry point must be defined
	  Error executing cl.exe.
	
	CAUSE
	=====
	
	The backslash (\) character is interpreted as an escape character.
	
	RESOLUTION
	==========
	
	To work around this problem, do not include trailing backslashes in the
	Additional Include Directories field of the C/C++ Preprocessor settings. For
	example, specify directories as C:\Project\Inc rather than as C:\Project\Inc\.
	Or if you want to specify the current directory as .\, use just the period (.)
	instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbide kbVC kbVC500fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
