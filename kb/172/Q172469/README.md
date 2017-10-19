---
layout: page
title: "Q172469: Last Byte of Transparent Section Interpreted Incorrectly"
permalink: /kb/172/Q172469/
---

## Q172469: Last Byte of Transparent Section Interpreted Incorrectly

	Article: Q172469
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The last byte in a transparent section gets interpreted as being outside the
	transparent section when the transparent section is immediately preceded by a
	control character (IE - "0D"). For instance, the following sequence has '0D'
	(carriage return) followed by a transparent section starting with '35'. In this
	case, the 1B (Esc character) would be inappropriately dropped and, therefore,
	the remaining bytes would be sent to the printer without the leading Esc
	character. This would cause the remaining bytes to be printed when they were
	actually intended to be part of the escape sequence.
	
	  0D35011B 5081F2F2 D9
	
	CAUSE
	=====
	
	When there is a control character immediately preceding transparent sections,
	there was a bug in the code which caused the print server to believe the
	transparent section to be one byte shorter than it really was.
	
	RESOLUTION
	==========
	
	A change was made to check whether a transparent byte has actually been sent to
	the printer before decrementing the number of transparent bytes left to be
	processed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, version
	3.0 SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
