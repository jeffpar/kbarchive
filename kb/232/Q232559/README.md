---
layout: page
title: "Q232559: Novell Print Banner Always Printed After Applying Service Pack 5"
permalink: /kb/232/Q232559/
---

## Q232559: Novell Print Banner Always Printed After Applying Service Pack 5

	Article: Q232559
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 5 (SP5) or Windows NT Server 4.0,
	Terminal Server Edition Service Pack 5 (SP5) on a computer running Client
	Services for NetWare (CSNW) or Gateway Services for NetWare (GSNW), the print
	banner is always printed, regardless of whether it is enabled or disabled in the
	CSNW tool in Control Panel.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
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
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this behavior:
	
	1. Using Windows NT Explorer, rename the Nwprovau.dll file located in the
	  %SystemRoot%\System32 folder. To do so, right-click the file, click Rename,
	  type a new name for the file (such as Nwprovau.sp5), and then press ENTER.
	
	  NOTE: The file may be in use by Windows, so it may be necessary to rename the
	  file from a command prompt.
	
	2. If you created an uninstall folder for SP5 and your uninstall folder contains
	  Service Pack 4, locate the Nwprovau.dll file in the
	  %SystemRoot%\$ntservicePackUninstall$ folder, and then copy the file to the
	  %SystemRoot%\System32 folder.
	
	3. If you did not create an uninstall folder for SP5, locate the Service Pack 4
	  CD-ROM and copy the Nwprovau.dll file from the I386 folder on the CD-ROM to
	  the %SystemRoot%\System32 folder.
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 6.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words: banner page
	
	======================================================================
	Keywords          : kbprint kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
