---
layout: page
title: "Q123074: MSB Human: MIDI Mapper Does Not Appear in Control Panel"
permalink: /kb/123/Q123074/
---

## Q123074: MSB Human: MIDI Mapper Does Not Appear in Control Panel

{% raw %}

	Article: Q123074
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	1.0
	WINDOWS
	kbsound kbenv kbmm kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Magic School Bus Explores The Human Body uses MIDI sound, which requires that
	the MIDI Mapper be correctly configured. Sometimes, the MIDI Mapper icon does
	not appear in the Control Panel group, and it is not started when you run MIDI
	Mapper in the Bus Stop utility for Explores The Human Body.
	
	CAUSE
	=====
	
	This behavior occurs if the sound drivers for the sound card are not installed,
	or are incorrectly installed.
	
	The MIDI Mapper icon will also not be present in Control Panel if the [Don't
	Load] section of the CONTROL.INI file has the Midi Mapper=1 entry. If Midi
	Mapper=1 is in the [Don't Load] section of CONTROL.INI, change the =1 to =2.
	
	MORE INFORMATION
	================
	
	The MIDI Mapper Control Panel is present in the Control Panel group only if a
	sound board and the correct sound drivers have been installed. It is not a .CPL
	file installed by Windows; it is a Control Panel installed by the sound drivers
	upon installation.
	
	Contact the manufacturer of your sound card for more information regarding the
	specific drivers for your sound card, and the correct installation of the sound
	card software.
	
	Additional query words: 1.0 audio CPL missing absent msbhb sound gone empty msb-hb frizz frizzle magicbus liz winmsbhuman msbhuman schoolbus magic_bus
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticHuman kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
