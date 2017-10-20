---
layout: page
title: "Q174333: Installing Win95 Print Drivers on WinNT 4.0 Asks for Wrong Disk"
permalink: /kb/174/Q174333/
---

## Q174333: Installing Win95 Print Drivers on WinNT 4.0 Asks for Wrong Disk

{% raw %}

	Article: Q174333
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sharing a printer on a computer running Windows NT 4.0 Server or
	Workstation with Windows 95 clients where the Windows 95 drivers are installed
	on the server, the wizard prompts you with the following message:
	
	  Please insert the floppy disk labeled 'Windows 95' into drive A:
	  and then click OK.
	
	This message is misleading because, after inserting a Windows 95 floppy disk or
	CD-ROM and clicking OK, you receive the error message:
	
	  Alternate Drivers Cannot Be Installed.
	
	CAUSE
	=====
	
	The Windows 95 files on floppy disks and CD-ROMs are cabinet files with .cab
	extensions. Windows NT does not search the contents of the cabinet files for the
	necessary printer driver files, such as .inf, .ini, .dll, or .drv.
	
	RESOLUTION
	==========
	
	Windows NT will not be changed to expand Windows 95 cabinet files during printer
	installation; however, there is now an updated version of Ntprint.dll, which
	provides a better description of the actual disk that is needed. After applying
	this version of Ntprint.dll, when you install the Window 95 printer drivers, you
	will be prompted for the following message:
	
	  Please insert the disk labeled "Windows 95 Flat share" into drive A:.
	
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
	
	For additional information on installing Windows 95 print drivers on Windows NT,
	please refer to the following Microsoft Knowledge Base article:
	
	Article ID: Q154291
	Title: Installing Cross Platform Print Drivers in Windows NT 4.0
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWin95search kbSBServSearch kbZNotKeyword3 kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
