---
layout: page
title: "Q45538: fcvt() Incorrectly Prototyped in QuickC Advisor"
permalink: /kb/045/Q45538/
---

## Q45538: fcvt() Incorrectly Prototyped in QuickC Advisor

{% raw %}

	Article: Q45538
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 26-JUN-1989
	
	In the QuickC 2.00 Advisor, the fcvt() function is incorrectly
	prototyped as the following:
	
	   char *fcvt(double value, inc count, int *dec, int *sign);
	
	The correct prototype is as follows:
	
	   char *fcvt(double value, int count, int *dec, int *sign);
	
	The second parameter is documented as being "inc count"; it should be
	"int count".

{% endraw %}
