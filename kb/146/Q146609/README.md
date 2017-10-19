---
layout: page
title: "Q146609: Sound Card Beeps During Hardware Detection"
permalink: /kb/146/Q146609/
---

## Q146609: Sound Card Beeps During Hardware Detection

	Article: Q146609
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95 on a computer with a sound card, the sound
	card may beep intermittently during the hardware detection portion of Setup.
	
	CAUSE
	=====
	
	Setup may leave the sound card in an unsteady state during the hardware
	detection portion if the sound card is set to use a non-standard I/O range.
	
	RESOLUTION
	==========
	
	Typically, the beeps cease shortly after hardware detection is finished. In some
	cases, however, the computer may stop responding (hang), requiring you to
	restart the computer. In either case, run Setup again and choose Safe Recovery
	when you are prompted.
	
	After you run Setup, set the sound card for a standard I/O range and install the
	drivers, if available, using the Add New Hardware tool in Control Panel.
	
	For information about setting the sound card to a standard I/O range, please
	refer to the sound card's documentation or manufacturer.
	
	MORE INFORMATION
	================
	
	You may also encounter the behavior described in this article if you install a
	new sound card and run the automatic hardware detection routine in an existing
	installation of Windows 95.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
