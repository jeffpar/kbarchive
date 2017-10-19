---
layout: page
title: "Q39469: Process &quot;exit&quot; Values Must Lie Between 0 and 255 Inclusive"
permalink: /kb/039/Q39469/
---

## Q39469: Process &quot;exit&quot; Values Must Lie Between 0 and 255 Inclusive

	Article: Q39469
	Product(s): See article
	Version(s): 4.00 5.00 5.10 | 4.00 5.00 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_QUICKC | mspl13_c
	Last Modified: 29-DEC-1988
	
	Problem:
	
	I am testing the exit value of a process. This value is not accurate
	for values above 255.
	
	Response:
	
	Exit values must range between 0 and 255 inclusive. This limitation
	has its roots in the "terminate with return code" interrupt function
	(interrupt 21H, function 4CH). Using this function, exit values are
	specified in the AL register. The AL register allows values from 0 to
	255. All Microsoft C programs under DOS terminate using this function.
	
	Under OS/2, the same limitation exists. Although OS/2 does not use
	interrupts as DOS does, the reasoning is analogous.
	
	Exit values can be tested using the functions spawnl, spawnle, spawnlp,
	spawnlpe, spawnv, spawnve, spawnvp, and spawnvpe. Also, batch files may
	test exit values using the IF ERRORLEVEL statement.
