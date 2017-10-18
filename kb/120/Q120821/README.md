---
layout: page
title: "Q120821: VUDP.386 Not Copied During TCP/IP-32 Install"
permalink: kb/120/Q120821/
---

## Q120821: VUDP.386 Not Copied During TCP/IP-32 Install

	Article: Q120821
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The VUDP.386 driver is not copied to the hard disk during installation, although
	it is on the installation disk of the released version of Microsoft TCP/IP-32
	for Windows for Workgroups 3.11 (file size and date 15838 and 08-10-94,
	respectively).
	
	MORE INFORMATION
	================
	
	This file isn't copied because it isn't needed; VTCP.386 includes all the
	functionality of UDP within it. VUDP.386 is included on the disk because if you
	want a Windows for Workgroups version 3.11 computer to be a router only, with a
	UDP driver but no TCP driver, you can install this file instead of VTCP.386.
	
	Additional query words: prodtcp32 wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311
	Version           : WINDOWS:3.11; :3.11
	
	=============================================================================
	
