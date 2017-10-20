---
layout: page
title: "Q162950: XADM: Err Msg When Using Isinteg -Patch: ECBadConfig"
permalink: /kb/162/Q162950/
---

## Q162950: XADM: Err Msg When Using Isinteg -Patch: ECBadConfig

{% raw %}

	Article: Q162950
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a server restore, Isinteg -patch returns this error message:
	
	  The private store could not be updated. Reason : ecBadConfig
	
	CAUSE
	=====
	
	The Isinteg.exe utility is being run on a workstation that has the Microsoft
	Exchange Server Administrator program installed, against a server across the
	network.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Run Isinteg -patch on the server you are restoring.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	

{% endraw %}
