---
layout: page
title: "Q172468: SNA Server Print Service Doesn't Support Print Position &gt; 132"
permalink: /kb/172/Q172468/
---

## Q172468: SNA Server Print Service Doesn't Support Print Position &gt; 132

	Article: Q172468
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Print Server inserts a new line (NL) character after print position 132, even if
	the default page width is set to a value greater than 132.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Previously, LU3 printing had a maximum line length of 132 characters. With the
	fix applied, you can specify the line width, using the SNA Server Manager.
	
	NOTE: The maximum print position (MPP) supported in the code is 255 characters,
	but you can specify any value in the SNA Server Manager. This change also
	includes code to set the MPP to 255 if you specify a value greater than this.
	
	The IBM 3270 Datastream Programmers Reference, page 2-22, says:
	
	  The NL order is executed only when encountered during an unformatted
	  printout; this is, a printout that does not have a line-length format
	  specified. When an NL order is encountered in the buffer, the priner performs
	  an NL function. If no NL order is encountered before the printer reaches the
	  end of a line (as determined by the maximum print position), the printer
	  automatically performs an NL function and continues printing.
	
	  If an NL order is encountered at one character position past the maximum print
	  position, the 3230,3268,3284,3286,3287 and 3288 printer will perform two NL
	  functions; the 3262 and 3289 printers will perform one NL function.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
