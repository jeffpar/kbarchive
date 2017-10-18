---
layout: page
title: "Q155821: BUG: &quot;Feature Not Available&quot; Printing to File with GX Printer"
permalink: kb/155/Q155821/
---

## Q155821: BUG: &quot;Feature Not Available&quot; Printing to File with GX Printer

	Article: Q155821
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing the following command causes a "Feature Not Available" message to appear
	if QuickDraw GX is installed:
	
	     REPORT FORM reportname TO FILE
	
	WORKAROUND
	==========
	
	Use the ASCII clause on the above command or issue the following command:
	
	     REPORT FORM reportname TO PRINTER PROMPT
	
	In the Print dialog box that appears, select PostScript under destination. This
	creates a file with embedded PostScript codes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	QuickDraw GX is supplied with System 7.5.x. Install it by simply clicking the
	Install QuickDraw GX icon in the Install System Software folder on the Apple
	Macintosh CD-ROM. The Installation dialog box presents three choices: "Easy
	Install," "Custom Install," and "Custom Remove." You can install or remove
	QuickDraw via this dialog box.
	
	After QuickDraw is installed, you can see a printer icon on the desktop for the
	printer you were currently connected to under the old printing system. You can
	go to the Chooser and set up other printer icons. Notice in Chooser that the
	printers now have "GX" after their names. For each printer you set up, an icon
	appears on the desktop.
	
	QuickDraw GX may already be available on your system. If so, it is in the Apple
	Extras folder.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install QuickDraw GX.
	
	2. Issue the following command in the Command window:
	
	     SET DEFAULT TO SYS(2004)+"Samples:Data"
	
	3. Create a report called "new" using the Customer table.
	
	4. Issue the following command:
	
	     REPORT FORM new TO FILE new.out
	
	Additional query words: kbdsd vfoxmac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
