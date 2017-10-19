---
layout: page
title: "Q227611: IIS 5.0 &quot;Site Operators Can Administer This Site Remotely&quot;"
permalink: /kb/227/Q227611/
---

## Q227611: IIS 5.0 &quot;Site Operators Can Administer This Site Remotely&quot;

	Article: Q227611
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up a new Web site using the HTMLA Web Administration Forms, you are
	presented with the new Site operators can administer this site remotely option,
	which is not available in the MMC. If this option is checked, it will create an
	IISADMIN virtual directory (like the one under the Default Web Site) in order
	for the site operator to use the HTMLA Web Administration Forms on the site.
	
	MORE INFORMATION
	================
	
	To access the HTMLA Web Administration Forms, the operator can go to a Web
	browser and simply type "http://sitename/IISADMIN." This only allows the
	operator to administer their own site.
	
	The administrator (or Web admin) of the Internet Information Services (IIS) 5.0
	computer can still administer the site via the Administration Site set up when
	IIS is installed.
	
	Note: This option is not available for new virtual directories.
	
	Additional query words: HTMLA Operators iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
