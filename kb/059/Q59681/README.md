---
layout: page
title: "Q59681: Slow Return to MS-DOS If Keys Pressed on Exit"
permalink: kb/059/Q59681/
---

## Q59681: Slow Return to MS-DOS If Keys Pressed on Exit

	Article: Q59681
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you type characters on the keyboard immediately after exiting Microsoft
	Windows 3.0 in enhanced mode, it may take 20-30 seconds to return to the MS- DOS
	prompt and the computer may seem to stop responding (hang).
	
	Similar behavior may occur with Windows 3.1, if the keyboard buffer gets filled
	(beeping occurs) while Windows is exiting.
	
	Sometimes, the shift state gets toggled incorrectly, so that the keyboard behaves
	as if the CTRL, ALT, or SHIFT key were being held down. Pressing the appropriate
	key a few times typically resets the state correctly.
	
	Sometimes, the computer simply hangs, requiring a cold boot.
	
	WORKAROUND
	==========
	
	Avoid typing characters while enhanced mode Windows is exiting; wait until the
	MS-DOS prompt appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows versions 3.0
	and 3.1. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
