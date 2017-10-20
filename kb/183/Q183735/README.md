---
layout: page
title: "Q183735: PRB: Saving a File in FrontPage Does a Silent Check In"
permalink: /kb/183/Q183735/
---

## Q183735: PRB: Saving a File in FrontPage Does a Silent Check In

{% raw %}

	Article: Q183735
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbFrontPage97 kbFrontPage98
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Source Controlled file for editing in FrontPage, and respond
	"No" when prompted to check it out, saving the file checks in any changes that
	were made.
	
	RESOLUTION
	==========
	
	Depending on your working environment, consider the following options:
	
	1. Always check files out before editing them.
	
	2. After opening the file, save it to a different location before editing the
	  file. NOTE: There is no way to automatically enforce either of these options.
	
	3. If a file has been inadvertently checked in, you can use the SourceSafe
	  Explorer to rollback to an earlier version. After doing a rollback, users
	  also have to select 'Recalculate Hyperlinks' to get that rolled- back version
	  out of the Visual SourceSafe (VSS) database into their master Web. Otherwise,
	  the master Web version will still be what was last saved.
	
	STATUS
	======
	
	This behavior is by design. When you save the file, FrontPage performs an
	implicit checkout - update [ASCII 150] checkin, in order to keep the version in
	the SourceSafe database synchronized with the content on the Web.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the FrontPage Explorer, open a Source Controlled Web.
	
	2. Open a file that is currently checked in, and select "No" when prompted to
	  check it out.
	
	3. Edit the file and save the changes.
	
	4. Using the SourceSafe Explorer, show the history of the file, and note that a
	  new version was created when the file was saved.
	
	NOTE: The exact behavior depends on the version of the FrontPage Server
	Extensions installed. In certain versions, messages such as "The file
	<filename> has been automatically checked out" are displayed, in others,
	no notification is given.
	
	REFERENCES
	==========
	
	For additional information, please see the FrontPage Server Extensions
	ResourceKit at the following Web site:
	
	  http://www.msdn.microsoft.com
	
	  Select Administration Tasks and Procedures, then Microsoft Visual
	  SourceSafe 5.0 Integration
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q171116 HOW TO: Enable VSS Integration With FrontPage and Visual Interdev
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by David de
	Groot, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbFrontPage97 kbFrontPage98 
	Technology        : kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
