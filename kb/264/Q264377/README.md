---
layout: page
title: "Q264377: Windows Services for UNIX Solaris SSOD for Sparc Only"
permalink: /kb/264/Q264377/
---

## Q264377: Windows Services for UNIX Solaris SSOD for Sparc Only

	Article: Q264377
	Product(s): Microsoft Windows NT
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Services for UNIX (SFU) versions 2.0 and 3.0 support two-way password
	synchronization with Solaris version 7.0. SFU supports only Windows to UNIX
	password synchronization in Solaris version 2.6. However, the included daemons
	only run on the Sparc platform.
	
	MORE INFORMATION
	================
	
	Windows SFU 2.0 and 3.0 include a Single Sign On daemon (SSOD) and a Password
	Authentication module (PAM) for several versions of UNIX. These daemons allow
	password synchronization for Windows and UNIX user accounts. The files for
	Solaris are:
	
	  ssod.so7 - Windows to UNIX component.
	  Pam_sso.so7 - UNIX to Windows component
	
	These daemons have been compiled to run on the Sparc platform only. Therefore,
	password synchronization with a Solaris 7 system on an Intel-based computer does
	not work.
	
	Additional query words: solar coaster solarcoaster
	
	======================================================================
	Keywords          :  
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :2.0,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
