---
layout: page
title: "Q240299: Unattended Encryption Setup Problem Adds Event Log Entry in SP6"
permalink: /kb/240/Q240299/
---

## Q240299: Unattended Encryption Setup Problem Adds Event Log Entry in SP6

	Article: Q240299
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the 56-bit version of Windows NT 4.0 Service Pack 6 (SP6) on a
	computer that already has 128-bit security installed, the following error
	message appears:
	
	  Service Pack Setup Error
	
	  You have chosen to install a version of the Service Pack with Standard
	  Encryption onto a system with High Encryption. This is not supported.
	
	  To successfully install this version of the Service Pack, you must install the
	  High Encryption version. Press Help for more information about obtaining the
	  High Encryption Version of this Service Pack.
	
	  Service Pack Setup will now exit.
	
	
	When you click OK, the service pack installation process is stopped. However, if
	you are performing an unattended installation, an error message is not
	displayed. Instead, an error message is written to the Event Viewer System log
	as follows:
	
	  Windows NT Service Pack 6 installation failed.
	
	  Installation of the Standard Encryption version was attempted on a system with
	  High Encryption.
	
	CAUSE
	=====
	
	This behavior occurs because some programs (for example, Microsoft Systems
	Management Server) do not support an error message dialog box during unattended
	installations.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Administrators (or users) need to be aware of the absence of a dialog box in
	unattended installations of SP6 and consistently check event log entries after
	performing unattended installations.
	
	To obtain the latest Windows NT 4.0 service pack (both 56-bit and 128-bit
	versions), click the link below:
	
	  http://www.microsoft.com/Windows/ServicePacks/
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
