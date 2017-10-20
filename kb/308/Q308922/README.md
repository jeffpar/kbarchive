---
layout: page
title: "Q308922: Streets and Trips: Browser Hangs During Streets &amp; Trips Install"
permalink: /kb/308/Q308922/
---

## Q308922: Streets and Trips: Browser Hangs During Streets &amp; Trips Install

{% raw %}

	Article: Q308922
	Product(s): Microsoft Automap
	Version(s): 1.0,5.5
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets & Trips 2002, version 1.0, used with:
	   - Microsoft Internet Explorer version 5.5 for Windows 98 Second Edition 
	   - Microsoft Internet Explorer version 5.5 for Windows Millennium Edition 
	- Microsoft Streets and Trips 2001, used with:
	   - Microsoft Internet Explorer version 5.5 for Windows 98 Second Edition 
	   - Microsoft Internet Explorer version 5.5 for Windows Millennium Edition 
	- Microsoft MapPoint 2002, used with:
	   - Microsoft Internet Explorer version 5.5 for Windows 98 Second Edition 
	   - Microsoft Internet Explorer version 5.5 for Windows Millennium Edition 
	- Microsoft MapPoint 2001, used with:
	   - Microsoft Internet Explorer version 5.5 for Windows 98 Second Edition 
	   - Microsoft Internet Explorer version 5.5 for Windows Millennium Edition 
	- Microsoft MapPoint 2000, used with:
	   - Microsoft Internet Explorer version 5.5 for Windows 98 Second Edition 
	   - Microsoft Internet Explorer version 5.5 for Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Streets and Trips, Microsoft Internet
	Explorer Setup stops responding.
	
	CAUSE
	=====
	
	This behavior can occur if there are too many empty INF files on your hard disk.
	
	RESOLUTION
	==========
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	To resolve this issue, run the Disk Cleanup utility, delete all of the empty
	OEM*.inf files, and then reinstall Internet Explorer and Streets and Trips. To
	do this, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Cleanup.
	
	2. In the Select Drive dialog box, click C.
	
	3. Click to select the following check boxes:
	
	   - Temporary files
	
	   - Downloaded Program Files
	
	   - Temporary Internet Files
	
	4. When the Cleanup process is complete, restart your computer.
	
	5. Click Start, point to Search, and then click "For Files or Folders".
	
	6. In the Named box, type "OEM*.inf" (without the quotation marks), and then
	  click Search Now.
	
	7. When the search process is complete, note the size of each file (located to
	  the right of the file name).
	
	8. Press and hold down the SHIFT key, select each file that has a size of 0
	  bytes, and then press DELETE.
	
	  When the confirmation message appears, click Yes.
	
	9. Click Start, and then click Run.
	
	10. In the Run box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	11. On the General tab, click "Selective startup", and then click to clear each
	  check box.
	
	12. When prompted, restart your computer.
	
	13. Reinstall Internet Explorer.
	
	14. When the installation process is complete, restart your computer.
	
	15. Install Streets and Trips.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2002
	Version           : :1.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
