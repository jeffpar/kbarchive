---
layout: page
title: "Q96660: CIT24US.DRV Version 2.0 Does Not Contain Margins Feature"
permalink: kb/096/Q96660/
---

## Q96660: CIT24US.DRV Version 2.0 Does Not Contain Margins Feature

	Article: Q96660
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Margins feature that was added to most version 2.0 Windows 3.1 dot-matrix
	printer drivers was omitted from the CIT24US.DRV file included in the Windows
	Driver Library.
	
	This article provides a workaround for adjusting the unprintable regions defined
	by the Citizen printers.
	
	MORE INFORMATION
	================
	
	With most Windows 3.1 dot-matrix printer drivers, you can adjust the unprintable
	regions defined by the printer. You can make this adjustment using the Margins
	feature after you press the Options button in the Printer Setup dialog box.
	
	This feature was not included with version 2.0 of the Citizen 24-pin dot-matrix
	printer driver, CIT24.US.DRV. This driver is used by the following printers:
	
	  Citizen 124D
	  Citizen 224
	  Citizen GSX-130
	  Citizen GSX-140
	  Citizen GSX-140+
	  Citizen GSX-145
	  Citizen PN48
	  Citizen Prodot 24
	  Citizen Swift 24
	  Citizen Swift 24e
	  Citizen Swift 24x
	
	To work around this problem and adjust the unprintable region for these printers,
	roll the paper back so that the printhead is directly below the perforation,
	then turn the printer off and back on. (If necessary, you may need to roll the
	paper forward by one sheet to get the alignment correct.) When you print "This
	is a test" from MS-DOS, the top of the capital letter "T" should be flush with
	the perforation.
	
	
	Additional query words: 3.10 Win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
