---
layout: page
title: "Q67793: The Syntax for STACK Is Incorrect in EXEHDR Usage Statement"
permalink: /kb/067/Q67793/
---

## Q67793: The Syntax for STACK Is Incorrect in EXEHDR Usage Statement

{% raw %}

	Article: Q67793
	Product(s): See article
	Version(s): 2.01   | 2.01
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr s_exehdr | mspl13_basic
	Last Modified: 17-DEC-1990
	
	When the /? parameter is used for EXEHDR, a listing is displayed
	detailing the various switches accepted by EXEHDR. This list
	incorrectly indicates that the /STACK switch must be followed by a
	hexadecimal number between 0h and ffffh. In reality, the /STACK switch
	must be followed by either a decimal number between 0 and 65535 or a
	hexadecimal number using C notation (0x0 - 0xffff).
	
	If any other format is used, EXEHDR will return the following error
	messages:
	
	   EXEHDR: error U1110: malformed number xxxx
	   EXEHDR: error U1115: option /STACK:xxxx ignored

{% endraw %}
