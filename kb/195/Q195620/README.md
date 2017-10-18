---
layout: page
title: "Q195620: HOWTO: Check for Component Gallery/Class Browser Version"
permalink: kb/195/Q195620/
---

## Q195620: HOWTO: Check for Component Gallery/Class Browser Version

	Article: Q195620
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbVS600sp3 kbGrpDSFox
	Last Modified: 17-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Previous versions of the Component Gallery and Class Browser utilities did not
	provide a method for determining the current version of the application. The
	October 1998 Gallery update, Vfp6gal.exe, adds a new property to the Component
	Gallery/Class Browser object model that stores the version information. The
	property name is "cVersion".
	
	MORE INFORMATION
	================
	
	NOTE: The Visual Studio 6.0 Service Pack 3 readme erroneously lists this article
	as describing a fixed bug. This is a HOWTO and not a BUG article.
	
	You can download the October 1998 Gallery update, Vfp6gal.exe, from the following
	Web address:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	With the updated Component Gallery/Class Browser installed and running, you can
	determine the version as follows:
	
	  ?_obrowser.cVersion  && Component Gallery/Class Browser Version
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbVS600sp3 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
