---
layout: page
title: "Q186739: XFOR: Events 4018 &amp; 4116 Starting the Internet Mail Service"
permalink: /kb/186/Q186739/
---

## Q186739: XFOR: Events 4018 &amp; 4116 Starting the Internet Mail Service

{% raw %}

	Article: Q186739
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server Internet Mail Service , the
	following events may appear in the application event log:
	
	  Event ID: 4018
	  Type: Error
	  Source: MSExchangeIMC
	
	  Description:
	  Unable to start the Internet Mail Connector service because
	  MAPI could not be initialized.
	
	  Event ID: 4116
	  Type: Error
	  Source: MSExchangeIMC
	
	  Description:
	  An error was returned from the messaging software, the Internet
	  Mail Service uses, to process messages on the Microsoft Exchange
	  Server. It is possible that the piece of mail being processed
	  at the time will not be delivered. The message that was being
	  processed has been moved to the "BAD" folder. Use the appropriate
	  utilities found in the SUPPORT directory of your Exchange CD to view and
	  manipulate these messages.
	
	CAUSE
	=====
	
	A possible cause of these errors is that the Exchange service account lacks the
	proper access rights to the Winnt\System32 (%System Root%\System32) directory.
	
	The service account must have change rights to this directory to be able to
	modify the Mapisvc.inf file located in the %SystemRoot%\System32 directory.
	
	WORKAROUND
	==========
	
	To work around this problem, give the service account at least change rights to
	the %SystemRoot%\System32 directory.
	
	MORE INFORMATION
	================
	
	For more information on causes for the 4018 event, see the following article in
	the Microsoft Knowledge Base:
	
	  Q163243 XFOR: Causes for Event ID 4018 When Starting the IMC
	
	
	Additional query words: imc smtp
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
