---
layout: page
title: "Q102724: Remote Access 1.1a COM1 and COM2 Only"
permalink: kb/102/Q102724/
---

## Q102724: Remote Access 1.1a COM1 and COM2 Only

	Article: Q102724
	Product(s): Microsoft Programming Utilities
	Version(s): 1.1a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Remote Access Service, version 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Remote Access client software for MS-DOS and Microsoft Windows for Workgroups
	3.1 only supports COM1 and COM2. Modems attached to COM3 and above will not be
	recognized. If you are installing an internal modem, make sure that you
	configure it for COM 1-2. This may mean that you need to disable or move one of
	your existing COM 1-2 ports.
	
	This information applies to the following Remote Access client packages:
	
	- RAS 1.0
	
	- RAS 1.1
	
	- RAS 1.1a
	
	These clients run on the following operating systems:
	
	- MS-DOS\LAN Manager 2.x
	
	- Windows 3.1\LAN Manager 2.x
	
	- Windows for Workgroups 3.1
	
	NOTE: This does not apply to RAS on Microsoft OS/2 1.3x and Windows NT. Microsoft
	OS/2 supports up to 16 COM ports. Windows NT supports 1 dial-in port and 64
	dial-out ports. Advanced Server for Windows NT supports 64 ports for both
	dial-in and dial-out.
	
	Additional query words: wfw wfwg prodnt dialin dialout dial out in
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbRASSearch kbRAS110a
	Version           : :1.1a
	
	=============================================================================
	
