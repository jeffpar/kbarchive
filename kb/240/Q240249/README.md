---
layout: page
title: "Q240249: PRB: Cannot Open or Save Files When Running OS 9"
permalink: kb/240/Q240249/
---

## Q240249: PRB: Cannot Open or Save Files When Running OS 9

	Article: Q240249
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a
	Operating System(s): 
	Keyword(s): kbHWMAC kbXPlatform kbGrpDSFox kbDSupport
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any number of the following problems are encountered when working in FoxPro 2.6
	for Macintosh:
	
	- The Open command on the File menu does not display the dialog box to open a
	  file and the Macintosh just beeps.
	
	- Browse windows, new or existing screens, reports, labels, programs, text
	  files, menus, queries and projects do not display the file's name in the
	  title bar when being edited. And the Command window does not have a title.
	
	- New or existing files cannot be saved with the Save or Save As commands on
	  the File menu. Files such as programs and text files cannot be saved and
	  closed with the CTRL+W key combination. The Macintosh just beeps when these
	  operations are attempted.
	
	- The View window, Project Manager and RQBE windows appear to have embedded
	  windows in the locations where file names are normally displayed. In the case
	  of the View window, the Work Areas section and the section where table
	  relations are shown appear as embedded windows. If one of the "embedded"
	  windows is closed and then the main window is closed, FoxPro usually crashes
	  with an error of type 1 or type 2.
	
	- The Catalog Manager cannot be displayed by using the Catalog Manager command
	  on the File menu. If FoxPro is started with the Catalog Manager displayed,
	  the Catalog Manager also appears to have an embedded window whose title bar
	  partially covers the tabs for the different file types. FoxPro can also crash
	  when closing the Catalog Manager.
	
	CAUSE
	=====
	
	This is caused by having the resolution set to 640 x 480 in the Monitors'
	Control Panel when using Apple Computer's OS 9.
	
	RESOLUTION
	==========
	
	There are at least three possible resolutions for these problems:
	
	1. Use a higher video resolution than 640 x 480. Microsoft has only seen these
	  problems with the 640 x 480 video resolution in OS 9.
	
	2. Use a Macintosh OS other than OS 9. Microsoft has not seen these problems in
	  the Macintosh OS prior to OS 9.
	
	3. Upgrade to Visual FoxPro for Macintosh.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Obtain a Macintosh with OS 9 as the operating system.
	
	2. Set the resolution in the Monitor's Control Panel to 640 x 480.
	
	3. Run FoxPro 2.6 for Macintosh and go to the Command window if prompted to
	  choose to explore a catalog in the Catalog Manager or go to the Command
	  window.
	
	4. Bring up the View window from the Window menu.
	
	5. Click the Open button in the View window. The Macintosh should only beep and
	  no open dialog box should appear.
	
	6. Explore the other items listed in the Symptoms section.
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbHWMAC kbXPlatform kbGrpDSFox kbDSupport 
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxPro260aMac
	Version           : MACINTOSH:2.6a
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
