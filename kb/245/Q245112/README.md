---
layout: page
title: "Q245112: Windows NT Server with SofTrack Workstation Metering Hangs."
permalink: /kb/245/Q245112/
---

## Q245112: Windows NT Server with SofTrack Workstation Metering Hangs.

	Article: Q245112
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a computer that is running Microsoft Windows NT Server 4.0
	and has SofTrack Workstation Metering by Elron Software, Inc. installed, your
	computer may stop responding (hang). This occurs when the System process
	consumes 100 percent of the central processing unit (CPU) resources. In
	addition, you may receive the following STOP error message:
	
	  STOP 0x0000000a in Ntoskrnl.exe
	
	CAUSE
	=====
	
	This behavior can occur if SofTrack Workstation Metering is running as a service
	on your computer.
	
	RESOLUTION
	==========
	
	To work around this behavior, stop the SofTrack Workstation Metering service.
	
	For information regarding a possible upgrade of SofTrack Workstation Metering to
	resolve this issue, please visit the following Integrity Software Web site:
	
	  http://www.softwaremetering.com/
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: metering processor BSOD
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
