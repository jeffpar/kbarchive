---
layout: page
title: "Q152686: XCLN: How Expired Encryption Key Pairs Work"
permalink: /kb/152/Q152686/
---

## Q152686: XCLN: How Expired Encryption Key Pairs Work

{% raw %}

	Article: Q152686
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Key Management Server in Microsoft Exchange Server provides
	public/private key encryption pairs that expire after 18 months. This cannot be
	changed.
	
	
	MORE INFORMATION
	================
	
	You can still read messages encrypted with your older key pairs. A history of
	your encryption key pairs is maintained in both the .EPF file for client use, as
	well as in the KM Server database for key escrow purposes.
	
	Old signatures will fail verification with the following error message:
	
	  A Signature has expired error.
	
	However, all of the other conditions (message not altered, signature not
	suspended, etc.) will pass.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
