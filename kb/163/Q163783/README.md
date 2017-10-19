---
layout: page
title: "Q163783: XCLN: MAPISendMail Function Fails in 32-bit VB Environment"
permalink: /kb/163/Q163783/
---

## Q163783: XCLN: MAPISendMail Function Fails in 32-bit VB Environment

	Article: Q163783
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A simple MAPI program written originally in 16-bit VB 3.0 fails on the
	MAPISENDMAIL function when the program is recompiled in the 32-bit VB 4.0
	environment. The program will produce an error 25 on the MAPISENDMAIL function,
	which is an invalid recipient error.
	
	MORE INFORMATION
	================
	
	The reason for the error is that the way of declaring a 32-bit function in
	32-bit Visual Basic 4.0 is different then declaring a 16-bit function in 16-bit
	Visual Basic (3.0 or 4.0). Mapi32.dll is expecting a pointer to the Recipient
	array instead of the address of the first element.
	
	There is an updated module that corrects this problem. This module contains
	updated declares and other necessary procedures for this process to work
	correctly in the 32-bit Visual Basic environment. This file is the updated
	Mapivb32.bas file. For more information about the availability of this file,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163216 XCLN: Updated Mapivb32.bas for Simple MAPI on 32-Bit Platforms
	
	The following is the correct syntax for the code to call the MAPISendMail
	function with the new BAS file:
	
	     RET& = MAPISendMail(hSession&, 0, MailMsg, Recips, NoFile, 0&, 0&)
	
	Additional query words: MAPI sending error 32 bit whoami fails
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	
	=============================================================================
	
