---
layout: page
title: "Q89803: Windows Err Msg: FILENAME.BMP Cannot Find This File"
permalink: kb/089/Q89803/
---

## Q89803: Windows Err Msg: FILENAME.BMP Cannot Find This File

	Article: Q89803
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to open a Paintbrush file on a network server using the universal
	naming convention (UNC) by File Association, you receive the following error
	message:
	
	  FILENAME.BMP
	  Cannot find this file.
	
	  Make sure that the correct path and file name are given.
	
	CAUSE
	=====
	
	Paintbrush cannot open a file from the command line or from a packaged object if
	the file is referenced only by UNC and the filename. For example, if your
	command line is \\SERVERNAME\SHARENAME\FILENAME.BMP, Paintbrush fails with the
	above error message.
	
	UNC redirection is supported by Microsoft LAN Manager versions 1.1 and later, and
	by 100-percent LAN Manager compatible networks.
	
	The same command for a Write, Notepad, Cardfile, or Calendar file works
	correctly. Paintbrush only works correctly if you reference the file using a
	valid drive letter, or use the UNC path as a parameter to PBRUSH.EXE.
	
	WORKAROUND
	==========
	
	1. Open Program Manager.
	
	2. From the File menu, choose Run.
	
	3. On the command line, type:
	
	  pbrush.exe \\servername\sharename\filename.bmp
	
	This can be added to a package when using Object Packager to reference a
	Paintbrush file on a network server.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  UNC and packaged and objects
	
	Additional query words: 3.10 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
