---
layout: page
title: "Q261244: XIMS: How to Hide the Default Network News Transfer Protocol Con"
permalink: /kb/261/Q261244/
---

## Q261244: XIMS: How to Hide the Default Network News Transfer Protocol Con

{% raw %}

	Article: Q261244
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default Control newsgroups that are installed with the Microsoft Network
	News Transfer Protocol (NNTP) service that is included with Internet Information
	Server (IIS) version 4.0 are visible by default. This article provides steps to
	hide those newsgroups.
	
	MORE INFORMATION
	================
	
	To hide the default NNTP newsgroups from users:
	
	1. Set the permissions on the appropriate folder:
	
	  a. Select the Control folder, which is located by default in the following
	     folder:
	
	  %SystemRoot%\Inetpub\Nntpfile\Root
	
	  b. Right-click the Control folder, and then click Properties. Click the
	     Security tab, and then click Permissions.
	
	  c. In the Directory Permissions dialog box, click the Everyone group in the
	     Name list. Under Type of Access, click No Access.
	
	NOTE: If you allow anonymous access to the NNTP server, you must also set the
	permissions to No Access for IUSR_<server_name> (where <server_name>
	is the name of the IIS server that is running the Microsoft NNTP service) to
	hide these newsgroups from anonymous users.
	
	2. Enable the "Restrict newsgroup visibility" option:
	
	NOTE: If you enable the "Restrict newsgroup visibility" option, you add
	processing overhead according to the NNTP services Help.
	
	  a. On the Start menu, click Programs, and then click Windows NT 4.0 Option
	     Pack.
	
	  b. Click Microsoft Internet Information Server, and then click Internet
	     Service Manager.
	
	  c. Start Microsoft Management Console (MMC), right-click the Default NNTP
	     Site object, and then click Properties.
	
	  d. In the Default NNTP Site properties, click the Home Directory tab. Under
	     Access restrictions, click "Restrict newsgroup visibility". Click Apply,
	     and then click OK to save the changes.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q230110 Default Newsgroups Installed with NNTP Server
	
	Additional query words: ntop option pack
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
