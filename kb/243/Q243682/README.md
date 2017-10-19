---
layout: page
title: "Q243682: INFO: Synching Up a Web Project with Visual SourceSafe"
permalink: /kb/243/Q243682/
---

## Q243682: INFO: Synching Up a Web Project with Visual SourceSafe

	Article: Q243682
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbVisID600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual InterDev, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two commands that can be used to synch Web sites. They are Recalculate
	Links and Synchronize Files.
	
	MORE INFORMATION
	================
	
	These two commands are documented in the Visual InterDev help file (see
	"References"), but they don't detail what they do when the project is under
	Source Control.
	
	Recalculate Links:
	
	This command updates the Web site to contain everything in Visual SourceSafe.
	Thus, any files that have been added to the project in Visual SourceSafe are
	then brought down onto the Web server.
	
	Steps
	
	1. Add a file to the project in Visual SourceSafe.
	
	2. Open the Web project in Visual InterDev.
	
	3. Right-click the project file in Project Explorer and select Recalculate
	  Links.
	
	  NOTE: The same can be done from FrontPage by selecting Tools and then choosing
	  Recalculate Hyperlinks.
	
	Synchronize Files:
	
	This command does not have any effect in Visual SourceSafe; it functions the same
	way that the Visual InterDev documentation states, irrespective of Source
	Control.
	
	REFERENCES
	==========
	
	Additional information can be found in the Visual InterDev product documentation
	by searching for these titles:
	
	- Updating the Local Web Application
	
	- Synchronizing Master and Local Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbVisID600 
	Technology        : kbVisIDsearch kbSSafeSearch kbAudDeveloper kbVisID600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
