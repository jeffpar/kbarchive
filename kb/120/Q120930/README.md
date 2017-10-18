---
layout: page
title: "Q120930: How to Re-sync a LAN Manager Server in a Windows NT Domain"
permalink: kb/120/Q120930/
---

## Q120930: How to Re-sync a LAN Manager Server in a Windows NT Domain

	Article: Q120930
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	3.10 3.50 2.20
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft LAN Manager to Windows NT Advanced Server Upgrade, version 1.0 
	- Microsoft LAN Manager 
	-------------------------------------------------------------------------------
	
	When a LAN Manager backup domain controller (BDC) or member server resides
	in a Windows NT Server domain, the LAN Manager server may fall out of sync
	with the primary domain controller. The following procedure describes how
	to re-synchronize a LAN Manager Server in a Windows NT domain:
	
	1. Demote the LAN Manager server to stand-alone. From NetAdmin, choose Security
	  Settings from the Accounts menu. Change the Role of the server to standalone.
	
	2. Remove the LAN Manager server from the domain. In Server Manager on the
	  Windows NT Server, select the LAN Manager server. Choose Remove from Domain
	  from the Computer menu.
	
	3. Remove the LAN Manager server from the Server's group. From User Manager on
	  the Windows NT Server, select the LAN Manager server. Choose Delete from the
	  User menu.
	
	4. Promote the LAN Manager server to a backup controller or member server. From
	  NetAdmin, choose Security Settings from the Accounts menu. Change the role of
	  the server back to BDC or Member.
	
	5. From the OS/2 command prompt on the LAN Manager Server, run the following
	  command:
	
	  net accounts /sync
	
	Additional query words: 3.10 2.20 lm lanman prodnt prodlm2nt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search _IKkbbogus kbLanManSearch kbLanManNTAdvServUpg
	Version           : :1.0,3.1,3.5
	
	=============================================================================
	
