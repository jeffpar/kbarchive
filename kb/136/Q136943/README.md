---
layout: page
title: "Q136943: Multiple-Language Implications in Visual FoxPro"
permalink: /kb/136/Q136943/
---

## Q136943: Multiple-Language Implications in Visual FoxPro

	Article: Q136943
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some points to remember in multiple-language development.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not currently support Unicode. Windows NT supports Unicode,
	but Windows 95 does not.
	
	Windows 95 has the concept of mixing code pages within a document, and
	associating code pages with sections or with fonts. FoxPro does not. The code
	page is a system-wide setting, and all fonts and sections within FoxPro are
	interpreted according to the FoxPro code page setting (read in from the system
	on startup). It is highly inadvisable to use extended characters in table names
	that will be ported across platforms or code pages, because currently most
	operating systems do not translate filenames on copy, so internal references to
	that filename that are translated will no longer match.
	
	Additional query words: VFoxWin localize localise dbcs international collate foreign multilanguage multi-language
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
