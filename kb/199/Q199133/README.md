---
layout: page
title: "Q199133: Adding Application Mapping Returns File Path Error"
permalink: /kb/199/Q199133/
---

## Q199133: Adding Application Mapping Returns File Path Error

	Article: Q199133
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a new application mapping in Internet Information Server
	4.0 or you edit an existing mapping that contains a space in the file path, the
	Microsoft Management Console (MMC) returns the following error:
	
	  You must enter a valid path.
	
	CAUSE
	=====
	
	The path in the Internet Information Server application mapping contains a
	space.
	
	WORKAROUND
	==========
	
	To work around this issue, do not use spaces in the path to the executable file
	in the application mapping. Instead use the 8.3 translation for the path. For
	example, the path to c:\Program Files\Our Application\sample.dll should be
	entered as c:\progra~1\ourapp~1\sample.dll.
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	  Q142982 How Windows Generates 8.3 File Names from Long File Names
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how to add or enter an application mapping under
	IIS 4.0:
	
	1. Start the Internet Service Manager.
	
	2. Highlight the Web site for the mapping and choose Action/Properties.
	
	3. Click the Home Directory tab.
	
	4. Click the Configuration button and click Add.
	
	5. Enter the path to the executable file and the file extension.
	
	6. Click OK to go back to the main Internet Service Manager window.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
