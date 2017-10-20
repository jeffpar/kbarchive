---
layout: page
title: "Q139848: Problems Using Microsoft Fax with RPI Modems"
permalink: /kb/139/Q139848/
---

## Q139848: Problems Using Microsoft Fax with RPI Modems

{% raw %}

	Article: Q139848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax with Microsoft Fax, the fax may not be sent
	completely or at all.
	
	CAUSE
	=====
	
	This problem can occur when you are using a modem that uses Rockwell Protocol
	Interface (RPI) compression at speeds greater than 9600 bps. The following
	modems are known to use RPI compression:
	
	- Zoom 14.4 PC Model 110 (internal)
	
	- Zoom 14.4 EX Model 160 (external)
	
	- Some Best Data internal 1442F fax/modems
	
	  To determine if your Best Data internal 1442F fax/modem is an RPI modem,
	  follow these steps:
	
	  1. In Control Panel, double-click Modems.
	
	  2. Click the Diagnostics tab.
	
	  3. Click the COM port the modem is using, and then click More Info.
	
	  4. Check the results in the More Info box.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact the modem's manufacturer to inquire about a
	possible firmware upgrade or software patch that corrects this problem in
	Windows 95.
	
	If a firmware upgrade or software patch is not available, you may be able to work
	around the problem by configuring the modem to operate at a slower speed. To do
	so, follow these steps:
	
	1. In Control Panel, double-click the Mail And Fax icon.
	
	2. Click Microsoft Fax, and then click Properties.
	
	3. On the Modem tab, click your modem, and then click Properties.
	
	4. Click Advanced.
	
	5. Click the Disable High Speed Transmission and Disable Error Correction Mode
	  check boxes to select them, and then click OK.
	
	6. Click OK until you return to Control Panel.
	
	If you are having problems with data transmission as well as fax transmission,
	you may be able to work around the problem by following these steps:
	
	1. In Control Panel, double-click the Modems icon.
	
	2. Click your modem, and then click Properties.
	
	3. In the Maximum Speed box, click 9600.
	
	4. Click OK or Close until you return to Control Panel.
	
	MORE INFORMATION
	================
	
	Modems that use RPI compression require a special program to enable the modem's
	error correction and data compression capabilities. Some communications programs
	already include this functionality, and some modem manufacturers provide a patch
	that implements RPI compression in Windows and Windows for Workgroups version
	3.1x. This functionality is not included with Microsoft Fax, and the patches
	that are currently available from some modem manufacturers are not compatible
	with Windows 95.
	
	Because the error correction and data compression capabilities of the modem have
	not been enabled, the modem is not reliable when operating at higher speeds.
	
	Additional query words: ast
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
