---
layout: page
title: "Q308309: Using the Get Response Time Utility GETRT.exe"
permalink: /kb/308/Q308309/
---

## Q308309: Using the Get Response Time Utility GETRT.exe

	Article: Q308309
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 05-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Get Response Time utility (GETRT.exe).
	
	MORE INFORMATION
	================
	
	NOTE: In order to use this GETRT.exe, you also need CONVRTR.exe. Both utilities
	are included on the Host Integration Server 2000 Resource Kit CD-ROM.
	
	If you are experiencing slow response times with an application that is using
	Advanced Program-to-Program Communications (APPC), Common Programming Interface
	for Communications (CPI-C), or COM Transaction Integrator (COMTI), the GETRT.exe
	utility can help you isolate the transaction program (TP) in question and
	determine whether the slowdown is occurring on the SNA Server/Host Integration
	Server (HIS) 2000 server or the mainframe.
	
	The GETRT.exe is a command-line tool that extracts LU6.2 SNA DLC [Systems Network
	Architecture data link control] messages that flow between the SNA Server/HIS
	2000 server and mainframe. It will not identify delays that occur in
	communication between the SNA client and SNA Server/HIS 2000 Server server.
	
	Before GETRT.exe can be used, you must first convert the SNA Server/HIS 2000 DLC
	message trace (NODEMSGx.atf) from an .atf file to text (.txt) format.
	
	How to Convert a Trace
	----------------------
	
	1. Copy the CONVRTR.exe file to the location of your SNA Server/HIS 2000 trace
	  file location (<snaroot>\trace folder).
	
	2. Open a command prompt and go to this trace folder.
	
	3. Run the following command:
	
	  "CONVRTR NODEMSGx.ATF" (without the quotation marks)
	
	  NOTE: The x in NODEMSGx indicates the number associated with the trace (for
	  example, NODEMSG1.atf, NODEMSG2.atf).
	
	  You will then have a file named NODEMSGx.trc.
	
	View the Converted File Using GETRT.exe
	---------------------------------------
	
	1. Copy the GETRT.exe file to the location of your SNA Server/HIS 2000 trace
	  file location (<snaroot>\trace folder).
	
	2. Open a command prompt and go to this trace folder.
	
	3. Run the following command to view the data:
	
	  "GETRT NODEMSGx.TRC" (without the quotation marks)
	
	  Optionally, if you want to pipe the data out to a text file, run the
	  following:
	
	  "GETRT NODEMSGx.TRC > file name.txt" (without the quotation marks)
	
	When you view the converted GETRT data you can focus on the "Time" and "TP Name"
	fields. If you notice any times that show a high number of seconds, you can then
	determine the TP in question.
	
	Although it is beyond the scope of this article, you can also determine whether
	the SNA Server/HIS 2000 server computer or the mainframe is responsible for the
	slow response. To do so, you can compare the converted GETRT file to the node
	message trace file (NODEMSGx.aft). Once you have identified the TP in question,
	you can review this TP's "data flow" by tracking on the Destination Address
	Field (DAF) and Originating Address Field (OAF) from the NODEMSGx.ATF trace.
	This type of SNA Server/HIS 2000 Server trace reading, however, normally
	requires assistance from Microsoft Product Support Services SNA Server/HIS 2000
	specialists.
	
	REFERENCES
	==========
	
	For additional information on GETRT.exe, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q309003 GETRT.exe Run on Trace File With Too Many APPC Conversations Brings
	  Access Violation
	
	Additional query words: reskit
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	
