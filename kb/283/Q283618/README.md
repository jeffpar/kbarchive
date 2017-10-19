---
layout: page
title: "Q283618: INFO: Security Considerations When Using Automatic User Login"
permalink: /kb/283/Q283618/
---

## Q283618: INFO: Security Considerations When Using Automatic User Login

	Article: Q283618
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbConfig kbDSupport kbGrpDSSSafe
	Last Modified: 06-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe provides a "Use network name for automatic user log in" option
	that allows Visual SourceSafe integration with Microsoft Visual InterDev or
	Microsoft FrontPage. However, the feature has security ramifications that users
	should consider before using it. Microsoft recommends that the feature only be
	used in protected networks in which all users are fully trusted.
	
	MORE INFORMATION
	================
	
	The "Use network name for automatic user log in" option in Visual SourceSafe is
	designed to enable single sign-on to development environments. When the option
	is selected (this is the default), Visual SourceSafe uses the currently
	logged-in account name as the Visual SourceSafe user name. If the name matches a
	Visual SourceSafe user name, the user is logged in without a password.
	
	Use of this feature can provide a better user experience by not requiring the
	user to enter a userid and password repeatedly. However, there are security
	ramifications associated with using the feature, and customers should consider
	them carefully before using it:
	
	- The feature does not perform Windows authentication, in which
	  cryptographically protected credentials are exchanged anytime the user
	  requests access to a resource, even through single sign-on mechanisms.
	  Instead, the feature sends the current account name, which Visual SourceSafe
	  then compares to a local database of users.
	
	- It could be possible for a user to log in as any desired Visual SourceSafe
	  user, simply by logging into a local account with a userid that exists in
	  Visual SourceSafe. In particular, there is always a user name of "Admin" in
	  the Visual SourceSafe user list, which has full administrative access and
	  cannot be deleted. If the Use network name for automatic user log in feature
	  is enabled, an attacker could create a local machine account named "Admin",
	  and then misuse the automatic log in feature to gain access to the Visual
	  SourceSafe "Admin" account.
	
	- The feature can be disabled, but it is possible for the client to override
	  the server settings and re-enable it.
	
	Because of these factors, Microsoft recommends that the "Use network name for
	automatic user log in" feature only be used in protected networks in which all
	of the users are fully trusted. It should not be used on unprotected networks or
	networks containing users who require differing levels of privileges. Indeed,
	Visual SourceSafe itself is not recommended for use on unprotected networks, as
	it is a development tool.
	
	The most effective way to provide security for Visual SourceSafe is by
	controlling access to the share on which the server software and the database
	reside. This can be done by setting NTFS permissions on the share and, if
	appropriate, hiding the share.
	
	Conclusion
	----------
	
	There can be significant benefit to enabling the "Use network name for automatic
	user log in" option in a protected network. However, in an unprotected network,
	this option is not appropriate.
	
	REFERENCES
	==========
	
	If you require technical assistance with this issue, contact Microsoft Product
	Support Services:
	
	  http://support.Microsoft.com/support/contact/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbConfig kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
