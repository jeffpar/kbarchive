---
layout: page
title: "Q192669: Pagefile Set Incorrectly on Computers with &gt;2049 MB RAM"
permalink: /kb/192/Q192669/
---

## Q192669: Pagefile Set Incorrectly on Computers with &gt;2049 MB RAM

	Article: Q192669
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the "Write debugging information to" check box in the ControlPanel/System/
	Startup/Shutdown tab is selected on a computer that has more than 2,049 MB of
	RAM, and the pagefile is currently set to fewer than 2,049 MB, a dialog box will
	appear indicating that the page file is going to be set to 2,049 MB. This is an
	incorrect pagefile size. The page file should be set to the amount of RAM + 3
	MB, which is the actual amount of pagefile needed for the system to save a
	memory.dmp in the event of a kernel mode stop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	For additional information about setting the recommended pagefile size and
	troubleshooting problems of obtaining a memory.dmp file after a kernel mode
	stop, please see the following articles in the Microsoft Knowledge Base:
	
	  Q130536 Windows NT Does Not Save Memory Dump File After a Crash
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
