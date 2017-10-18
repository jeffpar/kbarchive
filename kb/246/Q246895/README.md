---
layout: page
title: "Q246895: XADM: DS_E_ATTRIBUTE_OR_VALUE_EXISTS When Applying Service Pack"
permalink: kb/246/Q246895/
---

## Q246895: XADM: DS_E_ATTRIBUTE_OR_VALUE_EXISTS When Applying Service Pack

	Article: Q246895
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply an Exchange Server service pack to an Exchange Server computer,
	you may receive the following error message:
	
	  An internal processing error has occurred:
	  The attribute or value exists. Try restarting the Administrator program or the
	  Microsoft Exchange Server computer, or both.
	
	  Microsoft Exchange Directory ID no: DS_E_ATTRIBUTE_OR_VALUE_EXISTS
	
	CAUSE
	=====
	
	Address generation for one or more e-mail address types has been disabled.
	E-mail address generation can be disabled on the Site Addressing object in the
	Exchange Server Administrator program by clicking Remove for one of the e-mail
	addresses on the Site Addressing tab.
	
	WORKAROUND
	==========
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Click the Site Addressing object in the Configuration container, and on the
	  File menu, click Raw Properties.
	
	3. In the Object Attributes box, click Disabled-Gateway-Proxy.
	
	4. Remove any attribute values that may exist by clicking the attribute in the
	  Attribute values box, and then clicking Remove.
	
	5. Click OK, and close the Administrator program.
	
	6. Reapply the service pack.
	
	The workaround procedure removes the attribute value from the
	Disabled-Gateway-Proxy attribute, and re-enables the e-mail address for
	generation. However, this does not automatically cause the address to be
	regenerated throughout the site.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
