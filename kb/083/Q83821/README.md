---
layout: page
title: "Q83821: Bookshelf: Windows 3.1 Setup Renames MIDIMAP .CFG"
permalink: /kb/083/Q83821/
---

## Q83821: Bookshelf: Windows 3.1 Setup Renames MIDIMAP .CFG

	Article: Q83821
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- All Microsoft Multimedia Products 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade from Microsoft Windows 3.0 with Multimedia Extensions 1.0 to
	Microsoft Windows operating system version 3.1, Setup renames MIDIMAP.CFG to
	MIDIMAP.OLD.
	
	MORE INFORMATION
	================
	
	The Windows 3.1 upgrade renames the current MIDI patch map file MIDIMAP.CFG to
	MIDIMAP.OLD and installs the MIDI patch map for the AdLib card. This will work
	correctly with any MIDI synthesizer that is AdLib compatible.
	
	If MIDI files played correctly under the earlier installation of Microsoft
	Windows 3.0 with Multimedia Extensions 1.0 and the MIDI files do not play
	correctly after upgrading to Windows 3.1, rename the MIDIMAP.OLD file located in
	the WINDOWS\SYSTEM to MIDIMAP.CFG.
	
	Additional query words: 1.00 mm bookshelf multimedia 1991
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeMMsearch
	Version           : :
	
	=============================================================================
	
