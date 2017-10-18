---
layout: page
title: "Q182066: Application Exception in PPD5250 When Set Line Density Is Zero"
permalink: kb/182/Q182066/
---

## Q182066: Application Exception in PPD5250 When Set Line Density Is Zero

	Article: Q182066
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application exception occurs in Ppd5250.dll when print data from an AS/400
	contains a Set Line Density (SLD) SCS control code that specifies a value of
	zero.
	
	CAUSE
	=====
	
	The 5250 print provider tries to determine line density by dividing 72 by the
	value specified in the SLD SCS control code. This results in a divide by zero
	error and an application exception in Ppd5250.dll if the SLD control code
	specifies a value of zero.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The Set Line Density SCS control code is used to set the numbers of lines per
	inch for a print job. The SLD control code has the following format:
	
	Set Line Density (SLD) - '0x2BC6[L](Point)'
	
	Parameter:    [L] - length, including length byte. Value of '0x01'
	               denotes default
	               Point - Distance to be moved vertically for a single line.
	               The number is indicated in typographic points (one point is
	               equal to 1/72 inch). Setting a value of '0x0C' will result
	               in 6 lines per inch, a value of '0x09' will result in 8
	               lines per inch. Value of '0x00' denotes default a value of
	               6 lines per inch.
	
	Example: 2BC6020C
	
	The 5250 print provider has been updated so that an SLD with a value of zero is
	correctly interpreted to indicate a default line density of six lines per inch
	instead of causing the divide by zero error.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
