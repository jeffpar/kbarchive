---
layout: page
title: "Q231488: XADM: Public Folder Object Is Not Found in the Directory"
permalink: kb/231/Q231488/
---

## Q231488: XADM: Public Folder Object Is Not Found in the Directory

	Article: Q231488
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can create and use public folders using Microsoft Outlook without any
	problems, but if you attempt to view the properties of any of these newly
	created public folders using the Exchange Server Administrator program, you may
	receive the following error message:
	
	  Object does not exist in the Directory. Replication may not have completed.
	
	Events similar to the following may also be logged in the application event log:
	
	  Event ID: 270
	  Source: MsExchangeMTA
	  Description: A permanent error has occurred with Entity
	  /O=Organization/OU=SITE01/CN=CONFIGURATION/CN=SERVERS/CN=EXCHANGE0E/CN=MICROSOFT
	  PUBLIC MDB. Entity is a Message Object is a Normal Priority Message.
	  Object: 060000FD.
	  Message ID: C=US;A=ATTMAIL;P=JHANCOCK;L=EXCHANGE08-990413151837Z-10757
	  Content length: 1973, External Trace information (first 100 bytes) =
	  308063806180130255530000628013074154544D41494C000013084A48414E434F434B0000318080113939303431333131313833372D303430308201008302060000000000,
	  PDU dump reference 26 [MTA SUBMIT 14 74] (14)
	
	  Event ID: 2025
	  Source: MsExchangeIS Public
	  Description: The delivery of a message failed due to error FFFFF9BF. A
	  non-delivery report is being sent to the message's originator.
	
	If you run the DS/IS consistency adjuster, the following events are logged in the
	application event log:
	
	  Event ID: 7000
	  Source: MsExchangeIS Public
	  Description: Unable to update the directory service for the public folder ROOT
	  FOLDER NAME\SUBFOLDER.
	
	  Event ID: 7041
	  Source: MsExchangeIS Public
	  Description: Error 4021 occurred while creating the directory service object
	  for public folder ROOT FOLDER NAME\SUBFOLDER.
	
	CAUSE
	=====
	
	The service account does not have Add Child permissions set at the site level
	for the site where the public folder server resides. If the service account does
	not have Service Account Administrator permissions set, and does not have Add
	Child permissions set for the site level, the problem described in the
	"Symptoms" section occurs.
	
	RESOLUTION
	==========
	
	Make sure that the service account has Service Account Administrator permissions
	set for the organization, site, and configuration levels. If the service account
	has Custom Role permissions set, it must have Add Child permissions set for the
	site level. After you set the correct permissions, run the DS/IS consistency
	adjuster to synchronize public folders with the directory.
	
	NOTE: Microsoft strongly recommends that you review the functionality of the
	DS/IS consistency adjuster before you use it. For additional information about
	the process and effects of running the DS/IS consistency adjuster, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q182979 XADM: Function and Effects of Running the DS/IS Consistency
	  Adjustment
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
