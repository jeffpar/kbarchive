---
layout: page
title: "Q90284: Two-Password Shares and Password Caching"
permalink: /kb/090/Q90284/
---

## Q90284: Two-Password Shares and Password Caching

{% raw %}

	Article: Q90284
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.10 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups permits two levels of access to a shared directory or
	ClipBook page:
	
	- Read-Only Access
	
	- Full Access
	
	Each type of access may have a password associated with it, and the type of
	access granted to a client depends on which password he/she provides. This
	article discusses how Windows for Workgroups handles the password caching for
	dual-password shares.
	
	MORE INFORMATION
	================
	
	Password caching is implemented differently for two-password shares. If the
	password typed for a two-password share was cached and retrieved the same way as
	other passwords, a client who knows both passwords would be confined to a single
	type of access because the password cache would prevent any further password
	prompts and therefore any chance of typing the other password.
	
	When Windows for Workgroups restores a persistent connection to a two-password
	share, it is assumed that the last type of access used is the one desired. If a
	password for the resource is present in the cache, Windows for Workgroups uses
	it and does not prompt you for input.
	
	If you make an explicit connection (made from the Connect Network Drive dialog
	box) to a two-password share, Windows for Workgroups gives you the option of
	typing the other password for the resource. If a password was found in the
	password cache, it is filled in as a suggested password to use (it is displayed
	as asterisks). You can accept that password or type a different one.
	
	If one of the passwords is blank, Windows for Workgroups still prompts you for a
	password. This gives you the opportunity to type the nonblank password. If you
	type nothing, Windows for Workgroups connects you to the share with the blank
	password.
	
	NOTE: To disable password caching and prevent your PWL file from being accessed,
	add the following line to the [NETWORK] section of the System.ini file:
	
	  PasswordCaching=no
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : 3.10 3.11
	
	=============================================================================
	

{% endraw %}
