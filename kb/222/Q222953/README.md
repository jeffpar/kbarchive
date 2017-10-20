---
layout: page
title: "Q222953: Problem When Uninstalling Service Pack 3 on Localized Windows NT"
permalink: /kb/222/Q222953/
---

## Q222953: Problem When Uninstalling Service Pack 3 on Localized Windows NT

{% raw %}

	Article: Q222953
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.01,4.01 Service Pack 1; winnt:4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Internet Explorer versions 4.01, 4.01 Service Pack 1 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you uninstall Windows NT 4.0 Service Pack 3 (SP3) by double-clicking
	Update.exe on a computer running Windows NT and Internet Explorer 4.x, a dialog
	box appears explaining that the program may not run correctly because Internet
	Explorer 4.x is installed. If you click Details in the dialog box, additional
	help is then displayed. On French, Swedish, and Italian versions of Windows NT
	when you click Details, a blank help window is displayed. On an English version
	of Windows NT, you are offered the following help:
	
	  If you reinstall Service Pack 3 for Windows NT Workstation 4.0 or Windows NT
	  Server 4.0 after you install Internet Explorer version 4.0, specify, when
	  prompted, that you do not want Service Pack 3 to write over any newer files.
	  After Service Pack 3 is reinstalled, update the registry:
	
	  1. Click Start, and then click Run.
	
	  2. In OPEN, type:
	
	  regsvr32 rsabase.dll
	
	  3. Click OK.
	
	
	MORE INFORMATION
	================
	
	It is possible that this problem occurs on other localized versions of Windows
	NT. The file at fault is called Apps.hlp, which is supplied with Internet
	Explorer 4.x.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbIEsearch kbZNotKeyword2 kbIENT400Search kbZNotKeyword3 kbIE401WinNT400 kbIE401WinNT400SP1
	Version           : WINDOWS:4.01,4.01 Service Pack 1; winnt:4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
