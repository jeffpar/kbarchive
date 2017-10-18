---
layout: page
title: "Q214609: Routemon.exe Does Not Properly Set the Metric Option"
permalink: kb/214/Q214609/
---

## Q214609: Routemon.exe Does Not Properly Set the Metric Option

	Article: Q214609
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Configuring Open Shortest Path First (OSPF) from the command line using
	Routemon.exe does not properly set the metric option. For example, the following
	command does not set the metric value and causes "iftype" to be modified
	incorrectly.:
	
	  ROUTEMON ip set protocol proto= ospf name= <interface name>    
	  ifaddr= <ip address> ifmask= <subnet mask> iftype=    
	  <broadcast, p2p, or nbma> metric= <metric#> 
	
	CAUSE
	=====
	
	The command-line option value for metric is interpreted incorrectly by
	Routemon.exe. The metric value overwrites the "iftype" field.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
