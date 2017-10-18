---
layout: page
title: "Q271372: XCLN: Rules to Move Messages to Public Folders Are Client-Only"
permalink: kb/271/Q271372/
---

## Q271372: XCLN: Rules to Move Messages to Public Folders Are Client-Only

	Article: Q271372
	Product(s): Microsoft Exchange
	Version(s): 9.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000, version 9.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any rule, which you create, that moves mail from a Microsoft Exchange Server
	Inbox to a Microsoft Exchange Server public folder is designated "client-only"
	and does not function if the client is not open, and running.
	
	CAUSE
	=====
	
	The move operation is a client operation, even though you are moving the message
	to a public folder.
	
	In this scenario, the recipient receives the mail message in his or her Inbox,
	and then the move operation redistributes it to the public folder.
	
	WORKAROUND
	==========
	
	There are several options available to perform this same operation on the server
	side without needing the client to be open and running.
	
	If the public folder appears in the Global Address List, you can use any of the
	following methods:
	
	- Create a rule to forward this message to the public folder by selecting it
	  from the Global Address List.
	
	  1. In Outlook, with Exchange Server as the profile, on the Tools menu, click
	     Rules Wizard.
	
	  2. Click New, click "Check messages when they arrive", and then click Next.
	
	  3. When you get to "What do you want to do with this message", click to
	     select the "forward it to people or distribution list" check box.
	
	  4. Click the "people or distribution list" link, and then select the public
	     folder. Click OK, and then click Finish.
	
	- Use the public folder as an Alternate Recipient for the Mailbox in the
	  Exchange Administrator program.
	
	  1. In Exchange Administrator, open the recipient's mailbox, and then click
	     the Delivery Options tab.
	
	  2. In the Alternate Recipient area, select the unlabeled option, and then
	     click Modify.
	
	  3. In the Global Address List, click the name of the alternate recipient, and
	     then click OK.
	
	  4. Click to select the "Deliver messages to both recipient and alternate
	     recipient" check box, and then click OK.
	
	- If the public folder is hidden from the Global Address List, you can use
	  Outlook to create a rule, and forward this message to the SMTP address of the
	  public folder. Even if the public folder is hidden from the Global Address
	  List, this message will be delivered.
	
	  1. In Outlook, with Exchange Server as the profile, on the Tools menu, click
	     Rules Wizard.
	
	  2. Click New, click "Check messages when they arrive", and then click Next.
	
	  3. When you get to "What do you want to do with this message", click to
	     select the "forward it to people or distribution list" check box.
	
	  4. Click the "people or distribution list" link, and then click New.
	
	  5. Click New Entry at the bottom of the dialog box, and then click Internet
	     Address.
	
	  6. Type the appropriate information in the Display Name, and E-Mail Address
	     boxes, click OK, and then click Finish.
	
	MORE INFORMATION
	================
	
	You can obtain the Internet address of the public folder by checking the
	properties of the public folder; the properties are located in the E-Mail
	Addresses tab of the Exchange Server Administrator program.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :9.0
	Issue type        : kbprb
	
	=============================================================================
	
