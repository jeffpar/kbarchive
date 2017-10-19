---
layout: page
title: "Q164585: FIX: VSS Log Files Not Deleted Correctly on NetWare"
permalink: /kb/164/Q164585/
---

## Q164585: FIX: VSS Log Files Not Deleted Correctly on NetWare

	Article: Q164585
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 04-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your SourceSafe database contains log files with no matching data files, the
	following error message may appear when you run analyze:
	
	  The data file for <real file name > (<physical file name>) was
	  not found
	
	CAUSE
	=====
	
	When you delete and permanently destroy files in a SourceSafe database that
	reside on a Novell NetWare Server, the SourceSafe log file is not deleted.
	
	This happens on Windows95 machines using the Microsoft client for NetWare
	Networks.
	
	RESOLUTION
	==========
	
	This problem has been corrected in Visual SourceSafe version 5.0.
	
	There are two ways to avoid this problem in Visual SourceSafe 4.0 or 4.0a.
	
	1. Use the Novell NetWare Client 32 for Windows 95.
	
	2. Enable project security if it is not already enabled. Disable the destroy
	  right for the Windows 95 users who use the Microsoft Client for NetWare. This
	  means that when they delete a file(s) and project(s) they will not be able to
	  destroy them. The administrator can then periodically perform the purge
	  option to remove the deleted files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual SourceSafe,
	version 5.0.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q160914 The Data File for <file> (<physical file>) Was Not Found
	
	Steps to Reproduce Behavior
	---------------------------
	
	If you have the configuration described in the "Cause" section above:
	
	1. Create a test project in Visual SourceSafe called $\FileTest.
	
	2. Perform the following command with the SourceSafe command-line utility
	  (SS.EXE):
	
	        SS PHYSICAL $\FileTest
	
	  This will give you the name of the SourceSafe log file eg.(ABCAAAAA)
	
	3. Look in the corresponding directory in the SourceSafe data directory and you
	  will notice the file and an associated data file with an extension of .A or
	  .B
	
	4. Delete and permanently destroy the project from Visual SourceSafe.
	
	5. Look again in the SourceSafe data directory and you will see that the Log
	  file is still present, although the data file has been deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
