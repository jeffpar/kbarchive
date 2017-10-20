---
layout: page
title: "Q170044: ASP Fails w/ Requested Header Not Found Err. Msg."
permalink: /kb/170/Q170044/
---

## Q170044: ASP Fails w/ Requested Header Not Found Err. Msg.

{% raw %}

	Article: Q170044
	Product(s): Internet Information Server
	Version(s): winnt:3.0; :1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Active Server Pages, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Active Server Pages (ASP) and try to run one of the sample
	pages using Anonymous Authentication, you will get following error message:
	
	  Requested Header Not Found is returned.
	
	NOTE: This error is a permission issue and can be returned under other
	circumstances. Any time a secured page or directory is accessed and the only
	authentication method enabled under Internet Service Manager is Anonymous, the
	above error message will be returned to the browser.
	
	CAUSE
	=====
	
	1. Go to the WWW Service properties and disable Anonymous Access.
	
	2. Enable Basic Authentication only.
	
	3. Try to select one of the sample ASPs with the browser.
	
	4. When you are presented with the credentials dialogue box, log in using a
	  valid administrator's account.
	
	5. If the page loads sucessfully, you have a permissions problem.
	
	WORKAROUND
	==========
	
	To correct this problem, grant your Anonymous User (IUSR_machine-name by
	default), the following permissions to the following directories:
	
	NOTE: When you apply these permissions, only apply them to all existing files
	unless otherwise noted.
	
	1. Grant IUSR Read permission to the root directory of the drive that ASP is
	  installed on.
	
	2. Grant IUSR Write permission to the Microsoft Windows NT Server directory.
	
	3. Grant IUSR Read permission to the System32 directory.
	
	4. Grant IUSR Read & Execute permission to the System directory.
	
	5. Grant IUSR Read & Execute permission to the Inetserv directory.
	
	6. Grant IUSR Read permission to the InetPub directory. (By default, the next
	  two directories are located in Program Files, Common Files, System.)
	
	7. Grant IUSR Read permission to the OLE DB directory.
	
	8. Grant IUSR Read permission to the ADO directory.
	
	After you apply the above permissions:
	
	1. Change the authentication method in Internet Services Manager to disallow
	  Basic Authentication and enable Anonymous Access.
	
	2. Close and restart your browser in order to refresh its cache.
	
	3. Try to run a sample ASP with the browser.
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis300 kbASP100
	Version           : winnt:3.0; :1.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
