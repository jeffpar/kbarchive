---
layout: page
title: "Q150085: XCLN: AutoSignature and multiple users on same machine"
permalink: kb/150/Q150085/
---

## Q150085: XCLN: AutoSignature and multiple users on same machine

	Article: Q150085
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When there are multiple users on one computer and one of them sets up an
	autosignature, the text of that autosignature will be applied to every mail
	message sent from that computer, not just the mail sent by the user who created
	the autosignature.
	
	MORE INFORMATION
	================
	
	This is by design. Autotext.sig is stored in the Windows subdirectory, not in
	the profile. Therefore, it will affect every user.
	
	WORKAROUND
	==========
	
	The workaround is to create an autosignature for every user's profile and have
	the user select the desired autosignature. The autosignature that the user
	selects will be their default.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
