---
layout: page
title: "Q152524: XCLN: SNADS Custom Template Information not Displayed"
permalink: /kb/152/Q152524/
---

## Q152524: XCLN: SNADS Custom Template Information not Displayed

{% raw %}

	Article: Q152524
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Microsoft Exchange client with the Microsoft Mail information
	service, for access to Microsoft Mail for PC Networks, you will not be able to
	view the custom template information of a SNADS or Profs user.
	
	CAUSE
	=====
	
	The transport provider fails to properly access the .INF files that have been
	created for PROFS and SNADS gateway recipients. Default detail information is
	available, but custom information, contained in the .INF files, is not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Two different results can be encountered when you attempt to view the properties
	of SNADS and PROFS users. It depends on the address list you use to select the
	user.
	
	When you select the user from the Global Address List (GAL), you will see a
	minimal amount of information presented on the property page. For example:
	
	  Name:
	  Address Type:
	  Distribution element name:
	  Distribution group name:
	  Gateway:
	
	
	If you select the user from a list under Gateways, there will be multiple
	properties pages presented, but the data will be missing from the property
	pages.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
