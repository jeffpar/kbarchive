---
layout: page
title: "Q196200: XWEB: CDO Does Incorrect Time Zone Correction"
permalink: kb/196/Q196200/
---

## Q196200: XWEB: CDO Does Incorrect Time Zone Correction

	Article: Q196200
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	For dates falling between the last Sunday in September and the last Sunday in
	October, when you use a browser to access an Exchange Server 5.5 computer with
	Outlook Web Access (OWA) Service Pack 1 (SP1), if the Time Zone setting on this
	browser is the Paris, Madrid, or Amsterdam option, a new appointment created in
	the Calendar will appear one hour later than when viewed with the Outlook 98
	client.
	
	CAUSE
	=====
	
	In 1996, the European Union (EU) standardized a EU-wide "summertime period." The
	EU version of Daylight Saving Time runs from the last Sunday in March through
	the last Sunday in October.
	
	This change was not taken into account by the CDO libraries.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Outlook Web Access
	
	  File Name     Version
	  ------------------------
	  Cdo.dll       5.5.2503.0
	  Cdohtml.dll   5.5.2503.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
