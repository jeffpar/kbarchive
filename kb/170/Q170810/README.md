---
layout: page
title: "Q170810: XADM: Service Specific Error 4021 Starting Information Store"
permalink: /kb/170/Q170810/
---

## Q170810: XADM: Service Specific Error 4021 Starting Information Store

	Article: Q170810
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DS_E_INSUFFICIENT_ACCESS_RIGHTS error occurs when you try to start the
	Microsoft Exchange Server information store service. This error is displayed in
	a dialog box with the following text:
	
	  The Microsoft Exchange Information Store service returned
	  service specific error 4021.
	
	The event viewer will also show this same error.
	
	CAUSE
	=====
	
	This error occurs because a directory store database is restored which contains
	a service account with an incorrect security ID (SID). This may happen if the
	Windows NT Security Account Manager (SAM) database has been lost or re-created.
	The Exchange Server directory service will start, but after starting the
	information store service, the error message displays.
	
	WORKAROUND
	==========
	
	The directory service can be regenerated using the restored version of the
	information store databases.
	
	1. Reinstall Exchange Server with the new service account and restore only the
	  information store databases.
	
	2. Run the Isinteg -patch command to synchronize the GUIDs between the
	  information store and directory service databases.
	
	3. Start the Exchange Server directory service.
	
	4. In the Exchange Server Administrator program, choose the Exchange Server
	  computer's Server Properties page.
	
	5. On the Advanced tab, under "DS/IS consistency adjustment", select "All
	  inconsistencies", and then click Adjust.
	
	  NOTE: In Exchange 5.5, select the "Synchronize with the directory" check box,
	  and then create new directory entries for mailboxes that do not have a
	  corresponding directory entry.
	
	Your directory should be repopulated and contain a service account with a proper
	SID.
	
	If a .CSV file with exported directory information is available, that information
	can be imported into the Microsoft Exchange Server directory.
	
	MORE INFORMATION
	================
	
	For more information, see the Disaster Recovery white paper from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/exchange/techinfo/administration/55/BackupRestore.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
