---
layout: page
title: "Q196765: WD97: &quot;Cannot Open File&quot; Error in INCLUDETEXT Field"
permalink: kb/196/Q196765/
---

## Q196765: WD97: &quot;Cannot Open File&quot; Error in INCLUDETEXT Field

	Article: Q196765
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert an INCLUDETEXT field in a Microsoft Word document, the following
	error message appears in place of the field results:
	
	  Error! Cannot open file.
	
	CAUSE
	=====
	
	When you manually insert an INCLUDETEXT field in your document, one of the
	following may be causing the error message:
	
	- The file path has a space in the folder or file name.
	
	  For example:
	
	  {INCLUDETEXT c:\\my<space>documents\\test.doc}
	
	  -or-
	
	- The file path does not include double-backslashes separating the folders
	  and/or file name.
	
	  For example:
	
	  {INCLUDETEXT "c:\my documents\test.doc"}
	
	RESOLUTION
	==========
	
	You must enclose the path and file name in quotation marks if there are spaces
	in any part of the path or file name and you must use double-backslashes in the
	path to separate the folder and/or file name in an INCLUDETEXT field.
	
	For example:
	
	  {INCLUDETEXT "C:\\My Documents\\Test.doc"}
	
	  -or-
	
	  {INCLUDETEXT C:\\Documents\\Word\\Test.doc}
	
	Additional query words: fields documentation error
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
