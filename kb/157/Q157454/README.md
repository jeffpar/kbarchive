---
layout: page
title: "Q157454: PRB: Get Info Settings Not Reflected on Other WorkStations"
permalink: /kb/157/Q157454/
---

## Q157454: PRB: Get Info Settings Not Reflected on Other WorkStations

{% raw %}

	Article: Q157454
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes made to the memory allocated to an application residing on a shared
	drive are not recognized by other computers connecting to that drive. This is
	true if the application program is also locked when the memory allocation is
	changed in the Get Info dialog box. Microsoft Visual FoxPro, Microsoft FoxPro
	2.6, and the Visual FoxPro Support Libraries and executable files created in
	FoxPro 2.6 are application programs.
	
	RESOLUTION
	==========
	
	Change the memory allocated to the application program and close the Get Info
	dialog box without selecting the Locked option. Then Get Info on the application
	program again and lock it. To invoke the Get Info dialog box, highlight the
	appropriate icon, and click Get Info on the File menu.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior occurs only when changing both the memory requirements and the
	locked status of the application and then closing the Get Info dialog box to
	save both changes simultaneously. If the Locked check box is selected, the
	memory settings cannot be changed. Clear the Locked check box to change the
	memory settings.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a workstation machine, highlight the application located on the server,
	  click open on the File menu. The Get Info dialog box appears.
	
	2. Change the Preferred size under the Memory Requirements section.
	
	3. Click on the Locked check box to lock the file and close the Get Info dialog
	  box.
	
	4. On a different machine, connect to the share containing the FoxPro
	  application file, highlight the file, and open the Get Info dialog box.
	  Notice that the memory settings reflect the normal default values.
	
	Additional query words: kbdsd VFoxMac
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
