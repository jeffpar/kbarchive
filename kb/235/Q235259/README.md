---
layout: page
title: "Q235259: HOWTO: Delete a Database in ATSWeb 2.0"
permalink: /kb/235/Q235259/
---

## Q235259: HOWTO: Delete a Database in ATSWeb 2.0

{% raw %}

	Article: Q235259
	Product(s): Microsoft FoxPro
	Version(s): 2.0,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Anomaly Tracking System, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how you can delete an unwanted ATSWeb 2.0 database.
	
	WARNING: ANY USE BY YOU OF ATSWEB IS AT YOUR OWN RISK. Microsoft provides the
	utility "as is" without warranty of any kind, either expressed or implied,
	including but not limited to the implied warranties of merchantability and/or
	fitness for a particular purpose. Use by you of the utility is not supported by
	Microsoft Product Support Services (or Microsoft Product Support Services
	Support Professionals).
	
	MORE INFORMATION
	================
	
	ATSWeb does not provide any way within the interface to delete any unwanted
	database. You can delete the ATSWeb database by deleting the entire database
	directory in the physical hard drive where the database is located, but this
	will only delete the physical database: a reference to the database will still
	exist in ATSWeb. You need to follow the steps below to delete any unwanted
	database reference:
	
	1. Locate the ats.usr file in the ATSWeb directory, and open this file in
	  Notepad.
	
	2. The following settings appear in the ats.usr file:
	
	  [App]
	  MainWinZoom=2
	  MainWinTop=393
	  MainWinLeft=723
	  MainWinHeight=311
	  MainWinWidth=499
	  DataPath1=c:\atsweb\servers\..\shardata\ 
	  DataPath2=c:\test
	  DataPath3=
	  DataPath4=
	  ...
	
	3. To delete the reference to the database, remove the path next to the DataPath
	  keyword and save the file. For example, to delete the database reference to
	  'c:\test' directory, remove the path information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVSsearch kbVFPsearch kbAudDeveloper kbATS200 kbVFP600 kbVS97Search
	Version           : :2.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
