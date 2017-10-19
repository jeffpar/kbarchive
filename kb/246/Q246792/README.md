---
layout: page
title: "Q246792: ReleaseDC API Fails with Laststatus and Lasterror Error Messages"
permalink: /kb/246/Q246792/
---

## Q246792: ReleaseDC API Fails with Laststatus and Lasterror Error Messages

	Article: Q246792
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: The individual hotfix that is available is for Windows NT 4.0 Service Pack 4 only. Do not apply the individual hotfix to a computer running Windows NT 4.0 Service Pack 5. Applying Windows NT 4.0 Service Pack 6 to a computer running Windows NT 4.0 Service Pack 5 will resolve this problem.
	
	SYMPTOMS
	========
	
	The ReleaseDC API fails to release a device context intermittantly, and you see
	the following error messages:
	
	  lasterror = 87 ERROR_INVALID_PARAMETER
	
	  laststatus = 0xc000007c STATUS_NO_TOKEN
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual hotfix.
	
	- For information on obtaining the latest service pack, please go to:
	
	  http://www.microsoft.com/windows/servicepacks/
	
	  -or-
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	- For information on obtaining the individual hotfix, contact Microsoft Product
	  Support Services. For a complete list of Microsoft Product Support Services
	  phone numbers and information on support costs, please go to the following
	  address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	  The English-language version of this fix should have the following file
	  attributes or later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  08/04/99  01:37p               169,744 gdi32.dll     x86
	  08/04/99  01:37p               326,416 user32.dll    x86
	  07/28/99  11:21a             1,250,640 win32k.sys    x86
	  08/04/99  01:37p               175,376 winsrv.dll    x86
	
	  08/06/99  01:09p               307,984 gdi32.dll     Alpha
	  08/06/99  01:09p               577,296 user32.dll    Alpha
	  07/28/99  11:20a             2,071,888 win32k.sys    Alpha
	  08/06/99  01:09p               316,176 winsrv.dll    Alpha
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
