---
layout: page
title: "Q201348: WINSOCK Accept() Returns Error 10022"
permalink: kb/201/Q201348/
---

## Q201348: WINSOCK Accept() Returns Error 10022

	Article: Q201348
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Win32 Software Development Kit (SDK) 
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WINSOCK may return an error 10022 when trying to do an accept() on connections.
	
	CAUSE
	=====
	
	Code was added to Afd.sys that inadvertly causes this error to be returned if
	there is a driver layered above Afd.sys.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: kbDSupport 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWin32sSearch
	Version           : WINDOWS:; winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
