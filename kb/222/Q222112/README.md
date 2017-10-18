---
layout: page
title: "Q222112: FIX: Class Not Selected Opening Class Browser From Form Designer"
permalink: kb/222/Q222112/
---

## Q222112: FIX: Class Not Selected Opening Class Browser From Form Designer

	Article: Q222112
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbMiscTools kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When invoking the Class Browser to view the selected object in the Form
	Designer, the correct class will not be automatically selected when the Class
	Browser loads. This problem does not occur if the object in the Form Designer
	has the same name as the underlying class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code to demonstrate this problem:
	
	  CREATE CLASS frm AS FORM OF foot NOWAIT
	  KEYBOARD "{Y}"
	  RELEASE WINDOW 'class designer'
	  CREATE FORM footform AS frm FROM foot NOWAIT
	  ASELOBJ(xx,1)
	  KEYBOARD "{alt+t}c"
	
	Note that the Class Browser loads the appropriate class library (foot), but the
	form class (frm) is not selected.
	
	Changing the name of the form object such that it matches the name of the class
	will show the correct class selected in the Class Browser. For example, add the
	following code immediately after the line containing the ASELOBJ() function:
	
	  xx(1).Name="frm"
	
	and rerun the program. The Class Browser now selects the form class.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbMiscTools kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
