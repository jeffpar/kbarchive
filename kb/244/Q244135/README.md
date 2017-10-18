---
layout: page
title: "Q244135: Too Many Printers Can Cause Unsuccessful Boot"
permalink: kb/244/Q244135/
---

## Q244135: Too Many Printers Can Cause Unsuccessful Boot

	Article: Q244135
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  Windows NT could not start because the following file is missing or corrupt:
	
	  \%SystemRoot%\System32\Config\SystemHardware Profile/Last Known Good menu
	
	CAUSE
	=====
	
	This behavior can occur if there are too many printers installed. Based on the
	number and types of drivers involved, the problem may start at around 900
	printers. This issue can occur for local printers as well as for network
	printers, or for a combination of both that exceeds around 900 printers.
	
	Before you install the fix mentioned in the "Resolution" section, the information
	for local printers is saved to the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers
	
	The information for network printers is saved to the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanManPrintServices
	
	Because of this, the System subkey of the HKEY_LOCAL_MACHINE hive in the registry
	may become too large to fit into the allocated memory space and may preventing
	the system from booting.
	
	RESOLUTION
	==========
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	NOTE: To activate this fix, you must add the following registry value:
	
	  Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print
	
	  Value Name : UseSoftwareKey
	  Value Type : REG_DWORD
	  Data : 1
	
	
	
	Windows NT 4.0 Server and Workstation
	-------------------------------------
	
	There is a separate hotfix that addresses this issue for Windows NT 4.0. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239907 Too Many Printers Can Cause Unsuccessful Boot
	
	WORKAROUND
	==========
	
	For possible workarounds, see the following article in the Microsoft Knowledge
	Base:
	
	  Q102721 Err Msg: Windows NT Could Not Start Because the Following...
	
	STATUS
	======
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This fix moves the local printer keys from:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers
	
	to:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Print\Printers
	
	It moves the network printer keys from:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Providers\LanManPrintServices
	
	to:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Print\Providers\LanManPrintServices
	
	The printer information in:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Print\Printers
	
	may not be evident until you open the printer properties for a connection, add a
	printer, or reboot.
	
	You will still see registry keys and entries created in:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers
	
	for every printer, although only a small subset of the normal information is
	added. This is necessary to support applications that query the registry
	directly for printer information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
