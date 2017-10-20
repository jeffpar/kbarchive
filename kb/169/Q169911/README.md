---
layout: page
title: "Q169911: Incorrect Print Output If AHM Is Contained in 5250 Datastream"
permalink: /kb/169/Q169911/
---

## Q169911: Incorrect Print Output If AHM Is Contained in 5250 Datastream

{% raw %}

	Article: Q169911
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
	
	SNA Server Print Service calls Absolute Horizontal Move (AHM) when it receives a
	Print Position (PP, 0x34) control character in a 5250 data stream, and the next
	byte received indicates that the operation is an AHM (0xc0).
	
	If Print Service gets this in the data stream, it is supposed to move to the
	supplied column (the next byte in the stream).
	
	CAUSE
	=====
	
	Print Service expects the supplied column to be further along than the current
	column, and Print Service ignores the move if it moved the print position
	backwards.
	
	This control code exists for 5250 printing only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, the current column position is set to 0 before an AHM is
	done to the number of spaces indicated in the PP sequence.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
