---
layout: page
title: "Q135567: Novell Allow Tool Does Not Work on Windows 95 NCP Server"
permalink: /kb/135/Q135567/
---

## Q135567: Novell Allow Tool Does Not Work on Windows 95 NCP Server

	Article: Q135567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Novell NetWare Allow.exe tool cannot change the inherited rights mask of a
	file or folder on a Windows 95-based computer that is using the Microsoft File
	and Print Sharing for NetWare Networks network component.
	
	CAUSE
	=====
	
	The Microsoft File and Print Sharing for NetWare Networks network component does
	not support inherited rights masks for files or folders.
	
	RESOLUTION
	==========
	
	You must set the file access rights in Windows 95. Use the right mouse button to
	click the folder you want to change, and then click Sharing on the menu that
	appears.
	
	MORE INFORMATION
	================
	
	Novell NetWare servers support file sharing from the directory and the file
	level. The Microsoft File and Print Sharing for NetWare Networks network
	component supports file sharing on a folder-level basis only, not on a file-
	level basis.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
