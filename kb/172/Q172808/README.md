---
layout: page
title: "Q172808: EBCDIC 0xB5 Not Mapped by PDT File"
permalink: kb/172/Q172808/
---

## Q172808: EBCDIC 0xB5 Not Mapped by PDT File

	Article: Q172808
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Character Definition section in the PDT file fails to map the EBCDIC 0xB5
	character to a new value.
	
	CAUSE
	=====
	
	The Host Code Page (037) converts EBCDIC 0xB5 to ASCII 0xA7 (ASCII section
	symbol character). The PDF operation code mapping table incorrectly links
	Section_Symbol with 0xFE. Consequently, 0xB5, after being converted to 0xA7, has
	no matching entry in the PDT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the PDF operation code for SECTION_SYMBOL is changed so
	that it links correctly to ASCII 0xA7.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
