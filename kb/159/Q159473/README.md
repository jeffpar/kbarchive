---
layout: page
title: "Q159473: FIX: GETDIR() on Empty Floppy Drive Causes Crash"
permalink: kb/159/Q159473/
---

## Q159473: FIX: GETDIR() on Empty Floppy Drive Causes Crash

	Article: Q159473
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.0, issuing a GETDIR() command on a drive that does not
	contain a disk results in the following error:
	
	  This program has performed an illegal operation and will be shut down.
	
	WORKAROUND
	==========
	
	Use Foxtools.fll and the ISDISKIN function to check for a disk in the drive
	prior to issuing the GETDIR() command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, do the following:
	
	At the command line enter the following command. Ensure that there is no disk in
	Drive A:
	
	  " ?GETDIR("A:\") " (without the quotation marks)
	
	
	REFERENCES
	==========
	
	For more information about using ISDISKIN please see the following article(s) in
	the Microsoft Knowledge Base:
	
	  Q125372 How To Check for a Floppy Disk Using FOXTOOLS
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
