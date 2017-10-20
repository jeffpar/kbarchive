---
layout: page
title: "Q199760: XADM: Prompt for Password When Re-enrolling in Advanced Security"
permalink: /kb/199/Q199760/
---

## Q199760: XADM: Prompt for Password When Re-enrolling in Advanced Security

{% raw %}

	Article: Q199760
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a user receives the temporary key and tries to re-enroll in advanced
	security, they are asked for a password. If the user doesn't supply a password,
	they are not re-enrolled in advanced security.
	
	MORE INFORMATION
	================
	
	This occurs because during the original enrollment, the user chose high security
	associated with their private key. This prompts the user for a keyset name and
	password. Anytime the user needs to send, read, or re-enroll in advanced
	security, they must supply this password.
	
	If the user forgets this password, to have them successfully re-enroll in
	advanced security, follow these steps:
	
	1. Recover their security key and send the temporary key to them.
	
	2. In the client, on the Tools menu, click Options, and click the Security tab.
	  Click Get digital ID, click "Set up security for me on Exchange Server", and
	  then click OK.
	
	3. You are prompted for a token and keyset name. In Keyset Name, change this
	  from the default.
	
	4. A message is sent to the server and a reply from the security authority will
	  be received.
	
	5. Double-click the message, the user is prompted to select their security
	  level. If they want High security, select "Create new password for this
	  item". In Password for, insert the keyset name changed in step 3. Enter the
	  password for the new keyset name and private key.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
