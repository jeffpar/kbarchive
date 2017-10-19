---
layout: page
title: "Q133720: PC Ext: External Processes Mail During F1, F2, and F3 Screens"
permalink: /kb/133/Q133720/
---

## Q133720: PC Ext: External Processes Mail During F1, F2, and F3 Screens

	Article: Q133720
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The EXTERNAL.EXE program that functions as a Message Transfer Agent (MTA) for
	version 3.2 of Microsoft Mail for PC Networks will continue to fully function
	while it displays one of the additional information screens. These screens are
	initiated by pressing either the F1 key (Help Screen), the F2 key (Dispatch Mail
	Status), or F3 key (External Status). While one of these screens is displayed,
	EXTERNAL.EXE will still continue to transfer mail between postoffices and answer
	incoming asynchronous calls.
	
	MORE INFORMATION
	================
	
	The EXTERNAL.EXE program provides the Administrator with five separate display
	screens. The first is the startup/copyright screen displayed when EXTERNAL.EXE
	is initialized. The second is the main logging screen displayed by default, and
	it shows the normal logging information. The other three screens are the F1, F2,
	and F3 screens that display the help screen, the Dispatch Mail Status, and the
	External Mail Status, respectively.
	
	The previous version of EXTERNAL.EXE (versions 3.0 and earlier) were designed
	strictly for the MS-DOS environment. Therefore, the function that modified the
	F1, F2, or F3 display screen sat in a polling loop, waiting for the user to
	press the ESC key to continue processing. For these versions of EXTERNAL.EXE,
	while one of these screens was being displayed, EXTERNAL.EXE could not deliver
	mail or answer incoming asynchronous calls.
	
	The newer versions of EXTERNAL.EXE (versions 3.2 and later) were designed for a
	multiprocessing environment. In particular, the EXTERNAL.EXE process was
	designed to be event driven. Even though the F1, F2, and F3 display screens have
	not changed in content or functionality, EXTERNAL.EXE now continues to fully
	function while any of these screens is being displayed.
	
	Versions 3.2 and later of EXTERNAL.EXE now use a foreground/background screen
	mechanism to take care of the proper display dynamics. When one screen is being
	displayed, EXTERNAL.EXE simply writes any information bound for the standard,
	logging screen directly to the video screen memory background buffer. This
	allows the user to instantly switch from one of the F1, F2, or F3 screens back
	to the logging screen and instantly see the correct logging information.
	
	
	Additional query words: 3.20 os/2 mmta
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
