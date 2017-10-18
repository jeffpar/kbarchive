---
layout: page
title: "Q152849: XADM: How to Recover from a Lost Key Management Server"
permalink: kb/152/Q152849/
---

## Q152849: XADM: How to Recover from a Lost Key Management Server

	Article: Q152849
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the disk that a Key Management (KM) Server password is located on is lost or
	damaged, and the password on the disk is unknown, the following procedure can be
	used to reset the KM Server password.
	
	MORE INFORMATION
	================
	
	1. Have the users decrypt any encrypted messages (or else they will not be able
	  to read them once they get a new security key). They can do this manually or
	  use the bulk security tool SECTOOL.EXE (included with the Microsoft Exchange
	  Resource Kit) to decrypt them all at once.
	
	2. Run KMSERVER -u (you must use lowercase) to remove the Microsoft Exchange Key
	  Management Service.
	
	3. Remove the directory where the Key Management server was installed.
	
	4. Reinstall the KM Server software to generate a new key for encrypted
	  messages.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
