---
layout: page
title: "Q177772: XADM: Removing Stranded Mailboxes In Mailbox Resources"
permalink: kb/177/Q177772/
---

## Q177772: XADM: Removing Stranded Mailboxes In Mailbox Resources

	Article: Q177772
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In certain situations, the Mailbox Resources page of the Private Information
	Store properties may show entries for mailboxes that are not homed on that
	particular server, indicating that there are Information Store objects stranded
	on that private information store.
	
	To remove these stranded information objects from the private information store,
	perform the following steps:
	
	1. In the Exchange Administrator Program, under Configuration/Servers/<server
	  name>/Private Information Store/Mailbox Resources, note the stranded
	  mailboxes.
	
	2. Connect the Administrator program to another server in the site.
	
	3. Find one of the affected mailboxes in the Global Address List (or any other
	  list) and select it.
	
	4. From the Tools menu, click Move Mailbox, and then select the server
	  containing the stranded mailbox object. Click OK.
	
	5. You will then receive a popup displaying the following error message:
	
	  A duplicate mailbox was found due to problems during a Move Mailbox
	  procedure. The duplicate mailbox has been deleted. Try again later.
	
	  Microsoft Exchange Information Store
	  ID no: c1040b00
	
	  Click the OK button on the popup to remove the error message.
	
	6. The stranded object will then be removed from the information store and will
	  not appear in the Mailbox Resources page.
	
	7. Repeat steps 3 through 6 for every stranded mailbox that you noted in step 1.
	
	MORE INFORMATION
	================
	
	This problem can occur when mailboxes are moved to another server and then an
	old version of the private information store is restored to the original server.
	In this case, the Information Store objects for the moved mailboxes remain on
	the original server.
	
	This problem has also occurred when the Move Mailbox function has failed midway
	during the move process.
	
	Additional query words: multiple duplicate stranded mailbox
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
