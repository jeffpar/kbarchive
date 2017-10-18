---
layout: page
title: "Q127985: Platinum 16 Sound Card Causes GP Fault with a Pentium Processo"
permalink: kb/127/Q127985/
---

## Q127985: Platinum 16 Sound Card Causes GP Fault with a Pentium Processo

	Article: Q127985
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When you play wave audio from any Microsoft multimedia application on a Pentium
	computer with the Multi-Wave Innovation Platinum 16 sound card installed, you
	may receive the following message
	
	  <MMTITLE> has caused a General Protection Fault in MSACM.DRV
	
	where <MMTITLE> is the name of the application.
	
	RESOLUTION
	==========
	
	The Multi-Wave Innovation Platinum 16 sound card requires an updated
	Pentium-specific device driver when installed on a Pentium computer.
	
	The device driver shipped with the Platinum 16 sound card is:
	
	  P16.SYS  2/1/94   11,228  Version 1.22
	
	The updated device driver is:
	
	  P16.SYS  3/29/94  11,229  Version 1.21p
	
	NOTE: Do not be confused by the version number of the necessary device driver.
	The correct version is 1.21p.
	
	The file is available on the Multi-Wave Innovations BBS. The filename is
	PLATPEN.ZIP.
	
	
	For additional information, contact Multi-Wave Innovations at:
	
	- Technical Support: (408) 379-2848
	
	- Bulletin Board Services (BBS): (408) 379-2927
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 1995multi media multimedia multi-media mmtitles kbmm openv gp fault gfp
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
