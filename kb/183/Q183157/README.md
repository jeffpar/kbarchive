---
layout: page
title: "Q183157: Plotter Forms Missing after Adding Plotter Driver"
permalink: kb/183/Q183157/
---

## Q183157: Plotter Forms Missing after Adding Plotter Driver

	Article: Q183157
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a plotter driver in Windows NT 4.0, forms such as " ANSI A 8.5 x11
	in. " do not appear. Adding the same plotter model driver in Windows NT 3.51
	does install this and other forms. This problem has been seen with the
	Hewlett-Packard DesignJet 250C (E/A0) but other plotter minidrivers may also
	appear to have this symptom.
	
	CAUSE
	=====
	
	In order for the forms to be added during the printer driver installation, the
	file, Plotui.dll, from Service Pack 3 has to reside on the computer running
	Windows NT before installing the printer driver.
	
	RESOLUTION
	==========
	
	Perform the following steps to ensure that the current plotter and all
	subsequent plotter minidrivers properly install forms:
	
	NOTE: If the plotter printer is already installed, skip to Step 4.
	
	1. Click the Start button, point to Settings, click Printers, and then
	  double-click Add Printer.
	
	2. Select the port, and then click Next.
	
	3. Select the plotter manufacturer, and then click the appropriate printer.
	  Finish creating the printer by selecting the remaining appropriate options.
	
	4. Apply (or reapply) Service Pack 3 to update the plotter files.
	
	5. Delete the plotter from the Printers folder.
	
	6. Reinstall the plotter.
	
	  When prompted to choose whether to use the existing driver, you can select
	  "Keeping the existing driver".
	
	7. In the Printers folder, on the File menu, click Server Properties.
	
	On the Forms tab, the ANSI forms should now be available.
	
	Additional query words: disappear
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
