---
layout: page
title: "Q195259: FTP Site Mapped to a Remote Share May Have Access Problems"
permalink: /kb/195/Q195259/
---

## Q195259: FTP Site Mapped to a Remote Share May Have Access Problems

{% raw %}

	Article: Q195259
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating a virtual directory for FTP access that points to a remote
	Universal Naming Convention (UNC) path, you may have a problem performing a GET
	request. You may receive an Access Denied message, even though the account used
	to connect has read and write access.
	
	WORKAROUND
	==========
	
	To work around this problem, grant permissions to the UNC path for the Windows
	NT account that is used for anonymous access to the FTP site (typically the
	IUSR_<computer_name> account).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0.
	
	
	MORE INFORMATION
	================
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172416 FTP Clients Cannot Rename Files on Remote FTP Virtual Directory
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
