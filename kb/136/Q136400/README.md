---
layout: page
title: "Q136400: INFO: Changing Visual SourceSafe User Name in Visual Basic"
permalink: kb/136/Q136400/
---

## Q136400: INFO: Changing Visual SourceSafe User Name in Visual Basic

	Article: Q136400
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows NT and Windows 95, Visual Basic automatically tries to connect to
	Visual SourceSafe with your operating system's userID. If the logged in user has
	permission to see the SourceSafe server and there is a SourceSafe user with the
	same ID, the user is assumed to have already been validated and SourceSafe
	performs no additional password validation. If there is no SourceSafe user by
	that name, the login dialog is displayed and the user ID of the currently logged
	on user is placed in the user ID field.
	
	This behavior is by design. However, it means that there is no way to change the
	default Visual SourceSafe user to anyone but the currently logged in SourceSafe
	user. In most situations, this is the behavior you want. However, this article
	describes how to log in as a different SourceSafe user than the one currently
	logged on the machine.
	
	MORE INFORMATION
	================
	
	One method is to use an ID for SourceSafe which is not your user ID on your
	Windows NT or Windows 95 machine. Then you will be prompted for your ID and
	password every time.
	
	Another suggestion is to create a new set of icons for the SourceSafe Explorer
	and SourceSafe Administrator. Use the -y parameter in the icon's command line
	definition, as shown here:
	
	        <path to VSS>\win32\ssexp.exe -yadmin
	
	        <path to VSS>\win32\ssexp.exe -yadmin,<password>
	
	        <path to VSS>\win32\ssadmin.exe -yadmin
	
	        <path to VSS>\win32\ssadmin.exe -yadmin,<password>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Issue type        : kbinfo
	
	=============================================================================
	
