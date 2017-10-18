---
layout: page
title: "Q132408: SNADS: How to Remove the SNADS Gateway from a Postoffice"
permalink: kb/132/Q132408/
---

## Q132408: SNADS: How to Remove the SNADS Gateway from a Postoffice

	Article: Q132408
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SNADS, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unlike other Microsoft Mail gateway products, the Microsoft Mail Gateway to
	SNADS does not have a remove gateway parameter on the install program (for
	example, install -r). Because SNADS routing is maintained in a similar format to
	Microsoft Mail routing, routes can be managed directly through the
	Administrator's program (ADMIN.EXE).
	
	Therefore, to remove a SNADS Gateway definition, use ADMIN.EXE to select
	Gateways, SNADS, DGNs, Delete and to delete each DGN. After you delete the DGNs,
	delete the Gateway in ADMIN.EXE by selecting Gateways, SNADS, Gateways, Delete.
	
	NOTE: Always delete the DGNs before deleting the gateway. If there are many DGNs
	and/or large DGNs, you will get a "insufficient memory" error from ADMIN.EXE
	when you try to delete the gateway.
	
	Also, If there are downstream postoffices (POs) communicating with a SNADS user,
	remove the farthest downstream PO first, and work toward the Gateway PO. This
	will avoid "Hub Bit" errors generated when you try to delete a gateway from a
	forwarding PO.
	
	MORE INFORMATION
	================
	
	If the DGNs contain several hundred DENs, you may delete DENs by running
	IMPORT.EXE. The syntax of Import is as follows:
	
	  Import -r -gsnads -f<filename>.
	
	This will remove all addresses of type SNADS and replace it with the list in file
	-f<filename>. This import file will not remove DGNs as there needs to be
	at least one Add Entry for each DGN in this file. This will make the process of
	deleting DGNs go much faster as ADMIN.EXE reads all entries into memory before
	deleting them.
	
	For more information about Import, refer to Appendix A in the Microsoft Mail
	"Administrator's Guide."
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSNADS300 kbMailGateSNADS210
	Version           : :2.1,3.0
	
	=============================================================================
	
