---
layout: page
title: "Q129330: FIX: Installing CDK Appears to Corrupt Visual C++ Help Index"
permalink: /kb/129/Q129330/
---

## Q129330: FIX: Installing CDK Appears to Corrupt Visual C++ Help Index

{% raw %}

	Article: Q129330
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbole kbCtrlkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE Control Developer's Kit (CDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the 32-bit CDK, you may find that some keyword searches in the
	Help menu bring up references to a non-existent help file ("Miscellaneous Tools
	Quick Reference" - TOOLS20.HLP) or don't find anything at all (OLE API
	functions).
	
	CAUSE
	=====
	
	The 32-bit CDK installation copies its own help files into the \MSVC20\HELP
	directory. It replaces the default Visual C++ version 2.0 index file
	(MSVC20.IDX) with its own copy. The MSVC20.IDX that comes with the CDK does not
	include all the correct indexes to the correct help files.
	
	RESOLUTION
	==========
	
	Reinstalling the help files for Visual C++ version 2.0 will restore the original
	MSVC20.IDX index file. To access the CDK help files, you will need to open them
	separately, using WINHLP32.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft OLE Control
	Developer's Kit (CDK), version 1.1.
	
	Additional query words: 1.00 1.10 setup
	
	======================================================================
	Keywords          : kbole kbCtrl kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbOLESearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
