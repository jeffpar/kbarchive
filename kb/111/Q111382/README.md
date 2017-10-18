---
layout: page
title: "Q111382: Writer/Artist 1: No Sounds with Reveal Sound Card"
permalink: kb/111/Q111382/
---

## Q111382: Writer/Artist 1: No Sounds with Reveal Sound Card

	Article: Q111382
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Reveal sound card, Creative Writer and Fine Artist don't play sound
	if they are the first applications to try to use sound during the current
	Windows 3.x session.
	
	NOTE: The Reveal sound card initializes correctly in Windows 95, so this behavior
	does not occur in Windows 95.
	
	RESOLUTION
	==========
	
	The sound card must be enabled before Creative Writer or Fine Artist play sound.
	To solve this problem, use the following steps, which initialize the sound card
	when Windows starts:
	
	1. In Program Manager, open Control Panel from the Main group.
	
	2. Double-click the Sound icon.
	
	3. In the Events list, choose Windows Start.
	
	4. In the Files list, click any file with a .WAV extension.
	
	5. Click the Enable System Sounds option in the lower-left corner of the dialog
	  box.
	
	  NOTE: The Enable System Sounds option is not available if SoundBits is loaded
	  on your system. This automatically enables your sound card and may prevent
	  the problem described above.
	
	6. Choose OK.
	
	7. Close Control Panel.
	
	8. In Program Manager, choose Exit from the File menu.
	
	9. Click OK to end the Windows session.
	
	10. At the MS-DOS Prompt, type "win" (without the quotation marks) and press
	  "ENTER" (without the quotation marks).
	
	After following these steps, sounds should play correctly in Creative Writer and
	Fine Artist.
	
	MORE INFORMATION
	================
	
	The default state of the Reveal sound card is Off. Creative Writer assumes a
	default state of On and does not enable the card. Once a system sound has
	played, the state of the card is switched to On and Creative Writer recognizes
	the card.
	
	Additional query words: 1.00 win kids sounds play plays mskids mczee horn bulb honk 1.10 silent maggie max 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1,1.1a
	
	=============================================================================
	
