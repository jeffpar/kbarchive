---
layout: page
title: "Q229781: Prompted for Authentication When No NTFS Restrictions Apply"
permalink: /kb/229/Q229781/
---

## Q229781: Prompted for Authentication When No NTFS Restrictions Apply

{% raw %}

	Article: Q229781
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse a Web resource that has no NTFS file-level
	restrictions applied (for example, the Everyone group is granted full control
	rights), you may be prompted for a username and password.
	
	CAUSE
	=====
	
	You will be prompted for a username and password when you attempt to browse a
	Web resource that has no NTFS file-level restrictions applied when there are
	share-level restrictions.
	
	When you attempt to access a remote Windows NT resource, most restrictive
	permissions apply. Therefore, even though the Everyone group may have full
	control at the NTFS file level, share permissions must still be negotiated. For
	example, if the \Inetpub\Wwwroot directory is shared and only administrators are
	granted access at the share level, only the administrators group will be able to
	access the Wwwroot directory of the Web server through a browser on a remote
	client.
	
	RESOLUTION
	==========
	
	To resolve this problem, set share-level permissions the appropriate level for
	the directory that the IIS virtual directory maps to.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
