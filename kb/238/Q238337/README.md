---
layout: page
title: "Q238337: Browse Button for Home Directory Is Disabled in MMC"
permalink: /kb/238/Q238337/
---

## Q238337: Browse Button for Home Directory Is Disabled in MMC

	Article: Q238337
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains why the Browse button is disabled in the Microsoft
	Management Console (MMC) when you are administering a remote server. This occurs
	when you try to create or modify a virtual directory or virtual Web for a remote
	server.
	
	MORE INFORMATION
	================
	
	When you are administering an IIS computer remotely, you may find it necessary
	to modify the home directory of a Web or virtual directory. When you view the
	properties for either of these, the Browse button is disabled (grayed) even
	though you can specify the location by typing the path in the text box that is
	available.
	
	This is by design. The browse function is disabled because the control only
	allows local directory browsing.
	
	
	Additional query words: mmc
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
