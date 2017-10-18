---
layout: page
title: "Q149205: XADM: Msg: Setup Is Searching for Installed Components"
permalink: kb/149/Q149205/
---

## Q149205: XADM: Msg: Setup Is Searching for Installed Components

	Article: Q149205
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup exc4 exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you run Setup.exe from the Microsoft Exchange Server compact disc, a
	message is displayed:
	
	  Setup is searching for installed components.
	
	The Setup program is looking for an installation of the Exchange Server services
	and other related information in the registry.
	
	MORE INFORMATION
	================
	
	To detect a previous installation of Exchange Server on your computer, the Setup
	program checks the HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  \Software\Microsoft\Exchange\Setup
	
	The settings in this registry sub-key are similiar to this:
	
	  AdminDest: REG_SZ : C:\EXCHSRVR\BIN
	  MSMailConnector: REG_SZ : C:\EXCHSRVR
	  Internet: REG_SZ : C:\EXCHSRVR
	  Services: REG_SZ : C:\EXCHSRVR
	  X400: REG_SZ : C:\EXCHSRVR
	
	NOTE: C:\EXCHSRVR is the default path, but the path can be changed and the
	settings in this registry sub-key display the actual installation directory
	selected during Setup.
	
	To Hide a Previous Installation of Exchange Server from Setup.exe
	-----------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you want to prevent Setup from successfully detecting a previous installation
	of Exchange Server, perform one of the following steps:
	
	- Select the SETUP key and save it to a file, and then delete the key.
	
	-or-
	
	- Temporarily modify these settings by completely removing the path.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
