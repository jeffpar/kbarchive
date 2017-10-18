---
layout: page
title: "Q169959: XCLN: Exchange Client Won't Register for New Mail Notification"
permalink: kb/169/Q169959/
---

## Q169959: XCLN: Exchange Client Won't Register for New Mail Notification

	Article: Q169959
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0; WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Neither the Microsoft Exchange Client 4.0 or later, nor the Microsoft Outlook 97
	client will register for new mail notifications on non-default message stores.
	
	MORE INFORMATION
	================
	
	The only way either of the above-mentioned clients will register for new mail
	notifications for a specific message store is if the message store advertises to
	the messaging subsystem that it can be a default store. These clients will only
	register for new mail notifications with the message store that is listed as the
	default message store in the current profile. These clients will not register
	for new mail notifications in any other message store other than the default
	message store in the same profile in a given session.
	
	If you have two message store providers listed in a given profile, one, and only
	one, can be the default message store. For any session that uses this profile,
	the Exchange and Outlook clients will register only with the default message
	store listed in the profile for new mail notifications. Any other message stores
	in the profile are ignored for new mail notification.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WinNT:4.0; WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
