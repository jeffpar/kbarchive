---
layout: page
title: "Q239110: Service Pack 4 for Terminal Server Does Not Copy Dhcpssvc.dll"
permalink: kb/239/Q239110/
---

## Q239110: Service Pack 4 for Terminal Server Does Not Copy Dhcpssvc.dll

	Article: Q239110
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Service Pack 4 (SP4) for Windows NT Server 4.0, Terminal
	Server Edition, the fixes and added functionality for the DHCP Server service
	are not available.
	
	CAUSE
	=====
	
	SP4 does not copy the updated Dhcpssvc.dll file to the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract the SP4 files and copy the newer Dhcpssvc.dll
	file to the %SystemRoot%\System32 folder:
	
	1. Type "wtsi386.exe /x" (without the quotation marks) or "wtsalpha.exe /x"
	  (without the quotation marks) at a command prompt.
	
	2. In the "Choose Directory for Extracted Files" box, type the full path of the
	  folder into which you want to extract the files.
	
	  NOTE: Do not extract the files into the %SystemRoot% or %SystemRoot%\System32
	  folder.
	
	3. Click OK, and then click OK.
	
	  Note that the extracted files require substantial disk space.
	
	4. Copy the current Dhcpssvc.dll file to another name or location.
	
	5. Copy the newer (dated 3/30/1999) Dhcpssvc.dll file to the
	  %SystemRoot%\System32 folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Terminal Server Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q184693 DNS/DHCP/WINS Release Notes for Windows NT 4.0 SP4 Update
	
	Additional query words: bootp
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
