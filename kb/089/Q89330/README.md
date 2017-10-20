---
layout: page
title: "Q89330: Complete Text PW0563: Display Compatibility Testing"
permalink: /kb/089/Q89330/
---

## Q89330: Complete Text PW0563: Display Compatibility Testing

{% raw %}

	Article: Q89330
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	======================================================================
	   Microsoft Product Support Services Application Note (Text File)
	                PW0563: DISPLAY COMPATIBILITY TESTING
	======================================================================
	                                                  Revision Date: 7/92
	                                                        Disk Included
	
	The following information applies to Microsoft Windows Device Driver
	Kit (DDK) version 3.1.
	
	--------------------------------------------------------------------
	| INFORMATION PROVIDED IN THIS DOCUMENT AND ANY SOFTWARE THAT MAY    |
	| ACCOMPANY THIS DOCUMENT (collectively referred to as an            |
	| Application Note) IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY      |
	| KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO    |
	| THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A     |
	| PARTICULAR PURPOSE. The user assumes the entire risk as to the     |
	| accuracy and the use of this Application Note. This Application    |
	| Note may be copied and distributed subject to the following        |
	| conditions: 1) All text must be copied without modification and    |
	| all pages must be included; 2) If software is included, all files  |
	| on the disk(s) must be copied without modification [the MS-DOS(R)  |
	| utility DISKCOPY is appropriate for this purpose]; 3) All          |
	| components of this Application Note must be distributed together;  |
	| and 4) This Application Note may not be distributed for profit.    |
	|                                                                    |
	| Copyright 1992 Microsoft Corporation. All Rights Reserved.         |
	| Microsoft and MS-DOS are registered trademarks and Windows         |
	| is a trademark of Corporation Microsoft.                           |
	--------------------------------------------------------------------
	
	This application note contains the most current information available on the
	Microsoft Display Driver Testing Program.
	
	Any time you consider submitting a display driver to Microsoft for testing, you
	should obtain the current version of this application note for information on
	any changes in procedures or tests that may impact testing and submitting your
	driver.
	
	The disk that accompanies this application note contains the following files:
	
	DCT.DOC
	
	  The current revision of the DCT.DOC file distributed with version 3.1 of the
	  Microsoft Windows Device Driver Kit (DDK). This file provides overview
	  information about the display driver testing program and the most current
	  list of optional display driver tests. The testers at Microsoft can run any
	  of the optional tests during the driver evaluation process. The driver fails
	  the testing program if it fails any of the tests, including the optional
	  tests. We encourage you to run all of the optional tests on your driver prior
	  to submitting it to Microsoft for testing.
	
	  A revision log at the beginning of the document highlights changes for each
	  revision of the document since its original creation.
	
	DCTPROC.DOC
	
	  The documentation for the display driver testing program and a list of
	  participation details.
	
	DIBVIEW.EXE
	
	  An updated version of the DIBVIEW application provided with the DIBVIEW test
	  application provided with the DDK. This version corrects a problem that
	  produces a general protection (GP) fault if the user presses a key while the
	  program displays a device-independent bitmap (DIB).
	
	ACTSL.DOC
	
	  A test document. The version of ACTSL.DOC provided with the Windows 3.1 DDK
	  contains a section that is incorrectly formatted with the "Symbol PS" font
	  instead of the "Symbol" font. The Windows graphics device interface (GDI)
	  correctly maps this section to the "Wingdings" font instead of the "Symbol"
	  font. This version of ACTSL.DOC is formatted correctly.
	
	New Optional Tests
	------------------
	
	This application note includes the HANG.EXE and RAMPS.EXE files, new optional
	tests that have been added to the display driver testing program. These programs
	are documented in the "Optional Tests" section of DCT.DOC.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310 kbWinDDK311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
