---
layout: page
title: "Q134691: AFTP -F Script Fails if Password is Eight Characters Long"
permalink: kb/134/Q134691/
---

## Q134691: AFTP -F Script Fails if Password is Eight Characters Long

	Article: Q134691
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the AFTP -F <INPUTFILE> command, the following error message
	appears:
	
	  The password is too long. The password must be between 1 and 8 characters in
	  length.
	
	This symptom occurs when you use the AFTP client script processing feature to
	automate AFTP client processes and your password in the inputfile is eight
	characters long.
	
	CAUSE
	=====
	
	The AFTP client code erroneously counts the Newline character at the end of your
	eight-character password as the ninth character when it reads the password from
	your inputfile.
	
	NOTE: For additional information on AFTP and AFTP client script processing, refer
	to the SNA Server 2.11 Enhancements Guide and the SNA Server 2.11 README.TXT
	file, respectively.
	
	WORKAROUND
	==========
	
	To work around this problem, use a password with seven characters or fewer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
