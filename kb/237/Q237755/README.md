---
layout: page
title: "Q237755: INF Error Message After Internet Explorer 4.01 SP2 Installation"
permalink: /kb/237/Q237755/
---

## Q237755: INF Error Message After Internet Explorer 4.01 SP2 Installation

{% raw %}

	Article: Q237755
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 4 and install Microsoft Internet
	Explorer 4.01 Service Pack 2 on a computer running Windows NT Server 4.0,
	Terminal Server Edition, a user may receive the following error message when
	logging on for the first time:
	
	  Advanced INF install.
	  INF install failure. Reason: Access is denied.
	
	In addition, the Personalized Settings box in the upper left corner of the screen
	may contain the following message:
	
	  Setting up personalized settings for:
	  Microsoft FrontPage Express
	
	After the user clicks OK to continue, the personalized settings process continues
	and the user's desktop is displayed.
	
	RESOLUTION
	==========
	
	To resolve this problem, modify the NTFS file permissions of the Fpxpress.ini
	file to allow at least the Everyone group to change permissions:
	
	1. Start Windows NT Explorer and locate the Wtsrv folder.
	
	2. Right-click the Fpxpress.ini file, and then click Properties.
	
	3. On the Security tab, click Permissions.
	
	4. Click the Everyone group.
	
	5. In the Type of Access area, click Change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0,
	Terminal Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
