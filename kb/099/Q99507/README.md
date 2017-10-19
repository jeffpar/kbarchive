---
layout: page
title: "Q99507: PIF Hot Key Causes Errors or Help to Appear in Mail/Schedule+"
permalink: /kb/099/Q99507/
---

## Q99507: PIF Hot Key Causes Errors or Help to Appear in Mail/Schedule+

	Article: Q99507
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating and using a program information file (PIF) for an MS-DOS- based
	application that has a hot key sequence containing the F1 key may cause the Help
	programs for both Mail and Schedule+ to appear when you access the MS-DOS-based
	application and then return to either Mail or Schedule+.
	
	WORKAROUND
	==========
	
	To work around this problem, you must edit the PIF with the PIF Editor program
	and modify the hot key sequence so that it does not include the F1 key.
	
	MORE INFORMATION
	================
	
	When you access an MS-DOS-based application with its hot key sequence (as
	defined in its PIF) and the hot key sequence contains the F1 key, the Help
	programs for Microsoft Mail and/or Schedule+ may pop up. One of the following
	messages may also be displayed:
	
	  No Help is available for this command
	
	-or-
	
	  Help Topic does not exist
	
	This situation continues until you quit and restart Microsoft Windows for
	Workgroups. Closing the MS-DOS-based application or exiting and signing out of
	Mail and/or Schedule+ has no effect on this condition.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a PIF for the MS-DOS command prompt that contains F1 in the hot key
	  sequence.
	
	2. Execute the MS-DOS command prompt using your PIF.
	
	3. Start Microsoft Mail or Schedule+.
	
	4. Use the hot key sequence to switch back to the MS-DOS command prompt.
	
	The next time you enter Mail or Schedule+ and try to access any of the menus, the
	Help program will appear. Subsequent attempts to access Mail or Schedule+ may
	result in the aforementioned error messages.
	
	Additional query words: 3.10 3.11 Mail Schedule Plus help
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
