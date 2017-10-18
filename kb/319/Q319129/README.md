---
layout: page
title: "Q319129: Event Error After You Apply the Microsoft BIOS3 Y2K Update"
permalink: kb/319/Q319129/
---

## Q319129: Event Error After You Apply the Microsoft BIOS3 Y2K Update

	Article: Q319129
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft BIOS3 Y2K Update (Biosfixi.exe) on your
	computer, you may find one or more of the following events in the system log of
	your Event Viewer:
	
	  Event ID 22
	  The description for Event ID (22) in source (cmosa) could not be found. It
	  contains the following insertion string(s):, cmosa, \Device\CMOS1.Translated.
	
	  -or-
	
	  Event ID 22
	  The description for Event ID (22) in source (cmosa) could not be found. It
	  contains the following insertion string(s):, PC Compatible Eisa/ISA
	  HAL,.Translated.
	
	  -or-
	
	  Event ID 7026
	  The following boot-start or system-start drivers failed to load: cmosa
	
	CAUSE
	=====
	
	This issue may occur after you apply Microsoft's BIOS3 Y2K Update (Biosfixi.exe)
	to a computer that was installed by using Dell Computer Corporation's OpenManage
	Client computer imaging software. The computer contains drivers that are
	leftover from the imaging process.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Dell Computer Corporation Support for more
	information.
	
	For information about how to contact Dell Computer Corporation, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
