---
layout: page
title: "Q166261: BUG: &quot;File is Exclusively Checked Out&quot; Error"
permalink: kb/166/Q166261/
---

## Q166261: BUG: &quot;File is Exclusively Checked Out&quot; Error

	Article: Q166261
	Product(s): Microsoft SourceSafe
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe500bugkbbuglist
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to check out a file, the following message appears, even though
	nobody has the file checked out:
	
	  File $/<projectname>/<filename> is Exclusively Checked Out.
	
	CAUSE
	=====
	
	The Status.dat file is corrupted.
	
	RESOLUTION
	==========
	
	The following resolutions work: Run Analyze -f twice.
	
	-or-
	
	Create a backup copy of the Status.dat file, and then remove the Status.dat file
	from the DATA directory and run Analyze -f.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Although a number of users have reported this problem, it has not been
	consistently reproduced. In several cases, it occurred when a mixture of
	versions 4.0 and 5.0 clients accessed the same database.
	
	REFERENCES
	==========
	
	For more information about the Analyze utility, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe500bug kbbuglist
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
