---
layout: page
title: "Q197875: XWEB: OWA Send Note Applet Doesn't Display Scroll Bars, Buttons"
permalink: kb/197/Q197875/
---

## Q197875: XWEB: OWA Send Note Applet Doesn't Display Scroll Bars, Buttons

	Article: Q197875
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use the Send Note function of Microsoft Outlook Web Access (OWA), the
	scroll bars and the "Send" or "Check Names" buttons of the Send Note applet may
	disappear.
	
	CAUSE
	=====
	
	This can occur if the browser is running in a 640x480 pixels display mode. The
	Send Note applet is too large for the browser to display in 640x480 mode. Use
	the scroll bars on the browser to allow the entire Send Note page to scroll in
	and out of view.
	
	RESOLUTION
	==========
	
	Change the display setting to be at least 800x600 pixels.
	
	WORKAROUND
	==========
	
	Use the browser scroll bars to view information that has been moved off of the
	screen, or change the display setting to at least 800x600 pixels.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The browser will not scroll with text because it is being added in the Send Note
	applet. Instead the scroll bars in the applet will be used to navigate the text
	being entered.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
