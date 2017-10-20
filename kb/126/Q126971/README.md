---
layout: page
title: "Q126971: PC Win: Recipients Removed from Mail Message"
permalink: /kb/126/Q126971/
---

## Q126971: PC Win: Recipients Removed from Mail Message

{% raw %}

	Article: Q126971
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you address a message with the New Address button, if the mail address is
	duplicated for more than one recipient, but the alias is unique, version 3.2 of
	Microsoft Mail for Windows will remove all but the first duplicated addresses.
	If the alias is duplicated but the address is unique, a recipient will see the
	alias duplicated on the To: or Cc: fields.
	
	MORE INFORMATION
	================
	
	Mail for Windows allows direct addressing though the New Address button in the
	Address dialog box. For example, for the Network/Postoffice address type, you
	may enter an Alias, Mailbox, Postoffice, and Network name. The Mailbox,
	Postoffice, and Network name must be unique to resolve an address.
	
	If two entries are added to a Compose Note with duplicate aliases but unique
	Mailbox, Postoffice, and Network names, the recipients will see the message with
	duplicate alias names. If two entries are added with different alias names but
	duplicate Mailbox, Postoffice, and Network names, the recipients will only see
	the first alias. All other duplicate Mailbox, Postoffice, and Network names will
	be removed.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
