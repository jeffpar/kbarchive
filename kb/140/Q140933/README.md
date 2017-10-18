---
layout: page
title: "Q140933: XFOR: SMTP Proxy Address Generated Incorrectly"
permalink: kb/140/Q140933/
---

## Q140933: XFOR: SMTP Proxy Address Generated Incorrectly

	Article: Q140933
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange Administrator program, in the Configuration container,
	Site Addressing object, Site Addressing property page, the SMTP address
	generator will not generate SMTP addresses using the first letter(s) of a name.
	This means you cannot generate SMTP addresses automatically like:
	
	  pbunyan@company.com
	
	where "p" is the first letter of the first name "Paul" and "bunyan" is the last
	name.
	
	CAUSE
	=====
	
	The SMTP address generation did not implement the %n feature, where "n" is a
	number, that allows you to specify how many characters of a name field you want
	to use in an SMTP address. This differs from the way Microsoft Exchange Server
	alias and display names are generated in the Microsoft Exchange Administrator
	program using the Options command on the Tools menu.
	
	MORE INFORMATION
	================
	
	The SMTP address generator can be configured to use the first name, last name,
	alias or display name by following the chart below:
	
	%g           given name (first name)
	%s           surname (last name)
	%m           alias
	%d           display name
	%r ch1 ch2   replace the first character(s) (ch1) with the second
	            character(s) (ch2). If ch1 and c2 are the same, ch1 will be
	            deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Now you can specify the number of characters, up to 99, in the given name,
	surname, alias or display name that you want defined. For example, to create an
	SMTP address with the given name and the first 2 letters of the last name, use
	the following formula in the Site Addressing, SMTP proxy:
	
	  %g%2s@company.com
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
