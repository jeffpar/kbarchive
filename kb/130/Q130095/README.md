---
layout: page
title: "Q130095: Repeated Beeps During Windows 95 Start with ReelMagic Card"
permalink: kb/130/Q130095/
---

## Q130095: Repeated Beeps During Windows 95 Start with ReelMagic Card

	Article: Q130095
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer beeps repeatedly when Windows 95 starts if there is a ReelMagic
	MPEG video card installed in the computer.
	
	CAUSE
	=====
	
	The Windows 95 SoundBlaster drivers are not compatible with the ReelMagic video
	card.
	
	RESOLUTION
	==========
	
	To correct this problem, run the Setup program included with the ReelMagic card
	and install the Windows 3.1 drivers. For information about installing these
	drivers, please refer to the ReelMagic documentation or contact the
	manufacturer.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, please contact Sigma Designs.
	
	MORE INFORMATION
	================
	
	The repeated beeps occur when the Windows Start sound event occurs during the
	boot process. This happens after you see the Password dialog box, but before the
	desktop is displayed.
	
	The ReelMagic board is manufactured by Sigma Designs, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
