---
layout: page
title: "Q219377: Problems Importing Security Certificates in E-Mail Program"
permalink: /kb/219/Q219377/
---

## Q219377: Problems Importing Security Certificates in E-Mail Program

	Article: Q219377
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.0,5,98; winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import a Security Certificate in Microsoft Outlook or Microsoft Outlook
	Express, you may experience one of the following issues:
	
	- The path to the Security Certificate may contain random ASCII characters.
	
	- Internet Explorer may stop responding (hang) or close unexpectedly.
	
	CAUSE
	=====
	
	This issue can occur for any of the following reasons:
	
	- You exported the Security Certificate from Netscape Navigator.
	
	- You are trying to import a Security Certificate that uses the SMIME security
	  standard.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0 or the individual software update. For information on obtaining the latest
	service pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	This issue was first resolved in Windows NT 4.0 Service Pack 5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 4.00 crypt32.dll outlook98 outex
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINDOWS:4.0,5,98; winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
