---
layout: page
title: "Q230250: XFOR:Internet Mail Service Failed to Deliver Message, Error 4117"
permalink: kb/230/Q230250/
---

## Q230250: XFOR:Internet Mail Service Failed to Deliver Message, Error 4117

	Article: Q230250
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service may fail to deliver inbound Internet messages if the
	Character Sets setting is improperly configured. An Event Log entry similar to
	the following appears in the Windows NT application log:
	
	  Event ID: 4117
	  Source: MSExchangeIMC
	  Description:
	  An error was returned from the messaging software the Internet Mail Service
	  uses to process messages on the Microsoft Exchange Server. As a result, the
	  message in spool file Jtmrmaqv failed to be delivered. The message has been
	  moved to the IMCDATA\IN\ARCHIVE directory.
	
	The spool file name may vary from computer to computer.
	
	CAUSE
	=====
	
	The Character Sets setting on Internet Mail Service is improperly configured.
	This usually happens if the default Character Sets setting was changed.
	
	The setting is on the Internet Mail tab of Internet Mail Service Properties page.
	The default setting for either MIME or Non-MIME is "Western European
	(ISO-8859-1)."
	
	This can also occur if antivirus software that is not "Exchange aware" is running
	on the system. Use of antivirus software that is not "Exchange aware" is highly
	discouraged.
	
	RESOLUTION
	==========
	
	To resolve this problem, you need to reconfigure the Character Sets setting
	using the following procedure:
	
	1. Check the 4117 event, locate the spool file name ("Jtmrmaqv" in the above
	  example).
	
	2. Open this file under Exchsrvr\Imcdata\In\Archive with Notepad.exe.
	
	3. The majority of this file is in plain text format. It contains the header and
	  body of the inbound message to be delivered. The character set of the message
	  is included in lines similar to:
	
	  Content-Type: text/plain;
	  charset="ISO-8859-1"
	
	4. Open the Exchange Server Administrator program, and open the properties for
	  the Internet Mail Service.
	
	5. On the Internet Mail tab, reset the character sets to correspond with the
	  character set name you find in step 3. (If this problem only happens to
	  certain domains, you may prefer per-domain setting by clicking the E-Mail
	  Domain button.)
	
	6. Stop and restart Internet Mail Service.
	
	MORE INFORMATION
	================
	
	To test the new setting:
	
	1. Stop the Internet Mail Service.
	
	2. Move files under Exchsrvr\Imcdata\In\Archive to Exchsrvr\Imcdata\In.
	
	3. Restart the Internet Mail Service.
	
	Messages are delivered to corresponding mailboxes and no event 4117 appears in
	the application log.
	
	Additional query words: MSExchangeIMC
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Component         : IMC IMS
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
