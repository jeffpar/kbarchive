---
layout: page
title: "Q139876: Non-CompuServe Recipients Not Listed in CIS Mail Header"
permalink: kb/139/Q139876/
---

## Q139876: Non-CompuServe Recipients Not Listed in CIS Mail Header

	Article: Q139876
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send mail to multiple recipients using different service providers,
	CompuServe recipients do not see recipients on other service providers in the
	message header. Recipients on other service providers see all the other
	recipients, regardless of service provider, in the message header.
	
	RESOLUTION
	==========
	
	Messages on CompuServe cannot display recipients on other service providers in
	the message header.
	
	MORE INFORMATION
	================
	
	Transports are not required to send along addresses they cannot resolve. If
	addresses are sent along for non-CompuServe recipients, you might expect a
	CompuServe recipient to be able to send a reply to all the recipients of the
	message. However, the CompuServe address book does not have the ability to
	resolve non-CompuServe addresses.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
