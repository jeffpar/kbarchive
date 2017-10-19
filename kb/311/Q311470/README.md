---
layout: page
title: "Q311470: IIS Incorrectly Processes Escape Characters in URI"
permalink: /kb/311/Q311470/
---

## Q311470: IIS Incorrectly Processes Escape Characters in URI

	Article: Q311470
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Internet Information Services (IIS) version 5.0 receives a Uniform Resource
	Identifier (URI) that includes an embedded special character that is formatted
	as an escape character, IIS may not process the URI correctly. For example,
	instead of processing the escape character "%2b" as a plus sign (+), IIS may
	process the escape character "%2b" as an argument separator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000.
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
