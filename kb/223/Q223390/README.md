---
layout: page
title: "Q223390: How to Use a Blank PDT with SNA Server and Host Print Transform"
permalink: /kb/223/Q223390/
---

## Q223390: How to Use a Blank PDT with SNA Server and Host Print Transform

{% raw %}

	Article: Q223390
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Occasionally, it may be beneficial to use a blank Printer Definition Table (PDT)
	for print problems with SNA Server. If you specify PDT_INTERNAL_BLANK for the
	PDT file name in the Override section of the SNA print session properties, a
	blank PDT will be generated and used for the SNA print session.
	
	MORE INFORMATION
	================
	
	This option was designed to work with AS/400 print sessions using Host Print
	Transform (HPT) but can also be used for 3270 print sessions. It should have the
	effect of telling the SNA Print Server that it should use the transparent
	printer interface, but won't result in any unwanted PCL sequences being sent to
	the printer. A blank PDF file is generic to all printers.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
