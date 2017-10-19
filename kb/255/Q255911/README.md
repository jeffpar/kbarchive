---
layout: page
title: "Q255911: INFO: Integrating SourceSafe on Novell w/V InterDev or FrontPage"
permalink: /kb/255/Q255911/
---

## Q255911: INFO: Integrating SourceSafe on Novell w/V InterDev or FrontPage

	Article: Q255911
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0,98
	Operating System(s): 
	Keyword(s): kbFrontPage kbSSafe600 kbVisID600 kbDSupport kbGrpDSSSafe
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- FrontPage 2000 Server Extensions from Microsoft 
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adding Web projects to Visual SourceSafe when it is installed on a Novell server
	is basically the same as when Visual SourceSafe is installed on any other remote
	server. The key to getting the integration to work is to make sure that the
	permissions are correct.
	
	MORE INFORMATION
	================
	
	The steps you use to integrate Visual SourceSafe on Novell are the same as those
	you use when Visual SourceSafe is on a Microsoft Windows NT-based computer but
	not on the Web server are as follows:
	
	1. Install the Visual SourceSafe client on the Web server by running the
	  netsetup.exe file from the Novell SourceSafe directory. This registers the
	  ssapi.dll file that is needed for the integration and also points to the
	  correct database.
	
	2. Turn off Allow Anonymous for the Web project by opening Internet Services
	  Manager, right-clicking on the Web project, and then selecting Properties.
	
	3. On the Directory Security tab, click Edit for Authentication control, and
	  then deselect the Allow Anonymous choice.
	
	4. Ensure that the user who is opening the Web site is a user in Visual
	  SourceSafe, can access the Novell server, and has permissions to the Visual
	  SourceSafe database directory.
	
	  NOTE: The FrontPage Server Extensions need the username that is editing the
	  Web site to try to add to Visual SourceSafe so that the account can find the
	  Novell server. Do this as follows:
	
	   - Open the project and, on the Project menu, point to Source Control, and
	     then click on Add to Source Control.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q171116 HOWTO: Enable VSS Integration with FrontPage and Visual InterDev
	
	  Q241963 INFO: SourceSafe Integration Changes with 2000 Server Extensions
	
	Additional query words: netsetup ssapi
	
	======================================================================
	Keywords          : kbFrontPage kbSSafe600 kbVisID600 kbDSupport kbGrpDSSSafe 
	Technology        : kbVisIDsearch kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbFrontPageServXSearch _IKkbZNotKeyword4 kbFrontPage2000Search kbFrontPage98Search kbZNotKeyword3 kbFrontPage2000ServX kbZNotKeyword5 kbVisID600 kbSSafe600 kbSSafe500
	Version           : :5.0,6.0,98
	Issue type        : kbinfo
	
	=============================================================================
	
