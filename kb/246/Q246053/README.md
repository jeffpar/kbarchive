---
layout: page
title: "Q246053: Why Default.asp is Not Created in the Default Web Site of IIS5"
permalink: /kb/246/Q246053/
---

## Q246053: Why Default.asp is Not Created in the Default Web Site of IIS5

	Article: Q246053
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Internet Information Server (IIS) 4.0, a Default.asp file was placed in the
	default Web site created during setup. This file described IIS 4.0 and the
	Windows NT 4.0 Option Pack. It displayed information for the user who installed
	IIS 4.0, but it could also be viewed by end users who had access to the site.
	
	In Internet Information Services 5.0, however, Setup does not create a
	Default.asp (or Default.htm file). Instead, it creates a new default document,
	"Iisstart.asp".
	
	MORE INFORMATION
	================
	
	When Iisstart.asp loads, it determines if the request for the page came from the
	local computer or from a remote connection. If it came from a remote connection,
	then an "under construction" Web page is returned to the user of the Web site.
	
	If the request came from a local connection, the Localstart.asp file is loaded.
	This file presents a "Welcome to Windows 2000 Internet Services" page, which is
	targeted at Web developers and administrators. In addition, it also opens the
	"Microsoft Internet Information Services 5.0 Documentation" in a new window.
	
	NOTE: Iisstart.asp is a new default document for the default Web site. Because it
	has lower priority than the other standard default documents, Default.htm and
	Default.asp, it will not be loaded if either of those other files exist.
	Furthermore, if IIS 5.0 is installed over an IIS 4.0 installation that already
	has a Default.asp or Default.htm file, it does not remove or overwrite them.
	
	Additional query words: iis iisstart.asp iisstart localstart.asp localstart default.htm default.asp akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
