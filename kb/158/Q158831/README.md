---
layout: page
title: "Q158831: PRB: &quot;Cannot Open File - Error Setting RESOURCE&quot; in VFP Mac"
permalink: kb/158/Q158831/
---

## Q158831: PRB: &quot;Cannot Open File - Error Setting RESOURCE&quot; in VFP Mac

	Article: Q158831
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to make changes or press the OK button in TOOLS - OPTIONS, you
	may receive either or both of the following errors:
	
	  Cannot open file - Error setting RESOURCE
	
	  -or-
	
	  Command contains unrecognized phrase/keyword
	
	CAUSE
	=====
	
	There is an 's (apostrophe "s") as part of your hard drive name (for example,
	Bill's Mac).
	
	WORKAROUND
	==========
	
	Remove the 's (apostrophe "s") from the hard drive name.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Change your hard drive name to YOURNAME's MAC.
	
	2. Launch Visual FoxPro.
	
	3. Go into TOOLS - OPTIONS.
	
	4. Make a change or click OK.
	
	NOTE: It appears to save whatever changes that you make most of the time.
	
	Additional query words: vFoxMac kbdse
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
