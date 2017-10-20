---
layout: page
title: "Q180648: Windows NT 4.0 Traps with a Stop 0x24 or Stop 0xA"
permalink: /kb/180/Q180648/
---

## Q180648: Windows NT 4.0 Traps with a Stop 0x24 or Stop 0xA

{% raw %}

	Article: Q180648
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under heavy file I/O, such as during backup or heavy file sharing, Windows NT
	4.0 will display a blue screen stop message with a STOP 0x00000024 in NTFS.sys
	or a Stop 0x0000000A in NTOSKRNL.exe. For example:
	
	  Stop 0x00000024 (0x001901f9, parameter, parameter, parameter)
	
	CAUSE
	=====
	
	Ntfs.sys releases the file object when accessing a file with a large number of
	security descriptors.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	On uniprocessor Compaq computers running Compaq's System Manager driver,
	Sysmgmt.sys, the system may fail to reboot after you install a post-SP3 Hotfix
	Ntoskrnl.exe dated 11/20/97 or later. The system will stop responding (hang) at
	the blue screen listing the Windows NT version and service pack information.
	Obtain the latest version of Sysmgmt.sys from Compaq to resolve this problem.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q183237
	  TITLE : Windows NT 4.0 Fails to Start on a Uniprocessor Compaq
	
	A hotfix that addresses this problem in Windows NT 4.0 Terminal Server is
	currently available.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
