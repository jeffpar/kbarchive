---
layout: page
title: "Q149850: Platform Field in .SCX and .VCX Contains the String WINDOWS"
permalink: kb/149/Q149850/
---

## Q149850: Platform Field in .SCX and .VCX Contains the String WINDOWS

	Article: Q149850
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro for Macintosh, the Platform field of a form (.scx file) or a
	visual class library (.vcx file) shows WINDOWS.
	
	MORE INFORMATION
	================
	
	In a Visual FoxPro for Macintosh form, the Platform field contains the string
	WINDOWS. This is different from FoxPro for Macintosh version 2.6 where the
	Platform field of a form holds the string MAC.
	
	The value stored in the Platform field affects the behavior of the COMPILE FORM
	command. This command compiles only the records that are marked as WINDOWS and
	ignores any other records. If an older .scx or .vcx file in your application
	contains the string MAC, use the following steps to update the file and to
	ensure that all the records are compiled:
	
	1. Use <filename.scx> or use <filename.vcx>.
	
	2. Change all Platform fields containing platform= MAC to WINDOWS.
	
	3. Compile the form (.scx or .vcx) file by using the COMPILE FORM command.
	
	NOTE: If you edit a form in the Form Designer, Visual FoxPro writes WINDOWS in
	the Platform field regardless of the operating system you are using. Similarly,
	if you transport a FoxPro 2.6 form to Visual FoxPro, the WINDOWS string will be
	stored in the Platform field.
	
	Additional query words: vfoxmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
