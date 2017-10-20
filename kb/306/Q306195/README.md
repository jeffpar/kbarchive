---
layout: page
title: "Q306195: Event ID 2064 and 2075 After You Apply Windows 2000 Server SP2"
permalink: /kb/306/Q306195/
---

## Q306195: Event ID 2064 and 2075 After You Apply Windows 2000 Server SP2

{% raw %}

	Article: Q306195
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000 SP2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 SP2 Server 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows 2000 Service Pack 2 to your Windows 2000 Server-based
	computer, one or more of the following events may be logged to the Application
	Event log, and these events may be logged multiple times:
	
	  Event: 2075
	  Source: MsExchangeDSAccess
	  Description: Process MAD.EXE" (PID=1392) DsBind failed name of your server,
	  hr=0x80070862, deltaT=109. The operation will be retried.
	
	  Event: 2075
	  Source: MsExchangeDSAccess
	  Description: Process INETINFO.EXE (PID=1276) DsBind failed name of your
	  server, hr=0x80070862, deltaT=110. The operation will be retried.
	
	  Event: 2064
	  Source: MSExchangeDSAccess
	  Description: Process MAD.EXE" (PID=1392) All the remote DS Servers in use are
	  not responding.
	
	  Event: 2064
	  Source: MSExchangeDSAccess
	  Description: Process INETINFO.EXE (PID=1676) All the remote DS Servers in use
	  are not responding.
	
	  Event: 2064
	  Source: MSExchangeDSAccess
	  Description: Process WINMGMT.EXE (PID=1516) All the remote DS Servers in use
	  are not responding.
	
	  Event: 2064
	  Source: MSExchangeDSAccess
	  Description: Process STORE.EXE" (PID=3268) All the remote DS Servers in use
	  are not responding.
	
	NOTE: The PID number varies on individual servers.
	
	
	CAUSE
	=====
	
	This problem can occur because of the timing of the individual services that are
	shutting down during the server shutdown process. To verify that these events
	are being logged at server shutdown and not during boot-up or some other time:
	
	1. Shut down the server.
	
	2. Make a note of the time, wait a few minutes, and then restart the server.
	
	3. Check the Application Event Log, and then compare the time of the 2075 and
	  2064 events to the time that you noted in step 2. In most cases, the time
	  that the events are logged will have occurred before system startup.
	
	WORKAROUND
	==========
	
	To prevent these error messages from being logged:
	
	1. Click Start, point to Program Files, point to Administrative Tools, and then
	  click Services.
	
	2. Right-click Microsoft Exchange System Attendant, and then click Stop.
	
	3. When you are prompted to stop other services, click Yes.
	
	4. Right-click IIS Admin Service, and then click Stop.
	
	5. When you are prompted to stop other services, click Yes.
	
	6. Shut down or restart the server.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	You can safely ignore the error messages that are listed in the "Symptoms"
	section of this article.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbwin2000ServSearch kbwin2000Search kbExchangeSearch kbExchange2000Search kbwin2000ServSP2 kbExchange2000Serv
	Version           : :2000 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
