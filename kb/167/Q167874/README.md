---
layout: page
title: "Q167874: WD97: Page Borders May Be Displayed or Printed Incorrectly"
permalink: /kb/167/Q167874/
---

## Q167874: WD97: Page Borders May Be Displayed or Printed Incorrectly

	Article: Q167874
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint kbusage winword word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	For a Microsoft Word 2002 version of this article, see Q291335.
	
	SYMPTOMS
	========
	
	When you print or view a document in print preview, page borders in your
	document may not print, may not be shown or you may receive the following error
	message:
	
	  One or more margins are set outside the printable area of the page. Choose
	  the Fix button to increase the appropriate margins.
	
	CAUSE
	=====
	
	The default page border is only 24 points (about 5/16 inch) from the edge of the
	page, regardless of the actual unprintable region for your printer. Even though
	your document margins may fit in the printable region of the page, the page
	border may still be in the unprintable region defined by your printer driver.
	
	This problem affects HP DeskJet printers most frequently. The bottom unprintable
	region of the HP DeskJet printers is 0.67 inch or larger. The specific setting
	depends on the DeskJet series printer driver.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods to change the page
	border margins.
	
	Method 1: Change the Default "Measure From Edge of Paper" Setting
	-----------------------------------------------------------------
	
	Change the default 24-point page border from the edge of the page margin to a
	different value. This may allow the page border to move into the printable
	region of your page.
	
	NOTE: The page border margins are adjustable between 0 and 31 points only. This
	is a distance of about 0.5-inch.
	
	Method 2: Change the Measure from Option to Text
	------------------------------------------------
	
	To move the bottom border farther up on the page, follow these steps:
	
	1. On the File menu, click Page Setup.
	
	2. Click the Margins tab.
	
	3. Increase the bottom margin to at least 0.67-inch and click OK.
	
	  NOTE: Changing the margin settings may affect the formatting of the document.
	
	4. On the Format menu, click Borders and Shading.
	
	5. Click the Page Border tab, and then click Options.
	
	6. In the Measure From list, click Text, and then click OK twice.
	
	Method 3: Change the Paper Size
	-------------------------------
	
	To change the paper size from letter to a custom size, follow these steps:
	
	1. On the File menu, click Page Setup.
	
	2. Click the Paper Size tab.
	
	3. In the Height box, change the setting to 10 inches. This will also change the
	  Paper Size setting to Custom Size.
	
	NOTE: Changing the paper size settings may affect the formatting of the
	document.
	
	Method 4: Change "Measure From" to Text
	---------------------------------------
	
	To change the "Measure From" setting, do the following:
	
	1. Click Borders and Shading on the Format menu.
	
	2. Select the Page Borders tab and then click Options.
	
	3. Under "Measure From", click Text.
	
	4. If necessary, change the margins to at least 10 pts.
	
	5. Click OK twice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Most printers cannot print all the way to the edge of the paper due to physical
	limitations in the way the printer handles paper.
	
	If you set your document margins closer to the edge of the paper than your
	printer is capable of printing, Microsoft Word and Microsoft Word Viewer return
	a warning message for each copy you send to the printer.
	
	Most laser printers, such as the Hewlett-Packard (HP) LaserJet, cannot print
	closer than 0.25 inch to any edge of the paper. Some laser printers, such as the
	HP LaserJet Series II, require 0.5 inch margins. DeskJet printers generally
	cannot print closer to the bottom edge than 0.67 inch. Most PostScript and
	dot-matrix printers have their own internal printer driver setting for margins.
	
	For more information about unprintable regions, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q84647 "Margins Set Outside Printable Area of Page" in Word
	
	  Q166055 WD97: Margins Outside Printable Error in Word Viewer
	
	  Q114429 Page Number and Footer Don't Print on HP DeskJet Printer
	
	To Change or Add a Page Border
	------------------------------
	
	1. On the Format menu, click Borders and Shading.
	
	2. Click the Page Border tab, and then select the options desired for your page
	  border.
	
	3. To change the margins of the page border, click Options.
	
	  The Options button is located in the lower-right corner of the Borders And
	  Shading dialog box (above the Cancel button). Change the Margin, Measure
	  From, and Options as desired.
	
	4. Click OK twice to return to your document.
	
	For additional information about page borders, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q157098 WD97: General Information About Page Borders in Word 97
	
	  Q157134 WD97: 3-D Page Border is not Applied
	
	NOTE: The third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: word97 8.0 canon epson deskjet hp hpdj bjc inkjet cutoff chopped cropped gone wrong incomplete
	
	======================================================================
	Keywords          : kbprint kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
