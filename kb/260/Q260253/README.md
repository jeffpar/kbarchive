---
layout: page
title: "Q260253: PC NTMMTA: NTMMTA Setup on Windows 2000 May Not Work"
permalink: /kb/260/Q260253/
---

## Q260253: PC NTMMTA: NTMMTA Setup on Windows 2000 May Not Work

	Article: Q260253
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2000,3.x
	Operating System(s): 
	Keyword(s): kbWin2000PreSP1Fix kbWin2000sp1Fix
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.x 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install the Windows NT multitasking message transfer agent
	(NTMMTA) on a computer running Windows 2000 Advanced Server, you may receive the
	following error message:
	
	  Please report File='COMMON\INFO1.C',Line='253' to Microsoft Product Support
	  Services.
	
	If you click OK in this error message, the Setup program quits and does not
	finish, and the NTMMTA is not installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	To resolve this problem, run Setup from the command line. Before you begin, make
	sure that you have the latest version of the Setup.exe file. The original verion
	of this file does not run on Windows 2000 Advanced Server.
	
	
	MORE INFORMATION
	================
	
	To install the NTMMTA:
	
	1. Create a new blank folder that you can run the installation from. You can
	  name this folder anything, however, the folder that you install Setup to must
	  be named Mailexe. You may receive error messages if you change this folder
	  name.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q139498 PC NTMMTA: Err Msg: Setup Has Encountered a Problem...
	
	2. Copy the contents of the NTMMTA to the folder you just created.
	
	3. Rename the copy of the Setup.exe program and replace it with the latest
	  version of the program.
	
	4. Click Start, click Run, and then type "CMD" (without the quotation marks).
	
	5. Run the Setup.exe program.
	
	Additional query words: MTA, W2K, install
	
	======================================================================
	Keywords          : kbWin2000PreSP1Fix kbWin2000sp1Fix 
	Technology        : kbwin2000AdvServSearch kbwin2000Ssearch kbPictureIt2000 kbMailSearch kbWinAdvServSearch kbZNotKeyword3 kbMailATN30xSearch
	Version           : WINDOWS:2000,3.x
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
