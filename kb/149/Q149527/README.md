---
layout: page
title: "Q149527: XCLN: Can't Add Fax Service After Installing Exchange"
permalink: /kb/149/Q149527/
---

## Q149527: XCLN: Can't Add Fax Service After Installing Exchange

	Article: Q149527
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- the operating system: Microsoft Windows 98 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to have Fax Services installed and working with the Microsoft Exchange
	or Outlook Windows 95 client, you must first install the Exchange and Fax
	Service that ships with Windows 95 and then install the Microsoft Exchange or
	Outlook Windows 95 client over the top of it. The Microsoft Network Online
	Service (MSN) also needs to be installed and working with the Windows 95 Inbox
	client or Windows Messaging client prior to upgrading to the Microsoft Exchange
	or Outlook Windows 95 client.
	
	MORE INFORMATION
	================
	
	Installing Fax Services after installing the Microsoft Exchange or Outlook
	Windows 95 client will result in the following error message when selecting
	Compose New Fax:
	
	  The following unrecoverable error has occurred:
	
	  Internal MAPI error: The information service cannot be added to the profile
	  using the Inbox Setup Wizard. Contact your administrator.
	
	WORKAROUND
	==========
	
	The FAX Service must be installed, configured, and running properly with the
	Windows 95 Inbox or Windows Messaging client prior to upgrading to the Microsoft
	Exchange or Outlook Windows 95 client.
	
	NOTE: When working offline from the Microsoft Exchange Server, fax messages may
	remain in the outbox of an OST/PST until connection to the Microsoft Exchange
	Server is made. To eliminate this problem, the FAX transport must be listed
	first under TOOLS/OPTIONS/DELIVERY/ service process order.
	
	
	Additional query words: 4.00 services exclnfaqold 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin98 kbOutlookSearch kbOSWinSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :4.0,5.0,8.0,8.01,8.02,8.03
	
	=============================================================================
	
