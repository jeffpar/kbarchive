---
layout: page
title: "Q34374: LINK /CO /DO in OS/2 Gives Protection Violation"
permalink: /kb/034/Q34374/
---

## Q34374: LINK /CO /DO in OS/2 Gives Protection Violation

{% raw %}

	Article: Q34374
	Product(s): See article
	Version(s): 5.01.21 | 5.01.21
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist5.01.21 | mspl13_basic
	Last Modified: 13-OCT-1988
	
	The Microsoft Segmented Link Utility Version 5.01.21 will
	incorrectly generate a protection violation under OS/2 when the
	command line uses the options /CO /DO, respectively.
	
	OS/2 gives the message SYS1943: "A program caused a protection
	violation." The SYS1811 violation follows, indicating the process has
	stopped.
	
	The work around for this problem is to order the switches differently.
	Instead of including /CO /DO in the command line, the command line can
	be reorder to /DO /CO.
	
	Microsoft has confirmed this to be a problem in Version 5.01.21. We are
	researching this problem and will post new information as it becomes
	available.

{% endraw %}
