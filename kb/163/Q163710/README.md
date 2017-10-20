---
layout: page
title: "Q163710: ResKit Tool Global.exe Returns Incomplete User List"
permalink: /kb/163/Q163710/
---

## Q163710: ResKit Tool Global.exe Returns Incomplete User List

{% raw %}

	Article: Q163710
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Global.exe, a tool from the Windows NT 4.0 Server Resource Kit, is designed to
	list members from specified domain global groups. For example, the command
	GLOBAL "DOMAIN ADMINS" NEWYORK should list the users in the global group called
	DOMAIN ADMINS on the domain NEWYORK. The command may not return a complete list
	of users. When this problem occurs, typically, only one or two users from the
	group are listed. This is true whether the command is run on a domain controller
	or remotely from a Windows NT 4.0 workstation or member server.
	
	RESOLUTION
	==========
	
	NOTE: Global.exe did not ship in the first Windows NT 4.0 Server Resource Kit
	release; however, it became available for the Intel x86 at the following ftp
	address:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386
	
	This issue has only been seen with an earlier version of Global.exe posted on the
	FTP site.
	
	This issue has been resolved in the latest version of Global.exe and can be
	obtained at the FTP location listed above or from the Resource Kit Supplement
	One or Two.
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
