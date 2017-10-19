---
layout: page
title: "Q140594: PRB: Local SSADMIN Writes to Local (Not Server) Srcsafe.ini"
permalink: /kb/140/Q140594/
---

## Q140594: PRB: Local SSADMIN Writes to Local (Not Server) Srcsafe.ini

	Article: Q140594
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbVBp
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Other Visual SourceSafe users do not see the results of changes made by the
	Admin.
	
	CAUSE
	=====
	
	If you have copied or installed the Ssadmin.exe file to your local drive, any
	changes made with your local Ssadmin program may change your local Srcsafe.ini
	file created with the Client Setup or Netsetup in Visual SourceSafe. For
	example, if you set up a Shadow directory in the $/Source project, your local
	Srcsafe.ini may look like this:
	
	     #include \\SOURCESAFE\SSAFE\VSS40SVR\srcsafe.ini
	
	     [$/SOURCE]
	     Shadow (PC) = f:\MAINSVR\Source
	
	You will have a different result (for the same reasons) if you execute the
	SSADMIN on the server, while using the server as a terminal. For instance,
	setting the shadow on, you may see something similar to the following:
	
	     [$/SOURCE]
	        Shadow (PC) = c:\MAINSVR\Source
	
	This will cause a shadow directory to be created on each client application, and
	not be properly updated.
	
	RESOLUTION
	==========
	
	Copy local settings to the network Srcsafe.ini file, and either use the network
	Ssadmin.exe program or delete your local copy and set the environment variable
	"SSDIR" to the network Srcsafe.ini file.
	
	NOTE: If you are using Integration with Visual Basic or Visual C++, you cannot
	use the SSDIR environment variable, and need to run Ssadmin.exe from the
	network.
	
	The administrator should have the SSADMIN icon run the SSADMIN on the server, not
	a local copy. Check the properties of the SSADMIN icon to make sure the server
	installation of the SSADMIN is run on the server's working directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbVBp 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
