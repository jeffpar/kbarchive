---
layout: page
title: "Q255679: TPU: Outlook Bar Displayed After User Is Removed from Workspace"
permalink: /kb/255/Q255679/
---

## Q255679: TPU: Outlook Bar Displayed After User Is Removed from Workspace

{% raw %}

	Article: Q255679
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5; :
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After an administrator removes a user (either as a member or an owner) from a
	Team Workspace, the workspace Outlook bar may still be displayed in Microsoft
	Outlook for that user. If the user logs off Outlook, the Outlook bar appears
	again after the user logs on to Outlook again. If the user attempts to gain
	access to the workspace by clicking the Outlook bar, the user is prompted for
	logon credentials, and the following error message appears after the credentials
	are entered:
	
	  Error: Access is Denied
	
	CAUSE
	=====
	
	The change in user rights is not effective until that user logs off and back on
	to the workstation.
	
	RESOLUTION
	==========
	
	To work around this behavior, the user should log off and then back on to the
	workstation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
