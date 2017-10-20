---
layout: page
title: "Q117532: Password on Macintosh Volume Resets When Server is Rebooted"
permalink: /kb/117/Q117532/
---

## Q117532: Password on Macintosh Volume Resets When Server is Rebooted

{% raw %}

	Article: Q117532
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a Macintosh volume with a password and the password is
	subsequently removed, the original password returns the next time you boot
	Windows NT Advanced Server.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the Macintosh volume, and then recreate it
	without a password.
	
	To resolve this problem, upgrade to Windows NT Server version 3.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. This problem was corrected in Windows NT Server version 3.5.
	
	Additional query words: prodnt ntadvsrv
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
