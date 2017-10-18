---
layout: page
title: "Q99109: DOC: Bad Printing Code Example in Guide to Programming"
permalink: kb/099/Q99109/
---

## Q99109: DOC: Bad Printing Code Example in Guide to Programming

	Article: Q99109
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbDSupport kbSDKWin16 kb16bitonly
	Last Modified: 30-JUL-2001
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	SUMMARY
	=======
	
	Section 12.4 of the Microsoft Windows version 3.1 Software Development Kit (SDK)
	"Guide to Programming" details code that uses BitBlt() to transfer a bitmap to a
	printer device context (DC). Unfortunately, the code sample uses LoadBitmap(),
	which returns a Device-Dependent Bitmap (DDB) that is compatible with the
	display DC, not the printer DC. This code causes erroneous results on some
	printers.
	
	MORE INFORMATION
	================
	
	Because the sample code does not implement banding [it is using StartPage() and
	EndPage()--the Windows 3.1 replacement functions for the NEWFRAME Escape], this
	code should work fine on banding devices such as Hewlett-Packard (HP) LaserJet
	or dot-matrix printers. When an application does not perform banding and is
	printing to a banding device, GDI uses a disk-based metafile to perform banding
	on the application's behalf. As the application makes GDI calls, the calls are
	recorded into the metafile rather than being sent directly to the printer. When
	the application calls EndPage (or NEWFRAME), GDI enters an internal banding
	loop. GDI performs NEXTBAND escapes as needed and uses PlayMetaFile() to play
	the entire metafile into every band. During the playback of the metafile, GDI
	converts the DDB to a Device-Independent Bitmap (DIB) and prints the DIB by
	calling SetDIBitsToDevice(). Because of the DDB-to-DIB conversion, the code
	works correctly on banding devices.
	
	When printing to a nonbanding device such as a PostScript printer, there is no
	intermediary metafile, and thus there is no DDB-to-DIB conversion taking place.
	This code leads to either a general protection (GP) fault, garbage output, or no
	output (depending on how gracefully the printer driver handles the error of
	being given a bitmap compatible with the display when it thinks it has a bitmap
	in its own internal format). If the code is altered slightly to implement
	banding (the NEXTBAND Escape), the same problem will occur.
	
	The sample code should be modified in two very important ways:
	
	1. The DDB should be converted to a DIB before printing. The sample programs
	  DIBVIEW and WINCAP demonstrate how to do the DDB-to-DIB conversion. All the
	  code necessary to do the conversion is available in these samples.
	
	2. Because of numerous bug reports against the GDI banding/metafile code,
	  applications should always implement banding. DIBVIEW and WINCAP also
	  demonstrate the correct way to implement banding.
	
	For additional information on WINCAP, refer to the Knowledge Base article
	"DOCERR: WINCAP - Sample Application." For Microsoft OnLine customers, WINCAP is
	available in the Microsoft Download Center as 4X16.ZIP and can be found by
	searching on the word WINCAP.
	
	DIBVIEW can be found in the SAMPLES directory of the Windows SDK version 3.1, and
	versions 7.0 and 8.0 of the Microsoft C/C++ Optimizing Compiler. For Microsoft
	OnLine customers, DIBVIEW is available in the Microsoft Download Center as
	5X13.ZIP and can be found by searching on the word DIBVIEW.
	
	Additional query words: 3.10 banding gp-fault gpf docerr
	
	======================================================================
	Keywords          : kbdocfix kbDSupport kbSDKWin16 kb16bitonly 
	
	=============================================================================
	
