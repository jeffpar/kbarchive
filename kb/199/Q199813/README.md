---
layout: page
title: "Q199813: XFOR: CalCon Not Supported With InterOrg Public Folder Tool"
permalink: kb/199/Q199813/
---

## Q199813: XFOR: CalCon Not Supported With InterOrg Public Folder Tool

	Article: Q199813
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Calendar Connector does not return free and busy information for SMTP custom
	recipients. However, Exchange Server users may be able to make a free and busy
	query by means of the InterOrg Public Folder-Free/Busy replication utility.
	
	
	CAUSE
	=====
	
	The Calendar Connector does not recognize free and busy transactions for SMTP
	custom recipients because it does not have a designated Calendar provider. The
	Calendar Connector has only three built-in calendaring providers, Lotus Notes,
	Novell GroupWise, and IBM OV/VM. You may also see the following error messages
	in the event log:
	
	  Source:MSExchangeCalCon
	  Type:Information
	  Event:6001
	  Description:The description for Event ID ( 6001 ) in Source ( MSExchangeCalCon
	  ) could not be found. It contains the following insertion string(s): No
	  Provider Found.
	
	  Source:MSExchangeCalCon
	  Type:Information
	  Event:6001
	  Description:The description for Event ID ( 6001 ) in Source ( MSExchangeCalCon
	  ) could not be found. It contains the following insertion string(s):
	  HrProcessNextTransaction Failed.
	
	WORKAROUND
	==========
	
	Microsoft Exchange or Outlook clients do not have the same limitation. The
	InterOrg Public Folder Replication tool is designed to work with MAPI clients
	only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information on the Calendar Connector, refer to the Calcon.rtf
	documentation file located in the Exchsrvr\Connect\Calcon\Doc folder after
	connector installation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
