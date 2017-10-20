---
layout: page
title: "Q113834: Err Msg on System Without Windows: Setup Has Not Found..."
permalink: /kb/113/Q113834/
---

## Q113834: Err Msg on System Without Windows: Setup Has Not Found...

{% raw %}

	Article: Q113834
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you purchased a computer with the original equipment manufacturer (OEM)
	version of MS-DOS 6 preinstalled and Windows or Windows for Workgroups is not
	installed, you are prompted for the Windows directory with the following message
	when you run MS-DOS 6.21 Upgrade Setup:
	
	  Setup has not found Microsoft Windows on your computer. Type the path to your
	  Windows directory, and then press ENTER.
	
	CAUSE
	=====
	
	This error message occurs because a computer with OEM MS-DOS 6 preinstalled has
	both Microsoft Backup and Microsoft Backup for Windows installed.
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.21. This problem
	was corrected in MS-DOS version 6.22.
	
	WORKAROUND
	==========
	
	To work around this problem, press ESC to return to the previous screen. The
	MS-DOS 6.21 Setup code is then reset not to prompt for the Windows path. You can
	now accept the defaults and install MS-DOS 6.21.
	
	Additional query words: 6.22 6.00 6.20 err msg error
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621
	Version           : MS-DOS:6.21
	
	=============================================================================
	

{% endraw %}
