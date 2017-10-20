---
layout: page
title: "Q136787: XCLN: Amalgamated Read/Delivery Receipts"
permalink: /kb/136/Q136787/
---

## Q136787: XCLN: Amalgamated Read/Delivery Receipts

{% raw %}

	Article: Q136787
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ability to receive only one Read/Delivery status report for a message sent
	to a distribution list or a number of users, instead of a lot of individual
	Read/Delivery receipts, is not available in Microsoft Exchange Server.
	
	This article describes a useful workaround to allow Microsoft Exchange users to
	better manage all the receipts received in response to a message.
	
	MORE INFORMATION
	================
	
	You can use the Inbox Assistant available in the Microsoft Exchange Windows
	clients to automatically move all Read/Delivery Receipts into a folder. You can
	then create a custom view to allow all the receipts received in response to a
	particular message to be grouped together.
	
	The following steps describe how this can be done:
	
	1. Create a folder called Receipts.
	
	2. On the Tools Menu, choose Inbox Assistant to bring up the Inbox Assistant
	  dialog box.
	
	3. Click the Add Rule button. This should bring up the Edit Rule dialog box.
	
	4. Click the Advanced button, to bring up the Advanced dialog box.
	
	5. Click the Forms button. The Select Forms dialog box should appear.
	
	6. Using the drop-down list box, select Application Forms.
	
	
	7. Scroll down and select "Standard report form." Click Add.
	
	8. Click Close to close the Select Forms dialog box.
	
	9. Click OK to close the Advanced dialog box.
	
	10. In the Edit Rule dialog, select the Move To option. Click the Folders button
	  that corresponds to the Move To option. In the Move Message To dialog box,
	  select the Receipts folder you created in step 1. Click OK to close the Move
	  Message To dialog box.
	
	11. Click OK to close the Edit Rule dialog box.
	
	  You should now see a rule added to the list of Inbox Assistant rules. The
	  above steps have created a rule that moves all messages with the Standard
	  Report Form into a Receipts folder.
	
	12. Close the Inbox Assistant dialog box. In the main client window, select the
	  Receipts folder.
	
	13. On the View menu, click Define Views. This should bring up the Define Views
	  dialog box. Select the Folder Views option. This will cause the view being
	  defined to be available only in the currently selected folder. If you want
	  to use this view in other folders, select Personal Views.
	
	14. Click New.
	
	15. Type "Group by Conversation View" as the View Name.
	
	16. Click the Columns button. In the Columns dialog box, select Conversation
	  Topic from the Available Columns list, and click Add. Close the dialog box
	  by clicking OK.
	
	17. Click the Group By button to bring up the Group By dialog box. In the "Group
	  items by" list box, select Conversation Topic. This will cause all the
	  messages in the folder to be displayed, grouped by Conversation Topic.
	
	18. In the "Then Sort items by" list box, select From. Click OK. This will cause
	  all the messages in a group to be sorted by the Sender's name.
	
	19. Click the Apply button and then close the Define Views dialog box by
	  clicking Close.
	
	20. Depending on whether you created the view as a Folder View or a Personal
	  View, select Folder Views or Personal Views on the View Menu, and then
	  choose Group by Conversation View. This will cause the information in the
	  Receipts folder to be displayed with the selected view.
	
	The view created will group all the receipts received in response to a particular
	message. Inside each group, all the messages will be sorted by the sender's
	name.
	
	This view can be used to determine the following information for a particular
	message sent out with read and delivery receipt turned on:
	
	- All the users to whom the message was delivered. These are receipts from
	  "System Administrator."
	
	- Users who have read the message. These are messages with "Read:" prefixed to
	  the subject line.
	
	- Users who deleted the message without reading it, or moved the message to a
	  private folder. These are receipts with "Not Read:" prefixed to the subject
	  line.
	
	- If a receipt message is not received from a user, then that user has not
	  read, deleted, or moved the original message into a private folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	
	=============================================================================
	

{% endraw %}
