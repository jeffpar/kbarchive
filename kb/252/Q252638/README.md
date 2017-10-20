---
layout: page
title: "Q252638: Problem Using Internet Service Manager from TS Client Session"
permalink: /kb/252/Q252638/
---

## Q252638: Problem Using Internet Service Manager from TS Client Session

{% raw %}

	Article: Q252638
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Service Manager to manage Internet Information Server
	(IIS) or Microsoft Transaction Server (MTS), you may experience any of the
	following symptoms:
	
	- Internet Service Manager reports the error message "Error connecting to
	  <Servername>."
	
	- The distributed version of the Component Object Model (DCOM) logs system
	  error event 10010 with the following text:
	
	  The server {A9E69610-B80D-11D0-B9B9-00A0C922E750} did not register with DCOM
	  within the required timeout.
	
	- You receive error 8008005.
	
	CAUSE
	=====
	
	Some of the required COM classes are not registered with the Windows NT Terminal
	service.
	
	RESOLUTION
	==========
	
	NOTE: You must be running Windows NT 4.0 Terminal Server Service Pack 5 or later
	for this resolution to work.
	
	1. Create a new text file that contains the following text:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\CLSID\{A9E69610-B80D-11d0-B9B9-00A0C922E750}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\{A9E69610-B80D-11d0-B9B9-00A0C922E750}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\{61738644-F196-11D0-9953-00C04FD919C1}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\CLSID\{61738644-F196-11D0-9953-00C04FD919C1}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\CLSID\{182C40F0-32E4-11D0-818B-00A0C9231C29}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\{182C40F0-32E4-11D0-818B-00A0C9231C29}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\{CBD759F3-76AA-11CF-BE3A-00AA00A2FA25}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Terminal Server\Compatibility\CLSID\{CBD759F3-76AA-11CF-BE3A-00AA00A2FA25}
	   fSystemGlobalClass = REG_DWORD 0x00000001
	
	2. Save the file as Reg.ini, and then close the file.
	
	3. Run the "regini reg.ini" (without the quotation marks) command to make the
	  necessary registry changes.
	
	4. Restart the computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch kbiisSearch kbiis400
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
