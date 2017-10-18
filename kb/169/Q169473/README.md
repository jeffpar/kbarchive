---
layout: page
title: "Q169473: BUG: Cannot Load FTSRCH.DLL When Using &quot;Find&quot; Tab of Help Dialog"
permalink: kb/169/Q169473/
---

## Q169473: BUG: Cannot Load FTSRCH.DLL When Using &quot;Find&quot; Tab of Help Dialog

	Article: Q169473
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error appears when selecting the Find tab of the Help dialog box
	under Traditional Chinese Windows 95, after Visual FoxPro 5.0 or 5.0a is
	installed:
	
	  Can not load Ftsrch.dll, Please copy the file to your system directory or
	  searchable path
	
	The Find option disappears if help is launched again.
	
	RESOLUTION
	==========
	
	Ensure that the Ftsrch.dll file is in the Windows directory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Install VFP version 5.0/5.0a in Traditional Chinese Windows 95.
	
	2. From the Help menu, select Microsoft Visual FoxPro Help Topics.
	
	3. Click the Find tab of the Help dialog box.
	
	The error "Can not load Ftsrch.dll" appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
