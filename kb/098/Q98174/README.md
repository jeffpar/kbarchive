---
layout: page
title: "Q98174: Setting/Checking Inherited vs. Explicit Permissions"
permalink: /kb/098/Q98174/
---

## Q98174: Setting/Checking Inherited vs. Explicit Permissions

	Article: Q98174
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article explains how to recognize inherited versus explicit permissions and
	discusses how each can be set.
	
	MORE INFORMATION
	================
	
	To determine if a file or directory has an ACL on it, or is just getting
	permissions from its parent, do the following:
	
	From the command line, use the "NET ACCESS d:\path" or "NET ACCESS
	d:\path\filename" command. The backslash (\) after the colon in the drive letter
	is required as a part of the proper syntax of the command. A net2222 means that
	no ACL is applied directly to that directory or file. There is a possibility
	that you will get the resource name listed but with no assigned permissions.
	This indicates that there was once an ACL associated with the resource but that
	it was removed at some point in time with the Revoke or Revoke All option under
	Zoom in the View Permissions dialog box of View, Shared Resources. The same
	result will occur if the command line "NET ACCESS /revoke username" is used for
	the only user with permissions for that resource.
	
	In NET ADMIN initial screen, choose View then Shared Resources, and select a
	sharename. Next, choose View Permissions, then select the directory or file you
	want information on and select Zoom. If the "Use default permissions" box is
	checked, the directory or file you selected is inheriting permissions from a
	higher level.
	
	If you use the Permit Tree option of the View Permissions dialog box under View,
	Shared Resources, then explicit permissions will be applied to all
	subdirectories under the Permit Tree point. These permissions will not be
	applied to the files in these directories.
	
	If you use the Revoke Tree option of the View Permissions dialog box under View,
	Shared Resources, then all implicit and explicit permissions will be removed
	from the point at which you did the Revoke Tree and the tree below it. If this
	is done, a "NET ACCESS ..." on any part of the tree will produce a net2222.
	
	If you assign an explicit permission for a user or group to a resource when
	implicit permissions already exist, then one of two changes will be made. If
	this is done by selecting Permit in the View Permissions dialog box of View,
	Shared Resources, then the implicit permissions will be converted to explicit
	permissions and the new explicit permission will be added. If "NET ACCESS
	<share point> /add <user name>:<permissions>" is used, then
	the implicit permissions will be removed, leaving only the permissions specified
	in the "NET ACCESS ..." command applied to the resource.
	
	Additional query words: 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
