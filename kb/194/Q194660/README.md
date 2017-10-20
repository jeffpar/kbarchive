---
layout: page
title: "Q194660: Stop 0x0000000A After Installing Service Pack 4"
permalink: /kb/194/Q194660/
---

## Q194660: Stop 0x0000000A After Installing Service Pack 4

{% raw %}

	Article: Q194660
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 (SP4) on a laptop computer that
	already has Insyde Software Inc. PowerProfiler power management software
	installed, your computer may stop responding (hang) and display the following
	error message when you restart the computer:
	
	  STOP 0x0000000A: IRQL_NOT_LESS_OR_EQUAL
	
	Or, this behavior may occur if you install PowerProfiler after you install SP4.
	
	CAUSE
	=====
	
	The Advanced Power Management (APM) drivers included with PowerProfiler version
	2.30.00 (or earlier) or PowerProfiler/SE version 2.30.01 are incompatible with
	the newer power management files that are contained in SP4.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Insyde Software Inc. Technical Support for an
	updated version of the PowerProfiler APM drivers at:
	
	  http://www.insydesw.com
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
