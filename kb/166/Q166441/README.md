---
layout: page
title: "Q166441: HOWTO: Getting IIS to work with Informix ODBC"
permalink: kb/166/Q166441/
---

## Q166441: HOWTO: Getting IIS to work with Informix ODBC

	Article: Q166441
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some registry changes that need to be made to get
	Informix CLI 32 ODBC drivers to work with Windows NT 4.0 and Internet
	Information Server (IIS).
	
	MORE INFORMATION
	================
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	The Informix drivers install only under the current user name of the person that
	is logged on to the system. In order to get general access to the drivers for
	all users, the registry entries that Informix installed under the logged on
	user's account must be copied to the generic users area. Here's how to do this:
	
	1. Using Regedit, search the registry for the word "INFORMIXSERVER" (without the
	  quotes).
	
	2. This value and several others resides in a key called "ENVIRONMENT," which is
	  a subkey of "INFORMIX."
	
	3. Make a note of all of the values in the key and what they are equal to.
	
	4. Go to HKEY_USERS\DEFAULT\Software and create a new key called "INFORMIX"
	  (without the quotes).
	
	5. Create a key under that called "ENVIRONMENT" (without the quotes).
	
	6. Create each of the values and assign them the appropriate information, so
	  that the new key looks identical to the old key.
	
	Restart the server for the changes to take effect.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft. We make no warranty, implied or otherwise, regarding performance
	or reliability of these products.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : 3.0
	Issue type        : kbhowto
	
	=============================================================================
	
