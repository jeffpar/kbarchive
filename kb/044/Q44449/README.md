---
layout: page
title: "Q44449: QuickC 2.00 Debugger Does Not Support Huge Pointers/Model"
permalink: /kb/044/Q44449/
---

## Q44449: QuickC 2.00 Debugger Does Not Support Huge Pointers/Model

{% raw %}

	Article: Q44449
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 18-MAY-1989
	
	The QuickC Version 2.00 debugger does not support the huge-memory
	model. It does not supply any information regarding huge pointers,
	even if the specified model is large, not huge.
	
	The debugger allows a watch to be placed on the pointer, but instead
	of supplying useful values, the following message appears in the debug
	window as soon as the variable is declared:
	
	   image: <Debugger does not support huge model>
	
	This is intentional program design for the product.

{% endraw %}
