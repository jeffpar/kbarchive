---
layout: page
title: "Q169910: SNA Print Service Doesn't Support SVF with 5250 Printing"
permalink: /kb/169/Q169910/
---

## Q169910: SNA Print Service Doesn't Support SVF with 5250 Printing

{% raw %}

	Article: Q169910
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The LU 1 SCS Set Vertical Format (SVF) function is not supported for 5250
	printing. When the 5250 PPD receives an SVF code, it just ignores it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	After the fix is applied, when the Print Server receives the following sequence
	of bytes in a 5250 data stream, it should recognize and process the bytes as a
	"Set Vertical Format" request (the SVF code):
	
	0x2bc2nnvv
	
	The byte nn counts the number of bytes to the end of the SVF code (including the
	count byte); the byte vv defines the maximum number of lines that can be printed
	on a page (max printable lines [MPL], 0-255).
	
	The fix allows the 5250 PPD to call into the virtual printer DLL to pass the new
	MPL value that it receives in an SVF code contained in the data stream. The
	virtual printer DLL was also changed to issue a Form Feed (FF) whenever the row
	indicated by the MPL is reached.
	
	Note that if the number of lines indicated by the MPL is greater than the number
	of lines that will physically fit on the page (given current font size, LPI, and
	so on), it is ignored.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
