---
layout: page
title: "Q282877: Testing the CPI-C Sample Programs"
permalink: kb/282/Q282877/
---

## Q282877: Testing the CPI-C Sample Programs

	Article: Q282877
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article provides step-by-step instructions for testing the CPI-C sample
	Transaction Programs (TPs) that are included in the Microsoft SNA Server SDK and
	Microsoft Host Integration Server 2000 SDK. Specifically, these instructions are
	for the CPI-C Send and Receive TPs (CPICSEND and CPICRECV).
	
	MORE INFORMATION
	================
	
	The source files for the CPI-C Send and Receive TPs can be found in the
	following folders:
	
	  SNA Server 4.0 SDK: \Samples\Cpic
	  Host Integration Server 2000 SDK: \Samples\Sna\Cpic
	
	For Host Integration Server 2000, the sample programs must be compiled before
	use. For SNA Server 4.0, the already compiled executable files for the CPI-C
	Send and Receive TPs can be found in the following folder:
	
	  SNA Server 4.0 SDK: \Samples\Bin\Winnt\I386
	
	The documentation for the CPI-C Send and Receive TPs can be found in the
	following locations in the SDK Help files:
	
	  SNA Server 4.0 SDK: CPI-C Programmer's Guide\Appendixes\Sample CPI-C TPs in
	  the SDK\Building the TPs\CPI-C Send and Receive TPs
	
	  Host Integration Server 2000 SDK: SNA Application Programming\CPI-C
	  Applications\CPI-C Sample Applications\Sample CPI-C TPs in the SDK\Building
	  the TPs\CPI-C Send and Receive TPs
	
	Testing the TP
	--------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Define two local logical units (LUs), one called "CPICSEND" and one called
	  "CPICRECV".
	
	2. Define a CPI-C symbolic destination name called "CPICRECV" with the following
	  values:
	
	  Mode Name: QPCSUPP
	  TP Name: CPICRECV
	  Partner LU: CPICRECV
	
	3. Because CPI-C does not provide a way to specify a local LU, use one of the
	  following three methods to make the local LU default to CPICSEND:
	
	   - In the Advanced Properties for the CPICSEND LU, select the checkbox to
	     make it a Member of Default Outgoing Local APPC LU Pool.
	
	   - Under Configured Users, go to the Properties of your user or group
	     account. On the APPC Defaults tab, set the default local LU to CPICSEND.
	
	   - Configure a registry entry to specify CPICSEND as the local LU.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q132720 SNA Server CPIC Allocate Error 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	4. Save the changes to the configuration file, and then stop and restart the SNA
	  Service.
	
	5. Start the CPICRECV program (CPICRECV.exe), which will appear in the task bar
	  as a running application and wait for the CPICSEND program to be started.
	
	6. Start CPICSEND (CPICSEND.exe). It will very briefly appear in the task bar.
	  If the two applications successfully communicate with each other, both will
	  then shut down.
	
	Successful execution of the applications will result in creation of a
	CPICRECV.out file and a CPICSEND.out file. The CPICRECV.out file should contain
	data similar to the following:
	
	    CPICRECV Results
	    ----------------
	
	    Local TP Name           = CPICRECV
	    Number of conversations = 1
	    Wait mode               = No
	
	    Conversation number 0, time = 0.020 seconds
	
	The CPICSEND.out file should contain data similar to the following:
	
	    CPICSEND Results
	    ----------------
	
	    Symbolic destination name = CPICRECV
	    Number of conversations = 1
	    Sends per conversation  = 2
	    Sends between confirms  = 1
	    Bytes per send          = 1024
	    Wait mode               = No
	    Blocking                = No
	
	    Conversation number 0, time = 0.203 seconds
	
	You can also modify the behavior of the CPICSEND and CPICRECV programs through
	the use of initialization files. See the SDK documentation for further
	information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	
