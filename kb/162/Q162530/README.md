---
layout: page
title: "Q162530: PRB: Invalid Handle on Client When Journal_Text Set to Bad Path"
permalink: /kb/162/Q162530/
---

## Q162530: PRB: Invalid Handle on Client When Journal_Text Set to Bad Path

{% raw %}

	Article: Q162530
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Visual SourceSafe Administrator, if the "Log all actions in Journal File"
	(located on the Tools ... Options ... General tab) is set to a Bad or Non-
	Existent path for client workstations, you might see one of the following
	errors:
	
	  Invalid Handle
	  Invalid DOS path: <path to the journal file>
	
	This occurs on the client workstation when you perform operations that log to the
	journal file, such as check out or check in.
	
	CAUSE
	=====
	
	When you set the "Log all actions in Journal File," it sets the Journal_File
	variable in the Srcsafe.ini on the server. Clients access this file by the
	Srcsafe.ini on the local workstation by responding to the #include < path to
	server Srcsafe.ini > line.
	
	Since the local Visual SourceSafe workstation uses the server settings when the
	Journal_File path cannot be resolved (that is, the drive or directory structure
	does not exist for that workstation), these errors result when the local Visual
	SourceSafe workstation executes an operation that writes an entry into the
	journal file.
	
	RESOLUTION
	==========
	
	When setting a location for the journal file, make sure that all Visual
	SourceSafe clients can see the path to the file. Microsoft network users or
	users of networks supporting Universal Naming Convention (UNC) pathing should
	consider using a UNC path to the journal file location. In cases where UNC
	pathing is not desired or available, set a common drive mapping on all client
	computers to the journal file location.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Visual SourceSafe Administrator. On the Tools menu, click Options
	  and then click the General tab.
	
	2. On the General tab, set the "Log all actions in Journal File" to Non-
	  Existent Drive for the client workstation.
	
	3. In the Visual SourceSafe Explorer, perform a check out or check in operation.
	
	4. When the check out or check in operation attempts to write the details of the
	  operation to the journal file, an Invalid Handle message occurs on the client
	  workstation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
