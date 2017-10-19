---
layout: page
title: "Q166156: XFOR: How to Change the Migration PAB Message"
permalink: /kb/166/Q166156/
---

## Q166156: XFOR: How to Change the Migration PAB Message

	Article: Q166156
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Migration Wizard to migrate personal address books (PABs), a
	message is received in the Exchange Server accounts' mailbox. You can modify the
	text of the message.
	
	MORE INFORMATION
	================
	
	To modify the message received by the Exchange accounts. To do this perform the
	following steps.
	
	1. Make a backup of the Pabmsg.txt file. This file can be found on the computer
	  running Microsoft Exchange Server, in the <Exchange Server>\Bin
	  directory.
	
	2. Open the Pabmsg.txt file. (If the file does not already exist, create this
	  file.)
	
	3. Modify this text file as you want, and save. Save this file as a text file,
	  and use the same name and location.
	
	4. Run the migration wizard to migrate the PABs. (If you would like to test the
	  change, it is recommended that you migrate one test user.)
	
	For information on the migration Wizard, please see the Exchange Server CD,
	Migrate\Docs. The Readme.txt explains what each document contains.
	
	
	Additional query words: ex50 ex55 e2K otlook ol2000 ol2002 pabmsg txt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
