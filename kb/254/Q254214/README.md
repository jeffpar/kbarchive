---
layout: page
title: "Q254214: XFOR: Routing Restrictions Don't Work w Some Antivirus Solutions"
permalink: /kb/254/Q254214/
---

## Q254214: XFOR: Routing Restrictions Don't Work w Some Antivirus Solutions

	Article: Q254214
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 03-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Routing restrictions may not work after you install Simple Mail Transfer
	Protocol (SMTP) antivirus software.
	
	When you install SMTP antivirus software, the installation places the Exchange
	Server Internet Mail Service behind an antivirus 'firewall,' as illustrated in
	the following diagram:
	
	  (Internet) ----> (SMTP Virus Scanner) ----> (Exchange Server Internet
	  Mail Service)
	
	In this configuration, the routing restrictions, specifically the options that
	require a specific IP address or range of IP addresses, may no longer work.
	
	NOTE: Routing restrictions are created on the Routing tab of the Internet Mail
	Service. A routing restriction is a unit of criteria to allow or restrict
	incoming SMTP mail.
	
	CAUSE
	=====
	
	When an Exchange Server computer running the Internet Mail Service is placed
	behind an SMTP virus scanner or virus firewall, as illustrated in the diagram in
	the "Symptoms" section of this article, then the Internet Mail Service actually
	only accepts connections from the antivirus software. Thus, when the Internet
	Mail Service processes the message, it records the source computer as 127.0.0.1
	(the local host), so the Internet Mail Service never sees all of the other
	Internet IP addresses.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the first SMTP daemon, the antivirus
	firewall, is capable of advanced restrictions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q173903 XFOR: Changing the TCP Port Used for SMTP Mail
	
	This article describes how to configure the Exchange Server Internet Mail Service
	and an SMTP based virus scanner to work together on the same computer. After you
	follow the instructions in this article, each product runs on a different port.
	
	For antivirus features, please contact your antivirus software vendor.
	
	Additional query words: antivirus norton symantec port 25 av
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
