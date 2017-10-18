---
layout: page
title: "Q86834: DOC: TEXTMETRIC tmPitchAndFamily Member Incorrect"
permalink: kb/086/Q86834/
---

## Q86834: DOC: TEXTMETRIC tmPitchAndFamily Member Incorrect

	Article: Q86834
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows Software Development Kit: Programmer's Reference, Volume
	3: Messages, Structures, and Macros" manual for version 3.1 describes the
	tmPitchAndFamily member of the TEXTMETRIC data structure on pages 410 and 411.
	This documentation incorrectly states that the TMPF_PITCH bit of this member
	designates a fixed-pitch font.
	
	The WINDOWS.H header file does not define a TMPF_PITCH value; the correct name is
	TMPF_FIXED_PITCH.
	
	According to the documentation, when the TMPF_PITCH bit is set, the font has a
	fixed pitch. This statement is incorrect; when a font has the TMPF_FIXED_PITCH
	bit set, the font has a variable pitch.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
