---
layout: page
title: "Q139127: DOC: Passing GETFILE() a Semicolon Won't Work in Windows 95"
permalink: /kb/139/Q139127/
---

## Q139127: DOC: Passing GETFILE() a Semicolon Won't Work in Windows 95

	Article: Q139127
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocfix kbvfp
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Help file entry for GETFILE() states:
	
	  If cFileExtensions contains just a semicolon (;), all files without an
	  extension are displayed.
	
	This is not true if Visual FoxPro is running on a computer equipped with Windows
	95.
	
	This documentation error has been fixed in Visual FoxPro 5.0 for Windows.
	
	MORE INFORMATION
	================
	
	If you issue the following command in the Command window:
	
	     ?GETFILE(;)
	
	the following error occurs:
	
	  Function name is missing ).
	
	If you issue the following command in the Command window:
	
	     ?GETFILE(';')
	
	the Open dialog box lists all files except those with no extension.
	
	However, if you issue the following command in Windows 3.x, Windows for
	Workgroups 3.x, or Windows NT 3.5x, the parameter is evaluated to *. and works
	as documented:
	
	     ?GETFILE(';')
	
	Additional query words: 5.00 docerr
	
	======================================================================
	Keywords          : kbdocfix kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
