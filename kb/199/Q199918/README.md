---
layout: page
title: "Q199918: IIS 4.0 Upgrade Error on Servers with Windows NT 4.0 SP4"
permalink: /kb/199/Q199918/
---

## Q199918: IIS 4.0 Upgrade Error on Servers with Windows NT 4.0 SP4

{% raw %}

	Article: Q199918
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you begin the installation of the Windows NT Option Pack 4.0 on a server
	with Windows NT SP4 and Internet Information Server 3.0 installed, the following
	error message occurs:
	
	  Setup detected that Windows 4.0 SP4 or greater is installed on your machine.
	  We haven't tested this product on SP4. Do you wish to proceed?
	
	RESOLUTION
	==========
	
	The Windows NT Option Pack 4.0 is fully tested and supported to run on servers
	with Windows NT SP4 installed. Therefore, you can click Yes to continue the
	setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT Option Pack
	version 4.0.
	
	
	MORE INFORMATION
	================
	
	Note: If you are using the Unattend.txt for automated installs of the Windows NT
	Option Pack, you will not be able to script the closure of this dialog box. This
	is a limitation of the Setup program.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q195015 Option Pack Installation Conflicts with Service Pack 4
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
