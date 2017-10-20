---
layout: page
title: "Q196608: HP4000 Paper Drawer Options Not Available When Using HPT"
permalink: /kb/196/Q196608/
---

## Q196608: HP4000 Paper Drawer Options Not Available When Using HPT

{% raw %}

	Article: Q196608
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the HP4000 and other PCL5-type printers, Paper Drawer options are
	only available for the HP printer driver that is being used on the AS/400 when
	using HPT (Host Print Transform). If the specific AS/400 printer driver is not
	available for the particular printer being used, then those drawers will only be
	accessible using Drawer Redirection on the IBM AS/400.
	
	MORE INFORMATION
	================
	
	At this time IBM states that they do not directly support the HP4000 using HPT
	(Host Print Transform) by offering a specific driver for this type of printer.
	However, they do offer a technical document that will allow "Workstation
	Customizing Object Modifications" to redirect to these additional drawers using
	control strings. See IBM AS/400 Support Line Technical Document 8692422 for more
	information.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	REFERENCES
	==========
	
	IBM AS400 Support Line Technical Document 8695250
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
