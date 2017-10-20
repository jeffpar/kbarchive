---
layout: page
title: "Q268357: XADM: Exchange Clients Seem to Hang When Store Queries Directory"
permalink: /kb/268/Q268357/
---

## Q268357: XADM: Exchange Clients Seem to Hang When Store Queries Directory

{% raw %}

	Article: Q268357
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550sp4Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	It may appear that the client process has stopped responding (hangs), and it
	displays the hourglass cursor for long periods, yet the process eventually
	returns control to the user. This behavior typically reoccurs throughout the
	day, often during replication cycles, and only when the site is under load.
	
	As measured by Performance Monitor, the information store becomes unresponsive,
	accompanied by spikes in the RPC Requests counter while the Write Bytes RPC
	Clients/sec counter remains at zero. High remote procedure call (RPC) requests
	by themselves or low write bytes alone are not related to this problem. Only
	when a server experiences both of these simultaneously might this be the
	problem.
	
	This behavior has only been observed within Exchange Server organizations with
	hundreds of sites.
	
	CAUSE
	=====
	
	Large Exchange Server organizations with hundreds of sites often require a few
	minutes to complete a search of the directory by the information store. When
	certain objects are modified in the directory, a notification may be triggered
	to tell the information store to rebuild such things as site addressing lists or
	valid SMTP domain lists.
	
	If the information store is already very busy searching the directory for
	something, and is notified that an object in the directory that it was watching
	has changed, the information store may return a DS_E_TOO_LATE error, which looks
	like the following in the Application event log:
	
	  Event ID: 7201
	  Source: MSExchangeIS
	  Type: Warning
	  Category: General
	  Description: Background thread FDsWaitTask encountered a problem.
	  Error code DS_E_TOO_LATE
	
	The information store's response to this error is to rebuild the list of objects
	it was searching against. In these cases, the information store is using
	serialized access to read from the directory, which compounds the slowness. When
	the server is already busy trying to handle client requests (some of which are
	likely waiting for this search to finish), clients appear to hang because they
	are waiting for their RPC calls to finish. Note that each update can force the
	information store to search the directory for information, so a long string of
	updates can lead to several minutes of apparent hang time.
	
	Of course, clients often produce the hourglass cursor for many reasons completely
	unrelated to this problem. In this case the client is waiting for response from
	the server, and consumes little or no CPU time on the client computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	You can decrease or dampen the effect of this problem by increasing the time that
	the directory replication bridgehead server waits before it notifies other
	servers in the site of changes. You can increase this time in the following the
	registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS\Parameters\Replicator
	  notify pause after modify (secs)
	
	The default value for this key is 0x12C, or 300 seconds (five minutes). If you
	increase this value to match the duration of the longest series of hangs, you
	may reduce the impact of the problem.
	
	The strategy here is to force the directory replication bridgehead to hold on to
	its updates a bit longer. This decreases the chance that a series of randomizing
	updates will pour into the site. Note that each update might force the
	information store to search the directory for information, and that an update
	during a period where the information store is already searching the directory
	is where this problem begins.
	
	Note that like any performance tuning, there is a balance or equilibrium to be
	maintained. If you increase this registry value, you can reduce the likelihood
	of client hangs but at the expense of potentially slower times to complete
	directory replication.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	It can be helpful to use Performance Monitor to diagnose this problem. Use the
	following objects:
	
	- MsExchangeIS::RPC Requests
	
	- MsExchangeIS::Write Bytes RPC Clients/sec
	
	- MsExchangeDS::ExDS Reads/sec
	
	A typical Performance Monitor graph of this problem depicts
	MsExchangeIS::RPCRequests (and possibly, MsExchangeDS::ExDS Reads/sec) spiking
	upward, while at the same time MsExchangeIS::Write Bytes RPC Clients/sec dives
	to 0 and remains there. Eventually, RPC Requests returns to normal levels and
	Write Bytes returns up to its typical values.
	
	
	Additional query words: lag hourglass slow IS DS perfmon
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
