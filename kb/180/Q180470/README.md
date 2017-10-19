---
layout: page
title: "Q180470: Scale Font Option Not Working for SNA Server Print Server"
permalink: /kb/180/Q180470/
---

## Q180470: Scale Font Option Not Working for SNA Server Print Server

	Article: Q180470
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print jobs that had printed with the correct font size with SNA Server 3.0 or
	3.0 Service Pack 1 (SP1) may starting printing with a different font size after
	you apply SNA Server 3.0 SP2 or upgrade to SNA Server 4.0.
	
	The "Scale Font Size to Fit Printable Page" option in the Print Session Overrides
	property page is supposed to scale the font so that the print job always prints
	66 lines on an 11-inch page. After you apply SNA Server 3.0 SP2 or install SNA
	Server 4.0, this option scales the font based upon the specified font size shown
	in the "Use Font Size" box even though this box is unavailable when the "Scale
	Font Size to Fit Printable Page" option is selected. If the "Use Font Size" box
	is blank, this does not occur.
	
	CAUSE
	=====
	
	A regression in SNA Server 3.0 SP2 and SNA Server 4.0 causes the Print Server to
	use the font size specified in the "Use Font Size" box when scaling the font
	instead of using the LPI (Lines Per Inch) and MPP (Maximum Print Position)
	values to determine the font size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 Service
	Pack 2 (SP2) and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem has a noticeable effect for LU3 and 5250 printing, but not for LU1
	Printing.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
