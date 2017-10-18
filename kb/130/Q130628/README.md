---
layout: page
title: "Q130628: IPCONFIG Error: Couldn't Locate Windows Installation"
permalink: kb/130/Q130628/
---

## Q130628: IPCONFIG Error: Couldn't Locate Windows Installation

	Article: Q130628
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows IP Configuration utility (IPCONFIG.EXE) in Windows for
	Workgroups 3.11, the following error message may appear:
	
	  Error: couldn't locate Windows installation
	
	CAUSE
	=====
	
	This problem occurs if WIN.COM or SYSTEM.INI does not exist in the Windows
	directory (typically C:\WINDOWS).
	
	RESOLUTION
	==========
	
	To correct this problem, make sure that both the WIN.COM file and the SYSTEM.INI
	file exist in the Windows directory.
	
	Additional query words: 3.11 tcpip ipconfig
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a
	Version           : :3.11,3.11a; WINDOWS:3.11
	
	=============================================================================
	
