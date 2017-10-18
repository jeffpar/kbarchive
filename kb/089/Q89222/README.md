---
layout: page
title: "Q89222: Terminal Incorrectly Saves Filenames"
permalink: kb/089/Q89222/
---

## Q89222: Terminal Incorrectly Saves Filenames

	Article: Q89222
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
	
	Microsoft Windows Terminal saves filenames incorrectly if the name of the
	Windows directory includes an extension (for example, the Windows directory is
	WINDOWS.WIN). Terminal uses the first part of the Windows directory name and
	applies the .TRM extension instead of the specified filename.
	
	For example, if the Windows directory is named WINDOWS.WIN, Terminal saves the
	file as WINDOWS.TRM no matter what name is typed.
	
	MORE INFORMATION
	================
	
	All of the other applications in the Accessories group save files with the
	designated filenames and extensions. Terminal is the only application that does
	not save the filename correctly.
	
	Additional query words: 3.10 3.11 save wincomm terminal.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
