---
layout: page
title: "Q165428: LU3 Printers Do Not Translate Control Characters Correctly"
permalink: /kb/165/Q165428/
---

## Q165428: LU3 Printers Do Not Translate Control Characters Correctly

{% raw %}

	Article: Q165428
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a host print job that contains unprintable EBCDIC control codes
	and embedded PCL commands to a LU3 printer, the job does not print correctly.
	This occurs because some of the characters are not properly translated by the
	SNA Server Host Print service.
	
	NOTE: The unprintable EBCDIC control codes may not be SCS control codes.
	
	CAUSE
	=====
	
	The Host Print service was not translating EBCDIC and PCL control codes for LU3
	printer sessions. This was due to the fact that the Bypass GDI option and PDF
	files did not work correctly for LU3 print sessions.
	
	RESOLUTION
	==========
	
	The Host Print service for SNA Server 3.0 has been updated to allow LU3 print
	sessions to correctly print jobs that contain both EBCDIC and PCL control
	characters. This requires that the Bypass GDI option is selected for the LU3
	print session defined in SNA Server Manager. In addition, a PDF file must be
	used for the LU3 print session. The PDF file does not require many entries for
	this to work. A PDF with standard mappings for carriage return, line feed, and
	so forth, will be sufficient. Because the PDF file can be simple, it should work
	for most printer types and there is no need to have different PDF files for
	different printers. The following is a sample PDF file that should work in these
	types of environments:
	
	  Macro Definitions:
	
	     BEGIN_MACROS
	     LFF EQU 0A
	     FFF EQU 0C
	     CRR EQU 0D
	     END_MACROS
	
	  Parameter Definitions:
	
	     CARRIAGE_RETURN=CRR
	     NEW_LINE=CRR LFF
	     LINE_FEED=LFF
	     FORM_FEED=FFF CRR
	
	NOTE: Please refer to Chapter 6 of the "SNA Server 3.0 Reference Guide" for
	details on creating PDF files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
