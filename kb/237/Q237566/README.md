---
layout: page
title: "Q237566: %HOMEPATH%, %HOMESHARE%, and %HOMEDRIVE% Resolved Incorrectly"
permalink: /kb/237/Q237566/
---

## Q237566: %HOMEPATH%, %HOMESHARE%, and %HOMEDRIVE% Resolved Incorrectly

{% raw %}

	Article: Q237566
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the features of the Microsoft Distributed File System (Dfs) is to allow
	users to map drives directly to folders and subfolders under a Dfs share. If a
	user's home folder is on a Dfs share, the %HOMEDRIVE% variable is mapped only to
	the Dfs root, and not to the complete path. This behavior is evident when it is
	viewed from Windows NT Explorer. In addition, the %HOMEPATH% and %HOMESHARE%
	variables are not resolved correctly.
	
	For example, if "Dfs_root" is the DFS root on \\Pkdfs and the user's home folder
	is \\Pkdfs\Dfs_root\Home\User1:
	
	  %HOMEDRIVE% (for example, drive Z) is mapped to \\Pkdfs\Dfs_root
	  %HOMESHARE% resolves to \\Pkdfs\Dfs_root
	  %HOMEPATH% resolves to \Home\User1.
	
	Instead, %HOMEDRIVE%%HOMESHARE% should resolve to \\Pkdfs\Dfs_root\Home\User1,
	%HOMEPATH% should resolve to \, and %HOMEDRIVE% (Z:) should map to
	\\Pkdfs\Dfs_root\Home\User1.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Server, Terminal Server Edition, Service Pack 5.
	
	Additional query words: maproot 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
