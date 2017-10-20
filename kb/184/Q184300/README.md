---
layout: page
title: "Q184300: How to Run a Web Site as the User Who Created the Content"
permalink: /kb/184/Q184300/
---

## Q184300: How to Run a Web Site as the User Who Created the Content

{% raw %}

	Article: Q184300
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server (IIS) version 4.0 allows a Web site to run
	in the context of the user who created the content, as in some versions of UNIX,
	through the use of the anonymous user account.
	
	MORE INFORMATION
	================
	
	When a user accesses any resource in IIS, IIS can perform the action as the user
	performing the request or in the context of a nominated user account. To access
	the resource as the user performing the request, you must use Basic or Windows
	NT Challenge/Response authentication. To access a resource as a pre-defined
	user, you can turn off all authentication, use Anonymous Authentication, and
	choose a pre-defined Windows NT account to use as the Anonymous account.
	
	Assume you have a directory containing content created by DOMAIN\USER and you
	always want this content, whether it is active content (ASP, components) or
	static content, to run in the context of this user. Perform the following
	procedure to change the anonymous account for that directory:
	
	1. Load the Microsoft Management Console administrator tool.
	
	2. Right-click on the Web server, virtual directory, or directory in question.
	
	3. Select Properties.
	
	4. Select Directory Security.
	
	5. Select Edit in the Anonymous Access and Authentication Control box.
	
	6. Make sure only Allow Anonymous Access is selected.
	
	7. Click Edit and type DOMAIN\USER or the user account to use.
	
	8. Make sure Enable Automatic Password Synchronization is enabled.
	
	9. Click OK to save the changes and exit each dialog box.
	
	Any object executed within the scope of that virtual directory will now execute
	as DOMAIN\USER.
	
	NOTE: The IIS log files can still log the IP address of the calling user.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
