---
layout: page
title: "Q75911: INFO: Paper Sizes 50 through 56 Reserved for PostScript Driver"
permalink: kb/075/Q75911/
---

## Q75911: INFO: Paper Sizes 50 through 56 Reserved for PostScript Driver

	Article: Q75911
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.4 of the PostScript printer driver, distributed with version 3.0 of
	the Microsoft Windows graphical envionment, implements the following paper size
	constants:
	
	     #define DMPAPER_LETTER_EXTRA   50
	     #define DMPAPER_LEGAL_EXTRA    51
	     #define DMPAPER_TABLOID_EXTRA  52
	     #define DMPAPER_A4_EXTRA       53
	
	These constants are specific to the PostScript driver (as is the entire range
	from 50 to 56). These constants are used only by Linotronic printers to help
	save paper and do not generally apply.
	
	The DRIVINIT.H header file distributed with version 3.0 of the Microsoft Windows
	Device Development Kit (DDK) lists these constants while the DRIVINIT.H file
	distributed with version 3.0 of the Microsoft Windows Software Development Kit
	(SDK) does not. In version 3.1, the PRINT.H header file replaces DRIVINIT.H.
	PRINT.H contains the following note:
	
	  WARNING: The PostScript driver mistakingly uses DMPAPER_ values between 50
	  and 56. Don't use this range when defining new paper sizes.
	
	To avoid conflicts, do not use the range 50-56 when defining new paper sizes.
	
	MORE INFORMATION
	================
	
	The DRIVINIT.H file contains constants (defined with the prefix DMPAPER_) for
	all the standard paper sizes. These constants are usually retrieved from the
	printer driver by using the ExtDeviceMode function, and examining the
	dmPaperSize field. Some PostScript drivers support the paper sizes listed above,
	and will return one of the listed constants if the extra paper size is selected
	in the ExtDeviceMode dialog box.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
