---
layout: page
title: "Q165850: SNA Print Service Drops Escape Sequences from 3270 Print Job"
permalink: /kb/165/Q165850/
---

## Q165850: SNA Print Service Drops Escape Sequences from 3270 Print Job

{% raw %}

	Article: Q165850
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
	
	Escape sequences from 3270 print jobs were dropped, causing incorrect print
	formatting or printer control data to be sent to the printer.
	
	CAUSE
	=====
	
	If a custom transparency byte is configured for a 3270 print session under the
	Transparency/GDI folder in SNA Server Manager, and the Custom Byte check box is
	later cleared, the SNA Print Service was still using the custom transparency
	byte even though none was configured.
	
	This caused the SNA Print Service to drop this byte from the 3270 print job.
	
	RESOLUTION
	==========
	
	It is possible to work around this problem by clicking to select the Custom Byte
	check box and setting the Decimal Value to 00.
	
	A fix for SNA Server 3.0 is available to correct this problem. To resolve this
	problem, obtain the hotfix mentioned below.
	
	
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
	

{% endraw %}
