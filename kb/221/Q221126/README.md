---
layout: page
title: "Q221126: SMS: Instance and Class Permissions: Which Has Precedence?"
permalink: /kb/221/Q221126/
---

## Q221126: SMS: Instance and Class Permissions: Which Has Precedence?

{% raw %}

	Article: Q221126
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbSecurity kbsms200 kbPackage kbsmsAdmin
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to help clarify the resulting permissions of
	using Instance and Class security.
	
	MORE INFORMATION
	================
	
	Chapter 4 of the Microsoft Systems Management Server 2.0 Administrators Guide
	discusses Instance and Class security available for objects in the SMS Site
	Database. It may be unclear as to which type of security takes precedence in a
	particular situation.
	
	Instance security does not take precedence over Class security and vice versa.
	Unlike Windows NT File permissions, the resulting rights granted are a union of
	the Class and Instance rights.
	
	EXAMPLE 1:
	
	UserX has all Class level Package rights for All Packages.
	UserX has no Instance level Package rights for PackageA.
	
	Result:
	
	UserX will have full rights for PackageA as well as all other packages because
	full Class level rights were granted to the user for All Packages.
	
	EXAMPLE 2:
	
	UserX has no Class level Package rights for All Packages.
	UserX has all Instance level Package rights for PackageA.
	
	Result:
	
	UserX will have full rights for PackageA, but no other Packages (unless
	explicitly granted), because no explicit rights were granted at the Class
	level.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSecurity kbsms200 kbPackage kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
