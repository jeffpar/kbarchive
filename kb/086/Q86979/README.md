---
layout: page
title: "Q86979: X400: Address Conversion and Address Mapping Differences"
permalink: /kb/086/Q86979/
---

## Q86979: X400: Address Conversion and Address Mapping Differences

{% raw %}

	Article: Q86979
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The difference between address conversion and address mapping is analogous to
	extraction and replacement.
	
	Address conversion uses the technique of extracting and inserting the Microsoft
	Mail address from within the contents of the X.400 address. This means the X.400
	address must contain the network, postoffice, and mailbox name somewhere within
	the X.400 address the mail message is being sent to. For example:
	
	  c=ca;a=telecom.canada;p=cdn;o=bc;ou=network;ou=postoffice;pn=mailbag
	
	Using the address conversion, the Microsoft Mail address can be extracted using
	the conversion method and setting the first OU to be the network, the second OU
	to be the postoffice, and the PN to be the mailbag.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
