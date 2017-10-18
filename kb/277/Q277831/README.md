---
layout: page
title: "Q277831: XFOR: The Microsoft Mail Connector (PC) MTA Does Not Send NDRs"
permalink: kb/277/Q277831/
---

## Q277831: XFOR: The Microsoft Mail Connector (PC) MTA Does Not Send NDRs

	Article: Q277831
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a user on an Exchange Server 5.5 computer sends an e-mail message to a
	recipient on a Microsoft Mail (MS Mail) server that is connected by means of the
	Microsoft Mail Connector on the Exchange Server 5.5 computer, the user on the
	Exchange Server 5.5 computer may not receive a non-delivery report (NDR) if
	either of following conditions exist:
	
	- The MS Mail server is unavailable.
	
	-or-
	
	- The Microsoft Mail Connector (PC) MTA service cannot access the network
	  shared point of the MS Mail server postoffice.
	
	CAUSE
	=====
	
	On the Exchange Server 5.5 computer that is connected to the MS Mail server by
	the Microsoft Mail Connector, Exchange Server 5.5 increases the number of
	retries in the delivery process when Exchange Server 5.5 cannot send a message.
	An NDR is sent to a sender when the number of retries exceeds the limit of "Max
	open retries" in the message transfer agent (MTA) properties.
	
	This problem can occur if the MS Mail server is down or the Exchange Server 5.5
	computer cannot access the network shared point of the MS Mail server
	postoffice, because Exchange Server 5.5 cannot start the delivery process and
	does not increase the number of retry times. Therefore, the number of retries
	does not exceed the limit of the "Max open retries" property and an NDR is not
	sent.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Exchange Server version 5.5
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Microsoft Mail Connector
	
	  Date          Version      Size        File name         Platform
	  -----------------------------------------------------------------
	  16-Dec-2000   0.0.0.0000   1,097,728   Q277831engi.exe   Intel
	
	After the fix is installed, the following files will have the listed attributes
	or later:
	
	  File name      Version
	  --------------------------
	  Async.exe      5.5.2654.34
	  Mt.exe         5.5.2654.34
	  X25eicon.exe   5.5.2654.34
	  Xtnmsg.dll     5.5.2654.34
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	After you install this fix for the Microsoft Mail Connector (PC) MTA service on
	the servers to replace the fixed files, you need to add the EnforceRetryLimits
	registry key under the <PCMTA_service> key on each server for which you
	want to change the behavior. To do so, you need to edit the registry on each
	server.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To add the EnforceRetryLimits registry key:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<PCMTA_service>
	
	  To locate the value for the <PCMTA_service> key:
	
	  a. In the Microsoft Exchange Administrator program, click the
	     <site_name> object, and then click the Configuration object.
	
	  b. Click the Connections object, right-click Microsoft Mail Connector, and
	     then click Properties.
	
	  c. Click the Connector MTAs tab, and then click MS Mail Connector (PC) MTA
	     Services in the list.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: EnforceRetryLimits
	  Data Type: DWORD
	  Value: 1
	
	4. Quit Registry Editor.
	
	5. Restart the Microsoft Mail Connector (PC) MTA service.
	
	Additional query words: MMC
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
