---
layout: page
title: "Q86976: X400: Choosing Postoffice Mapping"
permalink: /kb/086/Q86976/
---

## Q86976: X400: Choosing Postoffice Mapping

	Article: Q86976
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mapping or address conversion can be chosen by the network administrator. As
	defined by CCITT, the country (c), Administrative Domain (ADMD), and personal
	name (PN) are all mandatory and the others are optional.
	
	Generally, when connecting to a public network, the public network administrator
	will assign you part of your O/R address. For example, if you are connecting to
	datapac and you want to access datapac in Vancouver, you can connect to the
	University of British Columbia, and they will assign you part of your address:
	
	  c=ca;admd=telecom.canada;prmd=cdn;o=bc;
	
	You can define the rest of the address. For a Microsoft Mail product, you may
	want to use:
	
	  ou=Microsoft;ou=Marketing;pn=John.Smith
	
	Then your address might become:
	
	  c=ca;admd=telecom.canada;prmd=cdn;o=bc;ou=Microsoft;ou=Marketing;
	  pn=John.Smith
	
	(Note: Enter the text above on one line, with no spaces; an additional line is
	shown because of line-length restrictions in knowledge base format.)
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
