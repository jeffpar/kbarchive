---
layout: page
title: "Q325939: XADM: Internet Mail Service Stops w Event ID 12800, 4182, 4102"
permalink: kb/325/Q325939/
---

## Q325939: XADM: Internet Mail Service Stops w Event ID 12800, 4182, 4102

	Article: Q325939
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Internet Mail Service receives a malformed inbound Internet message, the
	Internet Mail Service may log event ID 12800, 4182, 4102, and 1001 error
	messages in the Application event log, and then stop responding. The error
	messages are logged in the Application event log in the following sequence:
	
	  EventID : 12800
	  Source : MSExchangeIS
	  Type : Error
	  Category : Content Engine
	  Description:
	  Message processing failed because there is not enough available memory
	  (8007000E-F2000200).
	
	  EventID : 4182
	  Source : MSExchangeIMC
	  Type : Error
	  Category : Internal Processing
	  Description:
	  An error was returned from the messaging software the Internet Mail Service
	  uses to process messages on the Microsoft Exchange Server. As a result, the
	  message in spool file MM0XK5MC will be retried when the server is restarted.
	
	  EventID : 4102
	  Source : MSExchangeIMC
	  Type : Error
	  Category : Internal Processing
	  Description:
	  A serious error has occurred while trying to send mail into the Exchange
	  Information Store. The Internet Mail Service is being shut down.
	
	  EventID : 1001
	  Source : MSExchangeIMC
	  Type : Information
	  Category : Initialization/Termination
	  Description:
	  The Microsoft Exchange Internet Mail Service shut down successfully
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	Component: Information store
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	+-----------------------------------------------------------+
	| Date        | Time  | Version     | Size      | File name | 
	+-----------------------------------------------------------+
	| JUL-15-2002 | 18:32 | 5.5.2656.60 | 2,626,832 | Store.exe | 
	+-----------------------------------------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	After you apply this fix, the message that causes the Internet Mail Service to
	stop responding is moved to the archive folder.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
