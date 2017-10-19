---
layout: page
title: "Q170677: Appstation Administrator Cannot Install Sound Device Drivers"
permalink: /kb/170/Q170677/
---

## Q170677: Appstation Administrator Cannot Install Sound Device Drivers

	Article: Q170677
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsound kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the local Administrator logs on to a ZAK Appstation and installs drivers
	for a Plug and Play sound card, no sound support is available for any user
	account on the Appstation.
	
	CAUSE
	=====
	
	Windows NT 4.0 does not support Plug and Play.
	
	RESOLUTION
	==========
	
	Before you install any Plug and Play devices, you must install the Pnpisa.sys
	file from the Windows NT 4.0 Workstation CD-ROM. For information about how to do
	this, see the following article in the Microsoft Knowledge Base:
	
	  Q142642 Windows NT 4.0 Readme.wri File (Part 3 of 5)
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbenv kbhw kbsound kbHardware 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : 1.0
	
	=============================================================================
	
