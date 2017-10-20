---
layout: page
title: "Q262479: Tcpip.sys Does Not Free Unwanted Broadcast Packets"
permalink: /kb/262/Q262479/
---

## Q262479: Tcpip.sys Does Not Free Unwanted Broadcast Packets

{% raw %}

	Article: Q262479
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Perfmon analysis of pool nonpaged bytes shows a slow, steady increase that can
	result in a system hang after several days. Also, an analysis of the nonpaged
	pool tags shows NDPt as the largest consumer of nonpaged pool.
	
	CAUSE
	=====
	
	Tcpip.sys does not free broadcast packets that the IP traffic filter driver does
	not want to forward.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Windows 2000
	------------
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version         Size    File name 
	  -----------------------------------------------------
	  05/12/2000  06:31p  5.0.2195.2096  308,720  Tcpip.sys
	  05/12/2000  06:30p  5.0.2195.2096   16,208  Tdi.sys
	
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name  Platform
	  ------------------------------------------------
	  04/06/2000  09:44p  174,448  Tcpip.sys  Intel
	  04/06/2000  09:44p  310,704  Tcpip.sys  Alpha
	
	
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Windows 2000. This problem was
	first corrected in Windows 2000 Service Pack 2.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	To enable pool tagging, use Gflags.exe. Click to select the "Enable pool
	tagging" check box, and then restart the computer. After you restart the
	computer, use Poolmon.exe or "!poolused 2" in the kernel debugger to determine
	the high-consumption pool tags.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search
	Version           : :2000,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
