---
layout: page
title: "Q156806: XCLN: Err Msg: Your Administrator Must Install MAPI..."
permalink: kb/156/Q156806/
---

## Q156806: XCLN: Err Msg: Your Administrator Must Install MAPI...

	Article: Q156806
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Exchange client for Windows 95, you
	might receive the following error message:
	
	  Your administrator must install MAPI before you can install the Exchange
	  client.
	
	After you click OK, the setup program exits.
	
	CAUSE
	=====
	
	You are attempting to install the Microsoft Exchange client on a shared
	installation of Windows 95.
	
	RESOLUTION
	==========
	
	You must install a shared version of the Microsoft Exchange client on a shared
	version of Windows 95. To do this, follow these steps:
	
	1. Login to a shared Windows 95 computer with an account that has full
	  permissions to the shared Windows 95 directory.
	
	2. Create a Microsoft Exchange network install point by running "Setup /A"
	  (without the quotation marks). This will install a shared copy of the
	  Microsoft Exchange client on the network share as well as update files in the
	  shared Windows 95 directory.
	
	3. Install the Microsoft Exchange client on each shared Windows 95 computer by
	  running Setup from the Microsoft Exchange network install point with no
	  parameters.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
