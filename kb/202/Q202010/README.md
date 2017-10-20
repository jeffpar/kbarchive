---
layout: page
title: "Q202010: SMS: &quot;Out of Environment Space&quot; Error on Windows 95 Clients"
permalink: /kb/202/Q202010/
---

## Q202010: SMS: &quot;Out of Environment Space&quot; Error on Windows 95 Clients

{% raw %}

	Article: Q202010
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 13-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Systems Management Server (SMS) 1.2 client on a
	computer that is running Microsoft Windows 95, you may receive an "Out of
	Environment Space" error message.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Check the Autoexec.bat and Config.sys files for any environment size
	  settings. If you find any, make sure they are of appropriate size (2 KB
	  should be sufficient).
	
	2. Check the System.ini file for a [NonWindowsApp] section. If this section
	  exists, make sure the line "CommandEnvSize=2048" is present. If this section
	  does not exist, create it with the "CommandEnvSize=2048" line.
	
	3. Save the changes to the System.ini file, and then restart the computer.
	
	4. Run the Runsms.bat or Smsls.bat batch file to install the SMS client.
	
	MORE INFORMATION
	================
	
	This problem may occur, for example, if you remove and then reinstall the SMS
	client after installing SMS 1.2 Service Pack 3 (SP3) for troubleshooting
	purposes.
	
	
	
	This problem can also occur if a terminate-and-stay-resident (TSR) program (such
	as Norton AntiVirus) is running and using some of the environment space.
	Additionally, a similar error message ("Runtime error R6009 not enough space for
	environment") may occur when you run inventory on client computers that are
	running Windows 95. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q188549 SMS: Runtime Error R6005/R6009 During Inventory on Windows 95 Client
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms env sp sp3 anti-virus
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
