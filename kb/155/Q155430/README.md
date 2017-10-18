---
layout: page
title: "Q155430: XCLN: ErrMsg: No Transport Provider was Available for Delivery"
permalink: kb/155/Q155430/
---

## Q155430: XCLN: ErrMsg: No Transport Provider was Available for Delivery

	Article: Q155430
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send mail using a Microsoft Exchange client, you receive the following
	error message:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Subject of the message
	  Sent: 7/19/96 11:20:50 AM
	
	  The following recipient(s) could not be reached:
	
	  John Doe on 7/19/96 11:20:52 AM
	  No transport provider was available for delivery to this recipient.
	
	CAUSE
	=====
	
	This error is generally caused by an invalid recipient address. It can present
	itself when the address is an unrecognized or unsupported address type.
	
	For example, using the Personal Address Book (PAB) to address mail. Typically,
	when migrating to Microsoft Exchange, users will tend to use a PAB entry to
	address mail. In some instances, the address looks like the friendly name that
	is also in the GAL, but when getting details of the user in the PAB, the address
	will contain that of the old mail system.
	
	RESOLUTION
	==========
	
	Delete the address from the PAB and then add the user back into the PAB from the
	Global Address Book (GAL).
	
	Additional query words: Transport Provider
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
