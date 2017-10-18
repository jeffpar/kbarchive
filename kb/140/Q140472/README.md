---
layout: page
title: "Q140472: PRB: Limited Virtual Memory Error When Starting Windows NT"
permalink: kb/140/Q140472/
---

## Q140472: PRB: Limited Virtual Memory Error When Starting Windows NT

	Article: Q140472
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Around the time of the logon prompt after starting your computer, you may
	receive one of the following error messages:
	
	  Limited Virtual Memory
	  Your system is running without a properly sized paging file. Please use the
	  virtual memory option of the System applet in the Control Panel to create a
	  paging file or to increase the initial size of your paging file.
	
	  Limited Virtual Memory
	  Your system has no paging file or the paging file is too small.
	
	Repeated attempts to change the size of the page file fail to eliminate this
	error message from appearing as Windows starts.
	
	CAUSE
	=====
	
	Windows is not able to correctly gain access to (or open with proper
	permissions) the Pagefile.sys file. If the partition is NTFS, it may be because
	the permissions are not set up correctly. By default, Windows sets up the root
	directory to give everyone full rights. When this right is changed, you may see
	the error message because the System may not have proper access to Pagefile.sys.
	This can happen when Administrators try to limit access to the drive on which
	Windows is installed. The System must have access to read the directory. If the
	System does not have permission to read the directory, it will not be able to
	access the file even if the System has full access rights on the file itself.
	
	RESOLUTION
	==========
	
	The best solution is to add the user System with full access to the root
	directory. By default, File Manager will update all the files in whatever
	directory that is being modified to give them the same permissions, so it will
	give the System full access to the directory and the Pagefile.sys file.
	
	Usually this is good because you would expect all the files in that directory to
	have the same permission. But if you try to set the directory to have fewer
	permissions than a file in that directory has, at some time in the future, you
	may accidentally overwrite those broader permissions with the lesser directory
	permissions. This can happen by simply viewing the permissions for the directory
	and clicking the OK button. As stated above, the default setting is to replace
	permissions on files in the directory, so this replaces the greater permissions;
	in this case, it gives the System Read access on the directory but Full access
	on the Pagefile.sys file itself.
	
	Editing the Registry as a Workaround
	------------------------------------
	
	To work around this, you can edit the registry. However, this can be dangerous.
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	1. Locate or create a directory for the Pagefile.sys file. This could be the
	  Winnt directory, which by default should have System Full access.
	
	2. Make sure that this directory has System Full access and that all previous
	  directories including the root have at least System Read access.
	
	3. Start Regedt32. Select the HKEY_LOCAL_MACHINE on Local Machine subtree, and
	  search for the following subkey:
	
	  SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management
	
	4. On the right side of the window, choose the PagingFiles :REG_MULTI_SZ: value.
	
	5. Either double-click it, or from the Edit menu, choose Multi String.
	
	6. Edit the string, and insert the full path for where you would like the
	  Pagefile.sys file to reside. For example, change C:\Pagefile.sys 44 100 to
	  C:\Winnt\Pagefile.sys 44 100. (Here 44 refers to the minimum pagefile size
	  and 100 the maximum.)
	
	7. Exit Regedt32.
	
	8. Restart the computer, and check to make sure Pagefile.sys appears in the
	  correct location. Then delete the Pagefile.sys file in the root directory as
	  this file is no longer be used.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 tempf.sys temppf.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :2000,3.1,3.5,3.51,4.0
	
	=============================================================================
	
