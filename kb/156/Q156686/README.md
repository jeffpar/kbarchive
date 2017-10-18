---
layout: page
title: "Q156686: Unavailable Connections to NetWare Volumes with InocuLAN 1.01"
permalink: kb/156/Q156686/
---

## Q156686: Unavailable Connections to NetWare Volumes with InocuLAN 1.01

	Article: Q156686
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error when trying to reconnect to any Novell
	Server connection under File Manager from a computer running Windows NT
	Workstation 3.5x:
	
	  SYSTEM ERROR 85 HAS OCCURRED:
	  The local device name is already in use.
	
	CAUSE
	=====
	
	If you install Client Services for NetWare on a computer running Windows NT
	Workstation 3.51, and use Cheyenne Software's virus checker InocuLAN v1.01 on
	that computer, you may receive the above error when you attempt to reconnect to
	NetWare resources. File Manager will show the connection as unavailable.
	However, when you log out and log back on with the same account, the connections
	are no longer unavailable but are now valid.
	
	Also, if you log on locally and remap the drives, the connections are no longer
	unavailable.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Log off and log back on with the same user account.
	
	-or-
	
	- Go to Control Panel Services tool and disable the Cheyenne InocuLAN Anti-
	  Virus Server service. Check with Cheyenne for version updates that may not
	  cause this problem.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351
	Version           : WinNT:3.5,3.51
	
	=============================================================================
	
