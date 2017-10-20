---
layout: page
title: "Q134695: BW-Connect NFS 3.5 for Windows NT Hangs Windows NT 3.51 VDMs"
permalink: /kb/134/Q134695/
---

## Q134695: BW-Connect NFS 3.5 for Windows NT Hangs Windows NT 3.51 VDMs

{% raw %}

	Article: Q134695
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use BW-Connect NFS version 3.5 for Windows NT with Windows NT version
	3.51, virtual DOS machines (VDMs) requiring keyboard input stop responding
	(hang). For example, if you run an MS-DOS based-text editor, the VDM hangs. You
	cannot use the Task List End Task button to close the MS-DOS Command Prompt.
	
	CAUSE
	=====
	
	This problem occurs because BW-Connect NFS version 3.5 is incompatible with the
	way Windows NT 3.51 handles universal naming conversion (UNC) names.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain BW-Connect NFS version 3.6 for Windows NT.
	Version 3.6 includes a new NFS driver specifically written for Windows NT
	version 3.51. For additional information:
	
	- please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q136447
	  TITLE : Performance Problems in Windows NT 3.51 With Intergraph PC-NFS
	
	- contact Beame & Whiteside Technical Support via email at support@bws.com
	  or phone at (919) 831-8975.
	
	MORE INFORMATION
	================
	
	You can also contact Beame & Whiteside at:
	
	  Beame & Whiteside Software, Inc. Sales
	  706 Hillsborough Street
	  Raleigh North Carolina
	  USA 27603-1655
	
	  Voice: (919) 831-8989
	  Fax: (919) 831-8990
	  email: sales@bws.com
	  WWW: www.bws.com
	  FTP: ftp.bws.com
	
	Additional query words: prodnt bw bws vdm crash Integraph
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
