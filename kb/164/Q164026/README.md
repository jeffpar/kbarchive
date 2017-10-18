---
layout: page
title: "Q164026: FPNW Version 3.51 Will Not Run on NT Server 4.0"
permalink: kb/164/Q164026/
---

## Q164026: FPNW Version 3.51 Will Not Run on NT Server 4.0

	Article: Q164026
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If File and Print Services for NetWare (FPNW) 3.51 is installed on a computer
	running Windows NT 4.0 Server, one or all of the error messages below may
	appear.
	
	After you enter your user name and password in the logon process, you receive the
	following error:
	
	  The procedure entry point SetUserPropertyWithLength could not be located in
	  the dynamic link library Fpnwclnt.dll.
	
	After opening User Manager for Domains in Windows NT 4.0, you receive the
	following error:
	
	  Usrmgr.exe - Entry Point Not Found: The procedure entry point
	  ?Connect@DEVICE2@@QAEJPBG000@Z could not be located in the dynamic link
	  library Netui1.dll.
	
	NOTE: There may also be other errors that occur, but only the two above are known
	to occur.
	
	
	CAUSE
	=====
	
	File and Print Services for NetWare 3.51 is version specific and is meant to run
	on Microsoft Windows NT version 3.51 only; not on any other version of Microsoft
	Windows NT.
	
	RESOLUTION
	==========
	
	Run the appropriate version of FPNW to match the version of Windows NT you are
	currently using.
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
