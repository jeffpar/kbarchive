---
layout: page
title: "Q76804: MS-DOS Application Unable to Use Audio in 386 Enhanced Mode"
permalink: kb/076/Q76804/
---

## Q76804: MS-DOS Application Unable to Use Audio in 386 Enhanced Mode

	Article: Q76804
	Product(s): Miscellaneous Windows Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows with Multimedia Extensions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Windows with Multimedia Extensions in 386 enhanced mode and you start
	an MS-DOS application that uses audio, the following error message is
	displayed:
	
	  This application will not be able to use audio.
	
	CAUSE
	=====
	
	When Windows with Multimedia Extensions is run in 386 enhanced mode, Windows
	takes control of the audio hardware and does not relinquish control to an MS-DOS
	application.
	
	WORKAROUND
	==========
	
	As an alternative, Windows with Multimedia Extensions can be run in standard
	mode by typing
	
	  win /s
	
	at the MS-DOS command prompt. This allows the MS-DOS application to run from
	Windows with audio intact.
	
	
	Additional query words: 1.00 MMWIN
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMultiXSearch kbWinMultiX100
	Version           : :1.0
	
	=============================================================================
	
