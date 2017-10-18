---
layout: page
title: "Q191909: XCLN: Error Msg: Unable to Download Offline Address Book"
permalink: kb/191/Q191909/
---

## Q191909: XCLN: Error Msg: Unable to Download Offline Address Book

	Article: Q191909
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to download the offline Address Book (OAB) by clicking the Tools
	menu, clicking Synchronize, and clicking Download Address Book in an Exchange or
	Outlook client, the following error messages may appear:
	
	  An error occurred while opening the Microsoft Exchange offline address
	  book files on the Microsoft Exchange Server. See your administrator.
	
	Followed by:
	
	  Unable to download the offline Address Book. The Microsoft Exchange
	  Address Book could not be accessed.
	
	CAUSE
	=====
	
	The OAB may have been generated on the Exchange Server computer without using
	the "Microsoft Exchange 4.0 and 5.0 compatibility" option.
	
	WORKAROUND
	==========
	
	This error only occurs on versions of Exchange 4.0 and 5.0 clients and Outlook
	versions prior to 8.03. Outlook versions 8.03 and 8.5 work successfully. To
	prevent this error from occurring, perform the following steps:
	
	1. Open the Exchange Administrator program.
	
	2. Click on the Configuration container in the left pane.
	
	3. Double-click on the DS Site Configuration object in the right pane.
	
	4. Click the Offline Address Book tab.
	
	5. Select the "Microsoft Exchange 4.0 and 5.0 compatibility" check box, and then
	  click Apply.
	
	6. Click the Generate All button to regenerate the OAB.
	
	7. On a client workstation, from the Tools menu, select Synchronize, and then
	  select Download Address Book to get the new OAB.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02
	Issue type        : kbprb
	
	=============================================================================
	
