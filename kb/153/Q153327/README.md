---
layout: page
title: "Q153327: XCLN: SMS Install of Exchange Client Crashes with /Q1 Switch"
permalink: /kb/153/Q153327/
---

## Q153327: XCLN: SMS Install of Exchange Client Crashes with /Q1 Switch

	Article: Q153327
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Windows client Setup program with the /Q1
	switch and there is not enough hard disk space on the destination drive, the
	Setup program stops responding (crashes).
	
	CAUSE
	=====
	
	Many customers want to use Microsoft Systems Management Server to install the
	Microsoft Exchange Windows client on their computers. To help customers,
	Microsoft provides a .pdf file for Systems Management Server installation on the
	Microsoft Exchange Client CD (in the Sms\Eng folder). There is a .pdf file for
	each client platform and these files list the /Q1 switch as the appropriate
	switch to use for typical quiet mode, or unattended, installation.
	
	The Systems Management Server installation may not work when run with the /Q1
	switch. The initial blue Setup screen appears, and Setup quits without
	displaying any error messages, leaving you at the installation point. However,
	after the Exchange Windows client Setup screen appears, Exchange Windows client
	Setup checks for adequate hard disk space on the computer and if there is not
	enough hard disk space on the destination drive, Setup quits. Because Setup is
	running in quiet mode, no error message is displayed. If you run Setup without
	the /Q1 switch, an error message is displayed which states that there is not
	enough disk space.
	
	WORKAROUND
	==========
	
	To work around this problem, be sure there is enough free hard disk space on the
	computer before you install the Microsoft Exchange Windows client in quiet mode.
	
	Additional query words: smsprod smspcm
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
