---
layout: page
title: "Q158363: XADM: Acceptable Form of X.400 O/R Addresses in Exchange"
permalink: kb/158/Q158363/
---

## Q158363: XADM: Acceptable Form of X.400 O/R Addresses in Exchange

	Article: Q158363
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are four different forms of X.400 O/R Addresses defined in Volume VIII,
	Fascicle VIII.7 of the CCITT recommendations (that is, the X.400 Blue Book):
	mnemonic, numeric, postal, and terminal.
	
	Microsoft Exchange Server only supports the mnemonic form of the O/R Address,
	which gives the description of a User or Distribution List in relation to the
	Administration-domain-name (ADMD).
	
	MORE INFORMATION
	================
	
	The mnemonic form of the O/R Address consists of the following attributes,
	marked as either optional or mandatory:
	
	  Administration-domain-name (ADMD)      MANDATORY
	  Country-name (C)              MANDATORY
	
	At least one of the following must be used, and any combination of the others in
	the list may be used:
	
	  Common-name (CN)              OPTIONAL
	  Organizational-name (O)          OPTIONAL
	  Organizational-unit-names (OU#)        OPTIONAL
	  Personal-name                 OPTIONAL
	     --may be either Surname(s),Given(g), or Initials(i)
	  Private-domain-name (PRMD)          OPTIONAL
	
	In addition to the above attributes, domain-defined attributes (DDAs) can also be
	used.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
