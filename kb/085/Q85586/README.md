---
layout: page
title: "Q85586: Network Button Not Available in Windows 3.1"
permalink: kb/085/Q85586/
---

## Q85586: Network Button Not Available in Windows 3.1

	Article: Q85586
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select a printer port from Control Panel Printers using the Connect
	button, and the selected port is not a real LPT port (such as LPT1.DOS or COM1),
	then the Network button will be unavailable (dimmed) in Microsoft Windows 3.1.
	
	CAUSE
	=====
	
	Windows 3.1 only enables the Network button for LPT1, LPT2, and LPT3.
	
	The Network button may be unavailable for the following reasons:
	
	- Network support has not been installed.
	
	- The network being run does not support that functionality.
	
	- A valid LPT port has not been selected.
	
	Additional query words: 3.1 3.11 3.10 greyed grayed
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
