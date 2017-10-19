---
layout: page
title: "Q168120: User Policy May Be Used When Group Policies Are Enabled"
permalink: /kb/168/Q168120/
---

## Q168120: User Policy May Be Used When Group Policies Are Enabled

	Article: Q168120
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbother win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When group policies have been established and the default user has also been
	configured to have policies, some default user policies may be applied even
	though the user is a member of a group with policies.
	
	CAUSE
	=====
	
	The Default User policy is implemented before group policies. If the group
	policy for the user does not have an option enabled or disabled, the Default
	User policy for that option is used.
	
	RESOLUTION
	==========
	
	If you do not want any default user policies implemented, use one of the
	following methods:
	
	- Using System Policy editor, open the policy file and delete the Default User.
	
	- Verify that every option that is set in the Default User policy is either
	  enabled or disabled in the group policy. When an option is unavailable, there
	  is no policy for the option, and it can be modified by setting the Default
	  User policy. If an option is not set in the group policy, settings in the
	  Default User policy can modify the option.
	
	MORE INFORMATION
	================
	
	For example, if you have enabled the Don't Save Settings At Exit option in the
	Default User policy, and you are a member of a group that has the same option
	marked as not used (the option is unavailable), the Don't Save Settings At Exit
	setting is written to the registry and changes to settings will not be saved.
	
	System Policy options have three states:
	
	- Enabled (checked): this policy will be implemented
	
	- Disabled (cleared): this policy will not be implemented.
	
	- Unavailable (appears dimmed): this setting is unchanged from the last time
	  the user logged on.
	
	For more information about profiles and policies, see Chapter 15 in the Microsoft
	Windows 95 Resource Kit.
	
	Additional query words: greyed grayed out
	
	======================================================================
	Keywords          : kbother win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
