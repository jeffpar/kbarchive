---
layout: page
title: "Q108288: How CodeView Locates Source Files"
permalink: /kb/108/Q108288/
---

## Q108288: How CodeView Locates Source Files

{% raw %}

	Article: Q108288
	Product(s): Microsoft Programming Utilities
	Version(s): 3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CodeView debugger will open a dialog box to request the path for the source
	file of the program to be debugged if it cannot locate the source file from the
	current directory and from the directories specified in the CURRENT.STS file.
	
	For example, CodeView often asks for the path for WINMAIN.CPP when you start
	debugging a Microsoft Foundation Classes (MFC) application.
	
	MORE INFORMATION
	================
	
	To prevent CodeView from asking for the path to the source code every time you
	start CodeView, you need to make sure the source file is either in the directory
	where CodeView loads the .EXE file or in a directory specified in the synonym
	entry in the [debug-] section of the CURRENT.STS file. If there is no
	CURRENT.STS file available in the path specified by the INIT environment
	variable, CodeView will create a CURRENT.STS file and add a synonym entry in the
	debug section so CodeView will be able to locate it in future. For example,
	CodeView added a synonym entry in the CURRENT.STS file after C:\MSVC\MFC\SRC was
	specified from the Open Source File dialog box.
	
	  [debug-]
	     target="c:\kb\mfc\combobox\combobox.exe"
	     synonym=;C:\MSVC\MFC\SRC
	SRC
	
	The synonym entry was introduced in CodeView version 4.0. Earlier versions of
	CodeView do not support this feature.
	
	It is important to set INIT properly before starting CodeView. The INIT must be
	pointing to a directory that actually exists and has a sufficient amount of
	storage space. For example, the following MS-DOS command makes INIT point to
	C:\MSVC\INIT directory:
	
	  SET INIT=C:\MSVC\INIT
	
	You can either add this command in the AUTOEXEC.BAT file or run it from the
	MS-DOS prompt directly.
	
	CodeView always searches the directory where it loads the .EXE first. If the
	source file is not found, it will use the INIT environment variable to locate
	the CURRENT.STS file and then search the synonym entries in the debug section.
	If CodeView cannot find the file in the above places, CodeView will pop up the
	Open Source File box.
	
	Additional query words: kbinf 3.00 4.00 4.10 winmain.cpp winmain
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
