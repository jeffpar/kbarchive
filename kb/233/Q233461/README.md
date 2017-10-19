---
layout: page
title: "Q233461: Business Planner: Data Lost After Low Disk Space Warning Appears"
permalink: /kb/233/Q233461/
---

## Q233461: Business Planner: Data Lost After Low Disk Space Warning Appears

	Article: Q233461
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enter data in a Microsoft Business Planner wizard, you may be warned
	that insufficient hard disk space is available, and the data you entered may be
	lost.
	
	If you minimize Business Planner, increase the amount of available space on your
	hard disk, and then return to the wizard, the data you entered in the wizard may
	be lost.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You navigate to a page outside of the wizard, and then attempt to navigate
	  back to the wizard.
	
	- Less than 50 megabytes (MB) of space is available on the hard disk on which
	  Microsoft Windows is installed.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, always maintain at least 50 MB of
	available space on the hard disk on which Windows is installed. Windows requires
	this disk space to provide virtual memory for both Windows and Windows-based
	programs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Business Planner.
	
	MORE INFORMATION
	================
	
	Although you are able to navigate back to the wizard after receiving the low
	disk space warning, you are returned to the previous or the next step in the
	wizard. You are unable to return to the data entry step until you increase the
	amount of available space on your hard disk.
	
	Additional query words: msbp deleted gone free
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
