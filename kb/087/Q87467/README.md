---
layout: page
title: "Q87467: PC DB: What the NETWORK.GLB File Is Used For"
permalink: /kb/087/Q87467/
---

## Q87467: PC DB: What the NETWORK.GLB File Is Used For

{% raw %}

	Article: Q87467
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail NETWORK.GLB file is used to define any external postoffices
	or gateways that this postoffice can address mail to.
	
	
	NOTE: Gateway names are defined and added to this file when the gateway is
	installed.
	
	MORE INFORMATION
	================
	
	All gateways that use the three-part hierarchy format Network/Postoffice/Mailbox
	(SNADS, PROFS, and OfficeVision) will also have an associated .XTN file created.
	The .XTN file, in this case, will contain either DGN or node names defined at
	that gateway.
	
	The Mail client, Admin, External, and Import programs will require reading this
	file to determine the gateways and external postoffices that are accessible by
	this postoffice. Only the Admin and Import programs are able to create records
	in this file.
	
	If the NETWORK.GLB file is missing, an appropriate error message will be
	displayed.
	
	The Mail client and External program will not be able to resolve names using the
	postoffice network list.
	
	The Admin program will not be able to create or modify names in the postoffice
	network list.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  "pc" (without the quotation marks) and "db" (without the quotation marks) and
	  "xtn" (without the quotation marks) and "dtime" (without the quotation marks)
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	

{% endraw %}
