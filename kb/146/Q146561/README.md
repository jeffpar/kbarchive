---
layout: page
title: "Q146561: XCLN: Controls Disappear From Forms Designer Window"
permalink: kb/146/Q146561/
---

## Q146561: XCLN: Controls Disappear From Forms Designer Window

	Article: Q146561
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you drag a control quickly down past the bottom of the Microsoft Exchange
	Forms Designer window, the control is scrolled up past the top of the viewable
	area of the form and appears to be deleted.
	
	
	MORE INFORMATION
	================
	
	This behavior is by design. It occurs because the form has an auto scrolling
	feature and even happens if the scroll bars are off. The auto scrolling feature
	scrolls the control up out of the viewing area, thus causing the control to
	disappear.
	
	WORKAROUND
	==========
	
	Increase the size of the canvas so that it's large enough to see the hidden
	control or add another control and drag it off the form window in the opposite
	direction until the first control is visible again.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
