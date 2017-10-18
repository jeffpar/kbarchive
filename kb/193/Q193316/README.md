---
layout: page
title: "Q193316: XFOR: How to Create Addresses of Form &quot;user@[IP Address]&quot;"
permalink: kb/193/Q193316/
---

## Q193316: XFOR: How to Create Addresses of Form &quot;user@[IP Address]&quot;

	Article: Q193316
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	RFC 821 and 821bis compliance requires the support of IPv4 literals (user@[IP
	address]).
	
	The Exchange Server version 5.5 Internet Mail Service now supports addresses
	containing IPv4 literals (user@[IP address]) inbound, outbound, and rerouted. A
	message is routed inbound if the IPv4 literal is one of the Exchange Server
	computer's IP addresses.
	
	A message routed inbound is only delivered if it matches a proxy. However, the
	Administrator program strips the square brackets from the address when you
	attempt to create an address of the form "user@[IP address]" from the user
	interface.
	
	MORE INFORMATION
	================
	
	To create a proxy of the type "user@[IP address]", perform the following steps:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  admin /r
	
	2. After the Administrator program is running in raw mode, open the Recipient
	  container where the user who needs the special proxy address is located.
	
	3. With the user highlighted, select File, and then select Raw Properties from
	  the menu bar (or press SHIFT+ENTER).
	
	4. In the property window that appears for the user object, select "E-mail
	  Addresses" under the Object attributes by clicking it.
	
	5. Under the attribute values section, edit the SMTP address or add a secondary
	  proxy address as necessary.
	
	REFERENCES
	==========
	
	Per RFC 821 page 31:
	
	Hosts are generally known by names that are translated to addresses in each host.
	Note that the name elements of domains are the official names -- no use of
	nicknames or aliases is allowed. Sometimes a host is not known to the
	translation function and communication is blocked. To bypass this barrier two
	numeric forms are also allowed for host "names". One form is a decimal integer
	prefixed by a pound sign, "#", which indicates the number is the address of the
	host. Another form is four small decimal integers separated by dots and enclosed
	by brackets, e.g., "[123.255.37.2]", which indicates a 32-bit ARPA Internet
	Address in four 8-bit fields.
	
	Additional query words: RFC 821, 821bis, IPv4 literals
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
