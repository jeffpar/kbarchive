---
layout: page
title: "Q189184: XFOR: Outbound SMTP Msgs. Don't Flow w/ IMC/IMS Service Running"
permalink: kb/189/Q189184/
---

## Q189184: XFOR: Outbound SMTP Msgs. Don't Flow w/ IMC/IMS Service Running

	Article: Q189184
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outbound SMTP messages may not flow with the IMC/IMS service running, but will
	flow when the Msexchimc.exe command is run from a command prompt. Inbound SMTP
	messages work fine with the service.
	
	CAUSE
	=====
	
	This problem is usually caused by a corrupt or invalid service account. To
	verify this possibility, log on to the computer as the service account and
	attempt to send a message when running from the command prompt. If this does not
	work, check the properties of the service account.
	
	WORKAROUND
	==========
	
	To work around this problem, you must recreate this service account and confirm
	that it has the proper permissions. Please see the following Knowledge Base
	article(s) for further information:
	
	  Q147701 XADM: Exchange Service Account Permissions
	
	
	MORE INFORMATION
	================
	
	The reason that outbound messages flow when the IMC/IMS is started from the
	command prompt is that the Virtual MS-DOS Machine (VDM) is using the account
	permissions of the user logged on (most frequently the Administrator) rather
	than the Service Account permissions that the service uses.
	
	Additional query words: IMC
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
