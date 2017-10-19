---
layout: page
title: "Q181864: XADM: Setup /Q Prompts for Service Account"
permalink: /kb/181/Q181864/
---

## Q181864: XADM: Setup /Q Prompts for Service Account

	Article: Q181864
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running Setup /Q to install a non-service component, the Setup
	program expects the Setup.ini file to have a service account specified.
	
	Non-service components include the Administrator program and Books Online.
	
	If the service account is not specified, Setup displays a dialog box, prompting
	for the service account.
	
	This behavior is only seen using Setup /Q.
	
	If you run the Setup program in interactive mode and then go to the
	Custom/Complete option and select only the non-service component, Setup does not
	prompt you for a service account.
	
	CAUSE
	=====
	
	Setup assumes that it is installing service components, even though none were
	selected. With the fix described below, Setup checks before asking for the
	service account name and password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
