---
layout: page
title: "Q113171: PRB: Setup Wizard: Folder Is Empty or Folder Does Not Exist"
permalink: kb/113/Q113171/
---

## Q113171: PRB: Setup Wizard: Folder Is Empty or Folder Does Not Exist

	Article: Q113171
	Product(s): Microsoft FoxPro
	Version(s): 3.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FoxPro for Macintosh Setup Wizard returns a "Folder Does Not Exist" or a
	"Folder is Empty" error message after you specify the Application Folder or
	Distribution Folder, even though a folder exists by the specified name.
	
	This error message also occurs if the name of your hard disk begins with a space.
	
	CAUSE
	=====
	
	In order to meet cross-platform requirements, FoxPro for Macintosh does not
	accept all valid Macintosh folder names.
	
	A folder name longer than 27 characters will cause a "Folder Does Not Exist"
	error. Although the Macintosh allows folder and file names of up to 31
	characters, FoxPro reserves 4 characters for a period and 3-letter extension to
	maintain cross-platform compatibility.
	
	A folder name containing a backslash (\) will cause a "Folder is Empty" error.
	Although the Macintosh allows backslashes within a folder name, FoxPro disallows
	this character to maintain cross-platform compatibility.
	
	Folder names longer than 27 characters and up to 31 characters will not cause the
	Setup Wizard in Visual FoxPro for Macintosh to report that the folder does not
	exist. Backslashes and a space as the first character of a folder or volume name
	will still cause errors in the Setup Wizard.
	
	In Visual FoxPro for Macintosh, you may receive the following errors:
	
	If a backslash(\) is in one of the folder names: "Error #202 in
	createcustomcursor (0): Invalid path or file name."
	
	If there is a space as the first character in the hard drive name: "Error #1961
	in createdir (0): A subdirectory or file <path>:Distribution: already
	exists."
	
	REFERENCES
	==========
	
	For information about valid file and folder names, see Chapter 3 of the
	"Installation and Macintosh Features Guide."
	
	Additional query words: vFoxMac FoxMac 2.50b alert errmsg err msg DK setupwizard
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : :3.0b
	Issue type        : kbprb
	
	=============================================================================
	
