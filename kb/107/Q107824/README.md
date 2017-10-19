---
layout: page
title: "Q107824: PRB: Orientation and Paper Settings Not Transported"
permalink: /kb/107/Q107824/
---

## Q107824: PRB: Orientation and Paper Settings Not Transported

	Article: Q107824
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5x 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The paper and page layout settings for a report created in FoxPro for Windows or
	FoxPro for MS-DOS will not transport to FoxPro for Macintosh.
	
	CAUSE
	=====
	
	Settings such as orientation, paper size, and paper tray are a function of the
	printer driver currently being used. Because the printer driver mechanism varies
	between platforms, printer-specific settings will not be transported.
	
	RESOLUTION
	==========
	
	Once the report has been transported to FoxPro for Macintosh, choose Page Layout
	from the Report menu to set the paper size and orientation. The report objects
	should then be correctly positioned in page preview.
	
	Additional query words: VFoxMac FoxMac 2.50b 2.50c landscape portrait bin setup report writer
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300bMac
	Version           : MACINTOSH:2.5x,3.0b
	
	=============================================================================
	
