---
layout: page
title: "Q154064: How To Direct Output to Installed GX Printers"
permalink: kb/154/Q154064/
---

## Q154064: How To Direct Output to Installed GX Printers

	Article: Q154064
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Controlling what printer a program prints to can be accomplished through code
	with the enhancements to the SET PRINTER TO command in Visual FoxPro run with
	QuickDraw GX and some other new functions. This article provides a sample
	program combining the SYS(1038), the JustCSName() and the SET PRINTER TO NAME
	enhancements to illustrate how to control which printer a report is printed to.
	
	NOTE: QuickDraw GX is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding the performance or reliability of
	QuickDraw GX.
	
	QuickDraw GX is not supported in Macintosh OS 8 and this sample program will not
	work with Visual FoxPro running under OS 8.
	
	MORE INFORMATION
	================
	
	Sample Program
	--------------
	
	The following sample program assumes that QuickDraw GX is installed, that at
	least two printers are set up, and that their icons are on the desktop:
	
	     *** Beginning of sample program
	     IF SYS(1038)
	     desktop=SUBSTR(SYS(2033),1,AT(':',SYS(2033)))+"\Desktop Folder\"
	     numPrinters=ADIR(prtList, desktop+"*.*",'','dvcf')
	     SET LIBRARY TO HOME()+"FoxTools.cfm" ADDITIVE
	     FOR x=1 TO numPrinters
	      SET PRINTER TO NAME JustCSName(desktop+prtList[(x),1])
	        REPORT FORM "somereport.frx" NOEJECT NOCONSOLE TO PRINTER
	        ? SET("Printer",2)
	     ENDFOR
	     SET LIBRARY TO
	     ENDIF
	     *** End of sample program
	
	Program Commentary
	------------------
	
	The first line in the program checks to see if QuickDraw GX is installed by using
	the SYS(1038) function.
	
	The second line determines the name of the Macintosh's hard drive by using the
	SYS(2033) function, and appends "Desktop Folder" to it.
	
	The third line checks to see how many QuickDraw GX printer icons are on the
	desktop and stores their names in an array named "prtList". The 'dvcf' in the
	fourth argument of the ADIR() function is the creator type of the QuickDraw GX
	printer icons.
	
	The fourth line loads the FoxTools.cfm library, which is necessary for the use of
	the JustCSName function.
	
	The fifth line is the beginning of a FOR loop that executes once for each
	QuickDraw GX printer icon found on the desktop.
	
	The sixth line (the first one in the FOR loop) sets the printer to one of the
	QuickDraw GX printers found on the desktop.
	
	The seventh line prints a predefined report.
	
	The eighth line reports the name of the current QuickDraw GX printer to the
	current output device (the Visual FoxPro screen).
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q152396 How To Determine if QuickDraw GX Is Loaded Using SYS Function
	
	  Q153155 How To Use New Undocumented Foxtools Function JustCSName()
	
	  Q153528 SET PRINTER TO Enhancements in Visual FoxPro for Macintosh
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
