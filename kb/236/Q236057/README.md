---
layout: page
title: "Q236057: PRB: User BIOS Reset Causes Problems with SourceSafe"
permalink: /kb/236/Q236057/
---

## Q236057: PRB: User BIOS Reset Causes Problems with SourceSafe

	Article: Q236057
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Database is corrupted by file check in operations after the Year 2000 rollover.
	
	CAUSE
	=====
	
	A computer has a non-Year 2000 compliant BIOS that causes the system clock to be
	reset to an invalid date and time at the year 2000 rollover. Subsequently, when
	you check in source code to the Visual SourceSafe (VSS) tree, the date and time
	of the computer will be used for the check in of that file. Without a correct
	date and time the computer will corrupt the database.
	
	RESOLUTION
	==========
	
	Microsoft recommends that all VSS computers BIOS be Year 2000 compliant and
	ensure that all client computer clocks are synchronized to the same time. To
	ensure this BIOS problem will not affect your VSS database, Microsoft recommends
	you make sure these are no files checked out during the date and time at the
	year 2000 rollover. Also, make sure that all system clocks have the correct date
	and time set before continuing to use the VSS product. Microsoft also strongly
	recommends that you backup your VSS database prior to the date and time rollover
	at the end of 1999.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Because VSS is not a client server architecture, all Source Code Control
	functions are performed on the computer. With this design, clocks that are not
	synchronized can cause inconsistent history data especially on files marked for
	shared checkout.
	
	REFERENCES
	==========
	
	  Microsoft TechNet - Year 2000
	
	Additional query words: Y2K
	
	======================================================================
	Keywords          : kbYear2000 kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
