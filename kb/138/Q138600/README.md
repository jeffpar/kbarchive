---
layout: page
title: "Q138600: Cannot Print Complex Graphical Images on HP LaserJet Printer"
permalink: kb/138/Q138600/
---

## Q138600: Cannot Print Complex Graphical Images on HP LaserJet Printer

	Article: Q138600
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document that contains complex graphical images to a
	non-PostScript Hewlett-Packard (HP) LaserJet 4- or 5-series printer, the error
	light on the printer may blink and the document may not be printed or the output
	may be incomplete or incorrect. The same document may have been printed
	correctly in an earlier version of Windows. Documents that contain only text or
	simple graphical images are printed correctly.
	
	This problem is known to occur with the following HP LaserJet 4- and 5-series
	printers:
	
	- 4
	
	- 4M
	
	- 4 Plus
	
	- 4M Plus
	
	- 4L
	
	- 4ML
	
	- 4P
	
	- 4MP
	
	- 4Si
	
	- 4Si MX
	
	- 4V
	
	- 4MV
	
	- 5
	
	- 5P
	
	- 5MP
	
	CAUSE
	=====
	
	The amount of information being sent to the printer by the Windows 95 printer
	driver exceeds the amount of installed printer memory. In general, you should be
	able to print any document that you could print in Windows 3.1. However, you may
	have to make changes to some printer settings as outlined in this article.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. In Control Panel, double-click the Printers icon.
	
	2. Use the right mouse button to click the printer you are using, and then click
	  Properties on the menu that appears.
	
	3. On the Details tab, click Spool settings, and then click RAW in the Spool
	  Data Format box.
	
	4. On the Graphics tab, click the Use Raster Graphics option.
	
	5. On the Fonts tab, click the Print TrueType As Graphics option.
	
	6. On the Device Options tab, move the Printer Memory Tracking slider all the
	  way to the right (to the Aggressive setting).
	
	7. Verify that the Printer Memory setting matches the amount of memory installed
	  in the printer.
	
	8. If the Page Protection check box is not unavailable, click the check box to
	  clear it if it is selected, or click the check box to select it if it is
	  cleared. The check box may be unavailable, depending on the printer model you
	  are using and the amount of memory installed in the printer.
	
	9. Click OK.
	
	NOTE: This workaround may cause some documents to be printed more slowly. This
	decrease in performance does not occur with all documents or on all computers,
	and is typically not noticeable.
	
	Additional query words: vector incomplete graphics w95print
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
