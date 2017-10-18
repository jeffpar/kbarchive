---
layout: page
title: "Q246420: How to Change the Time Zone in Interix"
permalink: kb/246/Q246420/
---

## Q246420: How to Change the Time Zone in Interix

	Article: Q246420
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 17-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the time zone in Interix.
	
	MORE INFORMATION
	================
	
	Changing timezones can be done in several ways:
	
	- Globally:
	
	In the Windows Date/Time GUI (via Control Panel), change the timezone. This is a
	global system change. It will affect Winodows processes as well as Interix
	processes.
	
	- For Interix processes only:
	
	The TZ env. variable is set automatically when user starts up an Interix login
	shell. It is set using the information from the Windows system global timezone
	data.
	
	The TZ envionment variable is used by all the time functions in Interix to
	determine which timezone the user wants to work in. If TZ is unset or set to an
	empty value, then the time functions don't use this value but rather calculate
	what TZ should be from the Windows' system global timezone info.
	
	For Eastern Standard Time in the United States, the value of TZ environment
	variable would look like:
	
	  EST5EDT4,M4.1.0/2,M10.5.0/2
	
	If the TZ env. variable needs to be modified, then it must be set using a
	complicated syntax. The syntax is described in the tzset(3) man page [This can
	be viewed by typing the command "man tzset" (without the quotation marks) ].
	
	Changing the TZ environment variable can be done at any time just like changing
	any other environment variable. Once changed it will effect all new Interix
	processes created using this environment.
	
	If a system Administrator wants to have all Interix logins to use a timezone that
	is not the system default, then the TZ environment variable can be set in
	$INTERIX_ROOT/etc/profile.lcl for ksh users, or in $INTERIX_ROOT/etc/csh.lcl for
	csh users.
	
	If an individual user wants to use a different timezone than the system default,
	they can set TZ in their personal login script file:
	
	$HOME/.profile for ksh users
	$HOME/.cshrc for csh users
	
	There is another reason why a user may want to set TZ. That is because in some
	international Windows systems, Interix cannot it properly. For instance, in the
	Japanese edition of Windows TZ is set to "-9" To correct this problem, one could
	set TZ in the file $INTERIX_ROOT/etc/profile.lcl to:
	
	  export TZ=JST-9
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
