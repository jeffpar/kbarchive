---
layout: page
title: "Q114269: PRB: &quot;Overwrite Invalid FoxUser File...&quot; Each Time Fox Starts"
permalink: /kb/114/Q114269/
---

## Q114269: PRB: &quot;Overwrite Invalid FoxUser File...&quot; Each Time Fox Starts

	Article: Q114269
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Every time FoxPro starts, it displays the following error message:
	
	  Overwrite invalid FoxUser file with a new empty one? Yes/No
	
	CAUSE
	=====
	
	- The configuration file contains a RESOURCE = line with a path that points to
	  a nonexistent directory or folder.
	
	-or-
	
	- The resource files are corrupt.
	
	RESOLUTION
	==========
	
	- Change the path in the RESOURCE = line so that it points to a valid directory
	  or folder.
	
	-or-
	
	- Rename the resource files (FOXUSER.DBF and FOXUSER.FPT). FoxPro will build
	  new resource files the next time it starts.
	
	MORE INFORMATION
	================
	
	The configuration file is usually CONFIG.FPW in FoxPro for Windows, CONFIG.FP in
	FoxPro for MS-DOS, and CONFIG.FPM in FoxPro for Macintosh.
	
	Sample Situation That May Cause This Error When Upgrading FoxPro
	----------------------------------------------------------------
	
	This situation may occur when you are using the configuration file from a
	previous installation of FoxPro with a new FoxPro installation. For example,
	FoxPro version 2.5 for Windows installs to a directory named FOXPROW by default.
	FoxPro version 2.6 for Windows installs to a directory named FPW26 by default.
	
	If the following situation occurs, the RESOURCE = line will point to an invalid
	directory:
	
	1. FoxPro version 2.5 for Windows exists in a directory named FOXPROW. The
	  CONFIG.FPW file in FOXPROW contains a "RESOURCE=C:\FOXPROW\FOXUSER.DBF" line.
	
	2. FoxPro version 2.6 for Windows is installed in a directory named FPW26.
	
	3. The CONFIG.FPW file in FOXPROW is copied to FPW26.
	
	4. The FOXPROW directory is deleted.
	
	At this point, the CONFIG.FPW file in FOXPROW contains a RESOURCE = line pointing
	to C:\FOXPROW, which doesn't exist.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c config.fp(w) errmsg err msg akz
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	
