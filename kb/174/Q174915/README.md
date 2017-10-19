---
layout: page
title: "Q174915: PRB: VFP 3.0 for the Macintosh Setup Wizard Fails under OS 8"
permalink: /kb/174/Q174915/
---

## Q174915: PRB: VFP 3.0 for the Macintosh Setup Wizard Fails under OS 8

	Article: Q174915
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbHWMAC kbvfp
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Setup Wizard in Visual FoxPro 3.0 for the Macintosh under Macintosh
	Operating System 8.0, results in the following error message:
	
	  AN ERROR ("This Command Cannot be Completed Because Invisible Items Cannot be
	  Manipulated") Has Occurred in the Setup Wizard. Setup Terminated
	
	RESOLUTION
	==========
	
	- Create the setup disks using an earlier version of the Macintosh operating
	  system.
	
	  -or-
	
	- Obtain the new version of the Setup Wizard that runs under OS 8.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using a Macintosh Power PC running Macintosh Operating System 8.0, create a
	  project named Test.
	
	2. Select the Code tab and click Programs.
	
	3. Select New and create a program with the following code:
	
	        WAIT WINDOW "This is a test of the VFP Setup Wizard"
	
	4. Save the program file.
	
	5. From the Project Manager, select Build and build either a PowerMac Executable
	  or 68K Executable.
	
	6. Save the executable file to a clean distribution folder.
	
	7. Select the Tools menu and click Setup from the Wizards menu.
	
	8. Proceed through the six steps of the Setup Wizard.
	
	9. Click Finish. The error appears as the files are compressed.
	
	Macintosh Operating System 8.0 is manufactured by Apple Computer, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	For information on downloading the updated Setup Wizard file please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177395 FILE: vfpmsuwz.hqx: New Setup Wizard/Visual FoxPro Using OS 8
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbprb
	
	=============================================================================
	
