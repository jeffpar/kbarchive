---
layout: page
title: "Q288722: Non-Delivery Reports with Event ID 2025 Error Code BB8 or 50A"
permalink: kb/288/Q288722/
---

## Q288722: Non-Delivery Reports with Event ID 2025 Error Code BB8 or 50A

	Article: Q288722
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send messages with attachments on a server running a third-party
	antivirus product that uses the Exchange Antivirus application programming
	interface (API), you may receive non-delivery reports (NDRs) that contain the
	following information:
	
	- Reason code = transfer-failure
	
	- Diagnostic code = invalid-arguments
	
	Also, an event ID 2025 error message from "MSExchangeIS Private" that contains
	the following text may be logged in the Application event log:
	
	  The delivery of a message failed due to error BB8 (or 50A). A non-delivery
	  report is being sent to the message's originator.
	
	CAUSE
	=====
	
	This problem can occur if a user (user1) has an autoforward rule to another user
	(user2), and a message with an attachment is sent to both users (user1 and
	user2). User2 receives two messages, and the attachment needs to be scanned two
	times by the third-party product.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Exchange Server 5.5 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.61 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: avapi ndr 0000050a 00000bb8 vapi
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
