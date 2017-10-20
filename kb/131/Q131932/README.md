---
layout: page
title: "Q131932: Error Occurs Mapping Over Existing Network Connection"
permalink: /kb/131/Q131932/
---

## Q131932: Error Occurs Mapping Over Existing Network Connection

{% raw %}

	Article: Q131932
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you map a network drive to a Novell network server, you may receive the
	following error message:
	
	  Drive <X> is in use by a local drive. Do you want to assign it as a
	  network drive? (Y/N)
	
	If you choose Yes, you then receive the error message
	
	  Volume does not exist: <X>: = <SERVER\SYS:PUBLIC>
	
	where <X> is the drive letter that was mapped and <SERVER\SYS:PUBLIC>
	is the Novell network server, volume, and directory.
	
	CAUSE
	=====
	
	You cannot map a drive letter to a Novell (NCP) network server if that drive
	letter is already assigned to a Microsoft Windows NT, Microsoft Windows for
	Workgroups, or LAN Manager SMB server. The protected-mode NCP redirector
	(NWREDIR) cannot distinguish between an existing network connection and a local
	drive.
	
	RESOLUTION
	==========
	
	Disconnect the existing network connection, or use a different drive letter to
	map to the Novell network server. To disconnect the existing connection, follow
	these steps:
	
	1. Double-click My Computer.
	
	2. Use the right mouse button to click the network drive, then click Disconnect
	  on the menu that appears.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
