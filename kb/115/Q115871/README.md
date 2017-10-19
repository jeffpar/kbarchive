---
layout: page
title: "Q115871: Quitting a PM Application with End Task Generates Dialog Box"
permalink: /kb/115/Q115871/
---

## Q115871: Quitting a PM Application with End Task Generates Dialog Box

	Article: Q115871
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Task List to quit a Presentation Manager-based
	application, a dialog box with the title of the application you just quit
	appears and you can choose Cancel, Wait, or End Task.
	
	This dialog box is not necessary because you have already quit the application.
	Choosing either of the options only makes the dialog box disappear.
	
	CAUSE
	=====
	
	This problem occurs because choosing the End Task button from the Windows NT
	Task List generates the dialog box before the selected Presentation
	Manager-based application before switching to the Presentation Manager desktop.
	
	WORKAROUND
	==========
	
	When this dialog box appears, choose Cancel. Choosing either of the buttons
	closes the dialog box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT Add-on SubSystem
	for Presentation Manager for Microsoft Windows NT version 3.1.
	
	
	Additional query words: prodnt OS/2
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
