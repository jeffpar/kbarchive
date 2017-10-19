---
layout: page
title: "Q231930: Non-US Locales Cause Index Server Queries to Not Work"
permalink: /kb/231/Q231930/
---

## Q231930: Non-US Locales Cause Index Server Queries to Not Work

	Article: Q231930
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:2.1; winnt:2.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT, versions 4.0, 4.0 SP4 
	- Microsoft Index Server version 2.0 
	- Microsoft Data Access Components version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a search, Index Server may return the following error message:
	
	  Microsoft OLE DB Service Components error '80040e21'
	  Errors occurred
	
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, add a LCID (Locale Identifier) to the connection
	string.
	
	For example:
	
	  cn.ConnectionString = "PROVIDER=msidxs;Locale Identifier=1033" //US English
	  cn.ConnectionString = "PROVIDER=msidxs;Locale Identifier=1024" //Neutral
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	This is only a problem when your locale in the Control Panel Regional Settings
	tool is set to a non-US setting (such as English (Australian)).
	
	Also, this is a know problem in the OLE DB provider for Index Server,
	Msidxs.dll.
	
	Additional query words: 4.00 OLE DB MDAC ADO
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbIdxServSearch kbAudDeveloper kbOSWinSearch kbOSWinNT400 kbMDACSearch kbIdxServ200 kbMDAC210 kbOSWinNTSearch kbOSWinNT400SP4
	Version           : WINDOWS:2.1; winnt:2.0,4.0 SP4
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
