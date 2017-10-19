---
layout: page
title: "Q193223: HOWTO: Use the MessageBeep API to Play System .WAV Files"
permalink: /kb/193/Q193223/
---

## Q193223: HOWTO: Use the MessageBeep API to Play System .WAV Files

	Article: Q193223
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to call the MessageBeep() API function to play wave
	files associated with the Windows System sound assignment.
	
	MORE INFORMATION
	================
	
	The system sound assignments are made through the Sounds icon in the Control
	Panel. The MessageBeep() function can accept one of the five functions in the
	following list. The definitions for the constants were taken from the
	MessageBeep section in the "Visual Basic Programmer's Guide to the Win32 API".
	
	  Constant              Description
	  ----------------------------------------------
	  0xffffffff            Standard beep
	  MB_ICONHAND           System hand sound
	  MB_ICONQUESTION       System question sound
	  MB_ICONEXCLAMATION    System exclamation sound
	  MB_ICONASTERISK       System asterisk sound
	
	The values normally assigned to these constants follow. For the standard beep,
	zero can be used.
	
	     #DEFINE MB_OK                 0
	     #DEFINE MB_ICONHAND           16
	     #DEFINE MB_ICONQUESTION       32
	     #DEFINE MB_ICONEXCLAMATION    48
	     #DEFINE MB_ICONASTERISK       64
	
	To use the MessageBeep() function, use the DECLARE statement and then call
	MessageBeep() with one of the constants. For example:
	
	     DECLARE INTEGER MessageBeep IN Win32API INTEGER
	     =MessageBeep(MB_ICONASTERISK)
	
	REFERENCES
	==========
	
	"PC Magazine's Visual Basic Programmer's Guide to the Windows API" by Daniel
	Appleman, page 340, Ziff-Davis Press, 1996
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: kbVFp600 kbVFp500a kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
