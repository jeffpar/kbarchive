---
layout: page
title: "Q146358: No Update to Recurring Meetings with Mixed Versions"
permalink: kb/146/Q146358/
---

## Q146358: No Update to Recurring Meetings with Mixed Versions

	Article: Q146358
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you invite a mixture of Schedule+ version 1.0 and version 7.0 users to a
	recurring meeting, any updates to the recurring meeting may not be reflected in
	the meeting details.
	
	CAUSE
	=====
	
	This occurs if a Schedule+ version 1.0 response to the request is received
	before a Schedule+ version 7.0 response is received. If a Schedule+ version 7.0
	response is received first, the recurring meeting will be updated normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Schedule+ version 7.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Schedule+ version 1.0 did not have recurring meetings. Therefore, version 1.0
	users who receive recurring meeting requests will be able to respond any way
	they like, but the response is only to the first instance of the recurring
	pattern. The resulting meeting response is sent as a response to a single
	meeting. The result is that once the version 1.0 response is received, that
	first instance is made into an exception to the pattern, and does not inherit
	any further changes (like the version 7.0 user's response).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3 kbMPTMathopolis
	Version           : WINDOWS:1.0,7.0; Win95:7.0
	
	=============================================================================
	
