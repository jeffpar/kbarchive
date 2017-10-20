---
layout: page
title: "Q85179: Use Adlib MIDI Map with Sound Blaster Internal Synthesizer"
permalink: /kb/085/Q85179/
---

## Q85179: Use Adlib MIDI Map with Sound Blaster Internal Synthesizer

{% raw %}

	Article: Q85179
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play a MIDI (.MID) file on a Creative Labs Sound Blaster (DSP revision
	1.0 and 1.5) internal synthesizer, no output is heard.
	
	The following Windows error message may be displayed:
	
	  The current MIDI setup references a MIDI device which is not installed on
	  your system. Do you want to continue?
	
	     [Yes] [No]
	
	In other cases, the file seems to play but you can't hear the sound. There is no
	error message.
	
	CAUSE
	=====
	
	The MIDI Mapper is configured incorrectly.
	
	If the error message occurs, then the MIDI Mapper is configured to use a hardware
	device that is not installed in the PC.
	
	If the error message isn't displayed but no sound is produced, the MIDI Mapper is
	configured with the Port Name as "Creative Labs Sound Blaster 1.0" or the
	"Creative Labs Sound Blaster 1.5" and is attempting to send the MIDI data to an
	external synthesizer connected to the sound board using an add-on MIDI
	interface. Unless an external synthesizer is connected, no sound is played.
	
	RESOLUTION
	==========
	
	You must select "Adlib" or "Adlib general" in the MIDI Mapper.
	
	1. From the Control Panel, run MIDI Mapper.
	
	2. Set the Name to Adlib or Adlib General.
	
	3. Save your changes and restart Windows.
	
	MORE INFORMATION
	================
	
	Windows version 3.1 supplies multimedia drivers for the Creative Labs Sound
	Blaster 1.0 and 1.5. The Adlib driver is installed with these cards to access
	the built-in Synthesizer chip.
	
	To properly address the internal synthesizer chip on the Sound Blaster, the MIDI
	Mapper should be set to "Adlib" or "Adlib general."
	
	
	For more information, contact Creative Labs technical support.
	
	The Sound Blaster product here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	KBCategory: kbmm kbsound kb3rdparty kberrmsg
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 MWIN Media Player
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
