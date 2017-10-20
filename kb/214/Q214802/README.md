---
layout: page
title: "Q214802: WinNT Lets You Paste Text into Unlock Workstation Dialog Box"
permalink: /kb/214/Q214802/
---

## Q214802: WinNT Lets You Paste Text into Unlock Workstation Dialog Box

{% raw %}

	Article: Q214802
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A problem in Windows NT enables someone with physical access to the console of a
	Windows NT system where a user is currently logged on and the console is locked
	to retrieve the first line of text from the logged on user's clipboard. This is
	done by pasting (pressing CTRL+V) the clipboard contents into the User name
	field of the Unlock Workstation dialog box. Microsoft has not received any
	reports of adverse effects as a result of this issue.
	
	Terminal Server connections are not affected by this bug, although the Terminal
	Server console would be.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	Windows NT 4.0 with Service Pack 4:
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location as :
	
	  
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Gina-fix/
	
	Windows NT 4.0 with Service Pack 3:
	
	This hotfix has been posted to the following Internet location as :
	
	  
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/Gina-fix/
	
	WARNING: If you install the SP3 version of this hotfix you may invalidate other
	Post-SP3 hotfixes that also include the replacement of Msgina.dll in the
	%Windows%\System32 folder. To eliminate the vulnerabilities identified in this
	fix and other Post-SP3 fixes, please install Service Pack 4 and then apply the
	Post-SP4 version of this hotfix.
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	This hotfix has been posted to the following Internet location as :
	
	  
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40TSE/hotfixes-postSP3/Gina-fix/
	
	
	Windows NT 3.51
	---------------
	
	A hotfix is not available for Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51 and 4.0 and
	Windows NT Server 4.0, Terminal Server Edition. This problem was first corrected
	in Windows NT Server 4.0, Terminal Server Edition Service Pack 4 and Windows NT
	4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Gina-fix also resolves the problem discussed in the following article in the
	Microsoft Knowledge Base:
	
	  Q188700 Screensaver Password Works Even if Account Is Locked Out
	
	Additional query words: 3.51 4.00 sp1 sp2 sp3 sp4 tse wts
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
