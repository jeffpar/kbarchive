---
layout: page
title: "Q177580: LU1 Print Jobs Formatted Incorrectly when Using Bypass GDI, PDT"
permalink: /kb/177/Q177580/
---

## Q177580: LU1 Print Jobs Formatted Incorrectly when Using Bypass GDI, PDT

{% raw %}

	Article: Q177580
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an LU1 type host print job is printed through a 3270 Print Session configured
	on SNA Server, the output may be formatted incorrectly if the last portion of
	the print data being passed from the SNA Server service to the Host Print
	service in an 3270/FMI frame begins with an SCS Control Code. In addition, this
	will only occur if the 3270 print session is configured to bypass GDI and to use
	a PDT file.
	
	One reported case of this problem caused the end of one print job to print at the
	beginning of the next print job. This occurred because the last portion of the
	first print job was sent to the print service in an 3270/FMI frame that began
	with the SCS Control Code for a Form Feed ('0x0C').
	
	CAUSE
	=====
	
	The Host Print Service loses the end of the last portion of the print data in an
	LU1 type print job if all the following conditions are met:
	
	- The 3270/FMI frame of the print job begins with an SCS Control Code.
	
	- The 3270 print session is configured with the Bypass GDI option selected.
	
	- The 3270 print session is configured to use a PDT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
