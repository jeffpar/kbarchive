---
layout: page
title: "Q303834: Setup Returns Error When the Source Path Contains Spaces"
permalink: /kb/303/Q303834/
---

## Q303834: Setup Returns Error When the Source Path Contains Spaces

	Article: Q303834
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Visual FoxPro 7.0, the Windows Component Update
	portion of the setup may not complete successfully and you may receive an error
	message that resembles the following:
	
	  winmain() error. Cannot locate expected executable last word of path or share
	  name\wcu\runprog.exe C:\WINNT\System32\msiexec.exe
	
	Each component that fails to install successfully has an X next to it in the list
	that is displayed when the Windows Component Update completes.
	
	CAUSE
	=====
	
	The path to the installation folder or the share contains a space.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Remove the spaces in your share name or path.
	
	-or-
	
	- Install the components that fail by using their individual install routines,
	  which are documented in the \WCU\Help\Moreinfo.htm file on the Visual FoxPro
	  7.0 Professional CD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem does not occur when you install Visual FoxPro from the CD on a
	local computer or from a share that does not contain spaces in the path. The
	problem can occur if you install Visual FoxPro from a shared CD with a space in
	the share name, or if the CD contents are copied to a network share and the
	share path contains a space.
	
	Steps to Reproduce This Behavior
	--------------------------------
	
	1. Copy all of the directories and files from the Visual FoxPro CD. If you
	  downloaded Visual FoxPro as an MSDN Universal Subscriber, copy the
	  directories to a folder named Visual FoxPro .
	
	2. Run the Setup program and select Windows Component Update.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
