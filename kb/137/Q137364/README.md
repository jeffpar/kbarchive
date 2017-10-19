---
layout: page
title: "Q137364: Removing Damaged Messages from MS Exchange Outbox"
permalink: /kb/137/Q137364/
---

## Q137364: Removing Damaged Messages from MS Exchange Outbox

	Article: Q137364
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 msnetwork
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one of the following problems:
	
	- Microsoft Exchange stops responding (hangs) when you start it.
	
	- Microsoft Exchange generates a fault error message in Mapisp32 when you start
	  it.
	
	
	CAUSE
	=====
	
	These problems can occur when there is a message in the Outbox that is damaged
	or has a damaged address. When you start Microsoft Exchange, the Mapi Spooler
	opens the Outbox and attempts to send the damaged message. Shutting down
	Microsoft Exchange before a message has been sent returns the message to the
	Outbox. The message cannot be retrieved once the spooler has attempted to send
	it.
	
	RESOLUTION
	==========
	
	There are two methods for working around this problem:
	
	Method 1
	--------
	
	NOTE: Use this method only if the mail service you are using is the Microsoft
	Mail service.
	
	1. In Control Panel, double-click the Mail And Fax icon.
	
	2. Click the Microsoft Mail service, and then click Properties.
	
	3. On the Delivery tab, click the Enable Outgoing Mail Delivery check box to
	  clear it.
	
	4. Click the Enable Incoming Mail Delivery check box to clear it, and then click
	  OK twice.
	
	5. Start Microsoft Exchange.
	
	6. Open the Outbox and drag the damaged message to the Inbox. Or, delete the
	  message if it is not important.
	
	7. Create a new message.
	
	8. Repeat steps 6-7 for any additional damaged messages, and then quit Microsoft
	  Exchange.
	
	9. Repeat steps 1-4 to enable mail delivery in Microsoft Exchange.
	
	You can use this information to correct messages that become stuck in the Outbox.
	If the problem is with incoming mail from the post office, contact the
	administrator of the mail service. You can still send mail using the Remove
	Preview feature.
	
	Method 2
	--------
	
	NOTE: You can use this method with any mail service.
	
	1. In Control Panel, double-click the Mail And Fax icon.
	
	2. Click Show Profiles, and then click Add.
	
	3. Click the Manually Configure Information Services option button, and then
	  click Next.
	
	4. Enter a name for the profile, and then click Next.
	
	5. Click Add, click Personal Folders, and then click OK.
	
	6. Enter the location for the .pst file. The default location is
	  C:\Exchange\Mailbox.pst.
	
	7. Click OK twice, click Next, and then click Finish.
	
	8. In the "When starting Microsoft Exchange, use this profile" box, click the
	  new profile.
	
	9. Start Microsoft Exchange. If the damaged message is in the Outbox, you should
	  receive an error message titled "Undeliverable." Now that the message has
	  been rejected, you can modify or delete it. After you do so, reset the
	  profile and start Microsoft Exchange again.
	
	You can use this method to determine which message is causing the problem by
	downloading messages with the Remote Preview feature. When you determine which
	message is causing the problem, remove the message using the Remote Preview
	feature, or contact the mail administrator to have the message removed.
	
	Additional query words: msn locks
	
	======================================================================
	Keywords          : win95 msnetwork 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
