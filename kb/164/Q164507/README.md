---
layout: page
title: "Q164507: Any User Can Log on to FTP Server with Disabled Anonymous Logon"
permalink: /kb/164/Q164507/
---

## Q164507: Any User Can Log on to FTP Server with Disabled Anonymous Logon

	Article: Q164507
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusagekbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 FTP server can be accessed by any user when the anonymous logon
	is disabled.
	
	
	CAUSE
	=====
	
	The profile name, IUSR_COMPUTERNAME, does not require a password.
	
	RESOLUTION
	==========
	
	There are 2 resolutions to this issue:
	
	1. Set up the user, IUSR_COMPUTERNAME, with a password in User Manager for
	  Domains.
	
	  Because an anonymous logon is not allowed, putting a password on this account
	  will not affect anything but an anonymous logon. This user account is set up
	  specifically for Internet Server Anonymous Logon.
	
	  NOTE: If you change the password for this account in User Manager for Domains
	  AND you have a World Wide Web Server on the same computer, you will need to
	  run Internet Service Manager. Double-click the WWW service, and change the
	  Anonymous Logon Password for the IUSR_COMPUTERNAME user to what you changed
	  it to in User Manager for Domains. This way, users that connect to your WWW
	  Server anonymously can get access to the page.
	
	  -or-
	
	2. Apply the hotfix mentioned in this article.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbusage kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
