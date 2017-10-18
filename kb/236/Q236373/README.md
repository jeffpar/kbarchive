---
layout: page
title: "Q236373: How Maximum Password Age Is Implemented"
permalink: kb/236/Q236373/
---

## Q236373: How Maximum Password Age Is Implemented

	Article: Q236373
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	User Manager allows you to set a maximum password age. A common misconception is
	that the current age for each user's password is reset when this value is
	changed. Each individual user's password age is not stored or reset.
	
	MORE INFORMATION
	================
	
	Windows NT does not actually store the age of the user's password, but rather
	the last time it was set.
	
	To view when the password was last set, type the following at an MS-DOS command
	prompt:
	
	  "net user administrator" (without the quotation marks)
	
	Information similar to the following is then displayed:
	
	User name                    Administrator
	Password last set            4/7/99 4:11 PM
	
	(There is a variety of information displayed, but the Password last set value is
	the information of interest.)
	
	For example, you have a domain that has been set up for one year and users do not
	change their passwords on a regular basis. If you were to set a maximum password
	age of 60 days, almost all users' passwords would expire and they would be
	required to change their password at next logon.
	
	A better alternative in this example would be to set the maximum password age to
	365 days and then slowly (over days or weeks) lower the maximum password age to
	60. This would help to prevent the help desk from being inundated with calls.
	
	Additional query words: expired logon failed
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
