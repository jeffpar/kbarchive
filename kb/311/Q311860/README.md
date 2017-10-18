---
layout: page
title: "Q311860: The HP NTLock Services Do Not Start After Installing the SRP"
permalink: kb/311/Q311860/
---

## Q311860: The HP NTLock Services Do Not Start After Installing the SRP

	Article: Q311860
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 28-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the post-Windows NT 4.0 Service Pack 6a (SP6a) Security Rollup
	Package (SRP) on a Hewlett-Packard computer with Hewlett-Packard NTLock
	installed, you may receive any of the following error messages when you reboot
	the computer:
	
	  STOP c000021a
	
	  winlogon.exe - DLL Initialization Failed
	  Initialization of the dynamic link library C:\WINNT\System32\HPSmartF.dll
	  failed. The process is terminating abnormally.
	
	  HPolLock.exe - DLL Initialization Failed
	  Initialization of the dynamic link library C:\WINNT\System32\HPSmartF.dll
	  failed. The process is terminating abnormally.
	
	  WIxInitialize
	  HP Gina specific initialization failed: Disable ALL HP Lock features.
	
	If you uninstall NTLock properly before you install the SRP, the computer boots
	correctly and remains stable. However, the HPGate service does not start
	properly and you receive repeated "failed service" notifications every time you
	start the computer. If you then install the latest NTLock software, the computer
	does not boot properly and you may receive any of the error messages.
	
	CAUSE
	=====
	
	The SRP exposes an issue with Hewlett-Packard Entlk 2.2a and earlier versions of
	NTLock (Hpgate.sys) that is available from any of the following Hewlett-Packard
	sources:
	
	- The Hewlett-Packard Web site: Hewlett-Packard NTLock Software and Drivers
	  (http://www.support.vectra.hp.com/vectrasupport/indexes/Driver622.html)
	
	- The Hewlett-Packard recovery CD-ROM
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, use these steps:
	
	1. If Hewlett-Packard TopTools is installed, make sure that you have installed
	  the latest version. The latest versions of TopTools (TopTools 5.0 and 5.5)
	  are available from the following Hewlett-Packard Web site:
	
	  http://www.hp.com/toptools/
	
	2. If TopTools is not installed, install the updated version of NTLock before
	  you install the SRP. The updated version of NTLock is available from the
	  following Hewlett-Packard Web site:
	
	  http://www.support.vectra.hp.com/vectrasupport/indexes/Driver622.html
	
	MORE INFORMATION
	================
	
	For additional information about the SRP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: blue screen crash hang
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
