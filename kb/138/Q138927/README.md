---
layout: page
title: "Q138927: Server Operators Unable to Format Server Hard Disk"
permalink: /kb/138/Q138927/
---

## Q138927: Server Operators Unable to Format Server Hard Disk

{% raw %}

	Article: Q138927
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.50, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer running Windows NT, if you are a member of the Server Operators
	group and attempt to format a fixed disk, the error Access Denied appears even
	though the chart on page 398 of the Windows NT Server System Guide shows that
	Server Operators have the ability to format a server's fixed disk.
	
	CAUSE
	=====
	
	This is a documentation error in the Server System Guide.
	
	RESOLUTION
	==========
	
	Ask your administrator to add your account to the Administrators group.
	
	This allows you to format a fixed disk and to run diagnostic utilities such as
	CHKDSK.EXE against the drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5
	and 3.51. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt ntdomain ntfilesys ntutil
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
