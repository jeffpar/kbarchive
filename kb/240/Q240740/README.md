---
layout: page
title: "Q240740: Overflow from NtGdiAddFontResourceW Returning Uninitialized Pool"
permalink: /kb/240/Q240740/
---

## Q240740: Overflow from NtGdiAddFontResourceW Returning Uninitialized Pool

{% raw %}

	Article: Q240740
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbProgramming kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the NtGdiAddFontResourceW() function call is started on your computer
	running Windows NT 4.0, the calling process may stop responding (hang) and an
	overflow error message may be returned to the user.
	
	CAUSE
	=====
	
	This behavior occurs because the string length needs to be limited to a smaller
	value.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	The length of pwszFile has been changed to accommodate this requirement and to
	enable the processing of this routine without overflow.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	When the NtGdiAddFontResourceW() function is started, a WCHAR pointer is passed
	from usermode. The routine then allocates a buffer and forwards the process to
	bCheckAndCapThePath(). The bCheckAndCapThePath() function calls cCapString() to
	copy and uppercase the string, and cCapString() uses RtlUpcaseUnicodeString() to
	copy and uppercase the strings if it has the correct word buffer size. If the
	string length is greater than 32,767 bytes, the routine cannot start all of the
	output buffer and some of the pool may be returned as 'not started' and cause an
	overflow.
	
	Additional query words: win32 subsystem
	
	======================================================================
	Keywords          : kbProgramming kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
