---
layout: page
title: "Q304687: HOWTO: SSAFE: Select Nondefault Database Location"
permalink: kb/304/Q304687/
---

## Q304687: HOWTO: SSAFE: Select Nondefault Database Location

	Article: Q304687
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbDSupport kbGrpDSSSafe
	Last Modified: 10-MAR-2002
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation that is included with the Beta product files, 
	or check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are installing Visual SourceSafe Standalone Server or Shared Database
	Server for the first time, you are not given the option to install your Visual
	SourceSafe Database to a location of your choice. Instead, the database will be
	created in the default location for your chosen setup path.
	
	To install instead to a different location, click Change Folder and select your
	installation location.
	
	NOTE: If it is a new folder that you are installing to, you must create the new
	folder before continuing with installation of Visual SourceSafe because no
	option to create a folder is provided during installation.
	
	MORE INFORMATION
	================
	
	The alternative to this is to go ahead with the default installation. When it is
	complete, open the Visual SourceSafe Admin utility: from the Start menu, point
	to Programs, point to Visual SourceSafe, and then click Visual SourceSafe 6.0
	Admin. Continue with the following steps:
	
	1. The default admin password is blank. Change this to make the Admin tools
	  secure.
	
	2. From the Tools menu, click Create Database.
	
	3. Click browse and navigate to the location where you would like to install
	  your database. (You can choose to create a new folder from this menu as
	  well.)
	
	4. If all of your clients are using the 6.0 version of the Visual SourceSafe
	  Client, select New 6.0 Database Format. (Keep in mind that if any of your
	  users have an older version of the client software, those users will not be
	  able to access the database.)
	
	5. You should receive a message stating "Database Creation Complete". Click OK.
	
	6. From the File menu, click Open SourceSafe Database.
	
	7. Click browse and browse to the new database location. Select the Srcsafe.ini
	  file, and then click OK.
	
	8. Choose a friendly name for your database list. The default name will be the
	  complete path to the Srcsafe.ini file. Click OK.
	
	9. In the Open SourceSafe Database window, select the database that you just
	  created and click open.
	
	10. You are now in the Administrator tool for the new database and can perform
	  such tasks as adding users and setting permissions.
	
	REFERENCES
	==========
	
	For more information on creating a new database within Visual SourceSafe, see
	the following Microsoft Knowledge Base article:
	
	  Q238155 HOWTO: Create a New database in Visual SourceSafe
	
	Additional query words: kbSSafe
	
	======================================================================
	Keywords          : kbsetup kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
