---
layout: page
title: "Q323301: The YPCAT Command May Produce Unexpected Results"
permalink: kb/323/Q323301/
---

## Q323301: The YPCAT Command May Produce Unexpected Results

	Article: Q323301
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 23-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows Services for UNIX (SFU) 3.0, if you run the ypcat command against the
	"netgroup.byuser" or "netgroup.byhost" map, the results may be incomplete. This
	might cause a UNIX client not to be able to use network resources if the
	client's logon process depends on parsing the results of the command.
	
	CAUSE
	=====
	
	This behavior may occur if the "netgroup.byuser" or "netgroup.byhost" map
	contains a hyphen (-) or a null entry ("").
	
	WORKAROUND
	==========
	
	Use the ypcat command to query the "netgroup" map. Group the results by user.
	You can also use the ypmatch command against the "netgroup" map to obtain the
	same results.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: solar coaster solarcoaster interix dash
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
