---
layout: page
title: "Q152248: Fury3 Errors with Trial Version Downloaded from the Web"
permalink: /kb/152/Q152248/
---

## Q152248: Fury3 Errors with Trial Version Downloaded from the Web

	Article: Q152248
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetupkbfaq
	Last Modified: 08-NOV-2001
	
	WINDOWS
	kbfaq kbfasttip
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fury 3 for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one or more of the following error messages when you start the
	trial version of Fury3 that was downloaded from the World Wide Web:
	
	  Sharing Violation on Drive C:\
	
	  -or-
	
	  Unable to open .POD file. Verify that the Fury3 CD is inserted in the drive.
	  Or try reinstalling Fury3.
	
	  -or-
	
	  Unable to write .INF.
	
	RESOLUTION
	==========
	
	These messages occur if the Furyarc.exe file is not expanded with the -d switch
	as stated in the instructions on the Web page.
	
	To run the trial version of Fury3, you must extract the Furyarc.exe file using
	the -d switch, as follows. Use the steps that apply to your version of Windows.
	
	Windows 95
	----------
	
	1. Click Start, point to Programs, and click Windows Explorer.
	
	2. Find Furyarc.exe and, with the right mouse button, click Furyarc.exe. Click
	  Properties.
	
	3. Click the Program Tab. In the Cmd line, add "-d" (without the quotation
	  marks) to the end of the existing text and click OK.
	
	4. Double-click Furyarc.exe.
	
	5. Start the Fury3 Trial Version by running Fury3x.exe.
	
	For more information about how to use Windows Explorer, see online Help.
	
	Windows 3.x
	-----------
	
	1. Open File Manager. Locate the Furyarc.exe file and move it to an empty
	  directory.
	
	2. In Program Manager, open the Main Group and double-click the MS-DOS Prompt.
	
	3. Change to the directory where the Furyarc.exe file is located and type
	  furyarc "-d" (without the quotation marks) and press ENTER.
	
	4. Type "exit" (without the quotation marks) and press ENTER to return to
	  Windows.
	
	5. In File Manager, double-click the Setupx.exe file to install the trial
	  version of Fury3 on the computer.
	
	6. Start the Fury3 trial version by running Fury3x.exe.
	
	For more information about how to use File Manager, see your Windows printed
	documentation or online Help.
	
	MORE INFORMATION
	================
	
	If you just double-click Furyarc.exe, it expands into a flat directory and will
	not run properly. The -d switch is used to expand the directory structure and
	put files in their proper location.
	
	Additional query words: trial version Fury Fury3 Error unable sharing violation expand demo
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbfaq
	Technology        : kbGamesSearch kbZNotKeyword kbFury3
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
