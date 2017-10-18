---
layout: page
title: "Q62134: Mac Hyp: Getting a List of User Names"
permalink: kb/062/Q62134/
---

## Q62134: Mac Hyp: Getting a List of User Names

	Article: Q62134
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command returns a list of user names in Microsoft Mail version
	2.00:
	
	  msmail (getUserList [,"local" or "all"] [,searchPattern]
	  [,"leading" or "embedded" or "exact"] [,extended]) => userNames
	
	In Mail version 3.00, the second argument is expanded to include "Address" for
	addresses from the user's address book.
	
	If "local" is asked for (the default), then only users on the same server will be
	returned; if "all" is asked for, the routine returns all users on the network
	that can be reached via Microsoft Mail.
	
	An optional "searchPattern" can be passed so that only a subset of users is
	returned. This allows you to specify only part of a name.
	
	The following three search modes can be used:
	
	1. "leading" -- will match the searchPattern if it is at the start of a user
	  name
	
	2. "embedded" -- all user names containing the pattern anywhere within
	  themselves
	
	3. "exact" -- only users whose name exactly matches searchPattern
	
	If "extended" is true (the default), then the name(s) are returned in the form
	"userName@serverName".
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
