---
layout: page
title: "Q152742: Error Message: &quot;Could Not Start Directory Replicator Service&quot;"
permalink: /kb/152/Q152742/
---

## Q152742: Error Message: &quot;Could Not Start Directory Replicator Service&quot;

{% raw %}

	Article: Q152742
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.50,3.51
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you attempt to start the Directory Replicator
	service from Control Panel Services:
	
	  Could not start the Directory Replicator service on \\<servername>
	  Error 0123: The filename, directory name, or volume label syntax is incorrect.
	
	You may also see the following error when you click the Replication button to set
	up replication through Control Panel Server:
	
	  The filename, directory name, or volume label syntax is incorrect.
	
	CAUSE
	=====
	
	Either of these error messages may occur if the following registry entry is
	corrupt or incorrect:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Sevices\Replicator\ImagePath
	
	RESOLUTION
	==========
	
	To resolve this problem, use the steps below to correct the ImagePath key.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Navigate to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Replicator
	
	3. Click the ImagePath value.
	
	4. On the Edit menu, click String.
	
	5. Type the following:
	
	  "%SystemRoot%\System32\Lmrepl.exe" (without the quotation marks)
	
	6. Quit Registry Editor.
	
	7. Restart the server and resume setting up Directory Replication.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.50,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
