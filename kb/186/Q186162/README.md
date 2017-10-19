---
layout: page
title: "Q186162: XCLN: Schedule+ Prints Black Bars in Monthly View"
permalink: /kb/186/Q186162/
---

## Q186162: XCLN: Schedule+ Prints Black Bars in Monthly View

	Article: Q186162
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbdta
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print the monthly view in Microsoft Schedule+ 7.5, the printout shows
	only black bars.
	
	CAUSE
	=====
	
	This problem occurs when you print the monthly view using a Hewlett-Packard (HP)
	LaserJet 4-series or Kyocera laser printer, and you are running a 16- bit
	version of Windows (Windows 3.x).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, download the latest printer drivers from Hewlett-
	Packard. The updated printer driver Hppcl5e.drv will work correctly in
	Schedule+.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem only occurs under 16-bit versions of Windows running Schedule+.
	Under 16-bit Windows, Hppcl5e.drv is not the default printer driver for PCL
	printers, and must be installed separately from the downloaded files to correct
	this problem.
	
	For more information, or to download a copy of the updated driver, consult the
	Hewlett-Packard Web site:
	
	  http://www.hp.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For information about how to contact Hewlett-Packard, query in the Knowledge Base
	for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbdta 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule750
	Version           : WINDOWS:7.5
	Issue type        : kbprb
	
	=============================================================================
	
