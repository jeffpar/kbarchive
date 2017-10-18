---
layout: page
title: "Q153417: Location of Cookies File in Internet Explorer"
permalink: kb/153/Q153417/
---

## Q153417: Location of Cookies File in Internet Explorer

	Article: Q153417
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Cookies are web page specific variables that are set on the client computer by
	the web server.
	
	MORE INFORMATION
	================
	
	These "cookie variables" are stored on the client computer, and hold information
	that is sent to the server upon connection. Cookies are usually used to hold
	personal preferences for a web page. As an example, http://www.msn.com uses
	cookies to set up a "custom page" for any user with a browser that supports
	cookies.
	
	The location of the cookie files on Internet Explorer are in the following
	locations:
	
	- Internet Explorer 1.5 for Windows NT: %systemroot%\cookie.jar
	
	- Internet Explorer 2.0: \Program Files\Plus!\Microsoft Internet\cookies.txt
	
	- Internet Explorer 3.0 for Windows NT:
	  %systemroot%\COOKIES\<username>@<sitename>.txt
	
	- Internet Explorer 3.0 for Windows 95: \Windows\Cookies\
	  <username>@<site name>.txt
	
	- Internet Explorer 3.0 for Windows for Workgroups and Windows NT version 3.51:
	  Internet Explorer installation directory as the file name Emcookie.dat.
	
	- Internet Explorer 4.x for Windows 95: \%windir%\Cookies\
	  <username>@<site name>.txt
	
	- Internet Explorer 4.x for Windows 98: \%windir%\Cookies\
	  <username>@<site name>.txt
	
	- Internet Explorer 4.x for Windows NT:
	  \%systemroot%\profiles\%username%\Cookies\ <username>@<site
	  name>.txt
	
	- Internet Explorer 5.0 for Windows 95: \%windir%\Cookies\
	  <username>@<site name>.txt
	
	- Internet Explorer 5.0 for Windows 98: \%windir%\Cookies\
	  <username>@<site name>.txt
	
	- Internet Explorer 5.0 for Windows NT:
	  \%systemroot%\profiles\%username%\Cookies\ <username>@<site
	  name>.txt
	
	The location of cookies can also change on computers running Windows 95/98 if
	User Profiles are enabled, so that they are stored in the
	\%windir%\profiles\username\cookies directory.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
