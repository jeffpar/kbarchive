---
layout: page
title: "Q151745: IPX Direct Hosting May Corrupt Print Jobs from WFW to WinNT"
permalink: kb/151/Q151745/
---

## Q151745: IPX Direct Hosting May Corrupt Print Jobs from WFW to WinNT

	Article: Q151745
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print jobs to a computer running Windows NT Server from a computer running
	Windows for Workgroups 3.11 may randomly print garbled output. This occurs if
	the server and client are both running NWLINK IPX/SPX, the client uses an ODI
	network adapter driver, direct hosting is enabled, and the client sends the
	print job over IPX.
	
	RESOLUTION
	==========
	
	You can work around this problem by using the NDIS driver for your network
	adapter on the client or by disabling direct hosting on the client.
	
	To Disable Direct Hosting on WFWG
	---------------------------------
	
	Add the following parameter to the [network] section of the client's System.ini
	file:
	
	  " directhost=no " (without the quotation marks)
	
	NOTE: Page 4-12 of the "Windows for Workgroups Resource Kit", Addendum for
	Version 3.11 incorrectly states this parameter as 'directhosting'. This is a
	documentation error.
	
	For more information about direct hosting query on "DirectHosting" "direct
	hosting" or "directhost" in the Microsoft Knowledge Base.
	
	Additional query words: gra postscript graphic pcl hp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5,3.51
	
	=============================================================================
	
