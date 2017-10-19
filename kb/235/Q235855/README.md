---
layout: page
title: "Q235855: WD97: Invalid Page Fault in Module Mso97.dll When You Cut Text"
permalink: /kb/235/Q235855/
---

## Q235855: WD97: Invalid Page Fault in Module Mso97.dll When You Cut Text

	Article: Q235855
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta wd2000
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select text in a saved document and then click Cut from either the
	Standard toolbar or the Edit menu, you receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in MSO97.DLL at address.
	
	NOTE: The actual memory address may vary.
	
	CAUSE
	=====
	
	A Y2K fix from RUMBA software may have been applied to your system.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, download and apply a later patch for Wall Data's RUMBA
	software. The Wall Data software patches are cumulative; therefore, any fix,
	starting with SYS60003, resolves the problem.
	
	
	Wall Data's latest patch can be found at the following Web address:
	
	  http://www.rumba.com/default.asp
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	For information about how to contact Wall Data, Inc., click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta wd2000 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
