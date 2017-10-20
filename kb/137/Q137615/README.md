---
layout: page
title: "Q137615: Shutting Down Windows 95 Cancels Print Job Without Warning"
permalink: /kb/137/Q137615/
---

## Q137615: Shutting Down Windows 95 Cancels Print Job Without Warning

{% raw %}

	Article: Q137615
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
	
	If you shut down Windows 95 while a document is being printed, the print job may
	be canceled without a warning message.
	
	CAUSE
	=====
	
	This behavior can occur if you are spooling RAW printer data and the print job
	has not been completely spooled to the printer before you shut down Windows 95.
	
	RESOLUTION
	==========
	
	To enable warning messages, set the spooling method to Enhanced Metafile (EMF)
	instead of RAW. To do so, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the printer you are using, and then click
	  Properties on the menu that appears.
	
	3. On the Details tab, click Spool Settings.
	
	4. In the Spool Data Format box, click EMF.
	
	5. Click OK until you return to the Printers folder.
	
	NOTE: The EMF format is not available on PostScript printers.
	
	MORE INFORMATION
	================
	
	A warning is issued at shutdown only if the print job cannot be saved. When you
	are using RAW format, the print job is saved and you are notified that there is
	a print job saved from your last session the next time you log on.
	
	When you use EMF format, a partially spooled print job cannot be saved, so you
	are warned that a print job has not finished.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
