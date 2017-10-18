---
layout: page
title: "Q280349: XADM: &quot;Account information Is Incorrect&quot; Message During Setup"
permalink: kb/280/Q280349/
---

## Q280349: XADM: &quot;Account information Is Incorrect&quot; Message During Setup

	Article: Q280349
	Product(s): Microsoft Exchange
	Version(s): 2000,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Exchange Server 5.5, and you want to join an existing site, you
	may receive the following error message after you enter the password for the
	Exchange Server service account.
	
	  Account information is incorrect.
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server services on the existing Exchange
	Server computer that you selected during installation are configured to log on
	by using the User Principal Name (UPN) of the Exchange Server service account.
	For example, the account that the services are configured to log on is displayed
	as "<username>@<domain>.com" instead of in the following downlevel
	domain format:
	
	  <domain>\<username>
	
	RESOLUTION
	==========
	
	To resolve this issue, manually configure the Exchange Server services to use
	the downlevel domain format for the Exchange Server service account. You must
	perform the following procedure on the existing Exchange Server computer:
	
	1. Click Start, point to Programs, click Administrative Tools, and then
	  double-click Services.
	
	2. Double-click the "Microsoft Exchange System Attendant" service.
	
	3. Click the Log On tab from the service properties, verify that This Account is
	  selected, and then type the account name using the pre-Windows 2000 format,
	  for example, <domain>\<username>.
	
	  NOTE: To confirm that you entered the name correctly, start the Active
	  Directory Users and Computers snap-in, and then click the Account tab to view
	  the properties of the account.
	
	4. Type the correct password in the Password and Confirm Password boxes.
	
	5. Repeat steps three to five for the remaining Exchange Server services.
	
	6. Stop the Exchange Server services, and then restart them.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :2000,5.5
	Issue type        : kbprb
	
	=============================================================================
	
