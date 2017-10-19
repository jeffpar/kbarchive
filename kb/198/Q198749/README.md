---
layout: page
title: "Q198749: SMS: Determining If a client Will Use Video Acceleration"
permalink: /kb/198/Q198749/
---

## Q198749: SMS: Determining If a client Will Use Video Acceleration

	Article: Q198749
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a client machine is being remote controlled, the client controls the
	process that decides whether the video will be accelerated. This can be checked
	by looking in the client's registry in the following location:
	
	  HKEY_LOCAL_MACHINE\Hardware\DeviceMap\Video.
	
	Compare the values of the \Device\Video0 (and the driver seen as
	...Services\<video driver>) to the corresponding value in the following
	location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\<video
	  driver>\Device0.
	
	The InstalledDisplayDrivers key must be either a key by itself; for example,
	SVGA, or, if the InstalledDisplayDrivers key contains multiple entries, each
	entry must be separated by a single space; for example, VGA SVGA VGA256
	SVGA256.
	
	This can also be checked by double-clicking the Remote Control icon on the
	client's desktop and looking at the Status window. If acceleration is enabled,
	the information appears in the appropriate status line.
	
	MORE INFORMATION
	================
	
	Video acceleration is Windows NT-specific. Windows 95, Windows 98, and other
	16-bit clients use the Remote Control agents (WUSER32 and WUSER) to intercept
	calls from the GDI to the display driver, do not require video acceleration.
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
