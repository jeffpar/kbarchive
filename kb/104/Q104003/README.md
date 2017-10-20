---
layout: page
title: "Q104003: Hang If Eject CD While Program Is Running"
permalink: /kb/104/Q104003/
---

## Q104003: Hang If Eject CD While Program Is Running

{% raw %}

	Article: Q104003
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you eject the Schubert, Stravinsky, or Mozart CD while the program is
	running, the application and Windows may both stop responding (hang). This can
	occur with any CD-ROM application, not just with Stravinsky and Mozart.
	
	This problem occurs if you eject the CD while a waveform (.WAV) file is playing,
	if the .WAV file is larger than the size of the available data cache.
	
	This occurs because the disc status does not get reported by Microsoft CD- ROM
	Extensions (MSCDEX) to Schubert, Stravinsky or Mozart, so the application does
	not know whether or not the CD is in the drive.
	
	"A Word from Robert Winter" is the longest .WAV file in Stravinsky. It is while
	playing this file that Stravinsky will be most likely to hang if you eject the
	CD.
	
	RESOLUTION
	==========
	
	If you need to eject the CD, first either cancel the playback of the .WAV file
	or exit from Schubert, Stravinsky or Mozart.
	
	Additional query words: multi media multimedia multi-media lock hang wave form sound playback crash freeze hanging frozen Usage VBasic
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMSchubert kbMMStravinsky kbMMMozart100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
