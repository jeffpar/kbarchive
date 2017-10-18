---
layout: page
title: "Q281882: WD97: Err Msg: WINWORD Caused a GPF in HPFWIN02.DLL"
permalink: kb/281/Q281882/
---

## Q281882: WD97: Err Msg: WINWORD Caused a GPF in HPFWIN02.DLL

	Article: Q281882
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Word, open a document, or print a document, you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an general protection fault in module HPFWIN02.DLL at address.
	
	NOTE: The actual memory address may vary.
	
	CAUSE
	=====
	
	This problem may be caused by a damaged printer driver when you have one of the
	following printers installed:
	
	- Hewlett Packard DeskJet 600
	- Hewlett Packard DeskJet 600C
	- Hewlett Packard DeskJet 660C
	
	RESOLUTION
	==========
	
	To resolve this problem, delete your existing printer driver, and then reinstall
	the printer driver from your Microsoft Windows disk. To do this, follow these
	steps:
	
	Microsoft Windows 95, Windows 98, or Windows Millennium Edition (Me):
	
	1. Quit Microsoft Word and all other programs.
	
	2. Click Start, point to Settings, and then click Printers.
	
	3. Right-click your printer, and then click Delete on the shortcut menu that
	  appears.
	
	4. Click Yes to the following message to verify that you want to delete your
	  printer driver:
	
	  Are you sure you want to delete the printer 'printer_model'?
	
	where 'printer_model' is the printer that you are deleting (for example, 'HP
	DeskJet 600').
	
	5. Click Yes to the following message if it appears to ensure that all of the
	  printer driver files are removed:
	
	  Some files were used only for this printer and are no longer needed. Would
	  you like to delete these files now?
	
	6. In the Printers dialog box (click Start, point to Settings, and then click
	  Printers), double-click Add Printer.
	
	7. In the Add Printer Wizard, click Next.
	
	8. Click to select how the printer is attached to your computer (for example,
	  click to select "Local printer" or "Network printer"), and then click Next.
	
	9. In the Manufacturers list, click to select HP.
	
	10. In the Printers list, click to select your specific printer; for example,
	  click HP DeskJet 600 (Color).
	
	  NOTE: If your specific printer is not listed, please contact Hewlett Packard
	  for an updated driver for your printer.
	
	11. Click Next.
	
	12. Click to select the port that your printer is connected to, and then click
	  Next.
	
	13. In the "Printer name" box, type a name for your printer, and then click
	  Next.
	
	14. Click Finish to complete the installation of your printer driver.
	
	Microsoft Windows 2000:
	
	1. Quit Microsoft Word and all other programs.
	
	2. Click Start, point to Settings, and then click Printers.
	
	3. Right-click your printer, and then click Delete on the shortcut menu that
	  appears.
	
	4. Click Yes to the following message to verify that you want to delete your
	  printer driver:
	
	  Are you sure you want to delete the printer 'printer_model'?
	
	where 'printer_model' is the printer that you are deleting (for example, 'HP
	DeskJet 600').
	
	5. In the Printers dialog box (click Start, point to Settings, and then click
	  Printers), double-click Add Printer.
	
	6. In the Add Printer Wizard, click Next.
	
	7. Click to select how the printer is attached to your computer (for example,
	  click to select "Local printer" or "Network printer"), and then click Next.
	
	8. Click to select the port your printer is connected to, and then click Next.
	
	9. In the list of Manufacturers, click to select HP.
	
	10. In the list of Printers, click to select your printer. For example, click to
	  select HP DeskJet 600.
	
	  NOTE: If your specific printer is not listed, please contact Hewlett Packard
	  for an updated driver for your printer.
	
	  Click Next and complete the Add Printer Wizard.
	
	MORE INFORMATION
	================
	
	For more information about your specific printer, please contact Hewlett
	Packard.
	
	For information about how to contact Hewlett Packard, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: HPFWIN02 DLL IPF GPF
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
