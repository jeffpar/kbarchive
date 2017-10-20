---
layout: page
title: "Q234860: Dr. Watson Does Not Run with Certain Extensible Counters"
permalink: /kb/234/Q234860/
---

## Q234860: Dr. Watson Does Not Run with Certain Extensible Counters

{% raw %}

	Article: Q234860
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Dr. Watson is invoked whenever a user-mode exception occurs. Sometimes, Dr.
	Watson stops responding (hangs) and neither the OK or Cancel buttons are
	enabled. You may also see an event ID 1000 from perflib in the Application Event
	log, stating that Dr. Watson could not gain access to performance data.
	
	CAUSE
	=====
	
	There is an extensible counter that is keeping Dr. Watson from being able to
	query performance data.
	
	RESOLUTION
	==========
	
	Perform the troubleshooting steps in the following Microsoft Knowledge Base
	article:
	
	  Q152513 Troubleshooting Performance Monitor Counter Problems
	
	Using this article, identify which extensible counter is causing the problem and
	either replace the .dll file associated with the counter with an updated file or
	disable the counter.
	
	MORE INFORMATION
	================
	
	Misbehaving extensible counters can cause Performance Monitor or other
	third-party programs that query performance data to not work as well.
	
	Additional query words: perfmon watson extensible
	
	======================================================================
	Keywords          : kb3rdparty 
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
