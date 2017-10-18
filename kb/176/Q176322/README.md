---
layout: page
title: "Q176322: The Far East GetTextExtent API Fails with Null LPNFit"
permalink: kb/176/Q176322/
---

## Q176322: The Far East GetTextExtent API Fails with Null LPNFit

	Article: Q176322
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	For Far East versions of Windows NT that use DBCS character sets, passing a NULL
	LpnFit parameter to the GetTextExtentExPoint API may cause an access violation
	(AV). A Dr. Watson dialog box appears similar to:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  XXX.EXE
	
	  Exception: access violation (0xc0000005), Address: 0x77f52edb
	
	NOTE: Xxx.exe is your custom application. Also, the address may be different, but
	the access violation code should be the same.
	
	CAUSE
	=====
	
	Debug analysis shows this error occurs the first time the contents of NULL
	LpnFit is accessed.
	
	RESOLUTION
	==========
	
	Obtain the updated Gdi32.dll file, for the Far East versions of Windows NT that
	use DBCS character sets.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
