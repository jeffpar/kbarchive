---
layout: page
title: "Q85858: Misleading Error When Renaming Read-Only File on Novell"
permalink: kb/085/Q85858/
---

## Q85858: Misleading Error When Renaming Read-Only File on Novell

	Article: Q85858
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have Read-Only privileges to a directory on a Novell network, and you
	attempt to rename a file using Windows version 3.1's File Manager, the following
	misleading error message is displayed:
	
	  
	
	             ERROR RENAMING FILE
	
	  Cannot rename G:\CASTLE.BMP: Cannot find file.
	  Make sure the correct path and filename are
	  specified.
	
	CAUSE
	=====
	
	You that you do not have access to the file because you don't have Write
	privileges. To successfully rename the file, you need to have the system
	administrator grant you Write privileges to the directory.
	
	Additional query words: 3.10 3.1 netware novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
