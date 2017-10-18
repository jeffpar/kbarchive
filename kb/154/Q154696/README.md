---
layout: page
title: "Q154696: Starting MS-DOS from Office 95 Shortcut Bar May Fail"
permalink: kb/154/Q154696/
---

## Q154696: Starting MS-DOS from Office 95 Shortcut Bar May Fail

	Article: Q154696
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start an MS-DOS prompt from the Microsoft Office shortcut bar, you may
	receive the following error:
	
	  <Office Path>\Shortc~1\Office\MS-DOS~1.pif Invalid program file name,
	  please check your pif file
	
	CAUSE
	=====
	
	The Cmd line for the MS-DOS prompt properties incorrectly points to where
	<Winnt> is the directory where your Windows NT files reside.
	
	WORKAROUND
	==========
	
	1. Choose Properties on the MS-DOS icon on the Office shortcut bar.
	
	2. Click the Program tab.
	
	3. Change the Cmd line to Cmd.exe.
	
	A Windows NT command window will now open when you click the MS-DOS button on the
	Microsoft Office shortcut bar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
