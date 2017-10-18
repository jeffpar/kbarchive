---
layout: page
title: "Q173105: Error Moving Message from PST to Exchange Server Mailbox"
permalink: kb/173/Q173105/
---

## Q173105: Error Moving Message from PST to Exchange Server Mailbox

	Article: Q173105
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5; Win95:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you receive a message when connected to a Microsoft Mail postoffice, save it
	in a .Pst file, use that .Pst file in a profile that connects to Microsoft
	Exchange Server, and attempt to move or copy that message to your Exchange
	Server mailbox, you may receive the following error message:
	
	  An item could not be copied. The action could not be completed.
	
	On a computer running Microsoft Outlook97 or Outlook98, the error message is as
	follows:
	
	  Some items could not be copied. They were either moved, deleted or access was
	  denied.
	
	You will receive this error message any time that you save a Simple Mail Transfer
	Protocol (SMTP) message in a .Pst file using the Exchange client with only the
	Microsoft Mail services installed and later try to move the message to an
	Exchange Server with only the Exchange Server service in your profile.
	
	WORKAROUND
	==========
	
	You can avoid this problem by adding the Microsoft Mail service to your current
	Exchange profile; therefore, if you are connecting only to an Exchange server in
	your current profile, you must add the Microsoft Mail service. After you add the
	Microsoft Mail service, you will then be able to move all of your messages from
	the .Pst file to the Exchange server-based store.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0,
	5.0, and 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You may see this error if you are using the Microsoft Exchange client with the
	Microsoft Mail service to connect to a Microsoft Mail postoffice, and you
	receive SMTP messages from your Microsoft Mail postoffice mailbox and store the
	messages in your .Pst file. If you receive mail in this manner and you are now
	working with the above .Pst file and only have a Microsoft Exchange Server
	service included in your profile, you can get the above error when trying to
	move or copy an SMTP message from your local .Pst file to the Exchange Server
	store.
	
	For more information about creating a profile or adding a service to a profile,
	see the Microsoft Knowledge Base article Q162203, OL97: User Profiles and
	Information Services.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0,5.5; Win95:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
