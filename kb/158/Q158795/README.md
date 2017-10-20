---
layout: page
title: "Q158795: Win95 Client Cannot Rename Directory on Korean WinNT 3.5 Share"
permalink: /kb/158/Q158795/
---

## Q158795: Win95 Client Cannot Rename Directory on Korean WinNT 3.5 Share

{% raw %}

	Article: Q158795
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbother kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows NT Workstation version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Windows 95 client tries to rename a shared directory on a computer
	running Korean Windows NT Server or Workstation version 3.5, the client may
	receive one of the following error messages:
	
	  Cannot rename 'directory_name'. Access is denied. Make sure that the disk is
	  not full or that the file is not read-only.
	
	-or-
	
	  Cannot rename 'directory_name'. The file with the same name already exists.
	  Specify different filename.
	
	-or-
	
	  Cannot rename 'directory_name'. The file cannot be found. Make sure you
	  specify the correct path and filename.
	
	The directories whose names start with one of the following Korean characters are
	known to have this problem:
	
	  Korean character            English keyboard equivalents
	  -------------------------   ----------------------------
	  jeon                        w-j-s
	  wee                         d-n-l
	
	WORKAROUND
	==========
	
	No workaround is available at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Korean Microsoft Windows NT
	version 3.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: rename hangul DBCS 3.50 KBKOREA
	
	======================================================================
	Keywords          : kbother kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
