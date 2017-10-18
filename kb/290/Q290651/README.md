---
layout: page
title: "Q290651: XADM: Cannot Bring Exchange Services Online Using Cluster Admin"
permalink: kb/290/Q290651/
---

## Q290651: XADM: Cannot Bring Exchange Services Online Using Cluster Admin

	Article: Q290651
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to bring an Exchange Server service online by using Windows 2000
	Cluster Administrator (for example, System Attendant), the procedure may fail,
	and the service Start option may change from Manual to Disabled.
	
	If you use the Services tool in Control Panel to change the Start option from
	Disabled to Manual again, and then try to bring the service online, the
	procedure fails again and the service Start option changes to Disabled again.
	
	When this issue occurs, you cannot start the Exchange Server service because the
	Start option for the service is always Disabled, and the service status in
	Cluster Administrator is always displayed as Failed.
	
	CAUSE
	=====
	
	The issue may occur in either of the following scenarios:
	
	- On the Generic Service Registry Replication page, the root registry key of a
	  service is included. For example:
	
	  SYSTEM\CurrentControlSet\Services\MSExchangeSA
	
	- You manually changed the service Start option from Manual to Disabled when
	  the specific service was online.
	
	The Start option is saved in the root registry key of a specific service. The
	Start REG_DWORD value represents the Start option. When the specific service is
	online, and you change the Start option from Manual to Disabled, the Start
	option is saved in a Cluster generic service checkpoint file. After you take the
	service offline, the Start option in the checkpoint file remains as Disabled.
	
	When the service is offline, even if you change the service Start option in
	Control Panel from Disabled to Manual, and then try to bring the service online
	by using Cluster Administrator, the Start option (Disabled) is written from the
	checkpoint file to the registry. In this case, the service does not start.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow the Exchange Server service registry replication
	registry key and do not change it. The default settings of core Exchange Server
	services do not include any service's root registry key. Use Cluster
	administrator to change the services' Registry Replication setting back to the
	default setting, and then change these services' Start options back to Manual.
	
	The registry key for the Exchange Server services are:
	
	- System Attendant
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeSA\Diagnostics
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeSA\Parameters
	
	- Directory Service
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeDS\Diagnostics
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeDS\Parameters
	
	- Information Store
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeIS\Diagnostics
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeIS\Parameters
	
	- Message Transfer Agent
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Diagnostics
	
	   - SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	MORE INFORMATION
	================
	
	Users often make two mistakes when they use Exchange Server on a Windows 2000
	Cluster:
	
	- Some users replicate root registry keys of Exchange Server services. However,
	  Exchange Server server configuration information is saved in the following
	  two registry subkeys:
	
	   - ...\Diagnostics
	
	   - ...\Parameters
	
	  If you replicate the root registry, you may experience issues.
	
	- Some users like to disable the Microsoft Exchange System Attendant service to
	  prevent the service from automatically starting after the server is restarted
	  for maintenance reasons. However, if you want to prevent a Cluster resource
	  or group from automatically starting, it is recommended that you change the
	  PersistentState key instead.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q259243 How to Set the Startup Value for a Resource on a Clustered Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
