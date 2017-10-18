---
layout: page
title: "Q114653: Err Msg: Failure: PROTOCOL.INI Does Not Have a DRIVERNAME="
permalink: kb/114/Q114653/
---

## Q114653: Err Msg: Failure: PROTOCOL.INI Does Not Have a DRIVERNAME=

	Article: Q114653
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the NET START command is executed, you receive one or more of the following
	error messages
	
	  Failure: PROTOCOL.INI does not have a DRIVERNAME=xxx.
	
	  Failure: Protocol Manager did not accept xxx.
	
	  Failure: NDIS environment invalid. Driver not loaded.
	
	  Error loading device driver xxx.
	
	  Error 7306: The driver failed to initialize.
	
	  xxx was not loaded.
	
	  Error 7321: Network card drivers failed to load.
	
	where "xxx" is your network card driver name (for example, EXP16 or EXP16.DOS).
	
	CAUSE
	=====
	
	If you install a second network interface card (NIC) of the same brand and model
	as the original and then load an NDIS 2 (real-mode) driver and protocol for this
	card, you encounter problems if the initial adapter is using an NDIS 3
	(protected-mode) driver and protocol.
	
	Because an NDIS 2 driver must run in real mode, it is initialized before Windows
	for Workgroups 3.11 is loaded. The adapter binding with the NDIS 2 driver
	becomes the first physical adapter. To complete the binding process, the NDIS 2
	driver looks in the PROTOCOL.INI file for a DriverName=FirstDriverInstance$
	setting. Because an NDIS 3 driver was installed first, no such setting exists
	since NDIS 3 drivers do not require this setting.
	
	RESOLUTION
	==========
	
	To avoid the above error messages, perform the following steps:
	
	1. Choose the Network Setup icon in the Network group.
	
	2. Choose the Drivers button.
	
	3. Remove both network card drivers.
	
	4. Choose Close, then choose OK. (Allow Windows to reboot the computer when you
	  are prompted to do so.)
	
	5. Restart Windows.
	
	6. Choose the Network Setup icon in the Network group.
	
	7. Choose the Drivers button.
	
	8. Add the network card driver for your network card.
	
	9. Set up this card with the NDIS 2 driver and protocol.
	
	10. Add the second instance of the network card driver for your network card.
	
	11. Set up this card with the NDIS 3 driver and protocol.
	
	12. Choose Close, then choose OK. (Allow Windows to reboot the computer when you
	  are prompted to do so.)
	
	Additional query words: 3.11 errors ndis2 ndis3
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
