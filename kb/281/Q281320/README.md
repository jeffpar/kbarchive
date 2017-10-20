---
layout: page
title: "Q281320: Err Msg: Setup Was Unable to Download the Required Components..."
permalink: /kb/281/Q281320/
---

## Q281320: Err Msg: Setup Was Unable to Download the Required Components...

{% raw %}

	Article: Q281320
	Product(s): Microsoft Windows NT
	Version(s): 4.0,5,5.5,5.5 Service Pack 1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Explorer versions 5, 5.5, 5.5 Service Pack 1 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to install Internet Explorer 5, you may receive the following error
	message:
	
	  Setup was unable to download the required components. Please make sure you
	  are connected to the Internet, or try to run Setup again later.
	
	CAUSE
	=====
	
	This issue may occur if the ProgramFilesDir registry value has been altered from
	its default value.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use Registry Editor (Regedt32.exe) to locate the
	ProgramFilesDir value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	
	On the Edit menu, click String, type "C:\Program Files" (without the quotation
	marks). Note that if Windows NT is installed on a partition other the drive C,
	substitute the appropriate drive letter. Click OK, and then quit Registry
	Editor.
	
	MORE INFORMATION
	================
	
	The "Active Setup Log.txt" file may include the following lines:
	
	  
	
	  Run setup command. File:C:\TEMP\IXP000.TMP\IESetup.inf: Section:AXControl.Register:
	  RunSetupCommand returned :0:
	  TranslateInfString. Section:Options: Value:CIFNAME:
	  SetLocalCif :C:\TEMP\IXP000.TMP\:
	  ERROR: SetLocalCif on C:\TEMP\IXP000.TMP\ returned :80004005:
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE550WinNT400SP1 kbIE500WinNT400 kbIE550WinNT400 kbIE550Search
	Version           : :4.0,5,5.5,5.5 Service Pack 1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
