---
layout: page
title: "Q250639: FPNW Has Problems with Files Created in 1980"
permalink: /kb/250/Q250639/
---

## Q250639: FPNW Has Problems with Files Created in 1980

	Article: Q250639
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a, used with:
	   - Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT 4.0 Server running the File and Print Services for NetWare
	(FPNW), you may observe problems with files or folderss created in the year
	1980.
	
	These files and folders have incorrect date information when their properties are
	viewed from a FPNW client computer.
	
	CAUSE
	=====
	
	This issue can occur because FPNW shows the create and modify date for all files
	and folders that were created in the year 1980 as 2080 because of a bad compare
	in the NetwareLogonTimeToNcpDate function.
	
	RESOLUTION
	==========
	
	You might be able to work around this issue, by connecting to the Windows NT 4.0
	FPNW server computer using a NetBIOS compatible redirector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you try to view the properties of a file created in the year 1980 on a FPNW
	client computer, the Properties dialog box shows that the file was created and
	modified in the year 2080.
	
	This only happens to clients that requires the FPNW functionality to gain access
	to files and folders on the specific server.
	
	Also the problem is only related to files and folders created in the year 1980.
	
	Additional query words: fpnw 1980 create modify date
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:4.0,4.0 SP6a
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
