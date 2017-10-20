---
layout: page
title: "Q103498: Telebit T2500 Modem Fails to Dial Out"
permalink: /kb/103/Q103498/
---

## Q103498: Telebit T2500 Modem Fails to Dial Out

{% raw %}

	Article: Q103498
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Telebit T2500 often fails to dial out on a port that is configured for
	Dial-out and Receive Calls when used with Windows NT Remote Access Service
	(RAS).
	
	CAUSE
	=====
	
	This problem is due to the modem dropping the data set ready (DSR or modem
	ready) signal when it is being reset for dial out by the RAS server. Other
	modems do not exhibit this behavior, like the Hayes Ultra 9600.
	
	The Telebit product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
