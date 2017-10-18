---
layout: page
title: "Q194574: PRB: SET HELP TO Causes &quot;File Does Not Exist&quot; Error"
permalink: kb/194/Q194574/
---

## Q194574: PRB: SET HELP TO Causes &quot;File Does Not Exist&quot; Error

	Article: Q194574
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6,2.6a; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When issuing a SET HELP TO command in FoxPro, the following error occurs:
	
	  "File does not exist."
	
	CAUSE
	=====
	
	The Foxhelp.hlp (when using Foxpro 2.x, 3.0 or 5.0) or Foxhelp.chm (using Visual
	FoxPro 6.0) file is missing or damaged.
	
	RESOLUTION
	==========
	
	- Copy the Foxhelp.dbf or Foxhelp.hlp from the diskettes if using FoxPro 2.x.
	
	- Copy the Foxhelp.hlp from the CD if using Visual FoxPro 3.0 or 5.0.
	
	- Install the MSDN - Visual Studio 6.0 CD if using Visual FoxPro 6.0 so the
	  Foxhelp.chm file and other necessary files will be installed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Issue the SET HELP TO command into the Command window of an installation of
	FoxPro that does not have the Foxhelp file installed.
	
	Additional query words: kbVFP600 kbvfp300b kbvfp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MS-DOS:2.6,2.6a; WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
