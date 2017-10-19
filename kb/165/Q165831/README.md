---
layout: page
title: "Q165831: PRB: Anonymous User in NT Admin Group Breaks Source Control"
permalink: /kb/165/Q165831/
---

## Q165831: PRB: Anonymous User in NT Admin Group Breaks Source Control

	Article: Q165831
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbVisID100 kbVisID600
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files will appear to be checked out or modified by the system's anonymous user
	when they are actually checked out to valid SourceSafe accounts.
	
	CAUSE
	=====
	
	The machine's Anonymous User account is a member of the Admin user group.
	
	Visual SourceSafe will always attempt to perform actions as the anonymous user
	before trying to use the actual logged-in user's name. Only when an action
	exceeds the user rights allowed to the system's anonymous user will it attempt
	to authenticate as the actual user. Because the anonymous user is a member of
	the Admin group, it will always have the rights that are required to succeed in
	checking out files.
	
	Another possible cause is that the anonymous user has either Author and Browse,
	or Author, Browse, and Administer web permissions.
	
	This can also be caused by using a Windows NT Server that has been formatted with
	FAT partitions as the Web server because, unlike drives formatted with NTFS, FAT
	drives have no direct way of securing files based on user id.
	
	RESOLUTION
	==========
	
	Remove the anonymous user from the system's Admin group, and make sure that the
	anonymous account does not have permissions to author or administer the Web.
	
	You may need to reboot the server at this point.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	There are no known cases where a default installation would cause this
	situation. It was first discovered on a machine with manually modified rights.
	
	The anonymous user mentioned here is an account name introduced by Microsoft
	Internet Information Server. It will have the format IUSR_<machinename>,
	and can be found in the Internet Service Manager under the properties for the
	World Wide Web Service.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the Windows NT User Manager, add the system's anonymous user to the
	  group of Admin users.
	
	2. Check out a file while logged in as a valid user.
	
	3. Look in Visual SourceSafe on the server and you will see the files checked
	  out to the anonymous user rather than the valid user.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbVisID100 kbVisID600 
	Technology        : kbVisIDsearch kbAudDeveloper kbVisID100 kbVisID600
	Issue type        : kbprb
	
	=============================================================================
	
