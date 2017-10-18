---
layout: page
title: "Q83539: Mac Fax: Fax Transmissions Are Scaled"
permalink: kb/083/Q83539/
---

## Q83539: Mac Fax: Fax Transmissions Are Scaled

	Article: Q83539
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.x, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A fax sent using version 1.1.2 or 3.0 of the Microsoft Mail for AppleTalk
	Networks Gateway to Fax may be received at a different scale than what it was
	sent.
	
	CAUSE
	=====
	
	This problem may be caused by the Resolution setting for the user's gateway
	account in the Gateway Account screen.
	
	If the Resolution setting is set for Best Res, the document may be scaled
	slightly to improve the look of 72 dpi bitmapped graphics when they are
	translated to 200 dpi.
	
	RESOLUTION
	==========
	
	To correct this problem, change the Resolution setting to Exact Size. Scaling
	will not occur when Exact Size is selected. You must be signed into Mail as the
	Network Manager to make this change.
	
	Additional query words: 2.0 2.00 2.0a 2.00a 2.0b 2.00b 3.00 faxgate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN2xSearch
	Version           : WINDOWS:2.x,3.0
	
	=============================================================================
	
