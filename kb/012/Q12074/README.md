---
layout: page
title: "Q12074: CLEAR Should Not Be Used in Event Trap"
permalink: /kb/012/Q12074/
---

## Q12074: CLEAR Should Not Be Used in Event Trap

{% raw %}

	Article: Q12074
	Product(s): See article
	Version(s): 2.00 2.01 3.00 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 4-JAN-1990
	
	The presence of a CLEAR statement in the following event handling
	routine generates an "Illegal function call" error at compile time:
	
	      CLEAR ,,800
	      KEY(2) ON
	      ON KEY(2) GOSUB 200
	      WHILE INKEY$="" : WEND
	      PRINT "this is a test"
	      END
	  200 CLEAR ,,800
	      PRINT "this worked"
	      RETURN
	
	The error occurs because the CLEAR statement changes the stack. The
	CLEAR statement is not allowed in an event handler because it would
	destroy the return address.

{% endraw %}
