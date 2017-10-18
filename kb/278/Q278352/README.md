---
layout: page
title: "Q278352: XWEB: Can't Forward Autoforwarded Messages to External Address"
permalink: kb/278/Q278352/
---

## Q278352: XWEB: Can't Forward Autoforwarded Messages to External Address

	Article: Q278352
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Outlook Web Access (OWA) to forward or reply to a message
	and the message travels over an Internet Mail Service connector, the message may
	not arrive at the destination address. You also may not receive a non-delivery
	report (NDR).
	
	The following message may be logged in the Application event log on the Internet
	Mail Service computer:
	
	  Event ID: 4123
	  Source: MSExchangeIMC
	  Description: A message passing through the Internet Mail Service has been
	  intentionally dropped. This is most likely an admin notification (message
	  describing mail failure) and out of office notification (OOF), or an
	  automatic reply from a user's mailbox. Dropping of OOF messages and automatic
	  replies is configurable in the admin pages. The gateway must always drop
	  notification to the administrator, since they often cause mail loops.
	
	CAUSE
	=====
	
	This problem can occur because, by default, the Internet Mail Service is set not
	to allow autoforwarded messages to external addresses. When OWA forwards or
	replies to a message that was autoforwarded, OWA leaves a field on the message
	of PR_Auto_Forwarded. The Internet Mail Service detects the PR_Auto_Forwarded
	field and does not let the message through.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server version 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Outlook Web Access
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Cdo.dll   | 5.5.2654.24 | 
	+-------------------------+
	
	
	
	For additional information on how to download the update for this problem, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q289606 XGEN: Exchange Server 5.5 Post-Service Pack 4 Collaboration Data
	  Objects Fixes Available
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Outlook Web Access version 5.5.
	
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
