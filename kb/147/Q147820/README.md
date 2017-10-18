---
layout: page
title: "Q147820: Slow Performance Running VB 3.0 Applications on Windows NT"
permalink: kb/147/Q147820/
---

## Q147820: Slow Performance Running VB 3.0 Applications on Windows NT

	Article: Q147820
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51; :
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Multiple Microsoft Visual Basic (VB) 3.0 applications running in separate memory
	spaces will slow the operating system significantly when opening a messagebox.
	
	RESOLUTION
	==========
	
	Use a custom form instead of a message box, or upgrade to VB 4.0.
	
	-or-
	
	For Windows NT 3.51 systems, apply the hotfix described below.
	
	-or-
	
	For Windows NT 3.5 systems, upgrade to Windows NT 3.51, and then apply the hotfix
	described below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an application in VB 3.0 that has a form with a button that runs a
	  message box using the MsgBox function.
	
	2. Run 3 or more instances of the application in a separate memory space.
	
	3. Press the command button on one of the forms and notice the performance
	  degradation.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51; :
	
	=============================================================================
	
