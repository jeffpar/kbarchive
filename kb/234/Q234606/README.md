---
layout: page
title: "Q234606: Terminal Server User Profiles Do Not Unload"
permalink: /kb/234/Q234606/
---

## Q234606: Terminal Server User Profiles Do Not Unload

	Article: Q234606
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Terminal Server clients often discover that they have lost configuration
	settings (such as Outlook settings, icons on the desktop, and so forth) when
	they log on to a computer running Windows NT Server 4.0, Terminal Server
	Edition.
	
	CAUSE
	=====
	
	This problem occurs because the registry key containing the user's SID is not
	unloaded when the user logs off and is therefore not being updated correctly. A
	process (Csrss.exe) has a handle to the key open, thereby preventing WINLOGON
	from unloading the key.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English language version of this software update should have the following
	file attributes or later:
	
	  Date       Time     Size       File name      Platform
	  ------------------------------------------------------
	  06/09/99   04:44p    134,928   Termsrv.exe    x86
	  06/09/99   04:43p    106,768   Winspool.drv   x86
	  06/09/99   04:44p    195,344   Winsrv.dll     x86
	  07/26/99   01:51p    992,448   Ntkrnlmp.exe   x86
	  07/26/99   01:51p    971,648   Ntoskrnl.exe   x86
	
	  06/09/99   04:48p    242,448   Termsrv.exe    Alpha
	  06/09/99   04:47p    179,984   Winspool.drv   Alpha
	  06/09/99   04:48p    330,512   Winsrv.dll     Alpha
	  07/22/99   01:56p  1,461,568   Ntkrnlmp.exe   Alpha
	  07/22/99   01:56p  1,432,320   Ntoskrnl.exe   Alpha
	
	NOTE: This software update affects the Windows NT Kernel. The kernel file has two
	different versions; single processor and multiprocessor. The installation files
	are named Ntoskrnl.exe and Ntkrnlmp.exe respectively. However, the file must be
	named Ntoskrnl.exe before being installed. Therefore, when you install a new
	kernel on a multiprocessor system, you must rename Ntkrnlmp.exe to Ntoskrnl.exe
	in the %SystemRoot%\System32 folder.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	MORE INFORMATION
	================
	
	The logged-on user's profile is held in the user's SID key under the HKEY_USER
	registry hive. This registry key is not unloaded when the user logs off. The
	user profile is not being updated correctly because of this.
	
	The following change can also be made to correct the problem:
	
	When a user logs off, CSRSS (Winsrv.dll) issues a shutdown notification to all
	the processes running for this user. A change was made such that CSRSS waits 10
	seconds for all the processes to close before allowing WINLOGON to unload the
	User profile from the registry. This wait interval can be configured using the
	following the new registry key. To modify this interval:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	
	3. On the Edit menu, click Add Value, and add the following registry value:
	
	  Value Name: ProcessTerminateTimeout:
	  Data Type: REG_SZ
	  Value: milliseconds (Default: 10000, 10 Sec) (Infinite: -1) (None: 0)
	
	4. Quit Registry Editor.
	
	5. Restart the server to cause the change to take effect.
	
	Microsoft does not recommend modifying this value, except in very rare
	circumstances where it may need to be tuned.
	
	Additional query words: tse wts citrix metaframe ica clients
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
