---
layout: page
title: "Q199869: SMS: Assigning Class and Instance Security Rights"
permalink: /kb/199/Q199869/
---

## Q199869: SMS: Assigning Class and Instance Security Rights

{% raw %}

	Article: Q199869
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bugkbfaq
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By assigning object Class and Instance rights, it is possible to customize the
	view your administrators have of the SMS Administrator console.
	
	However, when using the Security Rights Properties console item to assign user
	Class or Instance security, only one class or instance can be modified at a
	time. After security is assigned to the current user or user group, clicking
	Apply causes the dialog box to become grayed out and no additional changes can
	be made.
	
	To assign additional Class or Instance security rights, you must do the
	following:
	
	1. Navigate to the Security Rights node in the Systems Management Server
	  console.
	
	2. Right-click, point to New, and then click Class or Instance Security Right on
	  the shortcut menu.
	
	WORKAROUND
	==========
	
	To work around this problem and assign multiple Class and Instance security
	rights to users or user groups, use the Manage SMS Users Wizard. To start the
	wizard, perform the following steps:
	
	1. In the SMS Administrator console, navigate to the Security Rights node.
	
	2. Right-click, point to All Tasks and then click Manage SMS Users. This starts
	  the Manage SMS Users Wizard.
	
	With the wizard, you can modify or remove an existing user or user group, and add
	a new user or user group. You can also copy the permissions of an existing user
	or user group. This allows the creation of template users, which simplifies
	security because permissions need only be set up once.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For more information about assigning SMS Administrator console security, see
	chapter 4, "Creating Your SMS Security Strategy" in the Administrator's Guide.
	
	Additional query words: prodsms security wizard class instance assign assigning gray grey greyed out dim dimmed smsfaqtop
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
