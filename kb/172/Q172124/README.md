---
layout: page
title: "Q172124: Poledit.exe Not Updated During WinNT SP3 Installation"
permalink: /kb/172/Q172124/
---

## Q172124: Poledit.exe Not Updated During WinNT SP3 Installation

{% raw %}

	Article: Q172124
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 3 (SP3), you find that the file
	Poledit.exe has not been replaced as documented in the following Microsoft
	Knowledge Base article:
	
	  Q162774 Policy Editor Crashes When Using Large Custom ADM Files
	
	CAUSE
	=====
	
	The file Poledit.exe is listed under the section [MustReplace.System32.files] in
	the Service Pack 3 Update.inf file. Whereas poledit is actually installed in the
	SystemRoot directory by default.
	
	Poledit.exe should go under the [SystemRoot.files] section in the Update.inf
	file.
	
	The service pack is designed to only replace files that are currently installed
	on the system, since Update.exe looked for the Poledit.exe file in the System32
	directory and was not found, it did not copy it.
	
	RESOLUTION
	==========
	
	1. Expand the Windows NT Service Pack 3 Update.exe file in a separate directory
	  using the /X Switch: NT4SP3_I.EXE /X
	
	2. Copy Poledit.exe from the folder created in step 1 to the %SystemRoot%
	  folder.
	
	NOTE: Alternately, you can modify the SP3 update.inf file and move the file
	poledit.exe from the [MustReplace.System32.files] to the [SystemRoot.files]
	section. This will allow future SP3 installation to correctly replace the
	Poledit.exe file. To resolve this problem, obtain the latest service pack for
	Windows NT 4.0 or Windows NT Server 4.0, Terminal Server Edition. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: sp3 file not updated
	
	======================================================================
	Keywords          : kbsetup kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
