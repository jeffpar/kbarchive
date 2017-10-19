---
layout: page
title: "Q138732: Works 4.0 Setup Error: Your Setup Files May Be Damaged"
permalink: /kb/138/Q138732/
---

## Q138732: Works 4.0 Setup Error: Your Setup Files May Be Damaged

	Article: Q138732
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Works Windows 95 and Bookshelf 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install Works from the compact disc using the /F switch (code to
	force short file names), you receive the following error message:
	
	  Setup Error 997
	  Object 130
	  Your Setup files may be damaged. Try restarting the Setup program.
	
	This error also occurs if you have performed an administrative installation from
	the compact disc, and then try to perform a post-administrative installation
	with the /F switch from the administrative installation point.
	
	RESOLUTION
	==========
	
	If you use the Works and Bookshelf CD-ROM, you must install Works to a location
	that supports long file names.
	
	If you are trying to perform a post-administrative installation to a shared
	directory on a server using Novell Netware 3.0 or 4.0, long file names are
	supported if the server is configured to use the OS/2 name space (which emulates
	a High Performance File System, or HPFS, volume).
	
	For more information on installing the OS/2 name space on a Novell server, see
	page 290 of the Microsoft Windows 95 Resource Kit or your Novell documentation.
	
	MORE INFORMATION
	================
	
	The /F switch is used to install Works using short file names instead of the
	default long file names. For example, the switch is used when you install the
	program files to a shared drive that cannot support long file names.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138453 Works Err Msg: Specified Volume Does not Support Long ...
	
	Additional query words: 4.00 w_works network admin short acme setups errors 8.3 shortened shortening truncated truncates install
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHomeProdSearch kbWorksSearch kbHomeMMsearch kbBookshelfSearch kbWorks400
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
