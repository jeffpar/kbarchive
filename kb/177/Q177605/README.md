---
layout: page
title: "Q177605: MSB Dinos: Sound Distorted or Fuzzy when Ms. Frizzle Is Talking"
permalink: /kb/177/Q177605/
---

## Q177605: MSB Dinos: Sound Distorted or Fuzzy when Ms. Frizzle Is Talking

{% raw %}

	Article: Q177605
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbmm kbsound kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED, EDITED, OR TESTED BY MICROSOFT. USE ONLY         **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	When you run Scholastic's Magic School Bus: Explores in the Age of Dinosaurs,
	sound playback may be distorted or fuzzy when Ms. Frizzle speaks.
	
	CAUSE
	=====
	
	This behavior can occur if you use an Ensoniq AudioPCI sound card with outdated
	sound drivers.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Verify that the speaker volume on the audio card is not set to full volume,
	  and that the sound card is configured to use Single-Mode Direct Memory Access
	  (DMA).
	
	  For additional information about how to adjust speaker volume and how to
	  configure the audio card to use Single-Mode DMA, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q137451 Sound Distortion with Multimedia Programs
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Multimedia.
	
	4. Click the Audio tab.
	
	5. Under Playback, in the Preferred Device box, click Game Compatible Device. If
	  this device is not available, proceed to the next step.
	
	6. Verify that the Use Preferred Devices Only check box is selected. If this
	  check box is cleared, click it to select it.
	
	7. Click OK.
	
	8. Close Control Panel, and then restart the computer.
	
	MORE INFORMATION
	================
	
	The Game Compatible Device is installed by some data/fax/voice modems.
	
	Additional query words: kids mskids msb multi-media multi media msbdino msbdinos msbearth distort muffled garbled audio pci
	
	======================================================================
	Keywords          : kbenv kbmm kbsound kbimu 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
