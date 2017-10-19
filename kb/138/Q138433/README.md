---
layout: page
title: "Q138433: PRB: Unable to Open &lt;path Name&gt; When Running Analyze"
permalink: /kb/138/Q138433/
---

## Q138433: PRB: Unable to Open &lt;path Name&gt; When Running Analyze

	Article: Q138433
	Product(s): Microsoft SourceSafe
	Version(s): 3.10 | 3.10 | 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running Analyze with the path to the data directory produces the following error
	if the path contains a directory name that has an extension:
	
	  Unable to open <Path to Data directory>
	
	CAUSE
	=====
	
	Analyze can not resolve the path to the data directory if any of the directory
	entries have a period (.). You can move the Analyze program beyond the directory
	with the extension, and use a relative path. This does not occur in Visual
	SourceSafe version 4.0
	
	RESOLUTION
	==========
	
	Move Analyze so that you can call it with a relative path to the data
	directory.
	
	-or-
	
	Rename the directory so that it does not contain a period.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a directory that has an extension (for example, Mydir.tst).
	
	2. Move or copy the SourceSafe data directory into the directory you created in
	  step 1.
	
	3. Run Analyze from the SourcSafe Admin directory, supplying a complete path to
	  the data directory as in this example:
	
	  Analyze C:\Mydir.tst\Data
	
	  At this point, Analyze responds with this error:
	
	  Unable to open: C:\Mydir.tst\Data"
	
	Additional query words: ss3 vbwin 3.10
	
	======================================================================
	Keywords          :  
	Version           : 3.10 | 3.10 | 3.10
	Issue type        : kbprb
	
	=============================================================================
	
