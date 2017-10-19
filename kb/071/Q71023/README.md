---
layout: page
title: "Q71023: Authoring Device-Independent MIDI Files"
permalink: /kb/071/Q71023/
---

## Q71023: Authoring Device-Independent MIDI Files

	Article: Q71023
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A MIDI file authored using only the high-end data do not produce sound on a
	low-end MIDI device. For example, if a MIDI file is created using only channels
	2 through 5, a low-end device would not receive the MIDI data. Because there is
	no low-end version of the data, nothing is sent through the mapper to the
	low-end (for example, AdLib) device.
	
	MORE INFORMATION
	================
	
	The 16 MIDI channels are organized as follows:
	
	  Channel   Use
	  -------   ---
	     1      high-end (highest priority)
	     2      high-end
	     3      high-end
	     4      high-end
	     5      high-end
	     6      high-end
	     7      high-end
	     8      high-end
	     9      high-end (lowest priority)
	    10      high-end percussive
	    11      RESERVED
	    12      RESERVED
	    13      low-end (highest priority)
	    14      low-end
	    15      low-end (lowest priority)
	    16      low-end percussive
	
	MIDI data is authored in parallel, with high-end and low-end data. The mapper
	masks off data that is inappropriate for the device on which the sound is
	played. (The mapper also transforms the sound according to the maps.)
	
	In the case above, to hear the MIDI data, it would be necessary to create a map
	that passes the data on channels 2 through 5 to the Adlib, or to modify the file
	to use channels 13 through 16.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
