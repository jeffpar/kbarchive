---
layout: page
title: "Q281313: Server for NFS Does Not Recognize Group Membership Changes"
permalink: /kb/281/Q281313/
---

## Q281313: Server for NFS Does Not Recognize Group Membership Changes

{% raw %}

	Article: Q281313
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool w2000sfu kbUNIXService
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Services for UNIX includes a Server for NFS component. If a group
	membership change is implemented by the administrator, the Server for NFS
	component does not recognize the change immediately. This could allow a user to
	gain access to files to which that user no longer has rights.
	
	For example, assume that User1 is a member of the UnixGrp1 and UnixGrp2 groups.
	Only members of the UnixGrp2 group are allowed access to the Test.txt file.
	User1 can access the file. if the administrator removes User1 from the UnixGrp2
	group, User1 should no longer have access to the Test.txt file. However, Server
	for NFS does not immediately recognize the group membership change and allows
	User1 to access the Test.txt file.
	
	CAUSE
	=====
	
	This behavior occurs because group membership information is cached by the
	Server for NFS component.
	
	RESOLUTION
	==========
	
	To work around the problem, you can use either of the following methods after
	group membership has been changed:
	
	- Stop and restart the NFS server.
	
	- Stop and restart the mapping service.
	
	NOTE: If you use the second method, the changes in group membership are
	recognized at the next refresh interval.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0 and
	Microsoft Windows 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool w2000sfu kbUNIXService 
	Technology        : kbWinServiceUNIXSearch
	Version           : :2.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
