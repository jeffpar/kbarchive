---
layout: page
title: "Q267850: Anonymous User Has Access Even When File Permissions Are Denied"
permalink: /kb/267/Q267850/
---

## Q267850: Anonymous User Has Access Even When File Permissions Are Denied

{% raw %}

	Article: Q267850
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an intranet, an Anonymous User account can view the restricted file, even if
	you have explicitly set the file permissions for a file to deny access to the
	Anonymous User account (by default, the name of this account is
	IUSR_<ComputerName>).
	
	NOTE: This problem also occurs when you use folder permissions instead of file
	permissions to deny access.
	
	CAUSE
	=====
	
	Web site visitors are not actually viewing the restricted file by using the
	Anonymous User account. Instead, their network user name is being used to
	authenticate them, and consequently, allow them access to the file because the
	Integrated Windows Authentication method is also in effect.
	
	When Anonymous Access fails, IIS then tries to authenticate the visitor by using
	the other authentication methods that are in effect.
	
	NOTE: By default, when you create a new Web site, both Anonymous Access and
	Integrated Windows Authentication are enabled.
	
	RESOLUTION
	==========
	
	Do not use file permissions to restrict access for the Anonymous User. Instead,
	use the Internet Service Manager (ISM) to disable access for the Anonymous
	User.
	
	If for some reason you still need to use file permissions to restrict access for
	the Anonymous User, make sure to disable other authentication methods, such as
	Integrated Windows Authentication.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: These steps assume that the partition is using NTFS, which is recommended
	for IIS.
	
	1. Use the ISM to create a new Web site, and accept all the default settings.
	
	2. Create a .htm file for the Web site.
	
	3. Open Windows Explorer, right-click the .htm file, click Properties, and then
	  click the Security tab.
	
	4. Click Add, add the Anonymous User account for the local computer, and then
	  return to the Security tab.
	
	5. Select the Anonymous User account to deny all permissions.
	
	6. Click OK, and then click Yes when you are warned that the Deny permissions
	  take priority over Allow entries.
	
	7. Browse to the .htm file. Note that you can view it.
	
	Additional query words: iis 5 rights restrictions iusr akz
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
