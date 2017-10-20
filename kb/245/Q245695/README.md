---
layout: page
title: "Q245695: Error Message: &quot;Access is Denied&quot; When Changing Password"
permalink: /kb/245/Q245695/
---

## Q245695: Error Message: &quot;Access is Denied&quot; When Changing Password

{% raw %}

	Article: Q245695
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the password notification pages that install with the Windows NT
	Option Pack (NTOP), the following error message may be returned when you submit
	your password change:
	
	  Internet Service Manager
	  for Internet Information Server 4.0
	
	  Access is Denied
	
	  Back to http://<original URL>
	
	CAUSE
	=====
	
	This error occurs because the account that you wanted to change does not have
	permissions to change its own password on the domain controller.
	
	RESOLUTION
	==========
	
	On the domain controller, follow these steps:
	
	1. Open User Manager for Domains.
	
	2. Select , and the select Account.
	
	3. At the bottom of the Account Policy page, disable the User must log on in
	  order to change password option.
	
	4. Click OK to save changes.
	
	5. Try changing the user's password again using the IIS Change Password Web
	  application.
	
	MORE INFORMATION
	================
	
	In order to access the Password Notification application, the Web site must be
	using either Basic\Clear Text or NT Challenge Response. If the password
	expiration is within 14 days (default setting), then the user will be prompted
	to change their domain password using this Web application. In order to manually
	view this Web application, point your browser to the following:
	
	  http://<servername>/iisadmpwd/anot3.htr
	
	When IIS attempts to change or reset the user's domain account password, the user
	account in which the Web application was accessed is not passed onto the domain
	controller for authentication. In other words, there is no impersonation taking
	place on behalf of the user account. Instead, when the user types in the account
	name, old password, and new password, an encrypted token is created containing
	all of this information, and that is sent to the domain controller for
	validation. If the user specified is either a domain controller administrator,
	or if the User must log on in order to change password is disabled, then the
	password can be successfully changed.
	
	If a domain user has successfully logged onto a computer in the domain, then they
	can use the operating system's change password utility to change the password
	even if User must log on in order to change password is selected. This is
	because the user has already "logged on to" the domain controller, which is
	different than accessing it through a Web browser.
	
	Additional query words: ism, PasswordChangeFlags, PasswordExpirePrenotifyDays
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
