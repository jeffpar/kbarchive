---
layout: page
title: "Q163617: Equation Editor Hangs on Multiprocessor Computers"
permalink: /kb/163/Q163617/
---

## Q163617: Equation Editor Hangs on Multiprocessor Computers

	Article: Q163617
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Equation Editor to insert an equation into a Microsoft Word document
	on a multiprocessor computer, the system may stop responding (hang) for a period
	of time (2 minutes or more) when you attempt to return to the container
	document.
	
	When the computer begins to respond, you may see the following error message:
	
	  The action cannot be completed because unknown is busy. (switch to, retry,
	  cancel).
	
	Clicking Cancel causes the computer to stop responding again, and the following
	error message is displayed:
	
	  There is not enough memory to display or print the picture"
	
	Finally, at this point, you are returned to the document.
	
	Attempting to edit the equation again may result in the following error message:
	
	  Word cannot edit the Microsoft Equation 2.0
	
	This problem does not occur on single processor computers.
	
	CAUSE
	=====
	
	There was an OLE problem in Windows NT 3.51 that could be exposed on
	multiprocessor computers by using Equation Editor to insert an equation into a
	Word document.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following:
	
	- Obtain and apply the hotfix described below
	
	-or-
	
	- Upgrade to Windows NT 4.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next service pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
