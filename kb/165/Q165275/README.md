---
layout: page
title: "Q165275: TN3270 Server display types are not selected"
permalink: kb/165/Q165275/
---

## Q165275: TN3270 Server display types are not selected

	Article: Q165275
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select a Printer Type and then re-select a Display Type in the TN3270
	LU Properties on the TN3270 Server, the display types are not rechecked.
	
	CAUSE
	=====
	
	SNA Server Manager was not properly restoring the selected display model types.
	
	RESOLUTION
	==========
	
	The display models that are checked prior to the selection of the printer types,
	are now restored properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
