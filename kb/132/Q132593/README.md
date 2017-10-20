---
layout: page
title: "Q132593: NET VIEW Err Msg: Error 234: Additional Data Is Available"
permalink: /kb/132/Q132593/
---

## Q132593: NET VIEW Err Msg: Error 234: Additional Data Is Available

{% raw %}

	Article: Q132593
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type the command
	
	  net view \\<SMB server>
	
	where <SMB server> is an SMB server (such as a Windows 95, Windows NT, or
	Windows for Workgroups server) in an MS-DOS session in Windows 95, you may
	receive the following error message:
	
	  Error 234: Additional data is available.
	
	CAUSE
	=====
	
	The server has an excessive number of shares. Net.exe can view only a limited
	number of shares.
	
	
	RESOLUTION
	==========
	
	To resolve this behavior, use Network Neighborhood to view the server's shares.
	In addition, you may resolve this issue by using the hotfix listed in Q160807.
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
