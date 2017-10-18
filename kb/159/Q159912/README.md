---
layout: page
title: "Q159912: Rotated Text in Excel May Print Incorrectly to PCL5 Printers"
permalink: kb/159/Q159912/
---

## Q159912: Rotated Text in Excel May Print Incorrectly to PCL5 Printers

	Article: Q159912
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you format text as rotated in Microsoft Excel, it may print lighter than
	text that is not rotated. This problem may occur if you are using a TrueType
	font that is resident in the printer. You can determine what TrueType fonts are
	resident in your printer by performing a self-test on the printer.
	
	CAUSE
	=====
	
	The Windows NT PCL5 driver cannot rotate device TrueType fonts.
	
	RESOLUTION
	==========
	
	To work around this problem, perform one of the following:
	
	- Use a Postscript printer.
	
	- Use a LaserJet III driver.
	
	- Use a TrueType font that is not resident in the printer.
	
	- Select the option to Print Text as graphics.
	
	
	Windows NT 3.51
	---------------
	
	1. Go to the Main group, double-click Control Panel, and then double-click Print
	  Manager.
	
	2. Click Create Printer on the Printer menu.
	
	3. Click Driver, click Other, type the path where you extracted the new drivers,
	  and then click OK.
	
	4. Click the appropriate driver in the Printer Driver list and then click OK.
	
	5. Type the correct information and then click OK.
	
	Windows NT 4.0
	--------------
	
	1. From the Start button, point to Settings, and then click Printers.
	
	2. Select the printer, then click Document Defaults from the File Menu.
	
	3. Click the Advanced tab, select Print Text as Graphics in the Document
	  Options, and then click On.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
