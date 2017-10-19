---
layout: page
title: "Q187870: HOWTO: How to Remove and Reinstall the Windows NT 4.0 Option Pac"
permalink: /kb/187/Q187870/
---

## Q187870: HOWTO: How to Remove and Reinstall the Windows NT 4.0 Option Pac

	Article: Q187870
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For troubleshooting purposes or because of corruption, you may find it necessary
	to remove and reinstall the Windows NT 4.0 Option Pack, which includes Internet
	Information Server (IIS) 4.0, as well Microsoft Transaction Server (MTS) 2.0,
	Microsoft Message Queue Server (MSMQ) 1.0, and Internet Connection Services for
	Microsoft RAS.
	
	This article describes how to:
	
	- Remove and reinstall just the Windows NT 4.0 Option Pack.
	
	- Remove and reinstall both the Windows NT 4.0 Option Pack and Microsoft
	  Internet Explorer.
	
	Short, general overviews of how to remove and reinstall the Windows NT 4.0 Option
	Pack and/or Internet Explorer are provided for users who are familiar with these
	products. Following the overview, more detailed instructions are also provided
	for those users who are less familiar with them.
	
	CAUTION: Virtual directories and virtual servers are NOT preserved when IIS is
	removed.
	
	For additional information about preserving virtual directories and virtual
	servers, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q193152 Preserving Virtual Directories and Servers During Uninstall
	
	NOTES
	-----
	
	- It has been reported that some customers who have installed the final,
	  released version of the Windows NT 4.0 Option Pack over a beta version have
	  needed to remove and reinstall the released version.
	
	- IIS uses Windows NT Challenge Response as one of its security authentication
	  options. For IIS to install correctly, the NT LM Security Support Provider
	  service must be installed and running. If it is not, the Windows NT 4.0
	  Option Pack Setup program may fail.
	
	MORE INFORMATION
	================
	
	Overview
	--------
	
	Remove and reinstall the Windows NT 4.0 Option Pack but not Internet Explorer:
	
	1. Run Windows NT 4.0 Option Pack Setup to remove all of the Windows NT 4.0
	  Option Pack, including IIS.
	
	2. In Control Panel, double-click Services and verify that the NT LM Security
	  Support Provider service is running (that is, that it has been started).
	
	3. Reinstall the Windows NT 4.0 Option Pack.
	
	4. Install the latest Windows NT 4.0 Service Pack.
	
	Remove and reinstall both the Windows NT 4.0 Option Pack and Internet Explorer:
	
	1. Run Windows NT 4.0 Option Pack Setup to remove all of the Windows NT 4.0
	  Option Pack, including IIS.
	
	2. Remove Internet Explorer.
	
	3. Reinstall Internet Explorer.
	
	4. In Control Panel, double-click Services and verify that the NT LM Security
	  Support Provider service is running (that is, that it has been started).
	
	5. Reinstall the Windows NT 4.0 Option Pack.
	
	6. Install the latest Windows NT 4.0 Service Pack.
	
	Detailed Instructions
	---------------------
	
	Remove and reinstall the Windows NT 4.0 Option Pack but not Internet Explorer:
	
	1. Run Windows NT 4.0 Option Pack Setup, click Next, and then click Remove All.
	
	2. Finish running Setup (to remove the Windows NT 4.0 Option Pack). When
	  prompted to restart your computer, click Yes.
	
	3. After your computer has restarted, open Control Panel Services. Verify that
	  the NT LM Security Support Provider service is running (that is, that it has
	  been started).
	
	4. Run Setup from the Windows NT 4.0 Option Pack CD to reinstall IIS 4.0 (and
	  any other components that you need).
	
	5. When prompted, restart your computer.
	
	6. Install the latest Windows NT 4.0 Service Pack.
	
	Remove and reinstall both the Windows NT 4.0 Option Pack and Internet Explorer:
	
	1. Run Windows NT 4.0 Option Pack Setup, click Next, and then click Remove All.
	
	2. Finish running Setup (to remove the Windows NT 4.0 Option Pack). When
	  prompted to restart your computer, click Yes.
	
	3. In Control Panel Add/Remove Programs, click the Install/Uninstall tab.
	
	4. Select Microsoft Internet Explorer 4.0, and then click Add/Remove.
	
	5. Select "Uninstall Internet Explorer 4.0 and all its components" and then
	  click Advanced to specify any additional components you want to remove. Click
	  OK, and then finish running the Internet Explorer Setup program. When
	  prompted, restart your computer.
	
	For additional information about removing Internet Explorer, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q174265 How to Uninstall Internet Explorer 4.0
	
	6. After Windows NT has restarted, reinstall Internet Explorer. When prompted to
	  restart your computer, click Yes.
	
	  NOTE: Internet Explorer is included on the Windows NT 4.0 Option Pack CD, and
	  is also available at http://www.microsoft.com/ie/download/.
	
	7. After your computer has restarted, in Control Panel, double-click Services.
	  Verify that the NT LM Security Support Provider service is running (that is,
	  that it has been started).
	
	8. Run Setup from your Windows NT 4.0 Option Pack CD to reinstall IIS 4.0 (and
	  any other components that you need).
	
	9. When prompted, restart your computer.
	
	10. Install the latest Windows NT 4.0 Service Pack.
	
	Additional query words: deinstall 4.01 corrupted corrupt rtm rtw tshoot NTOP NT4OP IE ROM akz
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
