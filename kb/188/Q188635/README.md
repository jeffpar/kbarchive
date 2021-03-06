---
layout: page
title: "Q188635: XADM: Changing the State of Circular Logging Fails on a Cluster"
permalink: /kb/188/Q188635/
---

## Q188635: XADM: Changing the State of Circular Logging Fails on a Cluster

{% raw %}

	Article: Q188635
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the state of circular logging of an Exchange Server
	computer running on a Microsoft Cluster Server, the following error message
	occurs:
	
	  A stop control has been sent to a service which other running
	  services are dependent on.
	  Microsoft Windows NT
	  ID no: 0xc002041b
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	  Component: Administrator Program
	
	  File Name   Version
	  ----------------------
	  Admin.exe   5.5.2440.0
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Start the Cluster Administrator program and open the group that was created
	  for Exchange Server.
	
	2. Right-click on each Resource Type of Generic Service (these are the Exchange
	  Server service resources in the Exchange Cluster group such as Microsoft
	  Exchange Server directory, Event service, information store, and so on).
	
	3. Click Properties on the pop-up menu, and then click the Advanced tab.
	
	4. Click the "Do not restart" radio button, and then click the OK button for
	  each of these services.
	
	5. Open the Exchange Server Administrator program and connect to the clustered
	  Exchange Server computer.
	
	6. Open the Configuration object, and then open the Servers object. Highlight
	  the server that is the clustered Exchange Server computer.
	
	7. Click File, click Properties, and then click the Advanced tab.
	
	8. Change the state of Database Circular Logging and then click OK. When you go
	  back to the Exchange Administrator program, circular logging will be changed.
	
	9. In the Cluster Administrator program, open the group that was created for
	  Exchange Server.
	
	10. Right-click on each Resource Type of Generic Service again, click Properties
	  on the pop-up menu, and then click the Advanced tab.
	
	11. Click the "Restart" radio button and click the OK button for each of these
	  services.
	
	12. Right-click on each of the Exchange Server service resources and choose
	  "Bring Online" on the pop-up menu. The services should then come online in
	  the cluster.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
