---
layout: page
title: "Q235396: XADM: How to Determine the First Exchange Server in the Site"
permalink: kb/235/Q235396/
---

## Q235396: XADM: How to Determine the First Exchange Server in the Site

	Article: Q235396
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv exc4 exc5 exc55
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine the first Exchange Server computer in a
	site by running the Exchange Server Administrator program in Raw mode to assist
	you in troubleshooting many different System folder issues. You can perform this
	procedure on any Exchange Server computer in the site.
	
	MORE INFORMATION
	================
	
	The identity of the first Exchange Server computer in the site is usually known.
	However, in some situations, because of administration or server configuration
	changes, the identity of the first Exchange Server computer in the site may be
	unknown.
	
	To determine the first Exchange Server computer in the site, use the following
	steps:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. In the Configuration container for the site, click Information Store Site
	  Configuration.
	
	3. On the File menu, click Raw Properties.
	
	4. In the "Object attributes" section, find the Site-Folder-Server attribute.
	
	5. The name of the server in the Edit Value area is the first Exchange Server
	  computer in the site.
	
	NOTE: If the first Exchange Server computer in the site is removed from the site
	but is still listed, it may have been removed incorrectly. For information about
	how to correctly remove the first Exchange Server computer, refer to the
	following Microsoft Knowledge Base article:
	
	  Q152959 XADM: How to Remove the First Exchange Server in a Site
	
	To correct this issue, refer to the following Microsoft Knowledge Base article:
	
	  Q152960 XADM: Reassigning Site Roles after Removing the First Server in an
	  Exchange Site
	
	Additional query words: non-ipm subfolders free busy oab organizational forms library identify
	
	======================================================================
	Keywords          : kbenv exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
