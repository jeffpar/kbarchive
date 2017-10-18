---
layout: page
title: "Q248989: SMS: Support for Third-Party Video Drivers with Remote Control"
permalink: kb/248/Q248989/
---

## Q248989: SMS: Support for Third-Party Video Drivers with Remote Control

	Article: Q248989
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbpolicy kbsms200 kbHelpDesk
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using Systems Management Server (SMS) 1.2 or 2.0 to remotely
	control Microsoft Windows NT 4.0-based clients, you can use the Accelerated
	Screen Transfer driver (Idisntkm.dll) to increase the remote control
	performance.
	
	The Accelerated Screen Transfer driver is compatible with a large number of
	third-party video adapters and their drivers. However, Microsoft does not assume
	responsibility for making the two drivers work together if there is an
	incompatibility with a particular manufacturer's video adapter or its driver.
	
	MORE INFORMATION
	================
	
	After you install the Remote Control agent on the Windows NT 4.0-based client,
	the client attempts to load the Idisntkm.dll driver when it is restarted. If
	Idisntkm.dll and the system's video adapter driver are not compatible, the
	"idisntkm" entry is removed from the following registry value on the Windows
	NT-based client:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<video driver
	  name>\Device0
	
	  Registry value: InstalledDisplayDrivers
	
	If there is an incompatibility, a newer version of the video adapter driver may
	correct it. To obtain an updated version of the video adapter driver, contact
	the manufacturer of the video adapter.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbpolicy kbsms200 kbHelpDesk 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
