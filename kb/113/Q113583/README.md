---
layout: page
title: "Q113583: SYSDIFF Does Not Remove Folders That Are Not Empty"
permalink: /kb/113/Q113583/
---

## Q113583: SYSDIFF Does Not Remove Folders That Are Not Empty

{% raw %}

	Article: Q113583
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbsetup kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply a difference file to delete a folder, Sysdiff does not delete the
	folder if it contains files even though the dump file states that the folder
	will be deleted. For example, if you run SYSDIFF /snap on a computer that
	includes one empty folder and one folder that includes files, delete these
	folders, run SYSDIFF /diff, and then run SYSDIFF /apply, the empty folder is
	deleted but the folder with files is not.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix below, or wait for the next service
	pack. Please note that you must rebuild any packages that were built using the
	previous Sysdiff.exe.
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/utilities/Sysdiff-fix
	
	NOTE: This version of Sysdiff replaces the version that ships with Service Pack
	3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: 4.00 zak deployment unattend
	
	======================================================================
	Keywords          : kbfile kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
