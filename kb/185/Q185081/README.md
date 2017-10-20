---
layout: page
title: "Q185081: No Domain Controllers Found When Logging on Using RAS"
permalink: /kb/185/Q185081/
---

## Q185081: No Domain Controllers Found When Logging on Using RAS

{% raw %}

	Article: Q185081
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to a Windows NT computer after just logging off and selecting
	the Logon using Dial-up Networking option, you may receive the following error:
	
	  A domain controller for your domain could not be contacted. You have
	  been logged on using cached account information. Changes to your profile
	  since you last logged on may not be available.
	
	CAUSE
	=====
	
	If you have just logged off from another remote access session (RAS) within the
	last 30 seconds, the logoff process may not have finished fully, thus causing
	the error to occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Use RegEdt32.exe to add the following information to the Rdr service parameter:
	
	1. Open to the registry entry:
	
	  \HKLM\System\CurrentControlSet\Services\RDR\Parameters
	
	2. From the Edit Menu, select "Add Value".
	
	3. Enter FailedConnectTimeout as the Value Name.
	
	4. Set the Data Type to REG_DWORD, select OK.
	
	5. Enter 0 (zero) as the data.
	
	6. Exit Regedt32 and reboot the system for the change to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
