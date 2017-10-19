---
layout: page
title: "Q150294: Cannot Access Exchange Server After Changing WinNT Domain Name"
permalink: /kb/150/Q150294/
---

## Q150294: Cannot Access Exchange Server After Changing WinNT Domain Name

	Article: Q150294
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you change a Windows NT domain name and then attempt to run the Microsoft
	Exchange Server administration tools, you will get a message that the Microsoft
	Exchange Server cannot be located. The Microsoft Exchange Server will be
	inaccessible by all other means as well.
	
	CAUSE
	=====
	
	The Microsoft Exchange Server services must log on to the Windows NT server on
	which they're running. If the service has been configured in Control Panel under
	Services to "Log On As" a specific domain account, the service may be trying to
	start as OldDomainName\AccountName instead of NewDomainName\AccountName.
	
	RESOLUTION
	==========
	
	Modify the "Log On As" account setup in Control Panel under Services for all the
	Microsoft Exchange Server services. Other services such as Directory Replicator
	may also need to be modified because they log on to the server with a domain
	account.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
