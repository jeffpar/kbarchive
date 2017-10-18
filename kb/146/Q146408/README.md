---
layout: page
title: "Q146408: Chat Prompts for Password Dialing Windows NT-Based Computer"
permalink: kb/146/Q146408/
---

## Q146408: Chat Prompts for Password Dialing Windows NT-Based Computer

	Article: Q146408
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial a Microsoft Windows NT-based computer using Chat (Winchat.exe) in
	Windows 95 or Windows for Workgroups, you are prompted for a domain name and
	password.
	
	CAUSE
	=====
	
	When you dial a Windows NT-based computer using Chat in Windows 95 or Windows
	for Workgroups, domain validation is required.
	
	RESOLUTION
	==========
	
	In Windows for Workgroups, if you cache your domain password you are not
	prompted for a password when you dial a Windows NT-based computer. In Windows
	95, you must always enter your domain password when you use Chat to dial a
	Windows NT-based computer.
	
	MORE INFORMATION
	================
	
	Although you can cache your domain password when you log on to Windows 95 or
	Windows for Workgroups, Chat does not look for the cached password in Windows
	95.
	
	Additional query words: 3.10 3.11 netdde dde network
	
	======================================================================
	Keywords          : win95 
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	
