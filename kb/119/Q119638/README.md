---
layout: page
title: "Q119638: ERR: Unexpected Error; File Too Large to Compress..."
permalink: kb/119/Q119638/
---

## Q119638: ERR: Unexpected Error; File Too Large to Compress...

	Article: Q119638
	Product(s): Microsoft FoxPro
	Version(s): 2.5b,2.5c; MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro Distribution Kit for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running the Setup Wizard to create a set of disks for distribution,
	the following error appears:
	
	  Unexpected error; file too large to compress onto two disks.
	
	
	CAUSE
	=====
	
	One of the files in the folder to be compressed has a name with too many
	periods.
	
	RESOLUTION
	==========
	
	Rename any files that have more than one period in their filename.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a folder called DISTRIB.
	
	2. Create a simple text file or a FoxPro application and call it MYEXE.1.42.
	  Place this file in the DISTRIB folder.
	
	3. Run the Setup Wizard, specifying DISTRIB as the source folder.
	
	Additional query words: VFoxMac FoxMac 2.50b 2.50c errmsg err msg dk setupwizard
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxProDK250bMac kbFoxProDK250cMac kbVFP300bMac
	Version           : :2.5b,2.5c; MACINTOSH:3.0b
	
	=============================================================================
	
