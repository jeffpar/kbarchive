---
layout: page
title: "Q233968: AspAllowOutOfProcComponents Is Obsolete in IIS 5.0"
permalink: kb/233/Q233968/
---

## Q233968: AspAllowOutOfProcComponents Is Obsolete in IIS 5.0

	Article: Q233968
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Services (IIS) version 5.0 now ignores the
	AspAllowOutOfProcComponents metabase property value and sets the default value
	to TRUE. This is a change from IIS 4.0, where this property was set to FALSE by
	default.
	
	MORE INFORMATION
	================
	
	In IIS 4.0, the AspAllowOutOfProcComponents metabase property was set to FALSE
	for security reasons, where it was possible for a user to start an
	out-of-process component that could later be used by another user in the
	original user's context. Changes in the architecture of IIS 5.0 prevent this
	from occurring and the value of this property is now ignored.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbhowto
	Solution Type     : kbpending
	
	=============================================================================
	
