---
layout: page
title: "Q161813: XFOR: SMTP Headers Visible in MSMail Clients After SP3 Install"
permalink: kb/161/Q161813/
---

## Q161813: XFOR: SMTP Headers Visible in MSMail Clients After SP3 Install

	Article: Q161813
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Mail Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Exchange Server Service Pack 3, SMTP headers will be
	made visible to client computers running MS Mail 3.x.
	
	MORE INFORMATION
	================
	
	Internet mail coming into the Internet Mail Connector and then though Microsoft
	Exchange Server to an MS Mail 3.x postoffice will be delivered with the SMTP
	headers viewable. Also when a Microsoft Exchange Server user sends mail to an MS
	Mail user using an SMTP address, the MS Mail user receives all the header
	information in the body of the message. Because of this functionality in
	Microsoft Exchange Server Service Pack 3, the parameter "STRIPGATEWAYHEADER=0/1"
	in the Mail.ini initialization file is ignored.
	
	
	
	A new registry entry has also been added for the MSMI that will work in
	conjunction with the above hotfix. This entry will allow you to turn on or off
	SMTP headers sent to MSMail clients.
	
	The registry entry is:
	
	\HKEY_LOCAL_MACHINE
	\SYSTEM
	\CurrentControlSet
	\Services
	\MSExchangeMSMI
	\Parameters
	
	Value Entry:Pass SMTP headers to SFS
	Data Type:REG_DWORD
	Range: 0 | 1
	Default: 0
	
	Value  Description
	1      The Exchange MS Mail Connector sends SMTP headers to MS Mail 3.x
	SFS clients.
	0      The Exchange MS Mail Connector does not send SMTP headers to MS
	      Mail 3.x SFS clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
