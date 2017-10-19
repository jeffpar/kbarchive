---
layout: page
title: "Q169855: Print Service Doesn't Process Carriage Return Properly"
permalink: /kb/169/Q169855/
---

## Q169855: Print Service Doesn't Process Carriage Return Properly

	Article: Q169855
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
	
	When an SCS 0x0D is sent in an LU1 data stream to force a carriage return
	without a line feed (to do underlines), SNA Server Print service ignores 0x0D
	when Bypass GDI and PDF (printer definition file) are selected. The entire print
	job should be treated as EBCDIC transparent data and passed directly to the
	printer after being converted to ASCII, except for SCS codes which are mapped to
	the characters to send to the printer using a PDF. The following is a sample
	PDF:
	
	     /*    PRINTER SESSION DEFINITION FILE FOR SNA Server Printers    */ 
	     /*
	     */ 
	     BEGIN_MACROS
	     LFF EQU 0A
	     FFF EQU 0C
	     CRR EQU 0D
	     END_MACROS
	     /*  Parameters
	     */ 
	     CARRIAGE_RETURN=CRR
	     NEW_LINE=CRR LFF
	     LINE_FEED=LFF
	     FORM_FEED=FFF CRR
	     /*                        End of Definition File
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 SP1. This
	problem was corrected in the latest SNA Server version 3.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
