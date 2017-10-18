---
layout: page
title: "Q175101: XADM: Long Site and Organization Names Cause Setup Problems"
permalink: kb/175/Q175101/
---

## Q175101: XADM: Long Site and Organization Names Cause Setup Problems

	Article: Q175101
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Exchange Server version 5.5 and using a very long site
	or organization name, errors may occur. If the name is longer than 64 characters
	but fewer than 256, a dialog box will be displayed with the following message:
	
	  Setup could not completely translate the organization and site display
	  names into values suitable for generating e-mail addresses. Please enter
	  the organization and site directory names.
	
	A dialog box will be displayed that allows you to specify a directory name for
	the organization and site. Valid input will only be a drive specification (that
	is, C: or D:). Setup will resume from this point and use the previously
	specified long site and organization names (abbreviated to 64 characters).
	
	If the name you entered for the site or the organization is more than 256
	characters, you will receive the following error message:
	
	  An internal processing error has occurred: constraint violation. The
	  value specified for an attribute is either too big, too small, or not
	  valid.
	  Microsoft Exchange Directory
	  ID no: DS_E_CONSTRAINT_VIOLATION
	
	Setup will fail at this point. The only alternative is to restart the Setup
	program and select a shorter name for the organization and site of the Exchange
	Server computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0 and
	5.5. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available. Additional query word:
	installation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
