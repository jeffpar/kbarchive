---
layout: page
title: "Q157278: Msbatch.inf Parameters: Removing Standard Desktop Icons"
permalink: /kb/157/Q157278/
---

## Q157278: Msbatch.inf Parameters: Removing Standard Desktop Icons

	Article: Q157278
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove the standard desktop icons including the
	Recycle Bin, The Microsoft Network, and the Inbox from the desktop using the
	Msbatch.inf file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	Recycle Bin
	-----------
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  delreg=recycle.remove
	
	Also, add the following section and key:
	
	  [recycle.remove]
	  HKLM,"Software\Microsoft\Windows\CurrentVersion\Explorer\desktop\ 
	  NameSpace\{645FF040-5081-101B-9F08-00AA002F954E}",,,
	
	The Microsoft Network
	---------------------
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  UpdateINIs=msn.remove
	
	Also, add the following section and key:
	
	  [msn.remove]
	  setup.ini,desktop,,%Setup_MSN_DESC%,MSNEXCH.EXE %Setup_MSN_DESC%
	
	Inbox
	-----
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  delreg=inbox.remove
	
	Also, add the following section and keys:
	
	  [inbox.remove]
	  HKLM,"Software\Microsoft\Windows\CurrentVersion\Explorer\desktop\ 
	     NameSpace\{00020D76-0000-0000-C000-000000000046}",,,
	  HKLM,"Software\Microsoft\Windows\CurrentVersion\Explorer\desktop\ 
	     NameSpace\{00020D75-0000-0000-C000-000000000046}",,,
	
	NOTE: You should type the above lines all on one line. They will not work if
	entered wrapped as shown.
	
	Note that there are two different NameSpace entries depending on whether or not
	you have the Microsoft Exchange components loaded.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
