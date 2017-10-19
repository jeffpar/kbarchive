---
layout: page
title: "Q245446: XCLN: Error Message: No Transport Provider Was Available"
permalink: /kb/245/Q245446/
---

## Q245446: XCLN: Error Message: No Transport Provider Was Available

	Article: Q245446
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a simple Messaging Application Programming Interface (MAPI)
	profile, you may receive the following error message:
	
	  No transport provider was available
	
	CAUSE
	=====
	
	Your profile contains both of the following services:
	
	- An internet e-mail service such as Simple Mail Transport Protocol (SMTP) or
	  Post Office Protocol 3 (POP3)
	
	  -And-
	
	- Microsoft Exchange Server service
	
	This behavior is due to the way that MAPI handles SMTP address resolution. While
	this configuration may appear to work, the resolution order, and therefore the
	ability to resolve SMTP addresses correctly, may not work. This behavior becomes
	more noticeable in complex organizations. This configuration also causes issues
	when you connect to a computer that is running Microsoft Exchange Server.
	
	Microsoft does not support this configuration.
	
	For additional information about the support limitations of MAPI provider
	services, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q234936 XCLN: Support Boundaries of MAPI Provider Services
	
	WORKAROUND
	==========
	
	To work around this behavior, create two different profiles: one for the
	Internet mail service and one for the Exchange Server service. For additional
	informationabout how to set up Outlook profiles and how to configure Outlook to
	prompt you for a profile, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q195478 OL2000: (CW) User Profiles and Information Services
	
	  Q182159 OL98: (CW) User Profiles and Information Services
	
	  Q162203 OL97: User Profiles and Information Services
	
	When you set up two different profiles, you must quit Outlook before you can
	switch to the other profile.
	
	Another way to work around this behavior is to use Outlook Express for POP3 or
	SMTP internet e-mail services, and to use Outlook when you connect to a computer
	that is running Exchange Server.
	
	This information applies to using Microsoft Mail in a profile with Exchange
	and/or Internet Mail Service. In addition, Microsoft recommends that you have a
	separate profile for the Microsoft Mail service.
	
	
	MORE INFORMATION
	================
	
	If you install Internet Mail Service (IMS) on a computer that is running
	Exchange Server, mail is automatically sent using Exchange Server. The SMTP
	server that you specify as your Internet e-mail account is not used.
	
	The Outlook program, acting as the Exchange client software, sends an
	NspiResolveNames request to Exchange Server. If you install IMS, Exchange Server
	attempts to handle the message even if you have not correctly configured it to
	send Internet e-mail. In such a situation, a non-delivery report (NDR) is
	received.
	
	There is no client resolution available for this situation other than the use of
	separate user profiles for Outlook. Configure Exchange to send SMTP mail by
	installing IMS, or to use another e-mail program to send Internet e-mail.
	
	Additional query words: outbox stuck exchange
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
