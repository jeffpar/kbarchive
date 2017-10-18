---
layout: page
title: "Q289813: Mapping Server Displays Incorrect Special Group Error Message"
permalink: kb/289/Q289813/
---

## Q289813: Mapping Server Displays Incorrect Special Group Error Message

	Article: Q289813
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create an advanced group mapping, you may receive the following
	error message:
	
	  You have specified a special Windows Account.
	  Are you sure you want to set an advanced mapping for this account?
	
	CAUSE
	=====
	
	This problem can occur because the Mapping server always compares the group to
	the UNIX group numbers. The error message that is listed in the "Symptoms"
	section of this article is generated if the Windows group has the same name as a
	special UNIX group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The error message that is listed in the "Symptoms" section of this article has
	no effect on functionality and can be safely ignored.
	
	
	Additional query words: solar coaster solarcoaster
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
