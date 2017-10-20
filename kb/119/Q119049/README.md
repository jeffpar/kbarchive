---
layout: page
title: "Q119049: FAX: FAXVIEW Incorrectly Displays Driver on Multiple Ports"
permalink: /kb/119/Q119049/
---

## Q119049: FAX: FAXVIEW Incorrectly Displays Driver on Multiple Ports

{% raw %}

	Article: Q119049
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Windows FAXVIEW.EXE incorrectly displays only one printer
	name for a printer driver installed on multiple ports.
	
	CAUSE
	=====
	
	The cause of this problem is under investigation.
	
	RESOLUTION
	==========
	
	Use a Windows application (instead of FAXVIEW.EXE) to view printer drivers
	installed on multiple ports.
	
	STEPS TO REPRODUCE CONDITION
	----------------------------
	
	1. Use the Windows Control Panel and install a Laserjet III printer on LPT1:.
	
	2. Install another Laserjet III printer driver on LPT2:.*
	
	3. Install another Laserjet III printer driver on FILE:.
	
	4. Now view the installed printers in any Windows application by selecting File
	  Menu, then Printer Setup. The dialog box correctly displays three drivers,
	  one for each port (LPT1:, LPT2:, and FILE).
	
	5. Now view the installed printers while in FAXVIEW.EXE. The dialog box
	  incorrectly displays one printer driver as follows:
	
	  HP Laserjet III, on FILE:, LPT1:, LPT2.
	
	Note: The expected results are those found in step 4 above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Gateway to Fax,
	version 3.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
