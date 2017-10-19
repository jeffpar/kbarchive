---
layout: page
title: "Q302428: Uninstalling MSN Explorer 6.0 After Upgrade From Windows 9x to W"
permalink: /kb/302/Q302428/
---

## Q302428: Uninstalling MSN Explorer 6.0 After Upgrade From Windows 9x to W

	Article: Q302428
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install MSN Explorer 6.0 (build 911.2) in a directory other than the
	default directory on a Windows 95 or 98 computer, or if you install Windows XP
	on a computer that includes an updated version of MSN Explorer, then Windows XP
	will automatically install this updated version of MSN Explorer in its default
	location: C:\Program Files\MSN. The newer version of MSN Explorer will overwrite
	all shortcuts pointing to the MSN Explorer 6.0 client, and will leave the 6.0
	files intact.
	
	It's possible to delete these unnecessary files by running the file msnunin.exe
	from the Setup folder using the msnunin.exe file (this file is located in the
	directory where MSN Explorer 6.0 was originally installed). However, msnunin.exe
	can also remove important registry keys that may be necessary in executing the
	updated version of MSN Explorer that was installed with Windows XP.
	
	CAUSE
	=====
	
	This is a known issue.
	
	RESOLUTION
	==========
	
	If you want to delete files left over from your installation of MSN Explorer
	6.0, do not click the msnunin.exe file. Instead, delete the entire MSNCorefiles
	folder for MSN Explorer 6.0. This folder is located in the directory you chose
	when you first installed MSN Explorer.
	Note: Do not delete the default MSNCorefiles folder installed by Windows XP. This
	file is located at C:\Program Files\MSN.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
