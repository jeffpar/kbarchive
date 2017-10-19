---
layout: page
title: "Q306887: Perfproc.dll Logs Event 2002 Errors in Win 2K Application Log"
permalink: /kb/306/Q306887/
---

## Q306887: Perfproc.dll Logs Event 2002 Errors in Win 2K Application Log

	Article: Q306887
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,2000 SP2
	Operating System(s): 
	Keyword(s): kbbetapublic kbSysAdmin kbWin2000PreSP3Fix kbCommServ2000PreSP1fix kbCommServ2000SP1fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Professional 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows 2000 Application event log may be populated with several event 2002
	Perfproc errors that have the following (or similar) description:
	
	  Unable to open the job object Winlogon Job 0-13f0822 for query access. The
	  calling process may not have permission to open this Job. The status returned
	  is data DWORD 0. For more information, see Help and Support Center at
	  http://go.microsoft.com/fwlink/events.asp.
	
	CAUSE
	=====
	
	Perfproc.dll logs the 2002 event error when it cannot open a job object. Refer
	to the "More Information" section for additional information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Perfproc.dll was modified to call OpenJobObject using the full path in the object
	name space from the \BaseNamedObjects path.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Version       Size    File name
	  ----------------------------------------------------
	  12-Feb-2002 04:48PM  5.0.2195.3990 28,944  Perfproc.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	A job object allows groups of processes to be managed as a unit. In this case,
	Perfproc cannot open the Winlogon job object because no user is logged on to the
	console and a process that is running as a service or in a terminal server
	session requests process performance data (which is implemented in
	Perfproc.dll). The open process fails on the Winlogon job object because
	Perfproc.dll calls OpenJobObject with the job name instead of with the full path
	to the job. When OpenJobObject is called with a job name instead of the full
	path to the job in the object name space, it looks for the job under the running
	processes session sub-tree which will fail if there is no user logged on to the
	console.
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbMgmtAdmin
	
	======================================================================
	Keywords          : kbbetapublic kbSysAdmin kbWin2000PreSP3Fix kbCommServ2000PreSP1fix kbCommServ2000SP1fix kbWin2000sp3fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbWin2000ProSP2 kbWin2000ProSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
