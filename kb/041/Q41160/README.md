---
layout: page
title: "Q41160: Getpid under DOS Is Not Functional"
permalink: /kb/041/Q41160/
---

## Q41160: Getpid under DOS Is Not Functional

{% raw %}

	Article: Q41160
	Product(s): See article
	Version(s): 5.00 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 16-MAY-1989
	
	Under DOS versions earlier than Version 4.00, the getpid() function
	returns the current time rather then the process ID as expected.
	
	DOS is a single-tasking operating system, so it does not generate a
	process ID and the Getpid function should not be used. Getpid is
	intended to be used with OS/2 and serves no purpose under DOS.

{% endraw %}
