---
layout: page
title: "Q183693: Cannot Choose Custom Forms on HP III and HP 4 Family Printers"
permalink: /kb/183/Q183693/
---

## Q183693: Cannot Choose Custom Forms on HP III and HP 4 Family Printers

	Article: Q183693
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a custom form that is within the paper size range of a
	Hewlett-Packard (HP) LaserJet III or 4 family printer, the form is unavailable
	for the Form to Tray Assignment option on the Device Settings tab for the
	logical printer.
	
	
	CAUSE
	=====
	
	The Microsoft-provided HP III and 4 family of printer drivers does not support
	the use of custom paper sizes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be by design.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, follow these steps:
	
	1. Click Start, point to Setting, and then click Printers.
	
	2. On the File menu, click Server Properties.
	
	3. On the Forms tab, click Create New Form and change the Form Description to
	  Test Form.
	
	4. Type the following dimensions:
	
	  Paper Size
	  ----------
	  Width  = 8.50in
	  Height = 10.00in
	
	5. Click OK.
	
	6. Right-click the HP III or 4 family printer and select Properties.
	
	7. Click the Device Settings tab and select any paper tray under Form to Tray
	  Assignment.
	
	When scrolling through the list of available forms, Test Form will not be
	listed.
	
	For more information on creating custom forms, please see the following Microsoft
	Knowledge Base article:
	
	  ARTICLE-ID: Q157172
	  TITLE : How to Create Custom Forms in Windows NT 4.0
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: available area hp 4 hp4 hp4si hp4simx hpiii missing supplied
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
