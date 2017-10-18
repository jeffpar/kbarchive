---
layout: page
title: "Q131632: How to Play Audio CDs from Visual FoxPro"
permalink: kb/131/Q131632/
---

## Q131632: How to Play Audio CDs from Visual FoxPro

	Article: Q131632
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to play an audio compact disc (CD) using
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The following example registers the Windows Multi-Media DLL file (WINMM.DLL) by
	using the DECLARE command. WINMM.DLL contains the MciSendString system function
	that accepts parameters to allow you to manipulate media files and devices.
	
	Step-by-Step Example
	--------------------
	
	
	1. Create a new form and enter the following code in the Init section of the
	  form:
	
	     #define mmsystem "WINMM.DLL"
	     DECLARE integer mciSendString IN mmsystem string, string, integer,;
	        integer
	     =mciSendString("open cdaudio","",0,0)
	
	2. Add a command button to the form, and set its Caption property to Play. Enter
	  the following code in the Click event of the button:
	
	     =mciSendString("play cdaudio","",0,0)
	
	3. Add another command button to the form, and set its Caption property to Stop.
	  Enter the following code in the Click event of the button:
	
	     =mciSendString("stop cdaudio","",0,0)
	
	4. Add another command button to the form, and set its Caption property to
	  Eject. Enter the following code in the Click event of the button:
	
	     =mciSendString("set cdaudio door open","",0,0)
	
	5. Add a final command button to the form, and set its Caption property to Exit.
	  Enter the following code in the Click event of the button:
	
	     CLEAR DLLS
	     RELEASE THISFORM
	
	6. Press the exclamation mark (!) button on the Visual FoxPro toolbar, and enter
	  a name for the form.
	
	Additional query words: kbsound VFoxWin CD-ROM sound music akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
