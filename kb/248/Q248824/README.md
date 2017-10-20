---
layout: page
title: "Q248824: IP Restriction Does Not Work for SMTP and NNTP Admin Directories"
permalink: /kb/248/Q248824/
---

## Q248824: IP Restriction Does Not Work for SMTP and NNTP Admin Directories

{% raw %}

	Article: Q248824
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install SMTP and/or NNTP (included with the Windows NT Option Pack),
	the predefined localhost IP restriction for the Mail and News virtual
	directories in the Default Web Site does not work.
	
	CAUSE
	=====
	
	The installation program does not set the correct metabase entries.
	
	RESOLUTION
	==========
	
	In the properties for the Mail and News virtual directories, on the IP
	Restriction tab, re-apply the granted IP address 127.0.0.1. To do this, perform
	the following steps:
	
	1. Start the Internet Service Manager.
	2. Open the properties for the Mail virtual directory in the Default Web Site.
	3. Click the Directory Security tab.
	4. Click the Edit... button in the IP Address and Domain Name Restrictions
	  section.
	5. Click the IP address 127.0.0.1.
	6. Click the Edit... button on the right.
	7. To enable the OK button, click Group of Computers, and then click Single
	  Computer.
	8. Click OK.
	9. Click OK again to close the IP Address and Domain Name Restrictions window.
	10. Click OK again to close the Properties window for this virtual directory.
	11. Repeat the above steps for the News directory.
	
	
	Additional query words: IPSecurity
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
