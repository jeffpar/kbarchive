---
layout: page
title: "Q316332: PRB: OLE Err Msg: 0x80010105: The Server Threw an Exception"
permalink: /kb/316/Q316332/
---

## Q316332: PRB: OLE Err Msg: 0x80010105: The Server Threw an Exception

	Article: Q316332
	Product(s): Microsoft FoxPro
	Version(s): 4.0,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 98 Second Edition 
	   - the operating system: Microsoft Windows Millennium Edition 
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you play a .wav file that is stored in a general field by using an "@ say"
	command, you may receive the following error message:
	
	  OLE error code 0x80010105: The server threw an exception.
	
	RESOLUTION
	==========
	
	To work around this problem, use a memo binary field instead of a general field.
	Copy the sound to a temporary file, and then use the "set bell to" command to
	play the sound. The following sample code demonstrates this method:
	
	  * If the file already exists, you are not prompted to overwrite it.
	  SET SAFETY OFF
	
	  * The NOCPTRANS clause makes this a binary memo field.
	  CREATE TABLE testsound (sound M NOCPTRANS)
	
	  APPEND BLANK 
	  APPEND MEMO sound FROM GETFILE("wav")
	
	  * Copy the sound from the table to a file.
	  COPY MEMO sound TO "temp.wav"
	  SET BELL TO "temp.wav", 1
	  ?? CHR(7)
	  SET BELL TO
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Run the following code. When the dialog box appears, select a .wav file:
	
	  SET SAFETY OFF
	
	  CREATE TABLE testsound (sound G)
	
	  APPEND BLANK
	  APPEND GENERAL sound FROM GETFILE("wav")
	
	  @1,1 SAY testsound.sound verb "play"
	
	2. If you are running one of the listed operating systems, you receive the error
	  message that is mentioned in the "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :4.0,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
