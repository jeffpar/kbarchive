---
layout: page
title: "Q164962: Added Support for the Character Mapping Section of the PDF File"
permalink: kb/164/Q164962/
---

## Q164962: Added Support for the Character Mapping Section of the PDF File

	Article: Q164962
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no way to map characters in the datastream to GDI calls in a printer
	definition file (.pdf).
	
	CAUSE
	=====
	
	There was a flaw in the design of SNA Server 3.0.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The following is an excerpt taken from a .pdf file that is now supported with
	this fix:
	
	  /*********************************************************************/ 
	  /*                      Character Definitions                        */ 
	  /*********************************************************************/ 
	  SPACE = SPA
	  EXCLAMATION_POINT = 21
	  QUOTATION_MARKS = 22
	  NUMBER_SIGN = 23
	  DOLLAR_SIGN = 24
	  PERCENT_SIGN = 25
	  AMPERSAND = 26
	  APOSTROPHE = 27
	  LEFT_PARENTHESIS = 28
	  RIGHT_PARENTHESIS = 29
	  ASTERISK = 2A
	  PLUS_SIGN = 2B
	  COMMA = 2C
	  HYPHEN = 2D
	  PERIOD = 2E
	  SLASH = 2F
	  ZERO = 0
	  ONE = 1
	  TWO = 2
	  THREE = 3
	  FOUR = 4
	  ...
	
	Additional query words: snaprint prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
