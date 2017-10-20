---
layout: page
title: "Q282819: PRB: Wrong Path When You Connect to Database on Novell Server"
permalink: /kb/282/Q282819/
---

## Q282819: PRB: Wrong Path When You Connect to Database on Novell Server

{% raw %}

	Article: Q282819
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a Visual SourceSafe database that is located on a Novell
	Netware server, you may receive the following error message:
	
	  Path does not exist
	
	When you use a drive that is mapped to a share on a Novell server, Visual
	SourceSafe may not resolve the path correctly. For example, if drive T maps to
	the \\Server\Share\Directory\VSS share, Visual SourceSafe tries to use the
	\\Server\Share\VSS share and returns the error message.
	
	CAUSE
	=====
	
	This problem occurs because incomplete path information is returned to the Open
	SourceSafe Database dialog box. This is a known problem with Novell.
	
	RESOLUTION
	==========
	
	To resolve this problem, use a mapped drive that is mapped only to a
	\\Server\Share path. Do not add additional path information.
	
	WORKAROUND
	----------
	
	To work around this problem, manually type the path to the Srcsafe.ini file for
	the database in the Open SourceSafe Database dialog box. Do not click Browse in
	this dialog box to locate the Srcsafe.ini file.
	
	STATUS
	======
	
	For additional information about the status of this issue, visit the following
	Novell support site for Technical Information Document 2951842:
	
	  http://support.novell.com/search/kb_index.jsp
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install Visual SourceSafe on a computer.
	
	2. Use the Admin program to create a user.
	
	3. Open Visual SourceSafe Explorer, and then log on as the new user.
	
	4. Create a project in Visual SourceSafe Explorer.
	
	5. Copy all of the VSS directory (the directory that includes the Srcsafe.ini
	  file) to a directory on the server. By default, the VSS directory is located
	  in the following directory:
	
	  C:\Program Files\Microsoft Visual Studio\Common\VSS
	
	6. Map a drive to the Common directory on the server that you copied the VSS
	  directory to in step 4.
	
	7. In Visual SourceSafe Explorer, click Open SourceSafe Database on the File
	  menu.
	
	8. In the Open SourceSafe Database dialog box, click Browse.
	
	9. In the Look In box, click the mapped drive, and then locate the Srcsafe.ini
	  file in the VSS directory on the server. Notice that the database does not
	  open and that you receive the error message that is listed in the "Symptoms"
	  section.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: Novell Netware incorrect path
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
