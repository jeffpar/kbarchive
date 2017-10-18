---
layout: page
title: "Q153666: Updated TCP/IP Printing Components for Windows NT 3.51"
permalink: kb/153/Q153666/
---

## Q153666: Updated TCP/IP Printing Components for Windows NT 3.51

	Article: Q153666
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Windows NT TCP/IP printing support has been modified to encompass greater
	functionality then what was available with prior releases. Modifications were
	made in three separate areas:
	
	- Improved System V support
	
	- Support for multiple data files per control file
	
	- Improved TCP/IP output when spooling a high number of jobs
	
	MORE INFORMATION
	================
	
	Improved System V Support
	-------------------------
	
	Windows NT version 3.5x supported TCP/IP printing as documented in RFC1179.
	However, this RFC "describes an existing print server protocol widely used on
	the Internet for communicating between line printer daemons," and does not
	specify an Internet standard. Different implementations support different
	options, so due to popular demand, enhancements were added for Windows NT.
	
	Support for Multiple Data Files per Control File
	------------------------------------------------
	
	Windows NT supports multiple data files per control file, and when used in "print
	through" mode as an intermediate spooler, it correctly passes the hostname
	parameter through the Windows printing subsystem.
	
	Improved TCP/IP Output When Spooling a High Number of Jobs
	----------------------------------------------------------
	
	Prior to Windows NT 3.51 Service Pack (SP) 5, all TCP/IP print jobs sent from a
	Windows NT computer were sourced from TCP ports 721 through 731, and if many
	jobs were sent in quick succession the ports could be "used up," causing a pause
	in printing until one of them passed through the TCP TIME_WAIT state. This has
	been modified for Service Pack 5, and now line printer remote (LPR) jobs are
	sourced from any available reserved port between 512 and 1023.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt sp5
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
