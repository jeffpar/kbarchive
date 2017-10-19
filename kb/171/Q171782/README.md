---
layout: page
title: "Q171782: INFO: How to Map a Network Drive During an Unattended Setup"
permalink: /kb/171/Q171782/
---

## Q171782: INFO: How to Map a Network Drive During an Unattended Setup

	Article: Q171782
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During an unattended setup of Windows NT 4.0, it may be beneficial to map a
	network drive in the of middle setup. Mapping drives during setup allows you to
	load balance your servers, have your distribution share on one server, and an
	application share on another.
	
	MORE INFORMATION
	================
	
	An entry in the Cmdlines.txt will be used to map a drive during setup. This is
	possible because Cmdlines.txt is run after Machine Name is set and the Network
	is started.
	
	  [Commands]
	     ".\net use s: \\server\share /user:Domainname\Username /persistent:no"
	     "s:\internet\msie30.exe /Q /R:N"
	     "s:\sp\update -u -z -n"
	
	NOTE: Use the /user: parameter because Windows NT setup is run using the System
	Account, which does not have a user account associated with it.
	
	NOTE: Use /user:Domainname\Username Password - if the username has a password
	associated with it.
	
	The /persistent parameter is used to ensure that the drive letter is not
	automatically reconnected when logging on. It is best to force a static drive
	letter than use a dynamic letter, which, by default, picks the next available
	drive letter. In the above example, it is assumed that an Internet Explore
	package has been built with the Internet Admin Kit and has been place on the
	distribution server in a directory called Internet.
	
	Depending on the rollout of Windows NT 4.0, it may be beneficial to enable the
	Guest Account on the Application Share, and connect with a
	/user:Domainname\Guest. This will ensure that, if a computer can get on the
	network, but cannot be validated by a domain controller, setup can still be
	completed.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q168814 Installing NT 4.0 Service Packs During Unattended Installation
	
	For additional information on Windows NT 4.0 deployment and unattended
	installation consult the Microsoft Knowledge Base at:
	
	  http://www.microsoft.com/kb
	
	and download the Windows NT 4.0 Deployment Guide from:
	
	  http://www.microsoft.com/ntworkstation
	
	NOTE: The deployment guide is valid for both Windows NT Workstation and Windows
	NT Server.
	
	Additional query words: Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
