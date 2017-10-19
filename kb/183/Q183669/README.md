---
layout: page
title: "Q183669: XADM: Troubleshooting Intersite Directory Replication"
permalink: /kb/183/Q183669/
---

## Q183669: XADM: Troubleshooting Intersite Directory Replication

	Article: Q183669
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes steps for troubleshooting intersite (servers in different
	sites) directory replication for Exchange Server.
	
	MORE INFORMATION
	================
	
	Directory replication can take several hours to finish. Even if you have run
	Knowledge Consistency Checks, Update Nows, or Request Nows, replication can
	still take several hours to fully complete.
	
	If replication is not occurring and enough time has passed that replication
	should have occurred, use the following questions to help you determine where
	the problem is:
	
	1. What kind of connector (or connectors) is involved?
	
	  Find out what kind of connector is being used between the sites that are
	  replicating.
	
	2. Do messages flow across the connector?
	
	  Messages must travel back and forth between the sites in order for replication
	  to occur. Try to send a message from the other server, using the X.400
	  one-off address of a recipient. If the message does not make it across the
	  connection, check the configuration of the connector being used on BOTH
	  SIDES. Make sure the connector is set up properly and that messages are
	  flowing before you try to get replication working.
	
	3. Are the two sites in the same domain or different domains?
	
	  If the two sites are in the same domain, there should be no problems with
	  security; however, please see the next question.
	
	  If the sites are in different domains, there must be a two-way trust between
	  the domains. If there is no trust, identical accounts and passwords must be
	  used for the Exchange service account. Or, the Override tab must be used if
	  the particular connector has an Override tab. Currently, only the RAS
	  Connector and the Site Connector have an Override tab.
	
	4. Are the two sites using the same service account?
	
	  In the case of the Site Connector, if the two sites are using different
	  service accounts, you must add the service account for each site as a Service
	  Account Administrator to each of the respective sites, or you must use the
	  Override tab on the Site Connector.
	
	5. What kind of connection exists between the sites?
	
	  Replication can fail if there is not enough bandwidth for the connector being
	  used. Be sure to check this whether the sites are connected using Site
	  Connectors. Microsoft recommends at the very least a 64-KB link if a Site
	  Connector is used with replication.
	
	6. Is there anything in the event log, or are there any other error messages?
	
	  Check the event viewer for any warnings or stop messages pertaining to
	  replication. These may help to narrow down the source of the problem. Also
	  check the event ID against the Microsoft Knowledge Base. Information found in
	  the Knowledge Base may help in resolving the issue.
	
	7. If you have gone through the above steps and everything appears to be set up
	  correctly and nothing seems to be a problem, you should turn up Diagnostics
	  Logging on the directory and on the MTA of the servers with the problem, in
	  the following categories:
	
	     MSExchangeDS        MSExchangeMTA
	
	     Replication         X.400 Service
	     ExDS Interface      Interface
	     Directory Access    Configuration
	                         Directory Access
	                         Internal Processing
	
	
	Change the logging level to Maximum on the above categories on all affected
	servers, and then perform a Request Now from the Sites tab of the Replication
	Connectors on all affected servers. Information gained from the event logs on
	the servers may prove useful in determining the cause of the problem.
	
	
	Additional query words: tshoot
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
