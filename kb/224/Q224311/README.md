---
layout: page
title: "Q224311: SNA Server 4.0 Service Pack 2 Upgrades MDAC To Version 2.1"
permalink: /kb/224/Q224311/
---

## Q224311: SNA Server 4.0 Service Pack 2 Upgrades MDAC To Version 2.1

{% raw %}

	Article: Q224311
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP2
	Operating System(s): 
	Keyword(s): kbinterop kbActiveX _IK_kbATM
	Last Modified: 01-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Service Pack 2 for Microsoft SNA Server version 4.0 includes an upgrade for MDAC
	components. MDAC is automatically upgraded from version 1.5 to version 2.1.
	
	MORE INFORMATION
	================
	
	Both Microsoft SNA Server and COMTI have been tested with MDAC 2.1. These
	products are not supported with earlier versions of MDAC.
	
	REFERENCES
	==========
	
	It is possible to maintain binary compatibility in ADO components created with
	MDAC version 1.5 and 2.1. The following Knowledge Base articles discuss these
	issues:
	
	  Q195049 Maintain Binary Compatibility in Components Exposing ADO
	
	  Q201580 ADO 2.0 and ADO 2.1 Binary Compatibliity
	
	  Q201576 ADO 2.1 Ships With An ADO 2.0 Type Library
	
	Non-fatal messages are returned to the client with ADO 2.0 and higher that were
	not returned with earlier versions of ADO. These messages are discussed in the
	following Microsoft Knowledge Base article:
	
	  Q197459 PRB: ADO 2.0 Returns Connection Messages to Browser
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbActiveX _IK_kbATM 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
