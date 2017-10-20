---
layout: page
title: "Q127950: Cannot Use DSP Modem on HP Integrated Office Board"
permalink: /kb/127/Q127950/
---

## Q127950: Cannot Use DSP Modem on HP Integrated Office Board

{% raw %}

	Article: Q127950
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
	
	When you use the Hewlett-Packard (HP) DATA.EXE utility to initialize the DSP
	modem on your HP Integrated Office Board, you receive the following error
	message:
	
	  Copyright (c) 1987-1993
	  Analog Devices Inc., Digicom Systems Inc., Ring Zero Systems Inc.
	  All Rights Reserved.
	  You have an incompatible version of MS Windows or
	  MS Windows is not running in Enhanced mode.
	
	The modem does not function properly after you receive this error message.
	
	
	CAUSE
	=====
	
	The HP DATA.EXE utility performs a version check that allows it to run only in
	Windows version 3.1x. Because this version check fails in Windows 95, the modem
	is not properly initialized and will not function.
	
	MORE INFORMATION
	================
	
	The HP Integrated Office Board is an adapter card that contains a sound card,
	SCSI adapter, and modem. To use the modem, you must first run the DATA.EXE
	utility to initialize the modem's DSP chip. The DATA.EXE utility is hard-coded
	to check for Windows 3.1x and fails in Windows 95.
	
	Note that the sound card and SCSI adapter do not require the DATA.EXE utility and
	so will function in Windows 95.
	
	The Hewlett-Packard Integrated Office Board is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
