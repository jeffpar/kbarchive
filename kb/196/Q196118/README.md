---
layout: page
title: "Q196118: DNS May Not Transfer Some Glue Records to Secondary Servers"
permalink: /kb/196/Q196118/
---

## Q196118: DNS May Not Transfer Some Glue Records to Secondary Servers

{% raw %}

	Article: Q196118
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the primary DNS server for a zone is resident in a subdomain of that zone,
	secondary DNS servers may not accept glue records for the primary server.
	
	CAUSE
	=====
	
	The Microsoft DNS server running on the secondary may not write glue records for
	entries pointing to a delegated zone, if that same zone is also contained on the
	server.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                  Size    File Name     Platform
	  --------------------------------------------------------------
	  11/17/98  02:23p               176,912  Dns.exe       (x86)
	  11/17/98  02:23p               297,232  Dns.exe       (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: 4.00 dns glue
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
