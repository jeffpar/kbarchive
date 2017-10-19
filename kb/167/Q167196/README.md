---
layout: page
title: "Q167196: SNA Server 3.0 SP1 Update May Break Named Pipe Clients"
permalink: /kb/167/Q167196/
---

## Q167196: SNA Server 3.0 SP1 Update May Break Named Pipe Clients

	Article: Q167196
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you apply SNA Server 3.0 Service Pack 1, named pipe clients may be unable
	to get sponsor connections to the computer running SNA Server. When you start
	the SnaBase service on an SNA Server Windows NT 3.x client configured to use
	Microsoft Networking (Named Pipes), the following error message appears:
	
	  SNA Server - Error # 1003
	
	  SNABase Could Not open Sponsor Connection To Server <servername>.
	
	This problem does not occur if the sponsor connection is configured to a SNA
	Server 3.0 Server (Service Pack 1 not applied) or if TCP/IP is selected in the
	"Select Client/Server Protocol for Client Setup" dialog box on the client.
	
	NOTE: This error message can appear for other reasons as well.
	
	CAUSE
	=====
	
	The SNA Server 3.0 Service Pack 1 update program updates the NullSessionPipes
	registry value, but fails to correctly add null- termination to the end of the
	last entry:
	
	  HKEY_LOCAL_MACHINE\System\ 
	  CurrentControlSet\Services\LanmanServer\Parameters\ 
	  NullSessionPipes:REG_MULTI_SZ:
	
	  COMNAP
	  COMNODE
	  SQL\QUERY
	  SPOOLSS
	  LLSRPC
	  EPMAPPER
	  LOCATOR
	  COMPROXY
	  COMNETM
	
	The last character of the last entry has been truncated, and is missing the
	terminating carriage return.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	System\CurrentControlSet\Services\LanmanServer\Parameters\ 
	
	3. Double-click NullSessionPipes.
	
	4. Change the last entry to COMNETMN and press ENTER.
	
	5. Click OK.
	
	6. Perform a shutdown and restart of Windows NT for the change to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP1. This problem
	was corrected in the latest SNA Server version 3.0 U.S. Service Pack. For
	information on obtaining this Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
