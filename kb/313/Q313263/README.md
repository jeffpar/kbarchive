---
layout: page
title: "Q313263: MSB: Sound Stops Working After You Enter the Schoolroom"
permalink: /kb/313/Q313263/
---

## Q313263: MSB: Sound Stops Working After You Enter the Schoolroom

{% raw %}

	Article: Q313263
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enter the schoolroom, the sound may stop working.
	
	CAUSE
	=====
	
	In the Device Manager, under "Sound, video, and game controllers", the Unimodem
	Half-Duplex Audio Device is enabled.
	
	RESOLUTION
	==========
	
	Disable the Unimodem Half-Duplex Audio Device. To do this, follow these steps.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. On the taskbar, click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. In the System Properties dialog box, click the Device Manager tab.
	
	4. Click the plus sign (+) to the left of "Sound, video, and game controllers"
	  to expand the directory tree.
	
	5. Under "Sound, video, and game controllers", click Unimodem Half-Duplex Audio
	  Device, and then click Properties.
	
	6. In the "Unimodem Half-Duplex Audio Device Properties" dialog box, click to
	  select the "Disable in this hardware profile" check box, and then click OK
	  twice.
	
	For Windows 2000:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. In the System Properties dialog box, on the Hardware tab, then click Device
	  Manager.
	
	4. In the window that opens, click the plus sign (+) to expand the left of
	  "Sound, video, and game controllers" directory tree.
	
	5. Click "Unimodem Half-Duplex Audio Device", and then click Properties. If not
	  found, Cancel or Close the dialogues and windows you have opened and skip
	  ahead to the next article.
	
	6. In the "Unimodem Half-Duplex Audio Device Properties" dialog box, click to
	  select the "Disable in this hardware profile" check box, and then click OK
	  twice.
	
	The sound now works in both versions of the Magic School Bus.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbScholasticEarth kbMSBSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
