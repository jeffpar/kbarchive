---
layout: page
title: "Q263718: XADM: Performance Optimizer Service Restart Stops on KM Server"
permalink: /kb/263/Q263718/
---

## Q263718: XADM: Performance Optimizer Service Restart Stops on KM Server

{% raw %}

	Article: Q263718
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 18-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Exchange Server Performance Optimizer finishes, it attempts to restart
	every Exchange Server service that was running when Performance Optimizer
	started. If Exchange Server key Management server (KM server) is installed,
	Performance Optimizer cannot start the KM server service. If you allow
	Performance Optimizer to continue to try to start the service, Performance
	Optimizer eventually stops responding and the following error message is
	displayed:
	
	  The service could not be started. It did not respond in a timely manner. -
	  [800FF351]
	
	MORE INFORMATION
	================
	
	The error message in the "Summary" section of this article is displayed because
	the correct startup parameters are not used when the service is started. The
	startup parameter string is provided during the setup of KM server and is
	referred to as the "KMS password used to encrypt the database."
	
	To prevent Performance Optimizer from stopping at the KM server service, either
	make sure that you stop the KM server service before you start Performance
	Optimizer, or make sure that you click the "Do not restart these services"
	option in the last dialog box of Performance Optimizer.
	
	If Performance Optimizer stops responding when it tries to start the KM server
	service, you can quit the process by using Task Manager:
	
	1. Press CTRL+ALT+DEL, and then click Task Manager.
	
	2. In Task Manager, click the Applications tab, click Microsoft Exchange
	  Performance Optimizer, and then click End Task.
	
	3. A dialog box is displayed that provides the options to Wait, End Task, or
	  Cancel. Click End Task.
	
	After you perform these steps, you can manually start your Exchange Server
	services.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
