---
layout: page
title: "Q57357: Missing Dollar Sign on a Call to Assembly Routine"
permalink: /kb/057/Q57357/
---

## Q57357: Missing Dollar Sign on a Call to Assembly Routine

{% raw %}

	Article: Q57357
	Product(s): See article
	Version(s): 7.00 7.10 | 7.00 7.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# S891226-5 docerr | mspl13_basic
	Last Modified: 8-JAN-1991
	
	On Page 372 of the "Microsoft BASIC 7.0: Language Reference" manual
	(for 7.00 and 7.10) the CALL to Makestring needs to have a dollar sign
	appended to the end of it as shown below.
	
	The following is incorrect:
	
	   PRINT Makestring
	
	It should be the following:
	
	   PRINT Makestring$
	
	This information applies to Microsoft BASIC Professional Development
	System (PDS) versions 7.00 and 7.10 for MS-DOS and MS OS/2.

{% endraw %}
