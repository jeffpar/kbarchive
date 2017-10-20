---
layout: page
title: "Q243277: How to Install the Year 2000 Update Without Internet Explorer"
permalink: /kb/243/Q243277/
---

## Q243277: How to Install the Year 2000 Update Without Internet Explorer

{% raw %}

	Article: Q243277
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install the Microsoft Windows 95 Year 2000 Update
	(W95y2k.exe) without installing Microsoft Internet Explorer 4.01 Service Pack 2
	(SP2).
	
	MORE INFORMATION
	================
	
	NOTE: If you do not install Internet Explorer 4.01 SP2, which is included in the
	Windows 95 Year 2000 Update, you must separately evaluate Internet Explorer for
	year 2000 issues. For example:
	
	- Internet Explorer version 2.x and earlier has not been tested for year 2000
	  issues.
	
	- Internet Explorer 3.02 has updates available to address year 2000 issues.
	
	- Internet Explorer 4.x requires Internet Explorer 4.01 SP2 or later to address
	  year 2000 issues.
	
	To install the Windows 95 Year 2000 Update without installing Internet Explorer
	4.01 SP2, use one of the following procedures:
	
	Normal Installation
	-------------------
	
	To install the Windows 95 Year 2000 Update typically, double-click the W95y2k.exe
	file. If you are prompted to install Internet Explorer 4.01 SP2, click Cancel,
	and then click OK.
	
	NOTE: If Internet Explorer 1.x, 2.x, or 4.01 SP2 or later is detected on your
	computer, you are not prompted to install Internet Explorer 4.01 SP2.
	
	If Internet Explorer 3.0x through 4.01 Service Pack 1 (SP1) is detected on your
	computer, a dialog box that prompts you to install Internet Explorer 4.01 SP2 is
	displayed. If you click Cancel, you receive a message stating that Microsoft
	recommends that you install Internet Explorer 4.01 SP2. When you click OK, the
	Windows 95 Year 2000 Update should be installed without installing Internet
	Explorer 4.01 SP2.
	
	Quiet Installation
	------------------
	
	To install the Windows 95 Year 2000 Update using Quiet mode, type the appropriate
	command.
	
	If you want to install the core Windows files only without any prompts and
	without restarting the computer, type the following command:
	
	  w95y2k.exe /Q /C:"y2ksetup /ii /ai /nr"
	
	If you want to install the core Windows files only without any prompts and
	restart the computer, type the following command:
	
	  w95y2k.exe /Q /C:"y2ksetup /ii /ai /ar"
	
	For additional information about the Windows 95 Year 2000 Update, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q225053 Microsoft Windows 95 Year 2000 Update Readme File
	
	Additional query words: y2k unattended setup
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
