---
layout: page
title: "Q191851: Unattended Installation of Windows NT 4.0 Option Pack Fails"
permalink: /kb/191/Q191851/
---

## Q191851: Unattended Installation of Windows NT 4.0 Option Pack Fails

{% raw %}

	Article: Q191851
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install Site Analyst components in the Windows NT 4.0 Option Pack
	for the first time by using the unattended installation procedure, the
	components install successfully. However, if you remove any components and try
	to reinstall them using the unattended installation procedure, some components
	may not install.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the manual installation procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Windows NT 4.0
	Option Pack.
	
	MORE INFORMATION
	================
	
	The Site Analyst section of the Unattend.txt file contains the following:
	
	  ; Site Analyst
	  PostAcc = ON
	  WebPost = ON
	  SA2IIS = ON
	  UsageAnalyst = ON
	
	If you set all the components to "ON" in Unattended.txt and run the following
	command line, the components fail to install:
	
	" setup.exe /s:f:\ntopack\en\x86\winnt.srv /u:d:\temp\unattend.txt " (without the
	quotation marks)
	
	Additional query words: setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
