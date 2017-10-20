---
layout: page
title: "Q178302: XADM: Upgrade to Exchange 5.5 Fails If Virus Software Is Enabled"
permalink: /kb/178/Q178302/
---

## Q178302: XADM: Upgrade to Exchange 5.5 Fails If Virus Software Is Enabled

{% raw %}

	Article: Q178302
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fixkbfaq
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade Microsoft Exchange Server versions 4.0 or 5.0 to
	Microsoft Exchange Server version 5.5, errors may occur and you receive one of
	the following error messages:
	
	  Microsoft Exchange Server Setup
	  An internal initialization error occurred in the database
	  upgrade process.
	  Microsoft Exchange Server Setup
	  ID: no. c1032bfc
	  <OK>
	
	  Microsoft Exchange Server Setup
	  ERROR: Your upgrade did not complete successfully. Please restart your
	  Microsoft Exchange Services and your system will behave as it did before
	  the upgrade was attempted.
	  Please contact Microsoft Product Support Services for more information.
	  Microsoft Exchange Server Setup
	  ID: no. c1032c07
	  <OK>
	
	  Microsoft Exchange Server Setup
	  ERROR: Your upgrade did not complete successfully. Please restart your
	  Microsoft Exchange Services and your system will behave as it did before
	  the upgrade was attempted.
	  Please contact Microsoft Product Support Services for more information.
	  Microsoft Exchange Server Setup
	  ID: no. c1032c08
	  <OK>
	
	
	CAUSE
	=====
	
	When certain virus checking programs are installed, they add various File System
	Filters as devices. These devices are enabled automatically (or when the server
	is started) and prevent JET 97 (ESE), the Microsoft Exchange Server 5.5
	database, from installing and functioning correctly.
	
	WORKAROUND
	==========
	
	The workaround that is presented below will allow the setup program complete the
	upgrade to Microsoft Exchange Server version 5.5. However, to ensure that
	Microsoft Exchange Server database utilities will function properly, you should
	obtain and install a post-Service Pack 3 hotfix for Windows NT 4.0 before you
	restart any virus software programs on a Microsoft Exchange 5.5 Server
	computer.
	
	1. Disable the anti-virus software. Double-click the Services icon in Control
	  Panel to set the appropriate services to Disabled.
	
	2. Disable the system devices. Double-click the Devices icon in Control Panel.
	  Set the appropriate system devices to Disabled.
	
	3. Stop all Microsoft Exchange Server Services and set them to Manual startup.
	
	4. Restart the server and then proceed with the upgrade.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server
	version 4.0 Service Pack 3. This problem was first corrected in Windows NT 4.0
	Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack
	4.
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/roll-up
	
	NOTE: Review the Readme.txt file in that directory before you attempt to install
	the hotfixes.
	
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q174748 XADM: ESEUTIL /g Returns Error -1022
	
	Additional query words: c1032bfc upgrade 5.5 innoculan exfaqoldad exfaqold
	
	======================================================================
	Keywords          : kbWinNT400sp4fix kbfaq
	Technology        : kbWinNTsearch kbWinNTSsearch kbNTTermServSearch kbExchangeSearch kbExchange400 kbZNotKeyword2 kbGraph500
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
