---
layout: page
title: "Q30959: chdir() Example Is Incorrect"
permalink: /kb/030/Q30959/
---

## Q30959: chdir() Example Is Incorrect

{% raw %}

	Article: Q30959
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 12-OCT-1988
	
	The example of the chdir() function on Page 156 of the "Microsoft C
	Run-Time Library Reference" manual is incorrect. This example is
	missing double quotation marks around the path. It should read as
	follows:
	
	chdir("c:\\temp") ;

{% endraw %}
