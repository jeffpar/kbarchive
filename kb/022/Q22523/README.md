---
layout: page
title: "Q22523: Windows Does Not Support Real-Time Programming"
permalink: kb/022/Q22523/
---

## Q22523: Windows Does Not Support Real-Time Programming

	Article: Q22523
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
	
	In no sense can Microsoft Windows be considered a "real-time" system. It is a
	message-driven, event-polling system, with nonpreemptive scheduling. The
	following is additional information:
	
	1. It is possible to write a Windows-based application that sits on some
	  interrupt in order to watch board-level activity. In general, this facility
	  is used by manufacturers of boards to write drivers that watch and respond to
	  interrupts used by the board. It is extremely dangerous to allocate/sit on
	  any interrupt used by Windows itself (keyboard, mouse, etc.).
	
	2. Dedicated systems (those that will not run general-purpose Windows
	  applications) may sit on the timer interrupt, as long as Windows is
	  eventually notified of the timer ticks. Because of the nonpreemptive aspect
	  of the Windows system, it is insensitive to delays in the arrival of timer
	  ticks. Trying to run more than one time-critical application that sits on the
	  timer interrupt is likely to fail.
	
	3. You must arrange for a Windows "library" of routines to provide access to
	  information available from a board. The issue is one of how to divide the
	  work between the following portions:
	
	  a. The driver portion, which watches the interrupt, logs data, and notifies
	     clients [through PostMessage()] of the availability of data
	
	  b. The client portion, which obtains data from the driver portion, and
	     processes, displays, and stores data
	
	  Drivers can be implemented as Windows libraries, and clients of the device can
	  be implemented as Windows-based applications. The driver portion can be made
	  NEAR real time; the application portion is going to be message driven.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
