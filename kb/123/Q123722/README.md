---
layout: page
title: "Q123722: RUN Command Not Available in FoxPro for Macintosh"
permalink: kb/123/Q123722/
---

## Q123722: RUN Command Not Available in FoxPro for Macintosh

	Article: Q123722
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro RUN command is not implemented in FoxPro for Macintosh. The Macintosh
	operating system does not have the equivalent of an MS-DOS command prompt; so it
	isn't possible to run an external program.
	
	MORE INFORMATION
	================
	
	Equivalent functionality can often be programmed through use of the FoxPro
	RUNSCRIPT command to run an AppleScript to launch the external program.
	
	To use this feature, perform these steps:
	
	1. Use the AppleScript Script Editor to record or write a script that launches
	  the desired application.
	
	2. Save the newly created script.
	
	3. In your FoxPro program, add the following command to run the AppleScript:
	
	     RUNSCRIPT <script name>
	
	NOTE: AppleScript is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding AppleScript's performance or
	reliability.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
