---
layout: page
title: "Q101505: Macintosh Users Logon Only as Guest, Not Registered User"
permalink: kb/101/Q101505/
---

## Q101505: Macintosh Users Logon Only as Guest, Not Registered User

	Article: Q101505
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to logon to a Windows NT Advanced Server from a Macintosh as a
	registered user fails.
	
	CAUSE
	=====
	
	The Macintosh does not have the Microsoft user authentication module (UAM)
	installed.
	
	RESOLUTION
	==========
	
	Install the Microsoft UAM on the Macintosh or perform the following three steps
	to reduce the security of the network and eliminate the requirement for its
	use:
	
	1. In the Control Panel, choose MacFile.
	
	2. Choose Attributes.
	
	3. Remove the Require Microsoft Authentication check box.
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT Advanced Server was designed to be a secure operating
	system. Windows NT Advanced Services for Macintosh maintains this security by
	requiring users to use the Microsoft user authentication module (UAM) when first
	logging onto the server. If a user does not have the Microsoft UAM installed,
	the option to logon as a registered user is unavailable (dimmed). A logon
	attempt without the UAM present would transmit the account name and password
	through the network without encrypting them; a network "sniffer" could be used
	to access that information.
	
	Additional query words: sfm prodnt 3.10
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
