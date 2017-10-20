---
layout: page
title: "Q181026: New SNA Print Server Tracing Option"
permalink: /kb/181/Q181026/
---

## Q181026: New SNA Print Server Tracing Option

{% raw %}

	Article: Q181026
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server Trace program (Snatrace.exe) cannot do byte- for-byte tracing of
	print jobs when tracing the SnaPrint service. The Internal Trace tab of the
	SnaPrint Properties page allows has options to enable all of the internal
	functions of the Host Print Service, but it does not include an easy method to
	see how the print data is being processed.
	
	CAUSE
	=====
	
	The SNA Server Trace program included with SNA Server 3.0, 3.0 SP1, and 3.0 SP2
	was not designed to support this level of print data tracing in SNA Server 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With this update applied, the Internal Trace tab for all of the listed SNA
	Server services includes a new checkbox for "Custom Conditions". The SnaPrint
	service is the only services that currently implements new tracing when the
	"Custom Conditions" option is selected.
	
	If "Custom Conditions" tracing is enabled for the Host Print service (SnaPrint),
	the resulting print service internal tracing will capture a byte-for-byte
	breakout of the data contained in the print job(s) sent to the print service.
	The new tracing option applies to LU1, LU3, and APPC printing. The following is
	an excerpt from a LU1 print job when "Custom Conditions" tracing is enabled:
	
	  (session: LU1PRT, job #1) ****** START of JOB *********
	  (session: LU1PRT, job #1) FONT INFO: using PDF file, font info in
	  START_JOB
	  macro
	  (session: LU1PRT, job #1) SEND START_JOB MACRO TO PRINTER
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) | 1B28304E 1B266B30 |
	  (session: LU1PRT, job #1) | 531B266C 372E3237 |
	  (session: LU1PRT, job #1) | 43                |
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) SET MPP: 132
	  (session: LU1PRT, job #1) SEND 6 LPI MACRO TO PRINTER
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) | 1B266C37 2E323743 |
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) SET MPP: 80
	  (session: LU1PRT, job #1) ******* PARSE DATA **********
	  (session: LU1PRT, job #1) **** END OF CURRENT MESG ****
	  (session: LU1PRT, job #1) ******* PARSE DATA **********
	  (session: LU1PRT, job #1) byte: 0d ->  carriage return
	  (session: LU1PRT, job #1) byte: 0c ->  form feed
	  (session: LU1PRT, job #1) SCS code received, flush data before
	  processing
	  (session: LU1PRT, job #1) ******* FLUSH DATA **********
	  (session: LU1PRT, job #1) KEEP FORM FEED FOR NOW, FLUSH WHEN GET MORE
	  DATA
	  (session: LU1PRT, job #1) ******* PARSE DATA **********
	  (session: LU1PRT, job #1) byte: 0c ->  form feed
	  (session: LU1PRT, job #1) byte: 0d ->  carriage return
	  (session: LU1PRT, job #1) byte: 2b ->  start of set horizontal/vertical
	  format or line density
	  (session: LU1PRT, job #1) byte: c6 ->  set line density
	  (session: LU1PRT, job #1) byte: 02 ->  length of set line density
	  sequence
	  (1 => 6lpi)
	  (session: LU1PRT, job #1) byte: 0c ->  means 6 LPI required
	  (session: LU1PRT, job #1) byte: 0d ->  carriage return
	  (session: LU1PRT, job #1) byte: 2b ->  start of set horizontal/vertical
	  format or line density
	  (session: LU1PRT, job #1) byte: c2 ->  set vertical format
	  (session: LU1PRT, job #1) byte: 04 ->  length of set vertical format
	  sequence
	  (session: LU1PRT, job #1) byte: 42 ->  maximum number of lines on page
	  (MPL)
	  (session: LU1PRT, job #1) byte: 01 ->  top margin
	  (session: LU1PRT, job #1) byte: 42 ->  bottom margin
	  (session: LU1PRT, job #1) byte: 0d ->  carriage return
	  (session: LU1PRT, job #1) **** END OF CURRENT MESG ****
	  (session: LU1PRT, job #1) ******* PARSE DATA **********
	  (session: LU1PRT, job #1) byte: c1 ->  ordinary character
	  (session: LU1PRT, job #1) SCS code received, flush data before
	  processing
	  (session: LU1PRT, job #1) ******* FLUSH DATA **********
	  (session: LU1PRT, job #1) ******* PARSE DATA **********
	  (session: LU1PRT, job #1) byte: c1 ->  ordinary character
	  (session: LU1PRT, job #1) byte: d4 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e3 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e4 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e2 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c6 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e3 ->  ordinary character
	  (session: LU1PRT, job #1) byte: 4b ->  ordinary character
	  (session: LU1PRT, job #1) byte: c4 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c1 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e3 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c1 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c7 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c5 ->  ordinary character
	  (session: LU1PRT, job #1) byte: d5 ->  ordinary character
	  (session: LU1PRT, job #1) byte: 4b ->  ordinary character
	  (session: LU1PRT, job #1) byte: d9 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c5 ->  ordinary character
	  (session: LU1PRT, job #1) byte: d7 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e3 ->  ordinary character
	  (session: LU1PRT, job #1) byte: d3 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c9 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c2 ->  ordinary character
	  (session: LU1PRT, job #1) byte: 4d ->  ordinary character
	  (session: LU1PRT, job #1) byte: 5b ->  ordinary character
	  (session: LU1PRT, job #1) byte: e2 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e4 ->  ordinary character
	  (session: LU1PRT, job #1) byte: d4 ->  ordinary character
	  (session: LU1PRT, job #1) byte: d4 ->  ordinary character
	  (session: LU1PRT, job #1) byte: c1 ->  ordinary character
	  (session: LU1PRT, job #1) byte: d9 ->  ordinary character
	  (session: LU1PRT, job #1) byte: e8 ->  ordinary character
	  (session: LU1PRT, job #1) byte: 5d ->  ordinary character
	  (session: LU1PRT, job #1) byte: 15 ->  new line
	  (session: LU1PRT, job #1) SCS code received, flush data before
	  processing
	  (session: LU1PRT, job #1) ******* FLUSH DATA **********
	  (session: LU1PRT, job #1) DATA TO FLUSH TO PRINTER
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) | C1D4E3E4 E2C6E34B |
	  (session: LU1PRT, job #1) | C4C1E3C1 C7C5D54B |
	  (session: LU1PRT, job #1) | D9C5D7E3 D3C9C24D |
	  (session: LU1PRT, job #1) | 5BE2E4D4 D4C1D9E8 |
	  (session: LU1PRT, job #1) | 5D                |
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) DATA TO FLUSH (AFTER ASCII CONVERSION)
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) | 414D5455 5346542E |
	  (session: LU1PRT, job #1) | 44415441 47454E2E |
	  (session: LU1PRT, job #1) | 52455054 4C494228 |
	  (session: LU1PRT, job #1) | 2453554D 4D415259 |
	  (session: LU1PRT, job #1) | 29                |
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) REAL DATA, SEND FF PDF SEQUENCE TO PRINTER
	  BEFORE
	  THIS DATA
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) | 0C                |
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) SEND CR TO PRINTER
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) | 0D                |
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) SEND CR TO PRINTER
	  (session: LU1PRT, job #1)  -------------------
	  (session: LU1PRT, job #1) | 0D                |
	  (session: LU1PRT, job #1)  -------------------
	
	NOTE: The original internal tracing options cannot be enabled at the same time
	that "Custom Conditions" tracing is enabled.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
