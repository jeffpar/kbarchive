---
layout: page
title: "Q231532: MapPoint: Unable to Install on a NetWare Server"
permalink: kb/231/Q231532/
---

## Q231532: MapPoint: Unable to Install on a NetWare Server

	Article: Q231532
	Product(s): Microsoft Automap
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft MapPoint on a Novell NetWare server, you
	may receive the following error message:
	
	  The specified volume does not support long file names. To force short file
	  names, exit now and restart Setup using the /F command line.
	
	If you attempt to install MapPoint using the /F command line, you receive the
	same error message.
	
	CAUSE
	=====
	
	This behavior can occur if long filename support is disabled on the Novell
	NetWare volume.
	
	RESOLUTION
	==========
	
	To resolve this issue, enable long filename support on the Novell NetWare
	volume. To do this, install the appropriate namespace for your version of Novell
	NetWare (Long.nam or Os2.nam) on the Novell NetWare volume.
	
	To enable long filename support on Novell NetWare 3.11, download and install the
	311ptd.exe operating system patch from the following Novell Web site:
	
	  http://support.novell.com
	
	After you enable long filename support using the instructions included in this
	patch, you must add the following lines to the System.ini file:
	
	  [NWRedir]
	  SupportLFN=2
	
	MORE INFORMATION
	================
	
	For additional information about how to enable long filename support on a Novell
	NetWare volume, contact your system administrator, Novell, or a local authorized
	Novell reseller.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: mp2000 mp2001 network installation setup
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000 kbMapPoint2001
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	
