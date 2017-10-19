---
layout: page
title: "Q241963: INFO: SourceSafe Integration Changes with 2000 Server Extensions"
permalink: /kb/241/Q241963/
---

## Q241963: INFO: SourceSafe Integration Changes with 2000 Server Extensions

	Article: Q241963
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbFrontPage kbSSafe500 kbSSafe600 kbVisID600 kbDSupport kbFPServX
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual InterDev, version 6.0 
	- FrontPage 2000 Server Extensions from Microsoft 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FrontPage 2000 Server Extensions introduce some changes in the SourceSafe
	integration:
	
	- The FrontPage 2000 client no longer allows a user to add a Web to Source
	  Control.
	
	- A single Web server can interact with multiple SourceSafe databases at the
	  same time.
	
	- Error logging is now enabled from the registry.
	
	MORE INFORMATION
	================
	
	Adding a project to SourceSafe:
	
	In previous versions of FrontPage, a user added a project to SourceSafe from the
	Tools menu by choosing Web settings and filling in the Source Control Project
	field. In FrontPage 2000, that option is no longer available. Adding projects to
	SourceSafe is done from inside the Microsoft Management Console (MMC). Look at
	"Advanced Administrative Tasks" in the FrontPage 2000 Server Extensions Resource
	Kit for more information on this. See the "Reference" section for information on
	how to locate the Resource Kit.
	
	Multiple SourceSafe databases:
	
	In previous versions of the FrontPage Server Extensions, a Web server could
	integrate with one SourceSafe database at a time. This is still the case with
	FrontPage 2000 Server Extensions, however there is a workaround that allows you
	to add projects to multiple databases. For more information see:
	
	  Q246123 HOWTO: Add Web Projects to Multiple SourceSafe Databases
	
	Error logging:
	
	In previous versions of FrontPage, to enable error logging from SourceSafe, it
	was required to edit the text file "Frontpg.ini". That functionality is now
	contained in the registry. For more information see:
	
	  Q191289 HOWTO: Enable Event Error Logging for FrontPage 98 and SourceSafe
	
	REFERENCES
	==========
	
	  http://officeupdate.microsoft.com/frontpage/wpp/serk/adadv.htm
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q236951 PRB: Specifying a SourceSafe Database for a VID Project
	
	  Q191289 HOWTO: Enable Event Error Logging for FrontPage 98 and SourceSafe
	
	  Q171116 HOWTO: Enable VSS Integration with FrontPage and Visual InterDev
	
	  Q246123 HOWTO: Add web projects to multiple SourceSafe databases
	
	Additional query words: FrontPage InterDev VID VSS
	
	======================================================================
	Keywords          : kbinterop kbFrontPage kbSSafe500 kbSSafe600 kbVisID600 kbDSupport kbFPServX 
	Technology        : kbVisIDsearch kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbFrontPageServXSearch kbFrontPage2000Search kbFrontPage2000ServX kbZNotKeyword5 kbVisID600 kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
