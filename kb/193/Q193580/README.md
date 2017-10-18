---
layout: page
title: "Q193580: PRB: Checking Out Structure.cnf in VSS Causes FrontPage Error"
permalink: kb/193/Q193580/
---

## Q193580: PRB: Checking Out Structure.cnf in VSS Causes FrontPage Error

	Article: Q193580
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbFrontPage kbSSafe500 kbSSafe600 kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs in FrontPage Explorer after you change the
	navigational structure of a source controlled Web:
	
	  Server error: "Visual Source Safe failure. Verify that you have write
	  access to the Visual Source Safe repository. A "You currently have file
	  $/<projectname>/_vti_pvt/structure.cnf checked out" error occurred    while operating on file $/<projectname>/_vti_pvt/structure.cnf."
	
	After clicking OK, you get the following message:
	
	  FrontPage cannot save the changes you made in the Navigation view. Do you
	  want to get the latest Navigation structure from the server?
	
	NOTE: Click Yes to answer the previous question. This ensures that changes made
	to the navigational structure are saved despite the error messages that appear
	in FrontPage.
	
	CAUSE
	=====
	
	When the navigational structure is modified, FrontPage does a silent checkout,
	update, and check in of Structure.cnf. If Structure.cnf is already checked out
	using the Visual SourceSafe Explorer, FrontPage cannot check out the file and
	the error messages appear.
	
	RESOLUTION
	==========
	
	Check out all FrontPage files using the FrontPage Explorer.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you are working solely through the FrontPage Explorer, you do not see files
	contained in the _vti_pvt directory. The only way to check out those files is
	through the Visual SourceSafe Explorer. It is strongly recommended that all
	FrontPage files are checked in and out using the Visual SourceSafe integration
	in the FrontPage Explorer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the FrontPage Explorer and create a new one page Web called testweb.
	
	2. Add testweb to source control by going to Tools menu, clicking Web Settings,
	  click the Configuration tab, and typing the following in the Source Control
	  Project edit box: " $/testweb " (without the quotation marks)
	
	3. Click OK. Click Yes to update the project.
	
	4. Open the Visual SourceSafe Explorer and find testweb, which is a subproject
	  of the root project ($/).
	
	5. Set a working folder for testweb. Check out Structure.cnf, which is located
	  in the _vti_pvt subproject. In this example, Structure.cnf should be located
	  in $/testweb/_vti_pvt.
	
	6. Switch back to FrontPage Explorer. Go to the View menu, and click Navigation.
	  Rename the Home Page navigation bar to My Home Page by right-clicking on the
	  navigation bar and clicking Rename.
	
	7. Close the FrontPage Web.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q183735 PRB: Saving a File in FrontPage Does a Silent CheckIn
	
	  Q191289 HOWTO: Enable Event Error Logging for FrontPage 98 & SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbFrontPage kbSSafe500 kbSSafe600 kbSSExplorer 
	Technology        : kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
