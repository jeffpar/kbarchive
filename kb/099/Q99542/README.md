---
layout: page
title: "Q99542: Printing Reports Created w/ Question Marks in FP for Win"
permalink: /kb/099/Q99542/
---

## Q99542: Printing Reports Created w/ Question Marks in FP for Win

	Article: Q99542
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 3.00 3.00 | 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	You may have reports (commonly xBASE-programmed) that used to print
	correctly but now do not align properly. This problem may occur because of
	the use of proportional fonts in Windows.
	
	The following two methods allow FoxPro for Windows to print reports that
	are created using ? commands and also send escape codes to the printer.
	
	Method If You Previously Used FoxPro for MS-DOS
	-----------------------------------------------
	
	NOTE: For the following method to work correctly, you must have had FoxPro
	2.0 or 2.5 for MS-DOS previously installed and have an existing 2.0 or 2.5
	printer driver in the current resource file. Loading the printer driver
	provides hooks into the GENPD.APP program, which is used for MS-DOS-style
	printing. The GENPD.APP program is not available with Visual FoxPro.
	
	1. Turn off all open print commands by issuing SET DEVICE TO SCREEN and SET
	  PRINTER TO commands.
	
	2. Load an existing FoxPro for MS-DOS version 2.0 or 2.5 printer driver that is
	  in the current resource file. The sample program below uses an existing
	  printer driver named HPCOMPRESS. This printer driver opens the printer in
	  "raw mode," which bypasses the Windows printer drivers.
	
	3. Issue a SET PRINT ON command, which redirects any question mark (?) output to
	  the printer.
	
	4. At the end of the report code, issue a SET PRINTER TO command to clear the
	  raw mode and begin using Windows printer drivers again.
	
	The following code illustrates the above steps:
	
	     SET DEVICE TO SCREEN
	     SET PRINTER TO
	     SET PDSETUP TO "hpcompress"
	     SET PRINT ON
	     ? _pdparms(15)    && This is an example of using _PDPARMs and
	                       && escape codes to control printing attributes.
	                       && This is for turning italics on.
	
	     ?"Hello"
	     ? chr(27)+"(s16.66H" && This is an example of sending a control
	                          && sequence directly.
	     ?"There"
	     EJECT
	     SET PRINTER TO
	     SET LIBRARY TO
	     SET PDSETUP TO
	
	Method If You Use Only FoxPro for Windows or Visual FoxPro for Windows
	----------------------------------------------------------------------
	
	If you do not have access to FoxPro for MS-DOS and its drivers, you can
	accomplish the same result by doing either of the following:
	
	- Setting the Windows output to Generic/Text only.
	
	  -or-
	
	- Selecting one of the monospace (nonproportional) fonts (such as Courier,
	  FoxFont, or FoxPrint) by issuing the SET PRINT FONT "<fontname>",10
	  command. This method is also valid for reports being to Visual FoxPro for
	  Macintosh.
	
	Additional query words: vFoxMac VFoxWin FoxWin 2.50 pdparms FOXPROW kbvfp300 kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300bMac kbVFP300 kbVFP600
	Version           : 2.50 2.50a 3.00 3.00 | 3.00b
	
	=============================================================================
	
