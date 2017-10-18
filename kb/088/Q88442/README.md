---
layout: page
title: "Q88442: Windows Err Msg: Cannot Find File..."
permalink: kb/088/Q88442/
---

## Q88442: Windows Err Msg: Cannot Find File...

	Article: Q88442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing or running Microsoft Windows you may receive one of the
	following error messages:
	
	  Cannot Find File; Check to Ensure Path and Filename Are Correct
	
	  -or-
	
	  Application Execution Error: Cannot Find File; Check to Ensure Path and
	  Filename Are Correct
	
	MORE INFORMATION
	================
	
	Cannot Find File; Check to Ensure Path and Filename Are Correct
	---------------------------------------------------------------
	
	This error is generated for one of the following reasons:
	
	- You may receive this error when running a PIF, if the Program Filename field
	  in the PIF file does not contain a valid path and filename for the program. A
	  full pathname should be specified -- for example, C:\MYDIR\MYPROG.EXE. For
	  more information, consult the PIF Editor online help.
	
	- The FILES= statement in the CONFIG.SYS is set too low. The FILES= should be
	  set to at least 45. This can happen when installing Windows and when running
	  MS-DOS-based applications from Windows.
	
	Cannot Find File; Check to Ensure Path and Filename Are Correct
	---------------------------------------------------------------
	
	This message is caused when Windows tries to execute applications listed on the
	Run= or Load= lines in the WIN.INI file.
	
	The above error can be caused by one of the following situations:
	
	- The path to the executable file is invalid (it is misspelled or does not
	  exist).
	
	- The file has been deleted.
	
	- Either the Load= or Run= line has exceeded the 128-character limit. In
	  Windows 3.1, you can use the StartUp group feature to avoid this limitation.
	
	- There is more than one space between the items on the Load= or Run= line. For
	  example, there are two spaces between the applications on the following Load=
	  line:
	
	        Load=c:\windows\AppOne.exe  AppTwo.exe
	                                  ^^
	
	  If this last situation is the cause, Windows loads the applications after
	  displaying the message.
	
	Additional query words: 3.11 3.10 3.00 3.00a err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
