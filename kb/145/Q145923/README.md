---
layout: page
title: "Q145923: XADM: How to Send Mail with the &quot;Anonymous&quot; Sender Name"
permalink: /kb/145/Q145923/
---

## Q145923: XADM: How to Send Mail with the &quot;Anonymous&quot; Sender Name

{% raw %}

	Article: Q145923
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to send mail anonymously so that the receiver of the
	message does not know who the message came from. This may be useful when sending
	messages to a Comments or Feedback mailbox or public folder where the sender
	would not like his or her identity revealed but would like their views noted.
	
	To avoid misuse of this facility, the administrator can add a delivery
	restriction on Distribution Lists as well as individual mailboxes to reject all
	messages received from the Anonymous account. The administrator can also set the
	permissions on public folders to prevent the Anonymous account from mailing
	messages to the public folders.
	
	MORE INFORMATION
	================
	
	Using the Exchange Administrator program, create a mailbox with the display name
	Anonymous. Give the Windows NT Domain Users group (or any other group containing
	all or some of the Exchange users) Send As permissions on this mailbox.
	
	To send mail so that it appears to have been sent by the account Anonymous:
	
	1. Choose Compose and select the New Message command.
	
	2. From the View menu of this form, select From Box. This should now display the
	  From field.
	
	3. Click the From button.
	
	4. From the address list displayed, select Anonymous.
	
	5. Select one or more users to send the message to and then send the message.
	
	6. When the message is received, it displays Anonymous as the sender name.
	
	To add Send As permission on a mailbox to a Windows NT account from the Microsoft
	Exchange Administrator program:
	
	1. From the Tools menu, select Options.
	
	2. Click the Permissions tab.
	
	3. Check the Show Permissions Page for All Objects checkbox.
	
	4. Click OK.
	
	5. Click the 'anonymous' mailbox.
	
	6. From the File menu, click Properties.
	
	7. Click the Permissions tab.
	
	8. Click Add.
	
	9. Select the Windows NT account that requires the Send As permission.
	
	10. Click Add.
	
	11. Select Send As as the Role.
	
	12. Click OK.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
