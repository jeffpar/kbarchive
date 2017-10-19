---
layout: page
title: "Q119599: Differences Between Using APM 1.0 and APM 1.1"
permalink: /kb/119/Q119599/
---

## Q119599: Differences Between Using APM 1.0 and APM 1.1

	Article: Q119599
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 is designed to function with advanced power management (APM) enabled
	computers. Some computers conform to the APM specification 1.0; others use APM
	1.1. Although Windows 95 works with both specifications, there are advantages to
	using APM 1.1.
	
	MORE INFORMATION
	================
	
	Windows 95's functionality improves with APM 1.1 because version 1.1 is designed
	to give the operating system more control over power management than APM 1.0
	permitted. For example:
	
	- If a computer is using APM 1.1, the operating system can force the BIOS to
	  wait (essentially indefinitely) until it has prepared the running programs
	  and drivers for suspend mode.
	
	- If a computer is using APM 1.1, the operating system can reject the request
	  for suspend mode.
	
	The operating system does not have this control in APM 1.0. These features help
	stabilize the suspend function in a Windows 95/APM 1.1 environment.
	
	Enhancements in APM 1.1 allow applications and system components to become more
	actively involved in the suspend/resume process. Windows 95 also queries the APM
	BIOS more thoroughly than previous versions of Windows by obtaining more
	accurate information regarding the power state and the remaining battery life.
	This is possible because APM 1.1 provides more accurate reporting of the
	remaining battery power and documents the specification more legibly than APM
	1.0, helping to make power management more reliable.
	
	Additional query words: 1.00 1.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
