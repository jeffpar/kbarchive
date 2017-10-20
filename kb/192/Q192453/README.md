---
layout: page
title: "Q192453: MoveFile API from Windows 95 with Invalid UNC Causes STOP 0xa"
permalink: /kb/192/Q192453/
---

## Q192453: MoveFile API from Windows 95 with Invalid UNC Causes STOP 0xa

{% raw %}

	Article: Q192453
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the MoveFile API is issued from a Windows 95 client with an improper UNC,
	Windows NT displays a blue screen STOP 0xa error.
	
	CAUSE
	=====
	
	When a Windows 95 client sends the MoveFile API call to an incorrect UNC path,
	it will return a RENAME SMB with a zero length filename. When the computer
	running Windows NT encounters this RENAME SMB, it displays a blue screen STOP
	0xa error.
	
	A Windows NT client does not exhibit the same behavior because it never sends the
	zero length filename with the RENAME SMB packet.
	
	
	RESOLUTION
	==========
	
	The code has been changed to check the length and therefore not crash when a
	zero length filename is encountered.
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51,4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
