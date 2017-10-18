---
layout: page
title: "Q112538: Schubert: GPF or Insufficient Memory Error with Orchid Video"
permalink: kb/112/Q112538/
---

## Q112538: Schubert: GPF or Insufficient Memory Error with Orchid Video

	Article: Q112538
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play the Trout Game and successfully match rocks, you may receive
	either an insufficient memory error message or the following general protection
	(GP) fault:
	
	  Schubert has caused a General Protection Fault in VBRUN300.DLL at 0030:1163.
	
	CAUSE
	=====
	
	This problem occurs if you are using the Orchid Fahrenheit 1280 Advanced VGA
	video driver and card.
	
	This problem is most likely to occur when Schubert plays two animations one after
	the other in the Trout Game (which is what happens when you successfully match
	two rocks).
	
	Microsoft has confirmed this to be a problem in Schubert version 1.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To eliminate this problem, use a different driver that is compatible with your
	video card.
	
	For information about changing your video mode, refer to pages 557-560 in the
	"Microsoft Windows User's Guide" for Windows 3.1.
	
	MORE INFORMATION
	================
	
	This problem generally occurs when you successfully match rocks in the Trout
	Game. The MMTASK or the ORCHIDF driver causes the error and the GP Fault or the
	insufficent memory message will appear. After choosing OK to accept these error
	messages, Schubert usually displays an "MCI error" message box and then resumes
	the game.
	
	Occasionally when you receive these error messages, you may find that your CD-ROM
	drive's "busy" LED begins to flash continuously and your system stops responding
	(hangs). When this occurs, you must restart your computer.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.1, pages 557-560
	
	Additional query words: 1.0 multi media multimedia multi-media avi freeze lock crash gpf reboot hang locked up
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMSchubert
	Version           : WINDOWS:1.0
	
	=============================================================================
	
