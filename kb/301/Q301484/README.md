---
layout: page
title: "Q301484: Command Prompt Returns to Prompt Without Running App or CMD"
permalink: /kb/301/Q301484/
---

## Q301484: Command Prompt Returns to Prompt Without Running App or CMD

{% raw %}

	Article: Q301484
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some DOS commands and 16-bit programs may not run from a command prompt. For
	example, if you type the dir command, and then press ENTER, nothing is displayed
	as shown in the following example:
	
	  C:\> dir
	
	  C:\>
	
	CAUSE
	=====
	
	This behavior occurs because the ComSpec system environment variable is not
	pointing to a valid location for Cmd.exe file. Command.com is dependent on the
	Cmd.exe file. If you move or delete the Cmd.exe file, you will encounter this
	behavior.
	
	RESOLUTION
	==========
	
	To resolve this behavior, run Cmd.exe from the location to which you moved it,
	or update the ComSpec system environment variable to point to Cmd.exe.
	
	To update ComSpec on a Windows NT 4.0-based computer:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. On the Environment tab, click ComSpec.
	
	3. In the Value box, type the location of the Cmd.exe file, and then click Set.
	  The default setting is: %SystemRoot%\System32\Cmd.exe.
	
	4. Click Apply.
	
	To update ComSpec on a Windows 2000-based computer:
	
	- Click Start, point to Settings, click Control Panel, double-click System, and
	  then click Advanced.
	
	- On the Environment tab, click ComSpec, and then click Edit.
	
	- In the Variable Value box, type the location of the Cmd.exe file, and then
	  click OK. The default setting is: %SystemRoot%\System32\Cmd.exe.
	
	
	MORE INFORMATION
	================
	
	This problem can occur after following the steps that are described on the
	following Microsoft Web site:
	
	  Microsoft Internet Information Server 4.0 Security Checklist
	  (http://www.microsoft.com/technet/security/iischk.asp#28)
	
	In these directions, it is recommended to move the Cmd.exe file to a different
	folder to make IIS more secure.
	
	Additional query words: nothing happens
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
