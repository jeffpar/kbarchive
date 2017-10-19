---
layout: page
title: "Q85328: DOCERR: OpenFile Function Documented Incorrectly"
permalink: /kb/085/Q85328/
---

## Q85328: DOCERR: OpenFile Function Documented Incorrectly

	Article: Q85328
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OpenFile function is documented on pages 4-322 through 4-325 of the
	"Microsoft Windows Software Development Kit Reference Volume 1" for Windows 3.0
	and on 731 through 733 of the "Microsoft Windows Software Development Kit:
	Programmer's Reference, Volume 2: Functions" for Windows 3.1.
	
	Each reference includes a table to document the third parameter of the OpenFile
	function. Both tables document the use of the OF_CANCEL and OF_PROMPT values
	incorrectly. The correct documentation is as follows:
	
	  Value      Meaning
	  -----      -------
	  OF_CANCEL  Does nothing.
	  OF_PROMPT  Displays a dialog box if the requested file does not exist.
	             The dialog box informs the user that Windows cannot find
	             the file. When the user chooses the Close button in the
	             dialog box, OpenFile returns the HFILE_ERROR error value.
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
