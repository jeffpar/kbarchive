---
layout: page
title: "Q281269: XADM: Moving Mailboxes with Events Scripts Installed on Inbox"
permalink: /kb/281/Q281269/
---

## Q281269: XADM: Moving Mailboxes with Events Scripts Installed on Inbox

{% raw %}

	Article: Q281269
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 13-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the guidelines for moving a mailbox that has been
	configured with Event Service scripts that are installed in the Inbox folder.
	
	MORE INFORMATION
	================
	
	When you move a mailbox, the script(s) must be detached from the Inbox folder
	before the mailbox is moved. This procedure prevents issues from occurring after
	the move operation is complete, for example, a disabled Agents tab on the
	Outlook client.
	
	NOTE: The Microsoft Exchange Event Service must be installed and working properly
	on the server that the mailbox is moved to.
	
	To move a mailbox with Event Service scripts:
	
	1. Log on to the mailbox that you are going to move, right-click the Inbox
	  folder, and then click Properties.
	
	2. Click the Agents tab, and then click Edit.
	
	3. Cut and paste the script in a text file, and then save this file to a disk to
	  ensure that you have a copy of the original script.
	
	4. Repeat this process for all scripts that are installed on the mailbox.
	
	5. After you have saved a copy of the script, delete each script that is
	  installed in the mailbox's Inbox folder.
	
	6. Move the mailbox from the source to the destination server, and then verify
	  that this operation was completed successfully.
	
	7. Add this mailbox to Client Permissions in the EventsConfig system folder on
	  the new server.
	
	8. Log on to the mailbox on the new server.
	
	9. Right-click the Inbox folder, and then click Properties.
	
	10. Click the Agents tab and reinstall the script(s) in the mailbox's Inbox
	  folder.
	
	11. Verify that you have entered the new server's name in the Server box on the
	  Agents tab. This step ensures that the script is installed in that server's
	  EventsConfig system folder.
	
	
	Additional query words: xmrp
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
