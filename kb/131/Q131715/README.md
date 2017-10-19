---
layout: page
title: "Q131715: How to Set Up And Synchronize with Domain Time Source Servers"
permalink: /kb/131/Q131715/
---

## Q131715: How to Set Up And Synchronize with Domain Time Source Servers

	Article: Q131715
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows 3.1 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up a Windows NT Server to act as a Domain Time
	Source server and enable client computers to synchronize with it.
	
	MORE INFORMATION
	================
	
	Network administrators may establish one or more Windows NT timesource servers
	as domain time standards and modify client login scripts to synchronize
	workstation time to the timesource servers. Network environments that require
	high accuracy may install the TIMESERV utility (included in the Windows NT
	Resource Kit). This utility synchronizes a Windows NT computer to a remote time
	standard through modem dial-up. For more information about TIMESERV, refer to
	the Windows NT Resource Kit Help file (RKTOOLS.HLP).
	
	Setting Up Windows NT Server as a Domain Time Source Server
	-----------------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (REGEDT32.EXE) and locate the following Registry
	  subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	        \LanManServer\Parameters
	 
	
	2. From the Edit menu, select Add Value.
	
	3. Add the following:
	
	     Value Name: TimeSource
	     Data Type:  REG_DWORD
	     String: 1
	 
	
	4. Choose OK and quit the Registry Editor.
	
	5. Shut down and restart Windows NT.
	
	Enabling Client Computers to Synchronize with Domain Time Source Server
	-----------------------------------------------------------------------
	
	For Windows NT client computers, type the following in the MS-DOS Command Prompt
	or add the following to the login script:
	
	  NET TIME /DOMAIN:<domain name> /SET
	
	For Windows or MS-DOS based client computers, such as Windows, Windows for
	Workgroups, LAN Manager for MS-DOS or Microsoft Network Client for MS-DOS, type
	the following in the MS-DOS command prompt or add the following to the login
	script:
	
	  NET TIME /WORKGROUP:<domain name> /SET
	
	NOTE: You can also synchronize all timesource computers with a master timesource
	computer using the command: NET TIME \\<computername> /SET. The master
	timesource computer can also be synchronized to an external time standard using
	the TIMESERV utility.
	
	Additional query words: sync
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbZNotKeyword kbLanManSearch kbWFWSearch kbZNotKeyword3 kbNetworkClientSearch kbWin310 kbWFW310 kbWFW311 kbLanMan220c kbNetworkClient300DOS
	
	=============================================================================
	
