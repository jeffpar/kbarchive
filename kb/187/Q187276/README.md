---
layout: page
title: "Q187276: XFOR: How the Notes Proxy Generator Works"
permalink: kb/187/Q187276/
---

## Q187276: XFOR: How the Notes Proxy Generator Works

	Article: Q187276
	Product(s): Microsoft Exchange
	Version(s): 3.2,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you are installing connectivity to Lotus Notes from Microsoft Exchange, it
	is necessary to install a Notes proxy generator on the Exchange Server computer.
	This is done so that mailboxes in Exchange will have a Notes proxy address for
	receiving messages addressed from Lotus Notes users.
	
	MORE INFORMATION
	================
	
	There are a few different substitutions that can be used for the Notes proxy
	generator. They include the following:
	
	  %s substitute the Surname of the user
	  %g substitute the Given name of the user
	  %d substitute the Display name of the user
	  %m substitute the mailbox name of the user
	  %i substitute the initials of the user
	
	In all the substitutions above, spaces and illegal characters are removed from
	the field before the substitution is made. To specify a different substitution
	to be used, use %r:
	
	  "%r" char1 char2
	
	All instances of char1 are replaced by char2 in the substitutions that occur
	after this in the format string. If char1 == char2, the character is deleted.
	
	Also, an ampersand (&) can be used in place of a percentage sign (%) in the
	above substitutions.
	
	If the format field is not present, this is equivalent to:
	
	  address-type ":" "%m" "@" domain
	
	Examples:
	
	  These examples are based on:
	  mailbox = "FirstLast"
	  display name = "First Initial. Last"
	  surname = "Last"
	  given name = "First"
	
	  Site Proxy                     Generated User Proxy
	  ----------------------------  ----------------------------------------
	  NOTES:%r _%d@wspu.lotus       NOTES:First_Initial._Last@wspu.lotus
	  NOTES:%r..%d@wspu.lotus       NOTES:FirstInitialLast@wspu.lotus
	  NOTES:@wspu.lotus             NOTES:FirstLast@wspu.lotus
	  NOTES:%s@wspu.lotus           NOTES:First@wspu.lotus
	
	Of the above substitution characters, the %D may need some clarification. The %D
	is the case for the display name. Using the example from above, if the display
	name is changed to the following:
	
	  display name = "Last, First Initial."
	
	the following proxy generator behavior is displayed:
	
	  Site Proxy                     Generated User Proxy
	  ----------------------------  ----------------------------------------
	  NOTES:%d@wspu.lotus           NOTES:First Initial. Last@wspu.lotus
	
	The Notes proxy generator does a swap on the display name. The proxy generator
	actually reads the display name into a buffer and searches for the first comma
	in the string. Any character in the buffer after the comma is considered the
	first name, and any character before the comma is considered the last name. To
	get the Lotus Notes proxy generator to create a proxy of NOTES:Last First
	Initial., the Site Addressing tab must have NOTES:%g %s %i@wspu.lotus.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : :3.2,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
