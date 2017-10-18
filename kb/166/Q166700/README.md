---
layout: page
title: "Q166700: XCLN: IE Mail Button Prompts You to Choose Profile"
permalink: kb/166/Q166700/
---

## Q166700: XCLN: IE Mail Button Prompts You to Choose Profile

	Article: Q166700
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Internet Explorer version 3.0 for Windows 3.1 
	- Microsoft Internet Explorer version 3.0 for Windows 95 
	- Microsoft Internet Explorer version 3.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Internet Explorer version 3.0x, when you click Mail, Read New Mail,
	Send Message, or Send a Link, you are prompted with the Choose Profile dialog
	box. This occurs regardless of how Microsoft Exchange Client is configured
	
	This occurs even if you specifically cleared the "Prompt for a profile to be
	used" checkbox in the Exchange or Outlook client (on the Tools menu, click
	Options).
	
	This behavior does not occur if you have logged on to the Exchange or Outlook
	client prior to opening the Mail button.
	
	CAUSE
	=====
	
	This is expected behavior of the MAPI call being made by Internet Explorer.
	Other applications that make this MAPI call exhibit this same behavior.
	
	MORE INFORMATION
	================
	
	Further explanation from the MAPI Software Development Kit (SDK):
	
	  MAPI client applications call the MAPILogonEx function to log onto a session
	  with the messaging system. It is the client's responsibility to call service
	  providers; MAPILogonEx does not make these calls. All strings passed in and
	  returned to and from MAPI calls are null- terminated and must be specified in
	  the current character set or code page of the calling client or provider's
	  operating system. The lpszProfileName parameter is ignored if there is an
	  existing previous session that called MapiLogonEx with the MAPI_ALLOW_OTHERS
	  flag set and if the flag MAPI_NEW_SESSION is not set. If the lpszProfileName
	  parameter is NULL or points to an empty string, and the flFlags parameter
	  includes the MAPI_LOGON_UI flag, the MAPILogonEx function generates a logon
	  dialog box with an empty field for the profile name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbIEsearch kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbIENT400Search kbIE95Search kbIE310Search kbZNotKeyword3 kbIE300Win310 kbIE300Win95 kbIE300WinNT400 kbExchange400NT kbExchange400Win95
	Version           : :3.0,4.0
	
	=============================================================================
	
