---
layout: page
title: "Q114038: Using ShellExecute as an Alternative to ExecProgram"
permalink: kb/114/Q114038/
---

## Q114038: Using ShellExecute as an Alternative to ExecProgram

	Article: Q114038
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to launch applications from within Viewer using the
	Windows ShellExecute() function. Below are a few advantages to using
	ShellExecute() in place of Viewer's ExecProgram() function:
	
	- You can specify or change the default directory.
	
	- You can open or print documents based on existing file associations.
	
	- You have greater control over the application's initial display state.
	
	MORE INFORMATION
	================
	
	To use ShellExecute() from within Viewer, the ShellExecute function must first
	be registered in the [CONFIG] section of your configuration script as shown
	below:
	
	  RegisterRoutine("shell","ShellExecute","USSSSi")
	
	Once this has been done, ShellExecute() can be called just as you would call a
	regular Viewer command.
	
	NOTE: For additional information on registering DLL routines, please see pages
	4-21 thru 4-24 of the "Authoring Guide".
	
	The ShellExecute() function takes 6 parameters. These parameters must appear in
	the following order:
	
	1. hwnd - Identifies the parent window. This window receives any message boxes
	  an application produces (for example, for error reporting). Pass either the
	  Viewer hwndContext or hwndApp variable for this.
	
	2. lpszOp - Points to a null-terminated string specifying the operation to
	  perform. This string can be "open" or "print". If this parameter is NULL,
	  "open" is the default value.
	
	3. lpszFile - Points to a null-terminated string specifying the file to open.
	
	4. lpszParams - Points to a null-terminated string specifying parameters passed
	  to the application when the lpszFile parameter specifies an executable file.
	  If lpszFile points to a string specifying a document file, this parameter is
	  NULL.
	
	5. lpszDir - Points to a null-terminated string specifying the default
	  directory.
	
	6. fsShowCmd - Specifies whether the application window is to be shown when the
	  application is opened. This parameter can be one of the following values:
	  DisplayState Value Meaning ------------ -----
	  ------------------------------------------ HIDE 0 Hides the window and passes
	  activation to another window. SHOWNORMAL 1 Activates and displays a window.
	  If the window is minimized or maximized, Windows restores it to its original
	  size and position (same as RESTORE). SHOWMINIMIZED 2 Activates a window and
	  displays it as an icon. SHOWMAXIMIZED 3 Activates a window and displays it as
	  a maximized window. SHOWMINNOACTIVATE 4 Displays a window in its most recent
	  size and position. The window that is currently active remains active. SHOW 5
	  Activates a window and displays it in its current size and position. MINIMIZE
	  6 Minimizes the specified window and activates the top-level window in the
	  system's list. SHOWMINNOACTIVE 7 Displays a window as an icon. The window
	  that is currently active remains active. SHOWNA 8 Displays a window in its
	  current state. The window that is currently active remains active. RESTORE 9
	  Activates and displays a window. If the window is minimized or maximized,
	  Windows restores it to its original size and position (same as SHOWNORMAL).
	
	EXAMPLES
	--------
	
	NOTE: The following examples use forward slashes ("/") in pathnames instead of
	back slashes ("\"). See page 5-7 of the "Technical Reference" for more
	information on this technique.
	
	  /* Uses the File Manager association to open README.WRI in Microsoft Write
	
	and display it fullscreen */
	
	ShellExecute (hwndapp, "open", "C:/WINDOWS/README.WRI", "", "",3)
	
	  /* Uses the File Manager association to activate and minimize Notepad while
	
	printing WIN.INI */
	
	ShellExecute (hwndapp, "print", "C:/WINDOWS/WIN.INI", "", "",2)
	
	  /* Changes the default directory to C:\VIEWER and displays README.TXT in
	
	Notepad with a normal display state */
	
	ShellExecute (hwndapp, "open", "NOTEPAD.EXE", "README.TXT", "C:/VIEWER",1)
	
	REFERENCES
	==========
	
	Windows 3.1 Software Development Kit "Programmer's Reference", Volume 2
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
