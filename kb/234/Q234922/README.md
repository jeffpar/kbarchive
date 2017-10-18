---
layout: page
title: "Q234922: Upgrading to IIS 5.0 Shows Home Page from Previous IIS Version"
permalink: kb/234/Q234922/
---

## Q234922: Upgrading to IIS 5.0 Shows Home Page from Previous IIS Version

	Article: Q234922
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade a computer running Windows NT Server version 4.0 with IIS
	version 4.0 or earlier to Windows 2000 with IIS 5.0, when you browse to the
	Default Web Site, the default home page appears from the previous version of
	IIS.
	
	CAUSE
	=====
	
	This is by design. Installation of IIS 5.0 does not delete an existing home page
	during the upgrade.
	
	RESOLUTION
	==========
	
	If the home page from the previous version of IIS is not needed, it may be
	deleted. This will allow the IIS 5.0 default page to be displayed.
	
	MORE INFORMATION
	================
	
	During the installation of IIS 5.0, the setup process does not create a default
	home page named "Default.asp" for the Default Web Site. Instead, it creates a
	page named "Iisstart.asp." This page is then added to the list of default
	documents. Therefore, a new installation of IIS 5.0 correctly displays this
	document as the home page, but an upgrade over a previous version of IIS will
	leave the existing default document in place.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
