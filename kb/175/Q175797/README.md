---
layout: page
title: "Q175797: How to Configure Btrieve 6.15 Support for MS Client"
permalink: kb/175/Q175797/
---

## Q175797: How to Configure Btrieve 6.15 Support for MS Client

	Article: Q175797
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To enable MS-DOS 3.0 clients to be able to access a Btrieve 6.15 database, the
	following procedure must be done:
	
	1. During the setup of the MS-DOS Client, select the IPX/SPX SUPPORT DRIVER as
	  the appropriate adapter.
	
	2. Edit the Autoexec.bat file to display the following settings:
	
	     C:\NET\SMARTDRV.EXE
	     @ECHO OFF
	     PROMPT $p$g
	     PATH C:\NET\;c:\dos;%PATH%
	     SET TEMP=C:\DOS
	     c:\odi\lsl
	     c:\odi\exp16odi
	     c:\odi\ipxodi
	     C:\NET\net start
	
	3. Edit the Config.sys file to display the following settings:
	
	     FILES=40
	     DEVICE=C:\dos\SETVER.EXE
	     DEVICE=C:\dos\HIMEM.SYS
	     DOS=HIGH
	     LASTDRIVE=p
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
