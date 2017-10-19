---
layout: page
title: "Q269271: PRB: High CPU Utilization in IIS When Session State Is Disabled"
permalink: /kb/269/Q269271/
---

## Q269271: PRB: High CPU Utilization in IIS When Session State Is Disabled

	Article: Q269271
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 04-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a request is made for a page that contains the <%@
	EnableSessionState=False %> tag, the CPU utilization for IIS spikes and may
	or may not remain high.
	
	CAUSE
	=====
	
	This behavior has been shown to be caused by a corrupted metabase.
	
	RESOLUTION
	==========
	
	To work around this behavior, delete the virtual directory or application that
	is experiencing the problem, and then re-create the virtual directory or
	application. You do not have to modify the actual content.
	
	MORE INFORMATION
	================
	
	High CPU utilization may be caused by a variety of factors, including scripting
	code, COM objects, and load. This particular cause is specific to the corruption
	that is mentioned in the "Cause" section, and the resolution may not work in all
	cases.
	
	Before you make modifications, be sure to back up the metabase because, if it is
	corrupted, making the modifications may make the problem worse.
	
	REFERENCES
	==========
	
	For additional information about performance in Internet Information Server,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q235461 Enhancing Performance in Internet Information Server 4.0
	
	Additional query words: goes up high momentary sharp increase fall
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
