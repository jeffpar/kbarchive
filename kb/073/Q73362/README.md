---
layout: page
title: "Q73362: Two Epson Printers Cannot Be Setup Concurrently in Windows"
permalink: kb/073/Q73362/
---

## Q73362: Two Epson Printers Cannot Be Setup Concurrently in Windows

	Article: Q73362
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Two different Epson printers using the same driver (either 24 pin or 9 pin)
	cannot be set up concurrently in the Windows 3.0 Printers dialog box, even if
	different ports are chosen for each driver.
	
	The printer information that was chosen last is saved for both printer entries.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	(The following assumes there are no existing printer drivers installed on LPT1 or
	LPT2.)
	
	1. From the Main Group, select Printers from the Control Panel, choose Add
	  Printers, select the Epson LQ-2500/2550 [Epson 24 pin] driver, and choose
	  install.
	
	2. When the driver is loaded from either the Windows 3.0 Disk 5 (5.25 inch) or
	  Disk 7 (3.5 inch) and it appears in the Installed Printers list, choose
	  Configure and configure this driver for LPT1.
	
	3. Choose Setup, select LQ 2500/2550 from the printer list, and choose OK twice.
	
	4. From the printers screen, choose Active from the Status box.
	
	5. Select the Epson LQ 850/950/1050 [Epson 24 pin] from the printer list and
	  choose Install.
	
	6. You will get the following message:
	
	      A printer driver for this printer is
	      already on the system.  Do you
	      want to use the current driver or
	      install a new driver?
	
	      CURRENT    NEW   CANCEL
	
	7. Choose Current.
	
	8. When this second driver appears, choose Configure and configure the driver
	  for LPT2.
	
	9. Choose Setup, select LQ 850/950/1050 from the printer list, and choose OK
	  twice.
	
	10. From the Printers dialog box, choose Active from the Status box.
	
	  You now have two Epson 24-pin printer drivers configured: one on LPT1 set to
	  LQ-2500/2550 and one on LPT2 set to LQ-850/950/1050 in the Control Panel.
	  Both are active.
	
	11. Choose OK to return to the Control Panel and exit to Program Manager.
	
	12. From the File menu, choose Exit.
	
	13. At the C prompt, type "win" (without the quotation marks) to return to
	  Windows.
	
	14. Open the Control Panel and select Printers.
	
	15. Select the Epson 24-pin driver on LPT1.
	
	16. Choose Configure and Setup, and note that the driver has changed to
	  LQ-850/950/1050.
	
	17. Choose OK twice and select the Epson 24-pin driver on LPT2. Choose Configure
	  and Setup, and note that the driver has stayed LQ-850/950/1050, as set up
	  last.
	
	NOTE: The steps are somewhat different to set the two drivers up as outlined if
	you choose New at step 6, but the results are the same.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
