---
layout: page
title: "Q186570: Terminal Server Setup"
permalink: kb/186/Q186570/
---

## Q186570: Terminal Server Setup

	Article: Q186570
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installing Terminal Server is nearly identical to installing Windows NT Server
	4.0. Terminal Server shares the same Hardware Compatibility List. This article
	discusses setup differences.
	
	MORE INFORMATION
	================
	
	Terminal Server supports upgrades from Citrix Winframe 1.6 and 1.7 only. It is
	important that you know that there is no upgrade path from any version of
	Windows NT Server or Windows NT Workstation to Terminal Server. Unless you are
	upgrading from Citrix Winframe, you must perform a new installation.
	
	NOTE: In Citrix Winframe 1.6, some Winframe-specific user information was stored
	in the registry, rather than in the accounts database. This changed in Citrix
	Winframe 1.7, where user information was stored in the OEM fields in the
	security account manager (SAM) file. Terminal Server's additional user
	information is also stored in the OEM fields in the SAM. Citrix provided a
	utility for Winframe 1.6 users called CNVRTUC to convert registry information to
	the SAM file. This utility MUST be run on the Winframe 1.6 Server before
	upgrading to Terminal Server.
	
	CNVRTUC - Convert Terminal Server User Configuration
	----------------------------------------------------
	
	Usage: cnvrtuc [/ALL | /USER u] /DOMAIN d
	
	  Where your options are the following:
	
	     /ALL - Convert all registry-based user configurations
	     /USER u - Convert registry-based user configuration for user 'u'
	     /DOMAIN d - Convert user configuration in Domain 'd'
	
	If no options are specified, this message is displayed. This utility migrates
	non-replicated, registry-based user configuration entries to the replicated SAM
	database.
	
	Several OEM versions of Winframe exist. Microsoft supports upgrades from Citrix
	Winframe 1.6 or 1.7 only. Upgrades from the following OEM versions of Winframe
	may or may not work and will not be supported by Microsoft:
	
	- NTRIGUE
	- WINCENTER
	- WINDD
	
	TCP/IP is a required protocol. Other protocols may be installed too, but TCP/IP
	must be installed. During network setup, TCP/IP is selected automatically and
	the selection is unavailable.
	
	Sysdiff and Unattended Installation
	-----------------------------------
	
	You must install applications and run sysdiff while the server is in Install
	Mode. To run Terminal Server in Install Mode, type the following command at an
	MS-DOS command prompt:
	
	  CHANGE USER /INSTALL.
	
	To exit Install Mode, type the following at an MS-DOS command prompt:
	
	  CHANGE USER /EXECUTE.
	
	For an example answerfile and more details on unattended installation, please see
	the following Microsoft Knowledge Base article:
	
	  Q186629 Terminal Server Unattended Installation
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
