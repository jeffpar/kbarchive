---
layout: page
title: "Q180150: LU3 Print Job Fails If Data Includes X'27' Control Codes"
permalink: /kb/180/Q180150/
---

## Q180150: LU3 Print Job Fails If Data Includes X'27' Control Codes

{% raw %}

	Article: Q180150
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	SNA Server's Host Print Service rejects LU3 print jobs that contain X'27'
	control codes. The X'27' control code is the EBCDIC equivalent of an ASCII X'1B'
	control code. The ASCII X'1B' control code is the PCL Escape code for
	Hewlett-Packard Printer Control Language (PCL) printers.
	
	When the print server receives an LU3 print job that contains an invalid EBCDIC
	control code, it returns an IBM sense code X'1003' to SNA Server. SNA Server
	then sends an -RSP message to the host with the X'1003' sense code, which
	terminates the print job.
	
	Note: All EBCDIC codes below X'40' are invalid.
	
	Sense Code X'1003' is defined in the IBM SNA Formats Guide (GA27-3136) as
	follows:
	
	  Function not supported: The function requested is not supported. The function
	  may have been specified by a formatted request code, a field in an RU, or a
	  control character.
	
	SNA Server logs the following message in the Application Event log when this
	problem occurs:
	
	  Event ID: 21
	  Source: SNA Server
	  Description: (X'1124') Negative Response Sent on Connection <connection
	  name> (SENSE = 1003)
	
	CAUSE
	=====
	
	The print service is designed to reject invalid EBCDIC control codes. Because
	the X'27' control code is below X'40', it is rejected with a X'1003' sense
	code.
	
	The LU3 print data stream was not intended to support the inclusion of PCL
	control codes that were intended to be passed to PCL printers. LU1 print jobs do
	support transparent sections that can include PCL control codes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The print service has been updated to accommodate LU3 print jobs that contain PCL
	control codes that begin with X'27' control codes. In addition to obtaining the
	fix for this problem, the following steps also need to be performed to allow the
	X'27' control codes to be accepted by the print server:
	
	1. Add the following registry entry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \SnaPrint\Parameters\LetHex27Pass: REG_SZ: <value>
	
	  Where: Value can be set to anything (for example, Yes, On, and so on). As long
	  as this parameter exists, the X'27' control codes will be accepted by the
	  print server.
	
	2. Configure a Custom Code Page that maps the EBCDIC X'27' code to an ASCII
	  X'1B' code. Please refer to Appendix E of the online version of the SNA
	  Server 3.0 Reference Guide for details on Custom Code Pages.
	
	3. Configure and use a Printer Definition Table (PDT) file for the print
	  sessions that will be printing the LU3 jobs that contain these control codes.
	  The PDT file does not need to contain any special options. The default
	  hplj2.pdf file included with SNA Server can be compiled and used. This is
	  needed so that the print job is not passed through Graphical Device Interface
	  (GDI). Please refer to Chapter 7 of the online version of the SNA Server 3.0
	  Reference Guide for details on PDTs.
	
	Note: A more recent update is available that removes the LetHex27Pass registry
	entry. Please refer to the following Knowledge Base article for more information
	regarding this later update:
	
	  Q195354 LU3 Print Sessions Don't Support Transparent Print Sections
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
