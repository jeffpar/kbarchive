---
layout: page
title: "Q130190: SNADS: Postoffice to DGN Mapping"
permalink: kb/130/Q130190/
---

## Q130190: SNADS: Postoffice to DGN Mapping

	Article: Q130190
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SNADS, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The mapping of SNADS DGNs is required at the gateway postoffice only.
	
	Mapping is accomplished via the Administrator program, by selecting Gateways,
	SNADS, Map, Mapping. Type the network name of the network to map, then type the
	name of the postoffice to map. Type the DGN name, as defined on the SNADS
	network, for the postoffice requiring mapping.
	
	Mapping is required only in the following instances:
	
	- The postoffice name is more than 8 characters. For example
	
	  Network = Microsoft, Postoffice = Washington
	
	  could be mapped to Washingt or any DGN of 8 characters or less. That is:
	
	  Microsoft/Washington maps to Washingt
	
	- The postoffice name is 8 characters or less, but it does not exactly match
	  its DGN. For example:
	
	  Network = Microsoft, Postoffice = Wash
	
	  However, the DGN (as defined by SNADS) is Washst. That is:
	
	  Microsoft/Wash maps to Washst
	
	- The postoffice name conflicts with an existing DGN. This could mean there are
	  two postoffices with the same postoffice name but different network names.
	  For example
	
	  Network = Microsoft, Postoffice = Wash
	
	  and there is an existing DGN named Wash. That is:
	
	  Microsoft/Wash maps to Wash1
	
	  Another example:
	
	  Network1 = Microsoft, Network2 = Support, Postoffice(s) = Wash
	
	  Microsoft/Wash maps to Wash1
	  Support/Wash maps to Wash
	
	1. The postoffice network name is different on a downstream postoffice than it
	  is on the gateway postoffice. For example:
	
	  Gateway Postoffice Network name = Microsoft,
	  Gateway Postoffice name = Wash,
	  Downstream Postoffice Network name = DNSmsft,
	  Downstream Postoffice = DNS
	
	  Microsoft/Wash will map to Wash by default
	  DNSmsft/DNS maps to DNS
	
	Additional query words: 2.00 3.00 2.x 3.x snads addressing
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSNADS200 kbMailGateSNADS300
	Version           : :2.0,3.0
	
	=============================================================================
	
