---
layout: page
title: "Q154990: SETPASS May Change Password of Wrong User"
permalink: kb/154/Q154990/
---

## Q154990: SETPASS May Change Password of Wrong User

	Article: Q154990
	Product(s): Microsoft Programming Utilities
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If there are more than 255 connections to the NetWare and File and Print
	Services for NetWare (FPNW) server, SETPASS attempts to change the password of
	the user whose connection is approximately 255 less than the connection the user
	actually has.
	
	For example: If the connection is number 498 and SETPASS is run, the SETPASS
	utility will attempt to change the password of the user whose connection number
	is approximately 498 - 255.
	
	CAUSE
	=====
	
	Libraries for MS-DOS utilities were incorrectly limited to a maximum of 255 user
	connections.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Windows NT 3.51
	---------------
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetwareSearch kbFPNW351
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
