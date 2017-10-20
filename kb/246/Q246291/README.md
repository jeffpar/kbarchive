---
layout: page
title: "Q246291: Using APPC Session Viewer to Verify LU6.2 Configuration"
permalink: /kb/246/Q246291/
---

## Q246291: Using APPC Session Viewer to Verify LU6.2 Configuration

{% raw %}

	Article: Q246291
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the APPC Session Viewer utility to verify SNA
	Server's LU6.2 configuration. This utility is found under the Tools menu in SNA
	Server Manager. Depending on the version of SNA Server, it may be listed as APPC
	Session Viewer or 3270-APPC Session Viewer.
	
	MORE INFORMATION
	================
	
	APPC Session Viewer will simulate a LU6.2 session startup. To test the LU6.2
	configuration, start the APPC Session Viewer utility and click LU-LU Test. At
	the LU-LU Mode Test screen, enter the local LU alias, remote LU alias, and mode
	name that you wish to test. (Newer versions of the utility have drop-down boxes
	for selecting these values and may also contain a box for the server name. With
	older versions of the utility, you must type the correct information into these
	boxes.) Next, click Start Test.
	
	The APPC Session Viewer will issue a MC_ALLOCATE command, which will generate a
	BIND request to the mainframe or IBM AS/400. After CNOS (change number of
	sessions) negotiation has finished, the MC_DEALLOCATE command will be issued,
	and the results of the test will appear on the APPC Session Viewer screen. This
	will verify that the LUs and mode have been configured correctly.
	
	If the configuration is correct, the returned information will be similar to
	this:
	
	Node Name: SNASERVR, Box Name: SNASERV1
	Local LU    Remote LU     Mode      Session Limit    In-Use
	LOCLU       REMLU         SNASVCMG  2                1
	LOCLU       REMLU         QPCSUPP   64               1
	
	If the test does not complete successfully, please refer to the SNA Server SDK
	for additional information about the error codes.
	
	For additional information troubleshooting common APPC error codes, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q150841 Troubleshooting Common APPC Error Codes
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
