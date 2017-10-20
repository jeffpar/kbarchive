---
layout: page
title: "Q90227: Changes Lost or Cannot Save Changes"
permalink: /kb/090/Q90227/
---

## Q90227: Changes Lost or Cannot Save Changes

{% raw %}

	Article: Q90227
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many MS-DOS-based and Windows-based applications handle files in a way that
	allows data loss to occur in a peer-to-peer multitasking environment. Data loss
	can occur if an application opens and closes a data file that is being edited.
	This includes some network-aware applications that make no provisions for a
	peer-to-peer environment, and instead assume all networks follow the
	client/server model.
	
	MORE INFORMATION
	================
	
	When you open a file, Windows for Workgroups assigns ownership of that file to
	you. If your application closes the file once it has loaded it into system
	memory (RAM), Windows for Workgroups no longer thinks the file is owned by you
	or anyone else. This allows another user to access and modify the file. The same
	can be true for files and applications run on remote servers, again dependent on
	the application.
	
	Windows for Workgroups (as with other networking environments) allows other
	users, locally and remotely, to access and modify files if they are not locked.
	When you attempt to save changes to a data file, you may be denied access if
	another user has opened the file, or, if another user has modified the file, the
	changes made will be lost when you save your changes. Applications written
	assuming they will only be run on a single-tasking, non-networked platform
	encounter these problems occasionally.
	
	If you are not able to save changes because another user is accessing your data
	file, try to save your changes under a different filename. Depending on the
	application and the data file in question, integrating the two files may be
	difficult.
	
	Manually lock your data files using a file-locking utility such as the MS-DOS
	command ATTRIB. You only need to lock files that other users can access (those
	that are on a shared drive.)
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
