---
layout: page
title: "Q118424: Schedule+ Err Msg: Mailbox Name or Password Is Incorrect..."
permalink: /kb/118/Q118424/
---

## Q118424: Schedule+ Err Msg: Mailbox Name or Password Is Incorrect...

{% raw %}

	Article: Q118424
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you sign in to Schedule+ for Windows for Workgroups, one of the following
	error messages appears even though the mailbox name and password are correctly
	specified in the Mail Sign-In dialog box:
	
	  The mailbox name or password is incorrect.
	
	  -or-
	
	  Your passwords don't match. Type your schedule file password.
	
	CAUSE
	=====
	
	If Schedule+ is started offline the first time the program is run, the following
	message is displayed after the calendar file is created:
	
	                   Microsoft Schedule+
	
	  A new file has been created for you. Your password has been set to
	  'PASSWORD'. You can change it by using the Change Password command.
	
	Schedule+ uses the default password "PASSWORD" (without the quotation marks) to
	access the calendar file. If Schedule+ is started offline the first time the
	program is run, the password is set to the default one regardless of the
	password selected by the user.
	
	RESOLUTION
	==========
	
	After you start Schedule+ by using the default password, you can change the
	password to any one you want. To change the password, choose Change Password
	from the Options menu. The original password is then requested. Type "PASSWORD"
	(without the quotation marks). The old password appears as asterisks as you type
	it. Choose OK. Enter a new password. Confirmation of the new password is then
	requested.
	
	Additional query words: 3.10 3.1 3.11 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
