---
layout: page
title: "Q149542: XFOR: IMC Error 1067 , Dr. Watson on MSEXCIMC.EXE"
permalink: /kb/149/Q149542/
---

## Q149542: XFOR: IMC Error 1067 , Dr. Watson on MSEXCIMC.EXE

{% raw %}

	Article: Q149542
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Microsoft Exchange Server version 4.0 Internet Mail Connector
	(IMC) and the user specified as the Administrator Mailbox is missing an X.400
	address, the following error message is displayed:
	
	  Dr. Watson:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  MSEXCIMC.EXE
	  Exception: access violation (0xc0000005), Address 0x10205c11
	
	After you click OK, or if you wait for a few seconds, a Services error message is
	displayed:
	
	  Could not start the Microsoft Exchange Internet Mail Connector service on
	  \\<servername>.
	
	  Error 1067: The process terminated unexpectedly.
	
	With the Microsoft Exchange Server version 5.0 Internet Mail Service (IMS), you
	see a different address in the exception error and no 1067 error is generated.
	You receive the following Dr. Watson error message:
	
	  Dr. Watson:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  MSEXCIMC.EXE
	  Exception access violation (0xc0000005), Address: 0x0042db78
	
	
	MORE INFORMATION
	================
	
	To correct this behavior, start the Microsoft Exchange Administrator program,
	open the properties page of the IMC or IMS that is exhibiting this problem, and
	note which user is shown as the Administrator's Mailbox. Next, bring up the
	properties page of that user, click the E-Mail Addresses tab, and add an X.400
	address.
	
	Another way to correct this behavior is to specify a different user (who already
	has an X.400 address) in the Administrator's Mailbox box on the IMC or IMS
	properties page.
	
	
	Additional query words: event id 1034
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
