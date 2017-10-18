---
layout: page
title: "Q294351: Cannot Transfer GroupWise Mail Messages from Novell Server"
permalink: kb/294/Q294351/
---

## Q294351: Cannot Transfer GroupWise Mail Messages from Novell Server

	Article: Q294351
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate from GroupWise 5.5.x to Exchange Server, you may not be able to
	transfer GroupWise mail messages from the Novell server to Exchange Server 5.5
	Service Pack 4 (SP4) using the migration tool. When you try to export to .pst
	files, one or more of the following events may be logged in the Microsoft Event
	Viewer application log:
	
	  Event ID 8072
	  Event Type: Error
	  Event Source: MSExchangeMig
	  Event Category: None
	  Event ID: 8072
	  Description: Directory Section C:\Exchsrvr\Bin\GrpWise.005\Directory.PRI Line:
	  5 Unexpected MAPI error.
	
	  -or-
	
	  Event ID 8074
	  Event Type: Error
	  Event Source: MSExchangeMig
	  Event Category: None
	  Event ID: 8074
	  Description: MAPI Section C:\Exchsrvr\Bin\GrpWise.005\00000001.PRI Line: 2
	  Failed to connect to the Mailbox. GWise:Harbour.STL.BOB
	
	  -or-
	
	  Event ID 8124
	  Event Type: Error
	  Event Source: MSExchangeMig
	  Event Category: None
	  Event ID: 8124
	  Description: Parser Error C:\Exchsrvr\Bin\GrpWise.005\00000001.PRI Line: 4 Bad
	  section encountered. The remainder of this section will be skipped.
	
	  -or-
	
	  Event ID 8002
	  Event Type: Error
	  Event Source: MSExchangeMig
	  Event Category: None
	  Event ID: 8002 Description: Errors occurred during the Migration Process. A
	  recovery file has been created called C:\TEMP\00000002.PRI.
	
	CAUSE
	=====
	
	This issue can occur if the migrated user exists on the Exchange Server computer
	as a user or custom recipient. Confirm that the administrator has manually
	created a user in Exchange Server with the same name as the migrated user.
	
	RESOLUTION
	==========
	
	If the users were created manually on Exchange Server, delete one of the
	mailboxes that was created manually and the Microsoft Windows NT account
	associated with it. If this procedure does not solve the problem, perform one of
	the procedures that is described in the "Workaround" section.
	
	WORKAROUND
	==========
	
	Depending on the circumstances, you can use either of the procedures described
	in this section.
	
	Scenario One
	------------
	
	If all the GroupWise users are going to be migrated at the same time, you can
	reply to old GroupWise addresses in the migrated messages. In this case, use the
	following procedure:
	
	1. If the account already exists in Exchange Server, add the GroupWise proxy
	  address of the GroupWise users mailbox in Exchange Server, so that Exchange
	  Server knows where to import the mail.
	
	2. Click to clear the "Information to create mailboxes" check box.
	
	3. If you still are experiencing issues, clear the password in GroupWise,
	  otherwise there may be some corruption in Novell Domain Server (NDS).
	
	Scenario Two
	------------
	
	If the number of the users staying on GroupWise is large, obtain GroupWise client
	version 5.2 to use in the migration. In this scenario, the SMTP messages that
	were originally received in the user's GroupWise mailbox after they are migrated
	cannot be replied to because the sender's address is incomplete or invalid.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
