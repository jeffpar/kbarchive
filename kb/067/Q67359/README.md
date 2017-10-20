---
layout: page
title: "Q67359: Incorrect Definition Given for the Time Zone Variable"
permalink: /kb/067/Q67359/
---

## Q67359: Incorrect Definition Given for the Time Zone Variable

{% raw %}

	Article: Q67359
	Product(s): See article
	Version(s): 6.00 6.00a | 6.00 6.00a
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 4-DEC-1990
	
	The variable, "timezone", a member of the timeb structure defined in
	SYS\TIMEB.H, is incorrectly documented as returning the difference in
	seconds between Greenwich Mean Time and local time, in both the online
	help and the Microsoft Press book, "Microsoft C Run-Time Library
	Reference." The difference is returned in minutes, not seconds.
	
	The "timezone" variable is documented correctly in both the online help
	and the Microsoft Press book, "Microsoft C Run-Time Library Reference"
	manual, in the description for the ftime() function.

{% endraw %}
