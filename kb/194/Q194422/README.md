---
layout: page
title: "Q194422: How to Extract Service Pack 3 Files"
permalink: /kb/194/Q194422/
---

## Q194422: How to Extract Service Pack 3 Files

{% raw %}

	Article: Q194422
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to extract files from the Nt4sp3_i.exe or
	Nt4sp3_a.exe file. The Nt4sp3_i.exe file contains Service Pack 3 for the Intel
	platform; the Nt4sp3_a.exe file contains Service Pack 3 for the Alpha platform.
	
	MORE INFORMATION
	================
	
	To extract the Service Pack 3 files, download the Nt4sp3_i.exe or Nt4sp3_a.exe
	file. You can download Service Pack 3 from the following Microsoft Web site:
	
	  http://www.microsoft.com/ntserver
	
	NOTE: If you double-click the Nt4sp3_i.exe or Nt4sp3_a.exe file after you
	download it, Setup begins the Service Pack installation. If you want only to
	extract the files, do not double-click the Service Pack file after you download
	it.
	
	To extract the Service Pack files without starting the installation program:
	
	1. Type "nt4sp3_i /x" or "ntsp3_a /x" (without quotation marks) at a command
	  prompt.
	
	2. In the Choose Directory For Extracted Files box, type the full path of the
	  folder into which you want to extract the files.
	
	  NOTE: Do not extract the files into the %SystemRoot% or %SystemRoot%\System32
	  folder.
	
	3. Click OK, and then click OK.
	
	Note that the extracted files require substantial disk space:
	
	  File           Required space
	  -------------------------------
	  Nt4sp3_i.exe   56,441,868 bytes
	  Nt4sp4_a.exe   84,701,624 bytes
	
	Additional query words: expand sp3 single
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
