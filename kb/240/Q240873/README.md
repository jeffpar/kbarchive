---
layout: page
title: "Q240873: XFOR: Notes Migration Source Extractor Fails To Migrate Mail"
permalink: kb/240/Q240873/
---

## Q240873: XFOR: Notes Migration Source Extractor Fails To Migrate Mail

	Article: Q240873
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Notes Migration wizard mail may fail to migrate messages from a Lotus Notes
	user's mailbox. The Migration wizard also finishes without any errors in the
	event log.
	
	CAUSE
	=====
	
	The Lotus Notes user's mail database template has been changed from the default
	Mail (R4.6) template to the Mail - Combined (R4.6) template. The change in the
	database template generates a different response to the Lotus Notes Migration
	wizard's extraction calls, which results in the incomplete mail migration.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	To determine the database template for a Lotus Notes mail database:
	
	1. Start up the Lotus Notes client.
	
	2. Locate the mail database icon on the desktop.
	
	3. Right-click the database, and then click Database Properties.
	
	4. Click the Design tab.
	
	5. Template Name indicates the mail template defined for this mail database.
	
	The default Lotus Notes mail database format Mail (R4.6) is based on the
	StdR46Mail template. The enhanced mail database format Mail - Combined (R4.6) is
	inherited from the StdR46ComboMail template.
	
	Additional query words: mail-combined
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
