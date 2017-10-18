---
layout: page
title: "Q170807: XCLN: Cannot Paste into Global Distribution List"
permalink: kb/170/Q170807/
---

## Q170807: XCLN: Cannot Paste into Global Distribution List

	Article: Q170807
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Add Members dialog box for Global Distribution Lists does not allow pasting
	of user names to create a distribution list. The Add Members dialog box for
	Personal Distribution Lists does allow this.
	
	MORE INFORMATION
	================
	
	This is by product design.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	For a Personal Distribution List:
	
	1. Create three mailboxes in Exchange Administrator (user1,user2, user3).
	
	2. Create a distribution list called All in Exchange Administrator.
	
	3. From a client computer (the operating system doesn't matter), set up a
	  profile for user1 and log on to the mailbox.
	
	4. Open Notepad and type "user1, user2, user3" (one entry on each line).
	
	5. Select all three users in Notepad and copy the text to the Clipboard by
	  pressing CTRL+C.
	
	6. Create a distribution list by using these steps.
	
	  a. Open Address Book.
	
	  b. On the File menu, click New Entry, or click the New Entry button.
	
	  c. Select personal Distribution List.
	
	  d. Click Add/Remove Members.
	
	  e. In the Members list, press CTRL+V to paste the user names.
	
	7. Click OK.
	
	8. In the Show Names From The list box, select the Personal Distribution List.
	
	Notice the Personal Distribution List has been created with all three members.
	
	Try these same steps for a Global Distribution List:
	
	1. Open the Address Book from the client.
	
	2. In the Show Names From The list box, select Global Address List. Double-click
	  the All Distribution List.
	
	3. In the Members box, choose Modify.
	
	4. Click Add.
	
	5. Try to paste the same three users into the Add Users text box (to the right
	  of the Add button) as was done with the Personal Distribution List. Note that
	  nothing is pasted.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
