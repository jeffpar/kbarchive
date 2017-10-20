---
layout: page
title: "Q234049: Logon Script Does Not Work Due to Net.bat File in Netlogon Share"
permalink: /kb/234/Q234049/
---

## Q234049: Logon Script Does Not Work Due to Net.bat File in Netlogon Share

{% raw %}

	Article: Q234049
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The logon script for a Windows NT client may not work or may go into a
	continuous loop, which may cause the Windows NT-based computer to stop
	responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if there is a file named Net.bat in the Netlogon share
	and the logon script contains a NET USE command. When you use the NET USE
	command in the logon script, the Net.bat file in the Netlogon share is run.
	
	If a logon script contains the NET USE command, the current folder is checked for
	an executable file named "Net." If the current folder contains a file named
	Net.bat, the Net.bat file is run instead of the Net.exe file in the
	%SystemRoot%\System32 folder, even though this folder is on the path. Note that
	this behavior occurs with any NET command in a logon script (for example, the
	NET TIME or NET USE commands).
	
	RESOLUTION
	==========
	
	To resolve this problem, rename the Net.bat file or remove it from the Netlogon
	share.
	
	MORE INFORMATION
	================
	
	This problem does not occur with Microsoft Windows 95 clients.
	
	Additional query words: terminated stops locks
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351xsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351xsearch
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
