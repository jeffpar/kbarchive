---
layout: page
title: "Q271758: XADM: Cannot Reinstall Network Associates GroupShield Exchange"
permalink: /kb/271/Q271758/
---

## Q271758: XADM: Cannot Reinstall Network Associates GroupShield Exchange

{% raw %}

	Article: Q271758
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to reinstall Network Associates GroupShield Exchange anti-virus
	software on a computer running Microsoft Exchange Server 5.5 Service Pack 2,
	GroupShield may not install.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually remove GroupShield Exchange before attempting to
	reinstall the anti-virus software.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE To remove GroupShield Exchange, you must first remove the GroupShield
	clients, and then remove the GroupShield server application.
	
	1. To remove workstations as GroupShield Exchange clients, follow these steps:
	
	  a. Start Registry Editor, and locate and then remove the following registry
	     keys and values:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\Network
	  Associates Exchange AV Client
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Exchange\Client\Extensions GroupShield
	  Exchange Client Extensions
	
	  b. Start Windows Explorer, and locate and then remove the following files in
	     the client directory:
	
	  Mcscan32.dll
	  Scan.dat
	  License.dat
	  Messages.dat
	  Names.dat
	  Clean.dat
	  Clntinst.exe
	  Exchange.drv
	  Exgutil.dll
	  Mapiscan.dll
	  Mbsextn.dll
	  Aclcls.dll
	  Mfc42.dll
	  Msvcrt.dll
	
	  c. Delete the following files from the Windows directory:
	
	  Exchutil.dll
	  Exchange.drv
	
	2. To remove the GroupShield Exchange Server application from the Exchange
	  Server computer, follow these steps:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	  a. Start the Microsoft Exchange Server Administrator program in raw mode by
	     typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	  b. In the Exchange Administrator program, expand the Configuration container,
	     and then select the server from which you want to remove the GroupShield
	     application.
	
	  c. Click the Network Associates Anti-Virus object, and then in the Edit menu
	     click Delete Raw Object.
	
	  d. Expand the Addins container, and delete the four Network Associates
	     add-ins that are installed.
	
	  e. Expand the Recipients container and click Network Associates Recipients,
	     and then on the Edit menu, click Delete Raw Object.
	
	  f. On the Tools menu, click Forms Administrator, and in the dialog box that
	     appears, select the folder name Organization(809)uk or
	     Organization(409)usa, and then click Delete.
	
	  g. Start the Exchange mail client, and delete the Quarantine folder.
	
	  h. On the Windows taskbar, click Start, point to Settings, and then click
	     Control Panel.
	
	  i. Double-click Services, and then stop the following services:
	
	      - Network Associates Anti-Virus for Exchange
	      - Network Associates On-Line Update Service
	      - Network Associates Alert Manager
	
	  j. Start Windows Registry Editor, and locate and then remove the following
	     registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\AVExch32Service
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\AVUPDService
	
	  NOTE: Do not remove the preceding two keys if you installed a version of Alert
	  Manager with other Network Associates software.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\AlertManager
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\McAfee\AlertManager
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Network Associates\GroupShield Exchange
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\Network
	  Associates Groupshield Components
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\Network
	  Associates GroupShield Exchange
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App
	  Paths\AVExch32.exe
	
	  k. Start Windows Explorer, and locate and then remove the following folders,
	     along with their contents:
	
	     C:\Program Files\Network Associates\GroupShield Exchange
	
	     C:\Exchsrvr\Addins\DSAVSAdm
	
	     C:\Exchsrvr\Addins\DSAVUAdm
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For information about how to contact Network Associates, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile 
	Component         : Admin
	Technology        : kbZNotKeyword8 kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
