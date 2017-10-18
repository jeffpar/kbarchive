---
layout: page
title: "Q235464: XADM: Server Indicates Certificate Was Imported After You Cancel"
permalink: kb/235/Q235464/
---

## Q235464: XADM: Server Indicates Certificate Was Imported After You Cancel

	Article: Q235464
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can configure Key Management servers (KM servers) so that two administrator
	passwords are required to import a certificate. If you attempt to import a
	certificate on a server configured in this manner, and you click Cancel when you
	are prompted to enter the second password, the server may indicate that the
	certificate was imported successfully even though you cancelled the operation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Administrator Program
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Kmsadmin.dll | 5.5.2635.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	You can configure KM servers so that multiple administrator passwords are
	required to perform various tasks. To configure a KM server in this manner:
	
	1. Start the Administrator program. To do so, click Start, point to Programs,
	  point to Microsoft Exchange, and then click Microsoft Exchange Administrator.
	
	2. In the left pane, click the Configuration object under the appropriate site.
	  In the right pane, click CA, and then on the File menu, click Properties. If
	  you are prompted to enter your administrator password, type the password in
	  the "KM Server password" box, and then click OK.
	
	3. Click the Passwords tab, type the number of passwords required to import a
	  certificate, and then click OK. For example, to configure the server so that
	  two passwords are required to import a certificate, type "2" (without the
	  quotation marks) in the "Import or untrust another Certification Authority's
	  certificate" box.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
