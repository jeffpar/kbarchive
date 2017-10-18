---
layout: page
title: "Q196385: HOWTO: How to Terminate a Visual FoxPro .exe Using Apple Script"
permalink: kb/196/Q196385/
---

## Q196385: HOWTO: How to Terminate a Visual FoxPro .exe Using Apple Script

	Article: Q196385
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbAutomation kbHWMAC kbvfp300
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to terminate or quit a running Visual FoxPro for
	Macintosh executable from another application using AppleScript.
	
	MORE INFORMATION
	================
	
	Normally you would use AppleScript to call the Quit command from the File menu
	to close the application. When you run a distributed Visual FoxPro application,
	the Quit option on the File menu is not available. However, most distributed
	Visual FoxPro applications do contain a READ EVENTS in the code to start event
	processing and prevent Visual FoxPro from exiting prematurely. The AppleScript
	example is based on using a CLEAR EVENTS to cause the executable to exit.
	
	NOTE: This example creates an AppleScript that you can execute from the Macintosh
	Finder or another application that can run AppleScript.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual FoxPro for the Macintosh executable that either has a READ
	  EVENTS in a menu or form.
	
	2. Open the AppleScript Editor and type in the following test:
	
	        Tell Application "VFP Support Library PPC"
	           Do Script "Clear Events"
	        End Tell
	
	3. Save the script and call it "Quit VFP EXE". In the Kind option of the Save
	  Script as dialog box, choose Application. You may also want to select the
	  Never Show Startup Screen check box. Quit the Script Editor.
	
	4. Close Visual FoxPro. Run the Visual FoxPro for the Macintosh executable from
	  the Finder.
	
	5. At the Finder, double-click the "Quit VFP EXE" Application script. The
	  executable closes.
	
	AppleScript is manufactured by Apple Computer, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	REFERENCES
	==========
	
	For additional information on using a READ EVENTS in a menu or form, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q87694 PRB: Menu Appears, Then Application Exits to Operating System
	
	  Q132697 PRB: Application Appears Then Exits to Operating System
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Dean Christopher, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbHWMAC kbvfp300 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
