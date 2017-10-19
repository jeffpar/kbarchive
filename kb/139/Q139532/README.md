---
layout: page
title: "Q139532: Streets 4.0 and Windows NT 3.51: Names Disappear When Zooming"
permalink: /kb/139/Q139532/
---

## Q139532: Streets 4.0 and Windows NT 3.51: Names Disappear When Zooming

	Article: Q139532
	Product(s): Microsoft Automap
	Version(s): WINDOWS:4.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets for Windows, version 4.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Street names disappear when you zoom to a location, even though the street names
	were visible before zooming.
	
	This occurs on computers running Windows NT, version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Automap Streets
	version 4.00. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Set the Automap Streets Cache size to less than one third the available system
	memory.
	
	Changing the Cache Size
	-----------------------
	
	1. On the Automap Help menu, click About Automap Streets ....
	
	2. Press and hold down the SHIFT key while you click System Info. The Technical
	  Settings dialog box appears.
	
	3. In the Technical Settings dialog box, change the Streets Cache Size setting
	  to a number no larger than 1/3 of the Max VM Memory setting. For example, if
	  the Max VM Memory setting is 90, the Streets Cache setting shouldn't be
	  larger than 30.
	
	4. Click OK to save the settings.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131358 Road Atlas 4.0: Description of Technical Settings
	
	Additional query words: nt winnt auto auto-map automap reference kbmm multimedia multi-media mult media map zooming zoom-in missing disappears cleared deleted
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbOSWinSearch kbOSWinNT351 kbHomeMMsearch kbAutomapSearch kbOSWinNTSearch kbAutomapStreets400
	Version           : WINDOWS:4.0; winnt:3.51
	
	=============================================================================
	
