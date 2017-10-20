---
layout: page
title: "Q72403: Methods for Printing Multiple Copies of a File"
permalink: /kb/072/Q72403/
---

## Q72403: Methods for Printing Multiple Copies of a File

{% raw %}

	Article: Q72403
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two methods of printing multiple copies of a print job. These methods
	vary only slightly, but affect the speed in printing.
	
	Method 1
	--------
	
	If you choose the Print command from the File menu in your Windows application,
	you can select the number of copies of the file to be printed. This causes
	Windows to send that many copies to the print spooler, and subsequently to the
	printer. This method can be very slow if you are printing many copies.
	
	This method is called "collated," and is a function of the application.
	
	Method 2
	--------
	
	1. From the File menu, choose Printer Setup.
	
	  -or-
	
	  From the Control Panel, select Printers.
	
	2. Select the printer, then click on the Setup button. From the Control Panel,
	  you first need to click on the Configure button.
	
	You are presented with the printer options supported by the printer driver. Some
	printer drivers (such as the HP LaserJet series) have a Copies option available.
	By changing the number of copies in this box, you can speed up the printing
	process. For each job sent to the print spooler, this number of copies is
	created; therefore, only one copy of a print job needs to be downloaded to
	create any number of copies.
	
	This method is called "uncollated," and is a function of the printer driver. This
	method is not necessarily supported by every printer driver.
	
	MORE INFORMATION
	================
	
	For more information about collated and uncollated printing, query on the
	following words:
	
	  collated uncollated
	
	Additional query words: 3.00 3.00a 3.10 3.11 win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
