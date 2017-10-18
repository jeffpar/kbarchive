---
layout: page
title: "Q123168: RAS Error 652 with US-Robotics 14400 Sportster"
permalink: kb/123/Q123168/
---

## Q123168: RAS Error 652 with US-Robotics 14400 Sportster

	Article: Q123168
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you configure the Windows for Workgroups Remote Access Service (RAS)
	client with a US-Robotics 14400 Sportster modem, or some Gateway Telepath and
	internal modems, for call-back from a RAS server, the modem fails to
	reinitialize in call-back mode and the following error message appears:
	
	  Error 652: Unrecognized text response received from the device.
	  Make sure the device you selected in Setup matches your modem.
	
	CAUSE
	=====
	
	This problem occurs because the RAS client software in Windows for Workgroups
	version 3.11 does not keep the Data Terminal Ready (DTR) signal state low long
	enough for the modem to release the line. In this case, DTR was in the low state
	for approximately 1 millisecond. The US-Robotics 14400 Sportster modem requires
	the DTR to be in the low state for at least 5 milliseconds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	The US-Robotics 14400 Sportster modem is manufactured by US-Robotics, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: wfw wfwg prodnt 3.11 usr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
