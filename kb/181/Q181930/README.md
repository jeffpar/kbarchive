---
layout: page
title: "Q181930: XCLN: Form Required to View This Message Cannot Be Displayed"
permalink: /kb/181/Q181930/
---

## Q181930: XCLN: Form Required to View This Message Cannot Be Displayed

	Article: Q181930
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Send To function in an Office application such as Word or Excel
	to try to send to a mail recipient using an Exchange or Outlook client, the
	application may stop responding for a long period, or the following error
	message may appear:
	
	  The form required to view this message cannot be displayed.
	  Contact your administrator.
	
	Sending a message from the client works successfully.
	
	CAUSE
	=====
	
	The Frmcache.dat file has become corrupted.
	
	WORKAROUND
	==========
	
	To work around this behavior, rename the Frmcache.dat file located in the
	<windows>\forms directory. Then perform one of the following two
	procedures (A or B) to recreate the file. Then perform C.
	
	a. Remove the client by running Setup and selecting Remove All. Run Setup again
	  and reinstall the client.
	
	  -or-
	
	b. 
	  1. Double-click the Mlset32.exe file in the Program Files\Microsoft Exchange
	     folder to reregister Exchange in the registry.
	
	  2. Either copy the Frmcache.bak file in the Windows\Forms folder to
	     Frmcache.dat, or obtain a copy of the Frmcache.dat file from a computer on
	     which Windows Messaging is functioning properly and then copy the file to
	     the <windows>\Forms folder on your computer.
	
	c. Restart the Exchange or Outlook client and attempt the Send To operation
	  again from the Office application.
	
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q171372 How to Clear the Outlook Forms Cache
	
	  Q181057 How to Clear the Outlook Forms Cache
	
	
	Additional query words: OL98
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
