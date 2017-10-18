---
layout: page
title: "Q59540: &quot;No Symbolic Information&quot; May Be Caused by Wrong Linker"
permalink: kb/059/Q59540/
---

## Q59540: &quot;No Symbolic Information&quot; May Be Caused by Wrong Linker

	Article: Q59540
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for OS/2, versions 2.2, 3.0, 3.11, 3.12, 3.5 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CodeView generates the message "No Symbolic Information" and displays the
	program in assembly language mode even though the source files were compiled and
	linked with the correct options to specify CodeView symbolic debugging
	information.
	
	CAUSE
	=====
	
	Different versions of the linker use different methods to store symbolic
	information. A later version of CodeView generally can display symbolic
	information for an application developed with earlier versions of LINK, but the
	converse is not true. Problems can arise when you use a recent version of LINK
	with an earlier version of CodeView.
	
	RESOLUTION
	==========
	
	To debug an application at the source code level with CodeView, you must use the
	correct version of Microsoft LINK. Each CodeView version has a corresponding
	LINK version. If you use a version of LINK released after the version designed
	for your version of CodeView, CodeView might not recognize the symbolic
	information in the .EXE file.
	
	MORE INFORMATION
	================
	
	Versions of CodeView earlier than version 4.1 cannot display symbolic
	information stored in .EXE files produced by LINK versions 5.5 and later. In
	other words, if you use LINK 5.5 (provided with Visual C++ version 1.0 for
	Windows), then you can use only CodeView 4.0 to debug the application and
	display symbolic information.
	
	  CodeView versions 4.0 through 4.05 are compatible with LINK versions 5.3 and
	  5.31.
	
	  CodeView versions 3.0 through 3.5 and compatible with LINK versions 5.1
	  through 5.2.
	
	  CodeView 2.35 is compatible only with LINK version 5.05 (both were released
	  with Basic 7.0).
	
	  CodeView versions 2.0 through 2.3 are compatible with LINK versions 3.6
	  through 5.03.
	
	  CodeView versions 1.0, 1.1, and 1.11 are compatible with LINK versions 3.51 up
	  to, but not including, version 3.6.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView220OS2 kbCodeView300OS2 kbCodeView311OS2 kbCodeView312OS2 kbCodeView350OS2 kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.12,3.14,3.5,4.0,4.01,4.05,4.1
	
	=============================================================================
	
