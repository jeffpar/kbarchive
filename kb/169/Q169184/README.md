---
layout: page
title: "Q169184: XCLN: Offline Address Book Fails to Download, No Err Msg"
permalink: kb/169/Q169184/
---

## Q169184: XCLN: Offline Address Book Fails to Download, No Err Msg

	Article: Q169184
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:5.0,8.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you are attempting to download an Offline Address Book
	from an Exchange Client computer that is connecting to an Exchange Server
	computer configured to use Multiple Address Books. If you start downloading an
	Offline Address Book, cancel the operation, and then select another Offline
	Address Book to download, that second Offline Address Book is not downloaded.
	The Offline Address Book you selected appears to be downloading, and no error
	message is generated, but it is not downloaded.
	
	Here is how the problem occurs. You start downloading an Offline Address Book.
	The "Offline Address Book Selection" dialog box offers you a choice of Offline
	Address Books to download. If you move the "Offline Address Book Selection"
	dialog box from the foreground, you will see the "Download Microsoft Exchange
	Address Book" dialog box, which has an animation that says "connecting to
	Microsoft Exchange Server." You click Cancel in this dialog box to cancel the
	download. You select a second Offline Address Book in the "Offline Address Book
	Selection" dialog box and click OK to begin downloading it. It appears that the
	highlighted Offline Address Book is being downloaded. No error message is
	generated, but the Offline Address Book is not downloaded.
	
	NOTE: In order to click Cancel in the "Download Microsoft Exchange Address Book"
	dialog box (it is hidden behind the "Offline Address Book Selection" dialog box
	initially), you must move the "Offline Address Book Selection" dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on Multiple Offline Address books in Exchange, see the
	Readme.wri file from Exchange Server 5.0 Service Pack 1 or Exchange Server
	Service Pack 2 under the following sections:
	
	- 4.1 Use of Multiple Offline Address Books in Admin
	
	- 4.2 Use of Multiple Offline Address Books in the Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:5.0,8.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
