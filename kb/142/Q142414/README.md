---
layout: page
title: "Q142414: PC Win: Err Msg: Address Is No Longer Valid. User or PO..."
permalink: /kb/142/Q142414/
---

## Q142414: PC Win: Err Msg: Address Is No Longer Valid. User or PO...

	Article: Q142414
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view the details of an address chosen from the Global Address
	List (GAL), and you are connected to the postoffice (PO) database over a local
	area network (LAN), you may get the following error message:
	
	  Address is no longer valid. User or PO no longer exists.
	
	CAUSE
	=====
	
	Only external postoffice addresses in the GAL containing extended ASCII
	characters in their friendly name will exhibit the above symptom.
	
	Notes:
	
	- You will be able to view details of this friendly name in the individual PO
	  list.
	
	- You can view details of local PO members containing extended ASCII characters
	  in their friendly names from the GAL without getting the above error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in 3.5.0.4086 of MSSFS.DLL
	(Microsoft Mail for PC Networks 3.5 release). A fix for this problem is in
	development, but has not been regression-tested and may be destabilizing in
	production environments. Contact Microsoft Product Support Services for more
	information on the availability of this fix.
	
	Additional query words: MSSFS.DLL update address no longer valid
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	
	=============================================================================
	
