---
layout: page
title: "Q178514: &quot;No Line Formatting&quot; Option isn't Explained in SNA Server Help"
permalink: /kb/178/Q178514/
---

## Q178514: &quot;No Line Formatting&quot; Option isn't Explained in SNA Server Help

	Article: Q178514
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,3.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The "No Line Formatting" option for 3270 Print Sessions was added in SNA Server
	3.0 Service Pack 2. However, this option is not explained when selecting Help in
	the 3270 tab of the printer session properties dialog.
	
	CAUSE
	=====
	
	The explanation for this new 3270 print session option was inadvertently left
	out of the Online Help for SNA Server 3.0 Service Pack 2 and Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 SP2 and
	SP3. This problem has been corrected in SNA Server 4.0
	
	MORE INFORMATION
	================
	
	This problem was scheduled to be fixed in SNA Server 3.0 Service Pack 3 but was
	inadvertently left out.
	
	The SNA Server 4.0 Online Help contains the following explanation for this
	option:
	
	No Line Formatting:
	
	Prevents the SNA Print Service from inserting its own Carriage Return/Line Feed
	(CR/LF) according to the dimensions specified in the Default Page Width field
	(also on this property page). As No Line Formatting is a special case, this box
	is usually not checked. It is a useful option when using physical printers that
	do their own wrapping or are told to do their own wrapping with an Esc sequence.
	The Esc sequence that causes a printer to do its own End-of-line wrap on PCL
	printers is <Esc>&s0C.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP3 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,3.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
