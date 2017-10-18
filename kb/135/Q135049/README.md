---
layout: page
title: "Q135049: FIX: Rebuilding .CLW File Does Not Restore Link to ODL File"
permalink: kb/135/Q135049/
---

## Q135049: FIX: Rebuilding .CLW File Does Not Restore Link to ODL File

	Article: Q135049
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC200bug kbVC210 kbVC220fix kbClassWizard kbGrpDSTools kbNoUpdatekbbug
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A project's Object Description Language (ODL) file is not updated when new
	automation properties and methods are added using ClassWizard. The project's
	ClassWizard (.clw) file has been deleted and rebuilt prior to the occurrence of
	this behavior. All properties and methods added before the rebuilding of the
	ClassWizard file are still correctly listed in the ODL file.
	
	CAUSE
	=====
	
	When the .clw file is rebuilt by the development environment, the ODLFile=
	keyword line is not added to the new file.
	
	RESOLUTION
	==========
	
	The ODLFile= entry must be manually added to the .clw file so that ClassWizard
	can add properties and methods to the ODL file. The ODLFile= entry can be added
	by using the development environment editor or Notepad.
	
	Manually adding the ODLFile= entry will not automatically update the ODL file to
	bring it back in synch with ClassWizard. Any properties and methods that were
	added via ClassWizard while the ODLFile= entry was missing from the .clw file
	must be either manually added to the ODL file or removed and then added again by
	using the ClassWizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 2.2 for
	Windows NT.
	
	MORE INFORMATION
	================
	
	An example of the ODLFile= line can be found in the .clw file provided with the
	AutoClik sample. In this sample, the [General Info] section of the Autoclik.clw
	file includes the following line:
	
	     ODLFile=autoclik.odl
	
	ClassWizard uses this reference to a specific ODL to determine the file to update
	when new properties and methods are added. When the .clw file is rebuilt using
	the ClassWizard option from the development environment Resource Editor, the
	ODLFile= reference line is not included in the newly built .clw file. After the
	rebuild, ClassWizard does not issue a warning when adding new properties and
	methods to the new .clw file even though the changes are not reflected in the
	ODL file.
	
	This problem does not appear in Visual C++ version 4.0. Visual C++ 4.0 does not
	use a keyword in the .clw file to keep track of the name of the ODL file.
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC200bug kbVC210 kbVC220fix kbClassWizard kbGrpDSTools kbNoUpdate kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC210
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
