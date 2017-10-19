---
layout: page
title: "Q110610: BUG: MS-DOS Report Printed on LocalTalk Causes Type 1 Error"
permalink: /kb/110/Q110610/
---

## Q110610: BUG: MS-DOS Report Printed on LocalTalk Causes Type 1 Error

	Article: Q110610
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message occurs when a REPORT FORM command is issued in
	FoxPro for Macintosh:
	
	  The application "unknown" has unexpectedly quit, because an error of type 1
	  occurred.
	
	CAUSE
	=====
	
	This error is produced when an untransported FoxPro for MS-DOS report is sent to
	a communication port connected to a LocalTalk network.
	
	RESOLUTION
	==========
	
	To avoid this problem, transport FoxPro for MS-DOS reports before printing them
	over LocalTalk networks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro 2.5b for Macintosh. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	NOTE: There does not have to be a printer connected to the communication port for
	this test.
	
	1. From the Apple menu, choose Control Panels, and then open the Network control
	  panel.
	
	2. Double-click LocalTalk Built-In.
	
	3. Launch FoxPro for Macintosh.
	
	4. In the Command window, issue the following command:
	
	        SET PRINTER TO COM2
	
	5. Print an untransported FoxPro for MS-DOS report.
	
	The error will be generated.
	
	Additional query words: vFoxMac FoxMac buglist2.50b
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
