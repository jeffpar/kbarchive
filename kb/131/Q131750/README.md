---
layout: page
title: "Q131750: Characters on Screen Appear Very Small"
permalink: /kb/131/Q131750/
---

## Q131750: Characters on Screen Appear Very Small

{% raw %}

	Article: Q131750
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,2.0e,3.0,4.0,4.0a,4.0c,7.0; :1.0,1.0a,2.0,2.0a,3.0
	Operating System(s): 
	Keyword(s): kbdisplay kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 2.0, 2.0e, 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Publisher 97 for Windows 
	- Microsoft Publisher for Windows, versions 1.0, 1.0a, 2.0, 2.0a, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new document or open an existing document in PowerPoint or
	Publisher for Windows, the text on the screen may appear to be very small. The
	appearance of the text will not change, even if you try to change it to a
	different font or point size.
	
	CAUSE
	=====
	
	This problem occurs when there is no Windows default printer selected, or if a
	printer driver is installed that does not support TrueType fonts. Some printer
	drivers that don't support TrueType fonts are: the Generic Text- Only (TTY)
	driver, Windows 3.0 printer drivers, and some FAX drivers.
	
	Both Publisher and PowerPoint use the printer driver to determine the appearance
	and placement of fonts on the screen as well as on the printer. Without a
	printer that supports TrueType fonts, both programs will substitute Windows
	screen fonts for actual TrueType fonts, thereby giving the appearance of tiny
	fonts on the screen.
	
	RESOLUTION
	==========
	
	To correct the problem, set a TrueType-compatible printer as your default
	printer. To do so, follow these steps (these instructions apply to Windows
	3.1):
	
	1. From your Main group in Program Manager, double-click Control Panel.
	
	2. Double-click Printers.
	
	3. If you have already have a suitable printer in your Installed Printers list,
	  do the following:
	  a. Click the printer entry.
	
	  b. Click "Set As Default Printer."
	
	  This will set the printer as your default printer.
	
	4. If you do not have a suitable printer, perform the following steps:
	  a. Make sure you have your Windows installation disks on hand, as these steps
	     will require that you use at least one or more of them.
	
	  b. In the Control Panel Printers dialog box, click Add.
	
	  c. Scroll through the list of printers until you find a suitable printer,
	     click it to select it, and click OK.
	     NOTE: You do not need a printer physically attached to your computer to use
	     the driver for it. For instance, if you know that you will be printing
	     your Publisher publication on an HP LaserJet IIIsi, then install that
	     printer driver, even though you may not have that printer actually
	     attached.
	
	  d. Control Panel will prompt you for the appropriate disk(s) to be inserted
	     into your floppy disk drive. After the necessary files are copied, the new
	     printer will appear in the Installed Printers list.
	
	  e. Once the printer is installed, perform step 3 above.
	
	Once you have done the above, the appearance of text in both PowerPoint and
	Publisher should appear normal.
	
	
	Additional query words: 1.00 1.00a 2.00 2.00e 3.00 4.00 4.00a 4.00c pub20 pub10 dots poor blocky blocks ugly jaggy jagged pub97 pub95 powerpnt
	
	======================================================================
	Keywords          : kbdisplay kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPublisherSearch kbPowerPt95 kbZNotKeyword2 kbZNotKeyword3 kbPowerPt95Search kbPowerPt400 kbPowerPt200 kbPowerPt300 kbPowerPt200e kbPowerPt400c kbPowerPt400a kbPublisher100 kbPublisher100a kbPublisher200 kbPublisher95 kbPublisher200a
	Version           : WINDOWS:2.0,2.0e,3.0,4.0,4.0a,4.0c,7.0; :1.0,1.0a,2.0,2.0a,3.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
