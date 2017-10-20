---
layout: page
title: "Q146024: XCLN: Ambiguous Name Resolution Methods"
permalink: /kb/146/Q146024/
---

## Q146024: XCLN: Ambiguous Name Resolution Methods

{% raw %}

	Article: Q146024
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange clients allow you to enter an alias on the To: line
	instead of the complete address of a user. The Microsoft Exchange client will
	attempt to resolve the alias to the full address. If there are multiple matching
	entries, it will display them and allow you to select the correct address. This
	feature is call Ambiguous Name Resolution (ANR).
	
	MORE INFORMATION
	================
	
	There are two ways to enter alias names on the To: line. The correct one to
	choose depends on how broadly you want the Microsoft Exchange client to search
	the address book.
	
	- With just the ALIAS (TO: ALIAS) - If you choose this option, the client will
	  search the entire selected address book for any Surnames, DisplayNames,
	  Aliases, Offices, or EmailAddresses that match the alias entered. This will
	  include partial matches. If multiple addresses are located, the Microsoft
	  Exchange client will display the CHECK NAMES window and allow the user to
	  select the correct address.
	
	  Example: If 'ADAMS' is entered on the To: line, the Microsoft Exchange client
	  will search the locations listed above and list all items that match ADAMS
	  along with partial matches like ADAMSON.
	
	- With an equal sign (=) preceding the ALIAS (TO: =ALIAS) - If you choose this
	  option, the Microsoft Exchange client will search the entire selected address
	  book for any Surnames, DisplayNames, Aliases, Offices, or EmailAddresses that
	  match the alias entered. This will not include partial matches. If multiple
	  addresses are located, the Microsoft Exchange client will display the CHECK
	  NAMES window and allow the user to select the correct address.
	
	  Example: If '=ADAMS' is entered on the To: line, the Microsoft Exchange client
	  will search the locations listed above and list all items that match ADAMS
	  but NOT partial names like ADAMSON.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
