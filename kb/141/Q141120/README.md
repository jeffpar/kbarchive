---
layout: page
title: "Q141120: BUG: FPNW &quot;error changing password&quot;"
permalink: /kb/141/Q141120/
---

## Q141120: BUG: FPNW &quot;error changing password&quot;

{% raw %}

	Article: Q141120
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Netware client connects to a Windows NT Server running FPNW and tries to
	change the password, the chgpass or setpass command may fail and the following
	error massage may appear:
	
	  Error changing password
	
	CAUSE
	=====
	
	The RPC server service does not process the change password request before the
	Netware client times out.
	
	WORKAROUND
	==========
	
	In Control Panel, select the Services icon, and set the RPC server and RPC
	Locator to start automatically. Then reboot the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
