---
layout: page
title: "Q129697: Unattended Upgrade Using SETUPMGR and TCP/IP Protocol Stops"
permalink: /kb/129/Q129697/
---

## Q129697: Unattended Upgrade Using SETUPMGR and TCP/IP Protocol Stops

	Article: Q129697
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an unattended upgrade of Windows NT version 3.1 to Windows NT
	version 3.5 using the Windows NT version 3.5 Resource Kit utility, SETUPMGR.EXE,
	and the TCP/IP protocol, the upgrade stops and requests that you select either
	Dynamic Host Configuration Protocol (DHCP) or static IP address configuration.
	
	RESOLUTION
	==========
	
	SETUPMGR.EXE is a utility included in Windows NT Resource Kit version 3.5. If
	you have Systems Management Server version 1.0, use NTUPGRAD.SCR instead of
	UNATTEND.TXT with SETUPMGR.EXE. If you do not have Systems Management Server
	version 1.0, create a NTUPGRAD.SCR file using a text editor such as Notepad as
	follows:
	
	  [Unattended]
	  Method = <custom | express>
	  ConfirmHardware = <yes | no>
	  NtUpgrade = <manual | yes | no | single>
	  Win31Upgrade = <yes | no>
	  TargetPath = <manual | * | [path]>
	
	  [GuiUnattended]
	  !UpgradeEnableDhcp = <YES | NO>
	  !DetachedProgram =
	  !Arguments =
	  !ProductId =
	
	For parameter and switch information for the entries above, see NATTEND.SCR if
	you have Systems Management Server 1.0. If not, see UNATTEND.TXT (shipped with
	Windows NT Resource Kit version 3.5).
	
	NOTE: The Resource Kit utilities are shipped as is. Send any comments regarding
	Resource Kit utilities to rkinput@microsoft.com.
	
	Additional query words: prodnt 3.10 sms reskit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
