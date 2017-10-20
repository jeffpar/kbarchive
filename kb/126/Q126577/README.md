---
layout: page
title: "Q126577: SMS Modifies Application INI Files"
permalink: /kb/126/Q126577/
---

## Q126577: SMS Modifies Application INI Files

{% raw %}

	Article: Q126577
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you specify the location of the WORKGROUP-DOT-PATH during a workstation
	installation of Word for Windows version 6.0 on a Windows for Workgroups version
	3.11 system, Systems Management Server overwrites the user-modified entries in
	the WINWORD6.INI file.
	
	For example, after you install Word for Windows, your WINWORD6.INI file
	contains:
	
	  [Microsoft Word]
	  USER-DOT-PATH=C:\WINWORD\TEMPLATE
	  WORKGROUP-DOT-PATH=<net drive>:\TEMPLATE
	
	where <net drive> is the network drive letter of the shared application.
	
	You modify the WINWORD6.INI file to read:
	
	  [Microsoft Word]
	  USER-DOT-PATH=C:\WINWORD\TEMPLATE
	  WORKGROUP-DOT-PATH=C:\WINWORD\TEMPLATE
	
	After you install SMS, the WINWORD6.INI file contains:
	
	  [Microsoft Word]
	  USER-DOT-PATH=C:\WINWORD\TEMPLATE
	  WORKGROUP-DOT-PATH=<net drive>:\TEMPLATE
	
	where <net drive> is the network drive letter of the shared application.
	
	WORKAROUND
	==========
	
	
	Additional query words: sms prodsms winword word6
	
	======================================================================
	Keywords          : kbinterop kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
