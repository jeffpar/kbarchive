---
layout: page
title: "Q121409: WGAO for MS-DOS 3COM EtherLink III Driver Shows Extra Setting"
permalink: /kb/121/Q121409/
---

## Q121409: WGAO for MS-DOS 3COM EtherLink III Driver Shows Extra Setting

	Article: Q121409
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Workgroups Add-On for MS-DOS version 3.11 with a 3Com EtherLink
	III (3C509) driver, the Adapter Slot Number=1 setting is available. This setting
	does not apply to this driver.
	
	MORE INFORMATION
	================
	
	The following settings are available for the 3Com EtherLink III adapter driver
	in the Choose Settings screen:
	
	Drivername=ELINK3$
	IOADDRESS=300
	Adapter Slot Number=1
	Maximum Transmits=6
	
	The line Adapter Slot Number=1 is usually used only with Micro Channel computers
	(and sometimes EISA machines with more than one adapter).
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
