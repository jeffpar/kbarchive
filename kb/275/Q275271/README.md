---
layout: page
title: "Q275271: XADM: Error Message: Extension 'SMTP' Could Not Be Loaded"
permalink: kb/275/Q275271/
---

## Q275271: XADM: Error Message: Extension 'SMTP' Could Not Be Loaded

	Article: Q275271
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access the Internet Mail Service properties from the
	Exchange Administrator program, you may receive the following error message:
	
	  Extension 'SMTP' could not be loaded.
	  You do not have the permissions required to complete the operation.
	  Microsoft Exchange Directory
	  ID no: DS_E_INSUFFICIENT_ACCESS_RIGHTS
	
	CAUSE
	=====
	
	This issue can occur if the Microsoft Exchange System Attendant is not
	configured to log on as an Exchange service account.
	
	RESOLUTION
	==========
	
	To resolve this issue, ensure that all of the Exchange services are configured
	to log on as the correct Exchange service account.
	
	- For Windows 2000:
	
	  1. Click Start, point to Programs, click Administrative Tools, and then click
	     Services.
	
	  2. Double-click "Microsoft Exchange System Attendant", and then click the Log
	     on tab.
	
	  3. Click to select the This Account check box, and then click Browse to find
	     the correct Exchange service account.
	
	  4. Type the correct password in the Password and Confirm Password boxes.
	
	  5. Verify that the remaining Exchange services are configured to run with the
	     correct Exchange service account.
	
	  6. Stop and restart Microsoft Exchange Services.
	
	- For Windows NT 4.0:
	
	  1. In Control Panel, double click Services.
	
	  2. Double-click "Microsoft Exchange System Attendant".
	
	  3. Click to select the This Account check box, and then click Browse to find
	     the correct Exchange service account.
	
	  4. Type the correct password in the Password and Confirm Password boxes.
	
	  5. Verify that the remaining Exchange services are configured to run with the
	     correct Exchange service account.
	
	  6. Stop and restart Microsoft Exchange Services.
	
	Additional query words: IMS exch2kp2w
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
