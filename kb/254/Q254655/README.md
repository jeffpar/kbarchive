---
layout: page
title: "Q254655: Ipconfig /All Command Does Not Display Domain Suffix"
permalink: kb/254/Q254655/
---

## Q254655: Ipconfig /All Command Does Not Display Domain Suffix

	Article: Q254655
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a DNS Domain suffix longer than 31 octets, and you use the Ipconfig
	tool with the /All switch, the suffix is not displayed.
	
	For example, if you have the host name,
	myhostname.our.very.long.domain.name.suffix, and you type "ipconfig /all"
	(without the quotation marks) at a command prompt, and then press ENTER, the
	following text is displayed:
	
	  Host Name . . . . . . . . . : myhostname
	
	CAUSE
	=====
	
	This issue occurs because the length of the buffer that the Ipconfig tool uses
	to retrieve the Domain name suffix is too small.
	
	RESOLUTION
	==========
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Size     File name     Platform
	  -------------------------------------------------
	  26/02/00  00:20   21,776   ipconfig.exe  Intel
	  26/02/00  00:20   32,528   ipconfig.exe  Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, use the Winipcfg tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
