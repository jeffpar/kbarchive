---
layout: page
title: "Q66959: PRINTERS.INI Needed to Add PostScript Printers from SDL"
permalink: /kb/066/Q66959/
---

## Q66959: PRINTERS.INI Needed to Add PostScript Printers from SDL

	Article: Q66959
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To add support for a new PostScript printer from the Supplemental Driver Library
	(SDL), the disk must contain a PRINTERS.INI file to display the dialog box with
	the list of printers. Without the PRINTERS.INI file, the Add Printers dialog box
	will continue to prompt you to insert the disk containing the new printer file
	in drive A or to choose an alternate directory even though the *.WPD files are
	present. The PRINTERS.INI file and WPD files must be in the same directory.
	
	To add support for a new PostScript printer from the SDL, do the following:
	
	1. From the Control Panel, choose Printers.
	
	2. Select PostScript Printer from the Installed Printers list and select
	  Configure.
	
	3. Select Setup from the Printers-Configure dialog box and then select Add
	  Printer.
	
	4. You will be prompted to place the disk containing the new printer file in
	  drive A. Place SDL Disk #4 (5.25" disks) or Disk #7 (3.5") in drive A and
	  select OK.
	
	5. Select the appropriate printer driver from the list and select OK.
	
	MORE INFORMATION
	================
	
	The PRINTERS.INI file is an ASCII text file that contains a listing of the
	available PostScript support WPD files. Below is a listing of the PostScript
	Drivers contained in the Windows 3.00 SDL PRINTERS.INI file:
	
	  [PSCRIPT]
	  HPIII522=HP LaserJet III PostScript v.52.2
	  HPIIP522=HP LaserJet IIP PostScript v.52.2
	  HPIID522=HP LaserJet IID PostScript v.52.2
	  ibm17521=IBM 4019 v52.1 (17 Fonts)
	  ibm39521=IBM 4019 v52.1 (39 Fonts)
	  N2090522=NEC Silentwriter2 90 v52.2
	  N2290520=NEC Silentwriter2 290 v52.0
	  OL840518=Oki OL840/PS v51.8
	  Q2200510=QMS-PS 2200 v51.0
	  Q820_517=QMS-PS 820 v51.7
	  TIM17521=TI microLaser PS17 v52.1
	  TIM35521=TI microLaser PS35 v52.1
	  U9415470=Unisys AP9415 v47.0
	
	For more information on installing these files, query on the following words:
	
	  "installation" (without the quotation marks) and "WPD" (without the quotation
	  marks)
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
