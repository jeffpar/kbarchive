---
layout: page
title: "Q133449: PRB: ESL File Not Automatically Included w/ Visual FoxPro EXE"
permalink: /kb/133/Q133449/
---

## Q133449: PRB: ESL File Not Automatically Included w/ Visual FoxPro EXE

{% raw %}

	Article: Q133449
	Product(s): Microsoft FoxPro
	Version(s): 3.00 5.00 | 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A set of application distribution disks created with the Visual FoxPro Setup
	Wizard does not contain the run-time file necessary to run the application. In
	Visual FoxPro for Windows version 3.0, the run-time file is VFP300.ESL. In
	Visual FoxPro for Macintosh, the set of disks does not contain the support
	library for the PPC or the 68K Support Library. The run- time file for Visual
	FoxPro for Windows version 5.0 is Vfp500.dll.
	
	CAUSE
	=====
	
	In step 2 of the Setup Wizard, the Visual FoxPro Run-time check box was not
	selected.
	
	STATUS
	======
	
	This is by design. The Setup Wizard was enhanced in version 3.0 to allow the
	developer to choose whether or not to include the VFP300.ESL file, which is 3.5
	MB, with the distribution disks. The Support Library PPC is 5 MB, and the
	Support Library 68K is 4.2 MB. The support library for Visual FoxPro 5.0 is 3.5
	MB.
	
	RESOLUTION
	==========
	
	Rerun the Setup Wizard. In Step 2, under Optional Components, select the Visual
	FoxPro 3.0 Runtime check box.
	
	MORE INFORMATION
	================
	
	The Setup Wizard requires a .EXE file in order to build a set of distribution
	disks. This means that the .ESL file or the support libraries for 68K or PPC,
	can only be distributed as part of a complete application. You cannot distribute
	the .ESL by itself.
	
	NOTE: Chapter 9 of the Professional Features Guide, Visual Foxpro for Windows,
	lists this check box as appearing during step 3 of the Setup Wizard; this is
	incorrect.
	
	Additional query words: vFoxMac VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Version           : 3.00 5.00 | 3.00b
	
	=============================================================================
	

{% endraw %}
