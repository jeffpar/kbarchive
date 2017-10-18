---
layout: page
title: "Q216793: DHCP Server Stops Leasing Addresses if Sharing Violation Occurs"
permalink: kb/216/Q216793/
---

## Q216793: DHCP Server Stops Leasing Addresses if Sharing Violation Occurs

	Article: Q216793
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DHCP service stops responding to client lease and renewal requests. The
	following errors are logged to the System and Application logs:
	
	System Log
	----------
	
	Event ID 1014
	Source DHCP Server
	Description : The JET Database returned the following Error : -510
	Data : 02 fe ff ff
	
	Event ID 1016
	Source DHCP Server Description : The DHCP Server encountered the following error
	when backing up the user database :
	Data : 2d 4e 00 00
	
	Application Log 
	---------------
	
	Event ID 30
	Source JET
	Description : Unable to create log. The drive may be read-only or out of disk
	space. Error - 1032
	
	The error in the application log appears only once when the sharing violation
	occurs. The errors in the system log are repeated every time the DHCP service
	tries to backup it's database (default is every 15 minutes).
	
	CAUSE
	=====
	
	The DHCP service uses a JET database to store configuration and lease
	information. The service creates a backup copy of its database at a regular
	interval. Any program or service other than the DHCP service gaining access to
	the files in the DHCP directory may cause a sharing violation. As a result of
	the sharing violation, the DHCP service stops processing all client requests
	because it requires exclusive access to its database and log files.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	The DHCP service should be the only process that gains access to the files in
	the DHCP directory. In addition to applying the update described in this
	article, the following procedural or configuration changes should be made.
	If a backup of the Windows NT system files is required, the DHCP service should
	be stopped until the backup is complete. If the system is running a virus
	scanner, the directory containing the DHCP files should be omitted from those
	being scanned (%systemroot%\system32\dhcp).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
