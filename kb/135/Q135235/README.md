---
layout: page
title: "Q135235: SNA Admin Error Message Changing Domains When Using TCP/IP"
permalink: /kb/135/Q135235/
---

## Q135235: SNA Admin Error Message Changing Domains When Using TCP/IP

{% raw %}

	Article: Q135235
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Admin program generates a Dr. Watson error on SNAADMIN.EXE when
	you use "Select Domain" to choose another domain to administer. A Dr. Watson
	similar to the following is generated:
	
	  An application error has occurred and an application error log is being
	  generated.
	  snaadmin.exe
	  Exception: access violation (0xc0000005), Address: 0x00aaaad9
	
	NOTE: The actual Dr. Watson error may vary.
	
	This problem occurs when TCP/IP is installed.
	
	
	CAUSE
	=====
	
	The SNA Server TCP/IP transport DLL does not handle unexpected connection
	terminations correctly when SNA Server Admin closes a remote domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 trap drwtsn32 subdomain
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	
	=============================================================================
	

{% endraw %}
