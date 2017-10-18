---
layout: page
title: "Q10834: INFO: GDI Simulation Routines and Device Drivers for Windows"
permalink: kb/010/Q10834/
---

## Q10834: INFO: GDI Simulation Routines and Device Drivers for Windows

	Article: Q10834
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 kbOSWin300 kbSDKWin16
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information concerns GDI's simulation routines for device
	drivers:
	
	GDI discards its simulation routines when more intelligent drivers provide the
	required information. GDI is demand-loadable and discardable. When a smart
	driver registers its capabilities with GDI, GDI dumps the simulation routines
	that it uses for less intelligent display drivers. For example, when writing a
	driver that can handle all the OUTPUT functions, GDI will avoid loading all the
	simulation routines.
	
	In addition, GDI's simulation routines are optimized. However, it is usually the
	case that device drivers can complete output functions a lot faster because no
	GDI object or memory must be allocated during the operations, and device drivers
	can deal directly with the hardware device.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
