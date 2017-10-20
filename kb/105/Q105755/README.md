---
layout: page
title: "Q105755: Cannot Install Two MIDI Cards If They Have the Same Name"
permalink: /kb/105/Q105755/
---

## Q105755: Cannot Install Two MIDI Cards If They Have the Same Name

{% raw %}

	Article: Q105755
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0 with Multimedia extensions version 1.0; :3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.0 with Multimedia extensions version 1.0 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to install two separate MIDI cards on the same system if they
	both are the same model and both use the same driver. If both devices have the
	same name, as listed in the Drivers section of the Control Panel (for example,
	"SoundBlasterPro FM MIDI Synth,"), Windows cannot install both devices.
	Additionally, the MIDI Mapper will have difficulty pointing to the correct port
	if the two devices both have the same name.
	
	However, if the two cards are different models and use two different drivers, it
	is possible to install and use both of them. In this case, make sure that they
	each use a different interrupt (IRQ) and I/O address.
	
	Additional query words: multi media multimedia multi-media music duplicate second board mmtitles kbmm sound
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.0 with Multimedia extensions version 1.0; :3.1
	
	=============================================================================
	

{% endraw %}
