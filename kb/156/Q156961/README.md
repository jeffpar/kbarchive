---
layout: page
title: "Q156961: XFOR: Mac Connection Gateway Will Not Install on System 7.5.3"
permalink: /kb/156/Q156961/
---

## Q156961: XFOR: Mac Connection Gateway Will Not Install on System 7.5.3

	Article: Q156961
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Connection Gateway Installer, there are no
	components available for installation or the gateway refuses to install on the
	selected disk.
	
	CAUSE
	=====
	
	This occurs when you attempt to install the Microsoft Exchange Connection
	Gateway on a Macintosh running System 7.5.3 or higher. The Installer requires
	System 7.5 or 7.5.1 to install correctly.
	
	WORKAROUND
	==========
	
	To manually install the Microsoft Exchange Connection Gateway on System 7.5.3 or
	higher, follow these steps:
	
	1. Create a folder on the hard disk called MS Exchange Connection.
	
	2. Create a subfolder of MS Exchange Connection called DER.
	
	3. Create a subfolder of MS Exchange Connection called Connection Installer.
	
	4. Copy the Exchange Connection DER file from the floppy disk to the DER
	  subfolder.
	
	5. Copy the Exchange Connection Installer and GW files from the floppy disk to
	  the Connection Installer subfolder.
	
	6. Copy the MS Mail GW file into the Extensions folder.
	
	7. Restart the Macintosh to load the MS Mail GW extension.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: Mac DER install 7.5.3 appletalk connector 7.6
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
