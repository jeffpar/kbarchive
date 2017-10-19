---
layout: page
title: "Q131449: HOWTO: Troubleshoot &quot;Out of Memory&quot; Errors"
permalink: /kb/131/Q131449/
---

## Q131449: HOWTO: Troubleshoot &quot;Out of Memory&quot; Errors

	Article: Q131449
	Product(s): Microsoft SourceSafe
	Version(s): 3.04,3.1
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists possible causes for an "Out of Memory" error.
	
	MORE INFORMATION
	================
	
	Here are some reasons why you might encounter an "Out of Memory" error:
	
	- When you view a history, the history may contain more than 8191 items. This
	  causes the "Out of Memory" error because of a limitation.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q138298 INFO: Visual SourceSafe System Capacities and Specifications
	
	- When you updating a binary file. SourceSafe tries to calculate the
	  differences for the file, but due to the nature of binary files, the changes
	  may exceed the available memory. To avoid this error, you can specify that
	  SourceSafe only store the latest copy of a file. Select (highlight) the file
	  in the interface product, and then from the Info menu choose Properties. Then
	  select the "Store Latest Copy" check box.
	
	  WARNING: This makes SourceSafe unable to get older versions of a file. You
	  must save the older versions manually in order to retrieve the older
	  versions.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q128238 BUG: SourceSafe Update Command Fails on Large Binary File
	
	- When you view the links or paths for a file and get the error, try to do it
	  from the command line. If the problem remains. Use FIXPAR to fix the links
	  and paths. FIXPAR.EXE is explained in greater detail in the following article
	  in the Microsoft Knowledge Base:
	
	  Q130178 FIXPAR Fixes Database Errors Reported by ANALYZE.EXE
	
	
	Running ANALYZE may also help in fixing the "Out of Memory" problem. If ANALYZE
	or the previous suggestions do not help, please contact Microsoft Technical
	support.
	
	Additional query words: vbwin SS SRCSAFE
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe304NT kbSSafe310NT
	Version           : :3.04,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
