---
layout: page
title: "Q192541: Err Msg: Mcdetect Caused an Invalid Page Fault in Msvcrt.dll"
permalink: kb/192/Q192541/
---

## Q192541: Err Msg: Mcdetect Caused an Invalid Page Fault in Msvcrt.dll

	Article: Q192541
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, you may receive one of the
	following error messages:
	
	  Mcdetect caused an invalid page fault in module Msvcrt.dll.
	
	  -or-
	
	  Mcdetect caused an invalid page fault in module Msvcrt40.dll.
	
	NOTE: You may also receive one of these error messages when you close the
	Multicast Settings dialog box.
	
	CAUSE
	=====
	
	This behavior can occur if your system clock is set to the year 2038 or later.
	
	RESOLUTION
	==========
	
	To resolve this issue, set your system clock to the current date. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Date/Time.
	
	3. On the Date & Time tab, enter the current date and time, and then click
	  OK.
	
	4. Close Control Panel, and then restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in The Microsoft Network version
	2.5.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. 2.50 2.51 2.52 2.60
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	
