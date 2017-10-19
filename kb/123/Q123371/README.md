---
layout: page
title: "Q123371: Mac OOF: Forwarding Mail to a Gateway Recipient"
permalink: /kb/123/Q123371/
---

## Q123371: Mac OOF: Forwarding Mail to a Gateway Recipient

	Article: Q123371
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Out of Office Server stack, included with version 3.1d of Microsoft Mail for
	AppleTalk Networks, allows users to designate a delegate to forward messages in
	their absence. This delegate can be an Mail for AppleTalk user, but can also be
	a gateway address if the following steps are followed.
	
	MORE INFORMATION
	================
	
	To forward messages to a gateway address when registered as Out of the Office,
	perform the following:
	
	1. Verify that the gateway address appears in the All list. If the user is not
	  in the All list, the Network Manager will need to add the user as a Gateway
	  Recipient. (See page 55 of the Mail 3.1 "Network Manager's Guide" for more
	  information.)
	
	2. In Mail for AppleTalk Networks, from the Mail menu, choose Address Book. In
	  the All list, note the gateway name that appears to the right of the gateway
	  recipient. (For example, the Mail Connection gateway normally appears as "MS
	  Mail Connection.")
	
	3. Close the Address Book.
	
	4. Click the Out of Office Registration form.
	
	5. Select the Auto-Forward My New Mail check box.
	
	6. In the To: field, enter the address in the following form,
	
	  " username@servicename " (without the quotation marks)
	
	  where username is the friendly name of the user from the All list and
	  servicename is the name of the gateway service noted in step 2.
	
	7. Complete the rest of the Out of Office form and click Send.
	
	8. Wait for confirmation from the Out of Office Server before leaving your
	  workstation.
	
	
	Additional query words: 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	
