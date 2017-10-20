---
layout: page
title: "Q192763: STOP 0x1E in Poolext.sys on Terminal Server"
permalink: /kb/192/Q192763/
---

## Q192763: STOP 0x1E in Poolext.sys on Terminal Server

{% raw %}

	Article: Q192763
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to establish a Terminal Server session, a domain receives a blue
	screen STOP Error, 0x0000001E (0xC0000005 0x800145DF 0x00000000 0x0000013C) in
	Poolext.sys.
	
	CAUSE
	=====
	
	Poolext was not designed for use on Windows NT 4.0 Terminal Server Edition. The
	STOP 0x1E error is caused by an incompatibility in the design of the Poolext
	driver.
	
	RESOLUTION
	==========
	
	You can resolve the STOP 0x1E error by booting to the last known good
	configuration and disabling the Poolext driver. If it is not possible to boot
	using the last known good configuration, physically disconnect the server from
	the network to prevent the blue screen STOP error from occurring.
	
	To disable the driver, use the following procedure:
	
	1. Log on to the console as the local administrator.
	
	2. Run the Poolext Setup program.
	
	3. Select the "Remove from this computer or another computer" radio (option)
	  button, and click NEXT.
	
	4. Select the "Remove from local computer" option and click NEXT.
	
	5. Click the FINISH button to confirm removal.
	
	6. The removal will require you to restart your computer. Click Yes to confirm
	  restart, or click No to restart at a later time.
	
	7. Reconnect the network cable (if it is disconnected), and start the computer.
	
	STATUS
	======
	
	Poolext and the Microsoft Windows NT OEM Support Tools suite is provided for
	troubleshooting and development for OEMs working with Microsoft Windows NT
	Server and Workstation, versions 3.51 and 4.0, including all Service Pack
	revisions. Currently, issues with Poolext are not supported on Windows NT
	Terminal Server Edition.
	
	Additional query words: kanalyze winframe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
