---
layout: page
title: "Q244652: Updated Inoculan Driver Prevents Data Files from Being Deleted"
permalink: /kb/244/Q244652/
---

## Q244652: Updated Inoculan Driver Prevents Data Files from Being Deleted

	Article: Q244652
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing a Windows NT 4.0 service pack, data files may be reset or
	deleted, including personal mail folder files (*.pst).
	
	CAUSE
	=====
	
	This problem occurs if you install a Windows NT 4.0 service pack on a computer
	running Microsoft Outlook and Computer Associates Inoculan virus drivers dated
	prior to February 11, 1999.
	
	During Inoculan's file checking, it is possible that Inoculan's scanning action
	is misinterpreted and causes the system to incorrectly notify Microsoft Outlook
	or other applications that the file does not exist. The behavior of some
	applications is to issue a DELETE and then a CREATE of the file. The result is
	that an existing file can be deleted and a new one created in its place.
	
	
	RESOLUTION
	==========
	
	To avoid this problem, install the latest Computer Associates Inoculan drivers
	from the following Web site:
	
	  http://www.support.cai.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The Inoculan Software is manufactured by Computer Associates, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	This problem was found during Windows NT 4.0 Service Pack 6 testing and may
	occur on previous service packs when running Inoculan drivers dated prior to
	February 11, 1999.
	
	International Information
	-------------------------
	
	If you were referred here by the Read Me card in an international version of the
	Service Pack 6 release, please use the appropriate link below to find the
	article that is relevant to your version of the product.
	
	  Spanish: http://www.microsoft.com/intlkb/spain/e244/6/52.asp
	
	  French: http://www.microsoft.com/intlkb/france/articles/Q18/3/Q18365.asp
	
	  German: http://www.microsoft.com/intlkb/germany/support/kb/d40/d40570.htm
	
	  Japan: http://www.microsoft.com/japan/support/kb/articles/J051/5/75.htm
	
	Additional query words: Cheyenne
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
