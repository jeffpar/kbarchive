---
layout: page
title: "Q164629: Error Message: Default Printer Cannot Be Set"
permalink: /kb/164/Q164629/
---

## Q164629: Error Message: Default Printer Cannot Be Set

	Article: Q164629
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a new printer and choosing to set it as a default printer, the
	following error may occur.
	
	  Add Printer Wizard
	  Default printer cannot be set.
	
	If a computer running Windows NT 4.0 Workstation is connecting to the above
	printer, it will not be set up. This connection will also not be able to be set
	up as a default printer, but no error will appear.
	
	
	CAUSE
	=====
	
	The printer name was being set up with a trailing space.
	
	RESOLUTION
	==========
	
	Rename the printer without a trailing space. Do not create printer names with
	trailing spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
