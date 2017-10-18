---
layout: page
title: "Q89736: Sharing Violation with Norton Desktop Smart Erase"
permalink: kb/089/Q89736/
---

## Q89736: Sharing Violation with Norton Desktop Smart Erase

	Article: Q89736
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 1.0 of American Heritage Dictionary for Windows, SHARE.EXE,
	and version 2.0 of Norton Desktop for Windows, the following error message is
	generated:
	
	  Sharing Violation on Drive C:
	
	CAUSE
	=====
	
	This error message is caused by the Smart Erase utility from Norton Desktop for
	Windows.
	
	Smart Erase is a utility that works in conjunction with a terminate-and-
	stay-resident (TSR) program called SmartCan. Together they provide the ability
	to delete files, recover deleted files, and to protect files from being
	overwritten or permanently deleted by placing them in a hidden directory called
	SMARTCAN.
	
	By default, Smart Erase protects all unarchived files on your hard drive except
	*.TMP and *.SWP.
	
	WORKAROUND
	==========
	
	- Specify that Smart Erase not protect the *.SYS files. Refer to your Norton
	  manual for more information.
	
	  -or-
	
	- Run the application without SHARE.EXE loaded.
	
	MORE INFORMATION
	================
	
	For more information, contact Symantec technical support.
	
	The American Heritage Dictionary and Desktop products included here are
	manufactured by vendors independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty ndw 4print
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
