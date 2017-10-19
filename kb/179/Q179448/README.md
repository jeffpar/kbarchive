---
layout: page
title: "Q179448: 6-Day Password Change Notification Cannot Be Changed"
permalink: /kb/179/Q179448/
---

## Q179448: 6-Day Password Change Notification Cannot Be Changed

	Article: Q179448
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnetwork win95
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When your Microsoft Windows NT domain password is less than seven days from
	expiration, you may receive notification when you log on requesting you to
	change your password. The earliest possible password change notification is
	determined as described in the following text, and cannot be changed.
	
	Windows uses an optimized formula to determine when to display network password
	change notifications. When Windows clients use network logon password
	validation, the account password on the server expires at configurable
	intervals. Windows notifies the user that the password will expire soon and that
	they should change the password now.
	
	Windows notifies the user to change password when all of the following conditions
	are met:
	
	- RelativeTimeRemaining < 7 days
	
	  Basically, the earliest you will receive a notification is 6 days.
	
	- RelativeTimeRemaining < (20% of RelativePasswordAge)
	
	  RelativePasswordAge is going to be governed by the Maximum password age
	  parameter in the User Account Manager. With max password age set to greater
	  than 30 days, the first notification will always occur at 6 days.
	
	- ServerCurrentTimeOfDay >= PasswdCanChange
	
	Definitions:
	
	RelativePasswordAge: Time since the user password was changed.
	
	PasswdCanChange: Specifies time when the user is allowed to change the password.
	
	PasswdMustChange: Time when the user must change the password.
	
	RelativeTimeRemaining = PasswdMustChange - ServerCurrentTimeOfDay
	
	MORE INFORMATION
	================
	
	Note that this value can be changed for Windows NT 4.0 clients. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q135403 14 Day Password Change Notification Cannot Be Changed
	
	The password change notification is based on the Maximum Password Age setting in
	the User Manager tool in Microsoft Windows NT.
	
	Additional query words: policy win95 win95x
	
	======================================================================
	Keywords          : kbenv kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
