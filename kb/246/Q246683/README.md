---
layout: page
title: "Q246683: STOP 0xA on Compaq Computers When Upgrading to Service Pack 6"
permalink: /kb/246/Q246683/
---

## Q246683: STOP 0xA on Compaq Computers When Upgrading to Service Pack 6

	Article: Q246683
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade your computer to Windows NT 4.0 Service Pack 6 (SP6), you may
	receive a "STOP 0xA" error message on a blue screen on Compaq computers running
	the Compaq Network Teaming and Configuration driver (Cpqntac.sys) for Compaq
	Ethernet, Fast Ethernet, or Gigabit Network Interface Controllers (NICs) Version
	1.00.01.0016 (or earlier).
	
	NOTE: This error message occurs only if you have implemented Compaq Network
	Teaming.
	
	CAUSE
	=====
	
	This behavior occurs because the version of the Cpqntac.sys driver is not
	compatible with the Windows NT system components that are updated in SP6.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the recovery process outlined on the following Compaq
	Web site:
	
	  http://www.compaq.com/support/techpubs/customer_advisories/EM991108_CW01_0.html
	
	To work around this issue, use the appropriate method:
	
	- Apply the SoftPaq before upgrading to SP6. To download the SoftPaq, refer to
	  the following Compaq FTP location:
	
	  ftp://ftp.compaq.com/pub/softpaq/sp11501-12000\sp11718.exe
	
	- Update the computer to Compaq SSD 2.15a or later.
	
	- Disable Compaq Network Teaming teaming on the server before you apply SP6.
	
	  NOTE: If you re-enable Compaq Network Teaming after you upgrade to SP6, you
	  still receive an error message on a blue screen if you do not update the
	  drivers.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: STOP: 0xA
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6
	Version           : winnt:4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
