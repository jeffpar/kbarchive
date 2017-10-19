---
layout: page
title: "Q108848: Information on HPWINPS.DRV HP PostScript Printer Driver"
permalink: /kb/108/Q108848/
---

## Q108848: Information on HPWINPS.DRV HP PostScript Printer Driver

	Article: Q108848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Hewlett-Packard (HP) ships a modified version of the PSCRIPT.DRV and WINPS.DRV
	printer drivers for use with its PostScript LaserJet printers. This article
	contains the text of the README file shipped with the driver.
	
	MORE INFORMATION
	================
	
	**********************************************************************
	                 Hewlett-Packard Company's
	      PostScript Printing Software for MS Windows 3.1
	               (HP Extensions Version 1.10)
	
	                For the HP LaserJet Printer
	
	**********************************************************************
	
	         New Features of Your HP LaserJet Printer
	
	Resolution:  Your printer is designed to print at either 300 or
	   600 dots-per-inch (dpi).  At 600 dpi, the print quality of
	   your text and graphics will be greatly improved; however, as
	   much as four times more memory may be required to format a page
	   than at 300 dpi.  This feature is found in the Advanced Options
	   dialog box.
	
	EconoMode printing:  Printing in EconoMode will help you conserve
	   toner.  In EconoMode, your printer uses less toner to print your
	   document and you can lower your cost-per-page by 50%.  Use
	   EconoMode when you want to print drafts, proofs, and internal
	   correspondence.  Your documents are still readable and the speed
	   of your printer is not reduced or increased.
	
	Resolution Enhancement:  Resolution Enhancement (REt) smoothes out
	   the jagged edges of printed characters and graphics to give you
	   increased print quality.  If the REt setting is too dark, a
	   sloping line appears to bulge at transition points.  If the REt
	   setting is too light, a sloping line or rounded character appears
	   to have jagged edges. (Resolution Enhancement has no affect on
	   vertical or horizontal lines.)
	
	Legal Frame Size:  Legal Frame Size (also called "Page Protect") helps
	   you manage printer memory when printing various paper sizes.
	   "Auto" is the manufacturer's default setting on the printer's
	   control panel.  It is the best setting for the majority of your
	   print jobs and is equivalent to letter-size printing.  For paper
	   sizes larger than letter, for example, legal, A4, etc., change the
	   setting to "Full Legal." The "Reduced Legal" setting increases the
	   amount of memory available to the printer for downloading fonts;
	   however, it can decrease the printable area on your page.  This
	   can cause image clipping (enlarged margins) on paper sizes larger
	   than letter.
	
	                         Note
	
	   Each time the Legal Frame Size setting is changed, the printer's
	   memory is reconfigured and all downloaded fonts and macros are
	   erased.
	
	                     Application Notes
	
	These application notes point out items to be aware of when using
	this printer driver with your software packages.
	
	* PostScript Level 1 and Level 2 support:   The printer driver for
	   your printer does not allow you to select the PostScript level
	   from which to generate your documents. For example, the HP
	   LaserJet 4MP printer is a Level 2 printer and its printer driver
	   generates documents using some Level 2 features.  You cannot print
	   to a Level 1 printer with this driver, and you cannot generate a
	   PostScript file with this driver and then transport that file to
	   a Level 1 printer.  For Level 1 printing,  you need to use a
	   Level 1 printer driver for a Level 1 printer.
	
	* Transmission Retry setting: Transmission Retry is the amount of time
	   that Print Manager waits before notifying you that the printer
	   cannot accept any more print information. The standard setting
	   is 45 seconds; however, sometimes it takes the printer longer
	   to process information when you are printing complex documents or
	   printing on a network.  In these cases, 45 seconds may not give
	   your printer enough time to print your documents.  We recommend
	   changing the setting to 300 seconds.  If you find that your
	   printer is timing out at 300 seconds, select a higher time-out
	   setting.  Access to this setting is through your printer driver,
	   not your application.  Choose Control Panel (from the Main Group
	   window in Program Manager), Printers, Setup..., Connect... .
	   Select the Transmission Retry setting under the "Timeouts"
	   section.
	
	* Paper Source selection in Word for Windows version 2.0: If your
	   template specifies "Default Tray" as your paper source, Word may
	   automatically change that selection to "Manual Feed."  Your
	   printer will then prompt you to feed paper through the Manual Feed
	   slot.  You may or may not receive a "paper out" message on your
	   computer screen; however, the printer will prompt you to feed
	   paper through the slot.  If this happens, go into the Page Setup
	   dialog box, in Word for Windows (choose Format from the menu bar,
	   Page Setup..., Paper Source) and select "Paper Cassette" or
	   "Manual Feed" as your desired paper source. Choose the "OK" button
	   if you want this paper source to apply only to your current
	   document, or choose the "Use as Default..." button if you want
	   this paper source to apply to all your Word for Windows documents.
	
	* Type 42:  Type 42 support is a new feature of your printer
	   (Choose Print Setup..., Setup..., Options..., Advanced... .
	   Select "Type 42" under "TrueType Fonts, Send to Printer as:").
	   This feature sends TrueType fonts directly to the printer instead
	   of converting them into Adobe Type 1 or Type 3 fonts. This process
	   frees up the cursor for use more quickly, especially after
	   printing a complex document or printing a document that uses many
	   sizes of a given font. You can use Type 42 format with all
	   TrueType fonts; however, it may not provide optimum performance in
	   all cases. For the majority of your printing needs, Adobe Type 1
	   will give you the best overall performance.
	
	* Substituting fixed pitch fonts for TrueType fonts:  When you
	   substitute a fixed pitch font (for example, Courier) for a
	   TrueType scalable font, the change will look correct on your
	   computer screen, but your output may have overlapped characters.
	   The metric dimensions between fixed and scalable fonts are
	   different, creating characters that are incorrectly spaced on
	   your page. (Choose Print Setup..., Setup..., Options...,
	   Advanced... .  Select "Use Substitution Table," then choose the
	   Edit Substitution Table... button to bring up the Substitution
	   dialog box.)
	
	* Selecting the Scale Value:  Some applications allow you to "scale"
	  (reduce or enlarge) the size of your document (choose Print
	  Setup..., Setup..., Options...). Your printer driver also has this
	  feature. You may find that, when using some applications, your
	  documents will print incorrectly if you set the scaling value in
	  the application as well as in the printer driver. To avoid this
	  problem, set the scaling value in the application and leave the
	  scaling value set to 100 in the printer driver.  For applications
	  which do not support this feature, set the scaling value in the
	  printer driver (choose Control Panel from the Main Group window in
	  Program Manager, Printers, Setup..., Options...).
	
	* Selecting the Number of Copies:  If you change "Copies" to a value
	  other than 1 (default) in both your application's Print Setup and
	  Print dialog boxes the output will usually be the product of these
	  two settings (you can access the Print Setup dialog box by
	  selecting Format from the menu bar, then Print Setup... .  You can
	  access the Print dialog box by selecting File from the menu bar,
	  then Print...). For example, if you select 3 copies in the Print
	  Setup dialog box and 3 copies in the Print dialog box, you will
	  receive 9 printed copies.  To avoid this problem, select the number
	  of copies in the Print Setup dialog box whenever possible.  If you
	  require collated output, an option which several applications
	  provide, select copies in the Print dialog box.
	
	* Help button is clipped in the Features dialog box:  If you are using
	  both an HP LaserJet 4ML and HP LaserJet 4MP printer, make sure you
	  use the HP LaserJet 4P/4MP printer driver, version 1.10.  The Help
	  button is clipped because an older version of the driver, version
	  1.00, is installed in your system.  This problem occurs only if you
	  are using both printers.  To find out what version of driver you
	  have installed, choose the About... button in the Setup dialog box.
	
	                          Caution
	
	   Some software applications change printer settings globally. This
	   means that the  printer settings you select in one application may
	   become the printer settings for other applications as well.
	   Microsoft Word is one application that affects printer settings
	   for all applications.
	
	Calling for Help
	
	If you have questions about your printer or printer driver, call the
	Hewlett-Packard Customer Support Center at:
	
	                      (208) 323-2551
	
	The Support Center is open Monday, Tuesday, Thursday, and Friday from
	7 AM to 6 PM (Mountain Standard Time) and 7 AM to 4 PM on Wednesday.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
