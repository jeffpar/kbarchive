---
layout: page
title: "Q127209: Orchid Vidiola Capture Card Causes Setup to Hang"
permalink: /kb/127/Q127209/
---

## Q127209: Orchid Vidiola Capture Card Causes Setup to Hang

{% raw %}

	Article: Q127209
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are installing Windows 95 on a computer that has an Orchid Vidiola
	Capture card, Setup may stop responding (hang) during the hardware detection
	routine.
	
	MORE INFORMATION
	================
	
	The Orchid Vidiola Capture card is not supported for Setup's hardware detection
	routine. When Setup sends a detection query to this card, the card returns an
	invalid value that causes the hardware detection routine to hang. You must turn
	off and restart the computer and run Setup again, selecting the Smart Recovery
	option, to continue. Setup then skips the detection of the Orchid Vidiola
	Capture card.
	
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
