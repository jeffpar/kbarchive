---
layout: page
title: "Q137577: The Control Point Name is Invalid"
permalink: kb/137/Q137577/
---

## Q137577: The Control Point Name is Invalid

	Article: Q137577
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Microsoft SNA Server version 2.11 on a Microsoft Windows NT
	server, the following error message appears when you run SNA Admin:
	
	  Error 3846:
	  The Control Point Name is invalid.
	  The name can be from one through eight alphanumeric characters long.
	
	This problem occurs when the Windows NT server name begins with a digit.
	
	CAUSE
	=====
	
	There is an IBM SNA standard that an APPC control point name cannot begin with a
	digit. If the Local Control Point Name is not already configured on the SNA
	Server, the Microsoft SNA Server 2.11 Admin program automatically sets the Local
	Control Point Name (in the server properties dialog) to the Windows NT
	computername. If the Windows NT computername starts with a digit, the SNA Admin
	program sets the local control point name to an invalid value.
	
	WORKAROUND
	==========
	
	To work around this problem, open the COM.CFG file with the command line
	command:
	
	  "SNAADMIN C:\SNA\SYSTEM\CONFIG\COM.CFG" (without the quotation marks)
	
	This opens the SNA Server configuration file off-line and allows you to make
	changes the configuration.
	
	If the "Servers and Connections" window in SNA Server Admin lists the SNA Server
	Name, double-click on the SNA Server Name and enter a valid Control Point Name.
	
	If the Servers and Connections window has only "No Assigned Services" listed, use
	the following process to add a SNA Server with a valid Control Point Name:
	
	1. Select Services from the SNA Server Admin Menu Bar.
	
	2. Select New Server from the Services drop down menu.
	
	3. Enter the NT Computer Name in the Server Name field on the Server Properties
	  dialog.
	
	4. Enter a valid Control Point Name in the Control Point Name field. If you
	  enter a Control Point, you must also enter a Network Name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 snaadmin 3846
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
