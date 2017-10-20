---
layout: page
title: "Q137425: Not Enough Disk Space When Running WINHLP32 in Windows NT 3.51"
permalink: /kb/137/Q137425/
---

## Q137425: Not Enough Disk Space When Running WINHLP32 in Windows NT 3.51

{% raw %}

	Article: Q137425
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the new Help engine (WINHLP32.EXE) in Windows NT 3.51, the
	following error message may appear:
	
	  A temporary file is created when Help is setting up
	  (%system_root%\system32\<file name>.TMP). This file is temporarily
	  stored on your computer or on a network. There is either not enough disk
	  space for this file, or the network connection is not responding.
	
	CAUSE
	=====
	
	This problem occurs if you do not have proper security permissions to write to
	the %SystemRoot%\SYSTEM32 directory and the directory that the help file is
	located. The new help engine (WINHLP32.EXE) needs to write a temporary file to
	these two locations. The Everyone group has Change permission by default. If the
	Administrator removes this right for the \SYSTEM32 subdirectory, the above error
	message appears.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Log on as an Administrator.
	
	  -or-
	
	- Grant the user Change permissions to the %SystemRoot%\SYSTEM32 directory on
	  the Windows NT computer.
	
	NOTE: Change permission is the default security for the \SYSTEM32 subdirectory.
	The problem described above occurs when an administrator has changed the default
	permissions. Access to the Windows NT directory tree is protected by share
	permissions. Directory permissions are a secondary level of security.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.50 gid
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
