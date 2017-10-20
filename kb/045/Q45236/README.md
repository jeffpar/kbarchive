---
layout: page
title: "Q45236: wait() and cwait() Prototyped in QuickC 2.00 Include Files"
permalink: /kb/045/Q45236/
---

## Q45236: wait() and cwait() Prototyped in QuickC 2.00 Include Files

{% raw %}

	Article: Q45236
	Product(s): See article
	Version(s): 2.00
	Operating System(s): DOS
	Keyword(s): ENDUSER | S_C | mspl13_c
	Last Modified: 8-JUN-1989
	
	Although wait() and cwait() are prototyped in the PROCESS.H include
	file from QuickC Version 2.00, neither of these functions is
	documented or found in the libraries.
	
	Both functions are for protected mode only and should not be in any of
	the QuickC libraries. They are in the include file for use with C
	Version 5.10. If a conflict arises due to prototypes, they
	can be removed.

{% endraw %}
