---
layout: page
title: "Q195770: Print Margins Not Properly Configured When Using SNACFG.EXE"
permalink: kb/195/Q195770/
---

## Q195770: Print Margins Not Properly Configured When Using SNACFG.EXE

	Article: Q195770
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server's command line configuration utility, Snacfg.exe, does not properly
	configure margin settings for print sessions configured in SNA Server. If
	Snacfg.exe is used to set the margins for a print session, the margin settings
	are written to the SNA Server configuration file (Com.cfg). However, the Margins
	option in the Overrides tab of the print session properties dialog box is not
	enabled when using SNA Server Manager to view the configuration.
	
	This applies to both 3270 and APPC (AS/400) print sessions.
	
	CAUSE
	=====
	
	Snacfg.exe does not enable the Margins option when it is used to specify margin
	settings for print sessions.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	To work around this problem, use SNA Server Manager to configure margins for
	print sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After applying the update, using the /MARGINS: option in SNACFG to set print
	session margins will do the following:
	
	- Enable the Margins option.
	
	- Set the left, right, top, and bottom margins to the specified values.
	
	If the /MARGINS: option is specified without parameters, the Margins option will
	be disabled for the specified print session.
	
	The following is a sample SNACFG command that will set the left, right, top, and
	bottom margins to 0.2 inches for an existing 3270 print session named LU3PRT:
	
	  SNACFG PRINTSESSION3270 LU3PRT /MARGINS:2,2,2,2
	
	Please refer to Chapter 5 of the SNA Server Reference Guide for more details on
	using the Snacfg.exe utility to configure SNA Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
