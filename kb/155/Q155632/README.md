---
layout: page
title: "Q155632: NWCONV.EXE Does Not Allow Conversion to Standalone Server"
permalink: /kb/155/Q155632/
---

## Q155632: NWCONV.EXE Does Not Allow Conversion to Standalone Server

	Article: Q155632
	Product(s): Microsoft Windows NT
	Version(s): 3.50,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	3.5 3.51 4.00
	WINDOWS
	kbnetwork kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.50, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to select a Windows NT Server as the destination for a NetWare
	conversion using Nwconv.exe, you may receive the following error message:
	
	  <servername> is not a Windows NT Server
	
	CAUSE
	=====
	
	Nwconv.exe requires the destination server to be a domain controller in order to
	be able to add user groups and Access Control lists. You cannot migrate
	(converge) Netware users, groups, directories, and files to a Windows NT Server
	configured as a standalone server or a Windows NT Workstation.
	
	RESOLUTION
	==========
	
	Select a Windows NT Server that is a domain controller for the destination
	server when you are using Nwconv.exe.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.50,3.51,4.0
	
	=============================================================================
	
