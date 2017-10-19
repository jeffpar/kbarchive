---
layout: page
title: "Q231510: MapPoint 2000: Unable to Install from Novell NetWare File Server"
permalink: /kb/231/Q231510/
---

## Q231510: MapPoint 2000: Unable to Install from Novell NetWare File Server

	Article: Q231510
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install Microsoft MapPoint 2000 from a remote directory on a
	Novell NetWare file server, you receive the following error message:
	
	  Couldn't find the Microsoft MapPoint 2000 CD-ROM on this machine. Verify that
	  this CD is correctly inserted in your CD-ROM drive, then click OK (or click
	  Cancel to exit the application).
	
	CAUSE
	=====
	
	This behavior occurs because Novell NetWare does not support the Universal
	Naming Convention (UNC).
	
	RESOLUTION
	==========
	
	To work around this issue, map the remote directory as a network drive, and then
	install MapPoint 2000 from the network drive.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: mp2000 installation mount volume setup
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
