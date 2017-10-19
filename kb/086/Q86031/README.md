---
layout: page
title: "Q86031: DOC: Pen Documentation in Windows Resource Kit Incorrect"
permalink: /kb/086/Q86031/
---

## Q86031: DOC: Pen Documentation in Windows Resource Kit Incorrect

	Article: Q86031
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows Resource Kit" was written and distributed before the
	release of Microsoft Windows version 3.1, the Microsoft Windows Software
	Development Kit (SDK) version 3.1, and Microsoft Windows for Pen Computing
	version 1.0. Subsequent to the release of the Windows Resource Kit, the Pen SDK
	was eliminated. Its components were added to the Windows SDK, the Microsoft
	Windows Device Driver Kit (DDK) and the Microsoft Windows for Pen Computing OEM
	Adaptation Kit (OAK).
	
	The text below corrects errors in and misinterpretations of the Windows Resource
	Kit caused by the elimination of the Pen SDK.
	
	MORE INFORMATION
	================
	
	Pages 506 through 514 of the Windows Resource Kit manual document the attributes
	of Windows for Pen Computing. However, the Pen SDK has been eliminated and its
	components are part of the Windows SDK, Windows DDK, and Pen OAK. A complete
	description of the Windows for Pen Computing components provided by each of
	these sources is available in the Microsoft Knowledge Base.
	
	Pages 508 and 509 state that the Pen Palette, the Trainer, and the Control Panel
	applications are provided with the Pen SDK. These components have been moved
	into the Pen OAK; they are not provided with version 3.1 of the Windows SDK.
	
	Page 510 states that the Pen SDK includes sample tablet drivers designed for
	WACOM and Scriptel tablets. The sample tablet drivers are now part of the Pen
	OAK. Each OEM (original equipment manufacturer) must ship the appropriate tablet
	driver with its release of Windows for Pen Computing.
	
	Page 510 also states that sample video driver code is in the Pen SDK; the sample
	video drivers are part of the Windows DDK. However, a VGA pen driver is included
	in PEN directory of the Windows 3.1 SDK (by default, C:\WINDEV\PEN).
	
	Microsoft Windows for Pen Computing is an OEM product that is customized and sold
	by a number of pen computer and pen tablet peripheral manufacturers. It is often
	confused with the Pen Extensions provided with version 3.1 of the Windows SDK.
	The Pen Extensions augment a Windows 3.1 installation to support pen input and
	pen-based applications.
	
	Additional query words: 1.00 docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
