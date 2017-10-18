---
layout: page
title: "Q83686: Beethoven Err Msg: This File May Not Play Correctly..."
permalink: kb/083/Q83686/
---

## Q83686: Beethoven Err Msg: This File May Not Play Correctly...

	Article: Q83686
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Multimedia Beethoven, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MIDI files that have not been marked as being Microsoft Windows 3.1 compatible
	may generate the following error message:
	
	  
	
	  This file may not play correctly with the
	  default MIDI Setup.
	   _
	  |_|  Don't display this warning in the future.
	
	MORE INFORMATION
	================
	
	This error indicates that the file was not marked using the Microsoft Windows
	3.1 SDK MarkMidi utility. If the audio hardware and the required drivers are
	properly installed, select the Don't Display This Warning In The Future check
	box to disable the warning message from being displayed every time a unmarked
	MIDI file is played. Doing so writes the following line in the [mciseq.drv]
	section of the SYSTEM.INI:
	
	  [mciseq.drv]
	  disablewarning=true
	
	Additional query words: Tbook mmtitles Sound
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMBeethoven100 kbMMBeethoven100a
	Version           : :1.0,1.0a
	
	=============================================================================
	
