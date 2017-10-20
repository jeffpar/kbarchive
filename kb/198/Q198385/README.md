---
layout: page
title: "Q198385: PRB: Error Running Setup Wizard under Apple OS 8.5"
permalink: /kb/198/Q198385/
---

## Q198385: PRB: Error Running Setup Wizard under Apple OS 8.5

{% raw %}

	Article: Q198385
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbHWMAC kbvfp300b
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Setup Wizard (including the updated Setup Wizard available on
	the Microsoft Web site, for information on this version, please refer to the
	article in the REFERENCES section) in Visual FoxPro 3.0b for the Macintosh,
	running on Apple OS 8.5 to compress files totaling more than one megabyte, the
	following error occurs during compression:
	
	  The Setup Wizard was unable to make a copy of your source files. Setup
	  terminated.
	
	RESOLUTION
	==========
	
	If possible, run the Setup Wizard on a Macintosh running an operating system
	prior to OS 8.5.
	
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro 3.0b for the Macintosh on a computer running OS 8.5.
	
	2. Create a project that contains a program file with a WAIT WINDOW command.
	  Compile this into an executable.
	
	3. Move the executable to a separate directory and start the Setup Wizard.
	
	4. Walk through each step. Make sure you choose the run-time libraries and
	  graphical help in step 3. This causes the Setup Wizard to compress more than
	  one megabyte of files. If the files total less than one megabyte, the error
	  may not occur.
	
	5. In step 6 of the Setup Wizard, click Finish.
	
	The error listed in the SYMPTOMS section occurs at some point during the
	compression process.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q177395 FILE:Vfpmsuwz.hqx: New Setup Wizard/Visual FoxPro Using OS 8
	
	  Q163470 PATCH: Foxtools.hqx Upgrade to Prevent Setup Wizard Errors
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbHWMAC kbvfp300b 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
