---
layout: page
title: "Q134477: Lion King 1.0: ESS AudioDrive Hardware Not Responding"
permalink: /kb/134/Q134477/
---

## Q134477: Lion King 1.0: ESS AudioDrive Hardware Not Responding

	Article: Q134477
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
	
	When you install The Lion King version 1.0 on a computer that has an ESS 488
	sound card and is running Windows 95, you may receive the following error
	message:
	
	  The ESS AudioDrive hardware is not responding properly. Sound playback and
	  recording will not be available.
	
	CAUSE
	=====
	
	There is an incompatibility between the ESS 488 16-bit driver and the 16- bit
	file architecture that The Lion King employs. Although Windows Audio Compression
	Manager is capable of translating 16-bit files and playing them correctly, The
	Lion King does not recognize the translation and incorrectly states that the
	sound card is not responding properly.
	
	RESOLUTION
	==========
	
	Contact the manufacturer for an upgrade of The Lion King.
	
	MORE INFORMATION
	================
	
	This problem does not occur if The Lion King version 1.0 is installed in Windows
	version 3.x, and then later upgraded to Windows 95.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
