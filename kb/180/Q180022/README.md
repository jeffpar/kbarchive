---
layout: page
title: "Q180022: MSB Solar: Sound Suddenly Stops After You Click an Object"
permalink: /kb/180/Q180022/
---

## Q180022: MSB Solar: Sound Suddenly Stops After You Click an Object

{% raw %}

	Article: Q180022
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsound kbimu kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click an object in Magic School Bus series: Explores the Solar System,
	sound may be played initially, and then suddenly stop and not start again.
	
	CAUSE
	=====
	
	This issue can occur if you are using a Creative Labs Sound Blaster AWE 64, a
	Sound Blaster 16, or a Sound Blaster AWE 32 PnP audio adapter.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Quit Magic School Bus series: Explores the Solar System.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click System.
	
	4. Click the Device Manager tab.
	
	5. Double-click the Sound, Video And Game Controllers branch to expand it.
	
	6. Click Creative AWE64, and then click Properties.
	
	7. Click the Settings tab.
	
	8. Click the Allow Full-Duplex Operation check box to select it.
	
	9. Click the Use Creative 3D Stereo Enhancement check box to select it.
	
	10. Click OK, and then click OK.
	
	Additional query words: mskids msbss frizz kbmm multimedia sb64 sbawe64 wav card
	
	======================================================================
	Keywords          : kbenv kbhw kbsound kbimu kbHardware 
	Technology        : kbHomeProdSearch kbKidsSearch kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
