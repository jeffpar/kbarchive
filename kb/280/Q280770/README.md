---
layout: page
title: "Q280770: Information Store Fails After You Restore an Offline Backup"
permalink: kb/280/Q280770/
---

## Q280770: Information Store Fails After You Restore an Offline Backup

	Article: Q280770
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restore an offline backup of the information store database from a
	computer that is running Microsoft Windows NT 4.0 and Exchange Server 5.5 to a
	Microsoft Windows 2000 and Exchange Server 5.5 cluster, if you run the isinteg
	-patch command, it seems that the command completes successfully. However, when
	you start the information store, you may receive the following error message:
	
	  Microsoft Management Console
	  Windows could not start the Microsoft Exchange Information Store on local
	  computer. For more information review the system event log. If this is a
	  non-Microsoft service, contact the service vendor and refer to service
	  specific error code 1012.
	
	In addition, the following event ID message may be logged in the System log:
	
	  Event ID: 7024
	  Source: Service Control Manager
	  Description: The Microsoft Exchange Information Store service terminated with
	  service specific error 1012.
	
	The following event ID messages may be logged in the Application event log:
	
	  Event ID: 7202
	  Source: MSExchangeIS Private
	  Description: The database has been copied from the server (server name) to the
	  server (server name). The database cannot function until Isinteg -patch has
	  been run.
	
	  -and-
	
	  Event ID: 1005
	  Source: MSExchangeIS Private
	  Description: Unable to start the Microsoft Exchange Information Store. Error
	  0x3f4.
	
	These messages indicate that the isinteg command actually has not completed
	successfully.
	
	CAUSE
	=====
	
	This issue may occur if you omitted the trailing underscore when you set the
	required "_CLUSTER_NETWORK_NAME_" environment variable at a command prompt (for
	example, if you entered "_CLUSTER_NETWORK_NAME").
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following format when you type the environment
	variable at a command prompt:
	
	  SET _CLUSTER_NETWORK_NAME_=<Cluster Name>
	
	To determine the cluster name:
	
	1. Start the Cluster Administrator program from the Administrative Tools program
	  group.
	
	2. Click to expand the Groups container, and then click the appropriate cluster
	  group in the left pane.
	
	3. In the right pane, right-click the cluster name resource, click the
	  Parameters tab, and then note the name that is listed on the tab.
	
	  Use this name to set the cluster environment variable before you run isinteg
	  -patch.
	
	MORE INFORMATION
	================
	
	This article assumes that you performed an offline defragmentation procedure of
	the information store databases after the databases were restored and copied to
	the Windows 2000-based server before you ran isinteg -patch. When an Exchange
	Server 5.5 database is restored to another operating system or to the same
	operating system that is running a different service pack level, you must
	perform an offline defragmentation procedure of the database so that the
	corresponding service for that database can start.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q224977 Information Store Fails to Start: 4294965882, FFFFFA7A, Event 177,
	  1081, and Others
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
