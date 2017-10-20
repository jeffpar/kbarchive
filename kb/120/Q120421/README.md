---
layout: page
title: "Q120421: Quattro Pro causes GPF Printing to Unavailable Printer"
permalink: /kb/120/Q120421/
---

## Q120421: Quattro Pro causes GPF Printing to Unavailable Printer

{% raw %}

	Article: Q120421
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a printer that you created or connected to in Print Manager becomes
	unavailable, Borland Quattro Pro still shows it in the Printer Setup dialog box.
	If you try to print to it, a General Protection Fault (GPF) in QPW.EXE at
	00BA:0B55 occurs.
	
	CAUSE
	=====
	
	Quattro Pro does not verify printer availability when it displays a list of
	printers in its Printer Setup dialog box.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.51.
	
	Use Print Manager to verify that a printer is available before using it in
	Quattro Pro.
	
	STATUS
	======
	
	This problem was corrected in Windows NT Workstation or Server version 3.51.
	
	Additional query words: prodnt memory violaion
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
