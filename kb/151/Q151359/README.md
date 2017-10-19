---
layout: page
title: "Q151359: XCLN: Out of Memory Errors Starting Schedule+ After Exchange"
permalink: /kb/151/Q151359/
---

## Q151359: XCLN: Out of Memory Errors Starting Schedule+ After Exchange

	Article: Q151359
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might see Out of Memory error messages when you start Microsoft Schedule+
	after a Microsoft Exchange client for Windows 3.x has been started and vice
	versa. In some cases, Out of Memory or Insufficient Memory error messages might
	also occur in other applications after the Microsoft Exchange client for Windows
	3.x has been started, particularly in networked applications.
	
	CAUSE
	=====
	
	This is caused by one of the following three conditions:
	
	- You have not yet edited the Net.cfg file to include the entries suggested in
	  the Readme.wri file on the Microsoft Exchange Server CD.
	
	- You have improperly configured the Net.cfg file.
	
	- The Net.cfg file that you edited is not the one being used by the Netware
	  Real mode networking components.
	
	RESOLUTION
	==========
	
	1. Verify that the following lines are present in the net.cfg file
	
	     [PROTOCOL IPXODI]
	     IPX SOCKETS 50
	     SPX CONNECTIONS 50
	
	2. Reboot the computer and either manually load the Netware components or step
	  through the lines in the Autoexec.bat file. After loading Ipxodi, the screen
	  should acknowledge that Ipxodi has been loaded with the above parameters.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
