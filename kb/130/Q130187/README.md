---
layout: page
title: "Q130187: XCLN: Converting Recipient List to Personal Distribution List"
permalink: /kb/130/Q130187/
---

## Q130187: XCLN: Converting Recipient List to Personal Distribution List

{% raw %}

	Article: Q130187
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you receive messages that have been sent to a logical grouping of
	individuals, but this group of users is not defined as a distribution list in
	the global address list, it can be time consuming to address new mail to the
	group. To save this list of users for later use, you can create a personal
	distribution list to be stored in your personal address book. Rather than
	manually adding each of the names, perform the following steps in the Microsoft
	Exchange client to quickly convert a list of recipients to a distribution list:
	
	1. Open the message with the desired To:, Cc:, or Bcc: list. Double-click the
	  From: field.
	
	2. Select the entries in the To, Cc, or Bcc list and press CTRL+C to copy the
	  list to the Clipboard.
	
	3. Close the open message.
	
	4. On the Tools menu, choose Address Book.
	
	5. In the Address Book, choose New Entry on the File menu.
	
	  (In the MS-DOS client, choose the New button.)
	
	6. Choose Personal Distribution List as the type of entry and click OK.
	
	7. In the Properties For New Personal Distribution List window, type a name for
	  the personal distribution list and click the Add/Remove Members button.
	
	  (In the MS-DOS client, type a name for the personal distribution list in the
	  Personal Distribution List window and click the Edit button.)
	
	8. In the Edit New Personal Distribution List Members window, place the mouse
	  pointer in the Members pane and press CTRL+V to paste.
	
	  (In the MS-DOS client, place the cursor in the pane to the right of the Add
	  button and press CTRL+V to paste.)
	
	9. Click OK or Close for each open window until you return to the main Microsoft
	  Exchange client window.
	
	In the future, you can address mail to this group by selecting the personal
	distribution list defined above.
	
	NOTE: This method does not work if the names you are pasting into the personal
	distribution list do not already exist in the Global address list.
	
	Additional query words: DL faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
