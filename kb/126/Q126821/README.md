---
layout: page
title: "Q126821: MSB Human: Hangs at Classroom or Driver's License"
permalink: /kb/126/Q126821/
---

## Q126821: MSB Human: Hangs at Classroom or Driver's License

	Article: Q126821
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Magic School Bus Explores The Human Body on a machine with an Aria
	sound card, the program may stop responding (hang) when the classroom or the
	driver's license is displayed.
	
	This is normally due to the MIDI configuration for the sound card.
	
	RESOLUTION
	==========
	
	Use the following steps to resolve the problem:
	
	
	Windows 3.x
	-----------
	
	1. Make sure that the Midi Mapper is configured for extended MIDI (Channels
	  1-10) and that you can play Canyon.mid using Media Player.
	
	  If the MIDI mapper icon does not exist in the Control Panel, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q123074 School Bus: MIDI Mapper Does Not Appear in Control Panel
	
	
	2. Check the Midi Mapper's Patch Map Name for an entry such as "Gen Midi." If
	  there is such a name, change all Patch Map Names to <NONE>, then exit
	  Midi Mapper and save the changes.
	
	3. Run Human Body.
	
	If the program still hangs:
	
	1. In Midi Mapper, under Port Name, select Aria Synth for all channels (1-16),
	  exit Midi Mapper, and save changes.
	
	2. Run Human Body.
	
	If it still continues to hang:
	
	1. In Midi Mapper, under the Active column, make sure all channels (1- 16) are
	  not checked.
	
	2. Exit Midi Mapper and save the changes.
	
	3. Run Human Body.
	
	  (NOTE: This disables all MIDI sound in Human Body but confirms whether or not
	  the MIDI configuration is what is causing the problems.)
	
	If the problem continues, please contact Aria or your hardware manufacturer for
	technical support.
	
	NOTE: For more information about how to perform these tasks using MIDI Mapper,
	refer to the documentation that accompanied your sound card.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: kids mskids msb msbhb msbss frizz freeze winmsbhuman msbhuman midimapper sounds wave hang crash stop audio excel gallant frozen lock up lockup crashes hangs bombs bombed
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticHuman kbMSBSearch
	Version           : :1.0
	
	=============================================================================
	
