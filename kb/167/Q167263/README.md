---
layout: page
title: "Q167263: PRB: &lt;filename&gt; is Already Open"
permalink: /kb/167/Q167263/
---

## Q167263: PRB: &lt;filename&gt; is Already Open

{% raw %}

	Article: Q167263
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to perform some action in the Visual SourceSafe Explorer you receive
	the following message:
	
	  c:\src_server\src_share\data\<a-z>\<filename> is already open
	
	where filename is a file in the Visual SourceSafe database.
	
	CAUSE
	=====
	
	This error can occur if another user or process has the file locked, or if the
	network has not released its lock on the file.
	
	RESOLUTION
	==========
	
	The file that the error message is referring to is one of the many files stored
	in your Visual SourceSafe database, specifically in the DATA subdirectory.
	Visual SourceSafe uses its own naming scheme to track these files and their
	history of changes.
	
	You can get this message if another user has this file locked. One way to fix it
	is:
	
	1. Log out from Visual SourceSafe.
	
	2. On the Visual SourceSafe command line, type the following:
	
	  ss status $/project/filename
	
	This should close the file handle and fix the problem.
	
	This error may also be caused by running memory resident anti-virus programs. If
	you are running an anti-virus program, close it and then retry the SourceSafe
	operation.
	
	NOTE: To get the actual filename from the Visual SourceSafe filename, use the
	PHYSICAL command.
	
	For additional information about the PHYSICAL command, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q131447 Use PHYSICAL Command to Find SourceSafe Database File
	
	If the above method does not correct the problem you may have to use the server
	utilities for your server operating system to manually break the users
	connection to close the file handle.
	
	If problems like this persist you may need to enable SourceSafe locking.
	
	For additional information on file locking, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q124525 INFO: How SourceSafe Locks Files in the DATA Directory
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
