---
layout: page
title: "Q278614: XADM: Event 8285 When Replicating Mailboxes from Exch5.5 to AD"
permalink: /kb/278/Q278614/
---

## Q278614: XADM: Event 8285 When Replicating Mailboxes from Exch5.5 to AD

	Article: Q278614
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set up the Active Directory Connector (ADC) to replicate mailboxes
	from Exchange Server 5.5 to Active Directory, the Properties' General tab that
	shows the home server for the mailbox for the account is not displayed on some
	user accounts.
	
	In addition, the following event may be reported in the application event log:
	
	  Event Type: Warning
	  Event Source: MSADC
	  Event Category: (1)
	  Event ID: 8285
	  Date: 10/27/2000
	  Time: 5:15:28 PM
	  User: N/A
	  Computer: Computername
	  Description:
	  ADC will not replicate from cn=Mailbox,cn=Recipients,ou=Sitename,o=OrgName to
	  CN=Mailbox,OU=Users,DC=Domain,DC=local because both objects are not mailbox
	  enabled. The source object is a mailbox. The target object is either a
	  Contact or a mail enabled user. If this is a problem, consider making the
	  Connection Agreement an Inter-Organizational Connection Agreement.
	  (Connection Agreement 'Exchange to Windows' #540)
	
	  For more information, click http://www.microsoft.com/contentredirect.asp.
	
	CAUSE
	=====
	
	This issue may occur if the Windows 2000 account already has an e-mail address
	associated with it.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start the Active Directory Users and Computers snap-in, right-click the
	  Windows 2000 account, and then click Properties.
	
	2. Click the General tab, clear the E-mail box, and then click OK.
	
	3. Open the Active Directory Connector snap-in, and click the recipient
	  Connection Agreement that is used to replicate that mailbox from Exchange
	  Server 5.5 to Active Directory.
	
	4. Right-click Connection Agreement, and then click Replicate Now.
	
	5. Allow enough time for the replication to occur.
	
	Additional query words: adc ca app log exch2kp2w AD
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
