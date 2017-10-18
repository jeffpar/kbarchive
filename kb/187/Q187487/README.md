---
layout: page
title: "Q187487: Upgrading from WinFrame 1.7 to Terminal Server 4.0"
permalink: kb/187/Q187487/
---

## Q187487: Upgrading from WinFrame 1.7 to Terminal Server 4.0

	Article: Q187487
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can upgrade your computer from Citrix WinFrame 1.7 to Terminal Server
	Edition 4.0. This article describes a few differences that occur during Setup
	that do not occur in a typical Terminal Server installation.
	
	MORE INFORMATION
	================
	
	Early in the upgrade process, you receive a message stating that the existing
	WinFrame connections are preserved but disabled. This means that the Independent
	Computing Architecture (ICA) connection definitions from WinFrame's winstation
	configuration are disabled.
	
	To re-enable ICA connection definitions, you must obtain Citrix's add-on product
	(MetaFrame) for Terminal Server. You can use MetaFrame to allow a Citrix ICA
	client to use an ICA connection as defined in the Terminal Server Connection
	Configuration to connect to the Terminal Server computer.
	
	After you upgrade, the defined ICA connections are not preserved. If you open the
	Terminal Server Connection Configuration, only the default RDP-TCP connection is
	displayed. (This is a known problem in Terminal Server.)
	
	During the upgrade, you have the option of installing Microsoft Internet
	Information Server, but you do not have the option to install Microsoft Internet
	Explorer 4.0. (This is also a known problem in Terminal Server.) You can install
	Internet Explorer 4.0 from the Terminal Server CD-ROM.
	
	Otherwise, the upgrade preserves user accounts and groups, including any account
	options such as the Terminal Server profile path, connection timeouts, and other
	options specific to WinFrame/Terminal Server. Also, if WinFrame's hard disk
	letters were modified (typically drive C becomes drive M, drive D becomes drive
	N, and so on), these modifications are preserved.
	
	A number of Citrix registry values are also preserved. These values are located
	in the following registry keys:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_CURRENT_USER\Software\Citrix
	
	  HKEY_LOCAL_MACHINE\Software\Citrix
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal
	  Server\Install\Software\Citrix
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Citrix (and any other
	  existing control sets)
	
	  HKEY_USERS\Software\Citrix
	
	  HKEY_USERS\<AdministratorSID>\Software\Citrix
	
	Additional query words: tse
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
