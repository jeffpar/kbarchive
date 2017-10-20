---
layout: page
title: "Q246638: Cannot Enter All Values for Slow Network Connection Timeout"
permalink: /kb/246/Q246638/
---

## Q246638: Cannot Enter All Values for Slow Network Connection Timeout

{% raw %}

	Article: Q246638
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400PreSP7Fixkbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to enter a very large value for the Slow Network Connection Timeout
	setting in the Windows NT User Profiles policy while creating or editing a
	computer policy, you may be unable to enter a value greater than 20,000. This
	may occur even though the following related registry key has a well-documented
	range of possible values from 0-120,000 milliseconds:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows
	  NT\Currentversion\Winlogon\SlowLinkTimeout
	
	Also, if you edit the Winnt.adm file to specify the correct range of 0-120,000
	for this policy, the Poledit user interface may malfunction and display negative
	values for this parameter when you use the interface controls to enter a value.
	
	CAUSE
	=====
	
	This problem can occur by having the maximum entry for the Slow Network
	Connection Timeout value incorrectly set to 20,000 in the
	%SystemRoot%\Inf\Winnt.adm file. Also, Poledit.exe only uses 16-bit integers for
	the minimum and maximum values associated with the numeric interface value entry
	controls.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Size      File name     Platform
	  -------------------------------------------------------------
	  15/11/99   20:07   123,152   Poledit.exe   Intel
	  15/11/99   19:38    24,475   Winnt.adm     Intel
	
	  15/11/99   20:07   194,320   Poledit.exe   Alpha
	  15/11/99   19:37    24,475   Winnt.adm     Alpha
	
	
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, edit the appropriate registry entry. To do so, use
	Registry Editor to locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\Currentversion\Winlogon
	
	Add the following value to this key
	
	Value Name: SlowLinkTimeOut
	Data Type: REG_DWORD
	Value: <value between 0-120,000>.
	
	where <value between 0-120,000> is a numeric value between 0-120,000. Note
	that the permissible range for this registry entry is from 0-120,000
	milliseconds, and the default value for this registry entry is 2,000
	milliseconds.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400PreSP7Fix kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
