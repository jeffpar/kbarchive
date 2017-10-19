---
layout: page
title: "Q174748: XADM: ESEUTIL /g Returns Error -1022"
permalink: /kb/174/Q174748/
---

## Q174748: XADM: ESEUTIL /g Returns Error -1022

	Article: Q174748
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage kbWinNT400sp4fix
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running ESEUTIL /g on the directory store or information store, the
	following error may occur:
	
	  - 1022 indicating disk I/O error
	
	This occurs when InocuLAN anti-virus software is installed on a computer running
	Windows NT Server 4.0 with Service Pack 3 and running Exchange 5.5. InocuLAN
	installs a file system filter that disables the JET engine ESE97 from addressing
	database files.
	
	RESOLUTION
	==========
	
	Perform the following to work around this problem:
	
	- Uninstall InocuLAN and restart your computer.
	
	  NOTE: Disabling InocuLAN does not resolve this problem.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	Install the Windows NT hotfix that been released as part of the roll-up hotfixes
	that are recommended in the Readme.doc file for Microsoft Exchange Server,
	version 5.5. For your convenience, the English version of this post-SP3 hotfix
	has been posted to the following Internet location. However, Microsoft
	recommends that you install Windows NT 4.0 Service Pack 4 to correct this
	problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/roll-up/
	
	Note: If you later re-install Windows NT Service Packs, you must also re-install
	the hotfixes regardless of your responses to the Overwrite Newer Files prompts
	during the Service Pack installation.
	
	Additional query words: 5.50
	======================================================================
	Keywords          : kbusage kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTSsearch kbNTTermServSearch kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
