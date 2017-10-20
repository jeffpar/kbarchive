---
layout: page
title: "Q303062: IIS - Secure Communications Edit Button Does Not Open Properties"
permalink: /kb/303/Q303062/
---

## Q303062: IIS - Secure Communications Edit Button Does Not Open Properties

{% raw %}

	Article: Q303062
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Directory Security tab on the property sheet for a Web site
	or folder in the Internet Services Manager (ISM) for Internet Information
	Services (IIS), you may find that the Edit button for Secure Communications is
	available, but clicking it does not open the Secure Communications property
	sheet.
	
	CAUSE
	=====
	
	This problem can occur if the file that controls the Secure Communications
	property sheet becomes unregistered, corrupt, or inaccessible due to NTFS
	permissions.
	
	The following file controls the Secure Communications property sheet:
	
	  %SystemRoot%\system32\inetsrv\Certmap.ocx
	
	RESOLUTION
	==========
	
	To resolve this problem, try to re-register Certmap.ocx by using the following
	command:
	
	  regsvr32 %systemroot%\system32\inetsrv\certmap.ocx
	
	If you receive an error executing the command, or if it does not fix the problem,
	verify that the user who is logged on has NTFS rights to access the file.
	
	
	Additional query words: iis 5 Windows 2000 w2k win2k win2000 ism
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
