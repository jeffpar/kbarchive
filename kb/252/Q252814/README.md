---
layout: page
title: "Q252814: XCLN: Posting to a PF Using Send As Doesn't Work as Expected"
permalink: /kb/252/Q252814/
---

## Q252814: XCLN: Posting to a PF Using Send As Doesn't Work as Expected

{% raw %}

	Article: Q252814
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you post a message to a public folder, if you use the From field to "send
	as" another user, the From field in the posted message indicates that the e-mail
	message was sent "on behalf of" the user, and not as the user.
	
	MORE INFORMATION
	================
	
	With Exchange Server, you can send an e-mail message "on behalf of" another
	user. For example, if User A wants to send an e-mail message on behalf of User B
	(to user C), User A needs Send On Behalf Of permission for the User B mailbox.
	To send an e-mail message on behalf of User B, User A needs to open a new
	message form, click From Field on the View menu, type "user b" (without the
	quotation marks) in the From field, and then type "user c" (without the
	quotation marks) in the To field. When this e-mail message appears in the Inbox
	of User C, the e-mail message is displayed as if it came from User A, because in
	the Inbox view, the From field contains User A. However, when User C actually
	opens the e-mail message, the following string is displayed in the From field:
	
	  User A on behalf of User B
	
	There may be situations in which you want to send a message as another user. For
	example, if User A wants to send an e-mail message to User C not "on behalf of"
	User B, but as User B, User A needs Send As permission for the mailbox of User
	B. An administrator can assign this permission by using the Exchange Server
	Administrator program on the Exchange Server computer. After User A has Send As
	permission for the mailbox of User B, User A can use the method described above
	to send an e-mail message to User C. When this e-mail message appears in the
	Inbox of User C, the e-mail message is displayed in the Inbox view as if it came
	from User B. However, when User C actually opens the e-mail message, the From
	field contains User B. This makes it appear as though User B sent the message
	himself. User C has no way of knowing that the message was sent by User A on
	behalf of User B.
	
	The procedures above apply to messages that are posted to an Exchange Server
	public folder. However, the results for a public folder message may be slightly
	different. This depends on whether a message is posted to the public folder or
	sent as an e-mail message to the public folder. For example, if User A posts a
	message to a public folder called Test (by clicking New Post in This Folder on
	the File menu) and types "user b" (without the quotation marks) in the From
	field before the message is posted, the post appears to come from User B, but if
	another user opens the message, that user can see that the post came from User A
	on behalf of User B. If, however, User A sends an e-mail message to the public
	folder (by clicking New Mail Message on the File menu) and types "user b"
	(without the quotation marks) in the From field before the e-mail message is
	sent to the Test public folder, when another user actually opens the message,
	the From field contains User B, which makes it appear as if the message came
	from User B. That user has no way of knowing that the e-mail message was
	actually sent by User A.
	
	Additional query words: obo 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
