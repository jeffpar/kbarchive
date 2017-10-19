---
layout: page
title: "Q298933: XADM: Exchange Services Won't Start After SP3 Canceled"
permalink: /kb/298/Q298933/
---

## Q298933: XADM: Exchange Services Won't Start After SP3 Canceled

	Article: Q298933
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to load Service Pack 3 (SP3), and you then stop the
	installation after you receive numerous ".dll in use" error messages, Exchange
	Server services may not start. When you try to start Microsoft Exchange
	Directory service, you may receive the following error message:
	
	  Dsamain.exe -Entry Point Not Found
	  The procedure entry point ?HrRegisterProtocol@@YGJPAVPROTO@@FJJJKHPAXK@Z could
	  not be located in the dynamic link library Netif.dll.
	
	CAUSE
	=====
	
	The issue can occur because the Netif.dll file was not updated due to the
	cancellation of the SP3 installation.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Stop all nonessential services.
	
	2. Repeat the SP3 installation. Each time that you receive the following error
	  message during the installation, write down the .dll file names that appear:
	
	  Could not open the file named <drive
	  letter>:\Winnt\System32\<filename>.dll. It is in use by another
	  application.
	
	3. When you complete the SP3 installation, rename all of the .dll files whose
	  names you wrote down.
	
	4. Search for the renamed files and replace each of them with the appropriate
	  .dll file that is on the SP3 compact disc.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
