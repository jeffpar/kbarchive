---
layout: page
title: "Q129776: How to Browse an IBM LAN Server Domain from Windows NT"
permalink: kb/129/Q129776/
---

## Q129776: How to Browse an IBM LAN Server Domain from Windows NT

	Article: Q129776
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot view IBM LAN Server domain computers from a Windows NT computer.
	Adding the LAN Server domain to Other Domains list in the Computer Browser
	dialog box in the Network section of Control Panel does not work.
	
	CAUSE
	=====
	
	Windows NT and IBM LAN Server use different network browsing techniques.
	
	WORKAROUND
	==========
	
	To view computers that are running the IBM PC-DOS or OS/2 LAN Requester from
	your Windows NT computer, add a Windows for Workgroups version 3.11 client
	computer to the LAN Server domain.
	
	The Windows for Workgroups computer functions as a browse master for the domain.
	The browse list is built on the client computer and is recognized by the Windows
	NT Computer Browser. For continuous updates of the browse list, do not shut down
	the Windows for Workgroups client computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.50. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	
	LAN Server is manufactured by IBM Corp., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt dlr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	
	=============================================================================
	
