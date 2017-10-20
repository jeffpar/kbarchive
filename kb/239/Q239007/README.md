---
layout: page
title: "Q239007: XCON: User Name Mapping Issues When Implementing MTA MIXER"
permalink: /kb/239/Q239007/
---

## Q239007: XCON: User Name Mapping Issues When Implementing MTA MIXER

{% raw %}

	Article: Q239007
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MIME Internet X.400 Enhanced Relay (MIXER) (RFC 2156) does not provide any
	specifications for mapping variations in user names. Consequently, it is
	important to understand the limitations of using the address mapping scheme.
	
	MORE INFORMATION
	================
	
	When the MIXER maps an SMTP address to an X.400 address, the user name mapping
	is as follows:
	
	  Case 1:
	
	  SMTP address is <name>@<domain>
	  Mapped X.400 address is s=<name>
	
	  Case 2:
	
	  SMTP address is <firstname>.<lastname>@<domain>
	  Mapped X.400 address is s=<lastname>;g=<firstname>
	
	  Case 3:
	
	  SMTP address is
	  <firstname>.<initial>.<lastname>@<domain>
	  Mapped X.400 address is
	  s=<lastname>;g=<firstname>;i=<initial>
	
	When the MIXER maps an X.400 address to an SMTP address, the user name mapping is
	as follows:
	
	  Case 1:
	
	  X.400 address is s=<lastname>
	  Mapped SMTP address is <lastname>@<domain>
	
	  Case 2:
	
	  X.400 address is s=<lastname>;g=<firstname>
	  Mapped SMTP address is <firstname>.<lastname>@<domain>
	
	  Case 3:
	
	  X.400 address is s=<lastname>;g=<firstname>;i=<initial>
	  Mapped SMTP address is
	  <firstname>.<initial>.<lastname>@<domain>
	
	In most Exchange Server topologies, the SMTP address for users is the Exchange
	Server default, which is <alias>@<domain>. If the MIXER mapping
	strategy is in use in this environment, the SMTP-to-X.400 mapping works only if
	all X.400 addresses are in the following form:
	
	  X.400:c=<country>;a=<admd>;p=<prmd>;o=<org>;s=<alias>
	
	This is possible only if the administrator does not populate First Name and Last
	Name fields during mailbox creation. The administrator can also populate the
	Last Name field with the alias, if necessary.
	
	The reverse of this problem is also true if the administrator wants to provide
	X.400-to-SMTP mapping. If, as mentioned above, the administrator has populated
	the First Name and Last Name fields at mailbox creation, the X.400 address is in
	the following form:
	
	  X.400:c=<country>;a=<admd>;p=<prmd>;o=<org>;s=<LastName>;g=<FirstName>
	
	The translated SMTP address in this case renders as:
	
	  <FirstName>.<LastName>@<domain>
	
	This mapping does not work if the default SMTP addressing scheme of
	<alias>@<domain> is being used in this environment.
	
	Additional query words: MIXER RFC2156
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
