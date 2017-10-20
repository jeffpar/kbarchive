---
layout: page
title: "Q323062: PRB: ACLs Cannot Be Read After You Apply the IIS Lockdown Tool"
permalink: /kb/323/Q323062/
---

## Q323062: PRB: ACLs Cannot Be Read After You Apply the IIS Lockdown Tool

{% raw %}

	Article: Q323062
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the IIS Lockdown Tool on a server that is running Internet
	Information Server (IIS) 4.0, and you set file permissions to prevent the IIS
	anonymous user account from executing system utilities or from writing to Web
	content directories, users may not be able to view permissions and Access
	Control Lists (ACLs) on certain files from Microsoft Windows Explorer. If a user
	tries to view the ACLs on an affected file or directory from the Windows NT 4.0
	computer, the user may receive the following error message:
	
	  The security information for <path> is not standard and cannot be
	  displayed. Windows NT 3.x and 4.x support certain features such as Deny
	  Access Control Entries but cannot edit security information which uses these
	  features. The information may have been modified by a computer running
	  Windows NT 5.0, which supports these features and can edit information which
	  uses them.
	
	  Do you want to overwrite the current security information?
	
	The user can then click either Yes or No. If the user clicks Yes, the ACLs are
	reset. If the user clicks No, no ACLs are changed, and the user cannot view or
	modify the ACLs.
	
	CAUSE
	=====
	
	The IIS Lockdown Tool writes attributes that are only available in Microsoft
	Windows 2000 and later to the directory. These attributes are not available in
	Windows NT 4.0 and therefore cannot be viewed or modified.
	
	RESOLUTION
	==========
	
	To work around this issue, use one of the following methods:
	
	- Connect to the computer by using Windows 2000 or later, and then view or
	  modify the ACLs from Windows Explorer.
	
	- Use the Cacls.exe command-line tool to view or modify attributes on files or
	  directories.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch
	Version           : :4.0
	Issue type        : kbbug kbprb
	
	=============================================================================
	

{% endraw %}
