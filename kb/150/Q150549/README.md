---
layout: page
title: "Q150549: PRB: Connecting to Oracle Server Fails with Several Files Open"
permalink: /kb/150/Q150549/
---

## Q150549: PRB: Connecting to Oracle Server Fails with Several Files Open

{% raw %}

	Article: Q150549
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the 16-bit Oracle 7 ODBC driver (Sqora7.dll version 1.11.0000) that
	ships with Visual FoxPro to connect to an Oracle 7 server, the connection fails
	with the following error message:
	
	  Connectivity Error [Microsoft][ODBC DLL] Driver's SQLSetConnectOption failed
	
	CAUSE
	=====
	
	This error occurs because there are a lot of files (programs, projects, tables,
	and so on) open in Visual FoxPro when you attempt to establish a connection to
	the Oracle server.
	
	RESOLUTION
	==========
	
	Close some of the files prior to making the connection to the Oracle server.
	This problem does not occur in the 32-bit Oracle 7 driver provided by Visigenic
	Corporation.
	
	NOTE: As of 12/9/98, Visigenic Corporation has been acquired by INPRISE, Inc.
	
	For information about how to contact INPRISE, Inc., query in the Microsoft
	Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open several program files in Visual FoxPro. The actual number may vary, but
	  typically between eight and ten files reproduces the error.
	
	2. Type the following command in the Command window:
	
	        ?SQLConnect()
	
	3. Choose the ODBC data source for the Oracle server, and click OK.
	
	  A -1 is displayed on the Visual FoxPro desktop, indicating that the connection
	  failed. To see the actual error message, type the following commands in the
	  Command window:
	
	        ?AError(aerrs)
	        DISPLAY MEMORY LIKE aerrs
	
	  The text of the error message is displayed on the Visual FoxPro desktop.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
