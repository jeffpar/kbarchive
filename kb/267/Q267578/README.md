---
layout: page
title: "Q267578: Access Violation in Lsass.exe in Windows NT 4.0 in Mixed Domain"
permalink: /kb/267/Q267578/
---

## Q267578: Access Violation in Lsass.exe in Windows NT 4.0 in Mixed Domain

{% raw %}

	Article: Q267578
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,2000 SP2,4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may receive a Dr. Watson error message in Lsass.exe on a Windows NT 4.0
	based server in a Microsoft Windows 2000-based domain.
	
	CAUSE
	=====
	
	There is a problem in Lsass.exe performing security ID (SID) to name lookups in
	a Windows 2000-based domain which causes heap corruption. The problem occurs in
	some circumstances when a deleted domain SID is the first in a list of
	permissions or local groups on the Windows NT 4.0 member server and there is an
	Lsa Lookup SID to Name request to the Windows 2000 Domain Controller and the SID
	no longer exists in the Domain.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 Service Pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name   Platform
	  -------------------------------------------------
	  07/10/2000  08:14p  155,920  Lsasrv.dll  Intel
	
	
	
	Windows 2000
	------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time       Version        Size       File name
	  --------------------------------------------------------------------------
	  5/31/2001    11:13p    5.0.2195.3663  501,520    Lsasrv.dll (56-bit)
	  5/31/2001    03:30p    5.0.2195.3649  354,576    Advapi32.dll
	  5/31/2001    03:37p    5.0.2195.3649  519,440    Instlsa5.dll
	  5/31/2001    03:31p    5.0.2195.3649  142,608    Kdcsvc.dll
	  5/30/2001    02:55p    5.0.2195.3649  209,008    Kerberos.dll
	  5/29/2001    09:26a    5.0.2195.3649   69,456    Ksecdd.sys
	  5/29/2001    09:26a    5.0.2195.3649  501,520    Lsasrv.dll
	  5/29/2001    09:26a    5.0.2195.3649   33,552    Lsass.exe
	  5/31/2001    03:31p    5.0.2195.3652  908,560    Ntdsa.dll
	  5/31/2001    03:31p    5.0.2195.3649  382,736    Samsrv.dll
	
	
	NOTE: If the Windows NT 4.0 Hotfix is installed on the Windows NT 4.0 member
	servers, then it is not neccesary to install the Windows 2000 Hotfix on the
	Windows 2000 domain controllers.
	
	You should install the Windows 2000 hotfix only on the domain controllers. To
	implement this fix, install the hotfix and add the following value in the
	registry on the Windows 2000-based domain controllers.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\LSA
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: LsaLookupReturnSidTypeDeleted
	  Data type: REG_DWORD
	  Radix: Hexidecimal
	  Value: 1
	
	4. Quit Registry Editor and reboot the computer.
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	
	
	Additional query words: master resource account trust missing dropdown box
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbWin2000sp3fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
