---
layout: page
title: "Q216087: PRB: Err &quot;Unable to find Visual Class Library&quot;"
permalink: /kb/216/Q216087/
---

## Q216087: PRB: Err &quot;Unable to find Visual Class Library&quot;

{% raw %}

	Article: Q216087
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600bug kbFFC
	Last Modified: 10-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the _Utility Visual class library is added to a project, the following error
	message displays when the project is built:
	
	  Unable to find Visual Class Library.
	
	CAUSE
	=====
	
	The _xtab Visual class in the _Utility Visual class library contains some method
	code that uses the NEWOBJECT() function to create a new class from the _GENXTAB
	system variable. The _GENXTAB system memory variable is referencing the
	Vfpxtab.prg program file.
	
	RESOLUTION
	==========
	
	Open the _xtab Visual class in the _Utility Visual class library, which is
	located in the \FFC folder. Once the _xtab class is open, open the Runxtab
	method. Change the following line of code:
	
	  oNewXtab=NEWOBJECT('genxtab',(_GENXTAB),"",;
	
	Replace the _GENXTAB to point directly to the VFPXTAB program. For example:
	
	  oNewXtab=NEWOBJECT('genxtab',"Home()+"vfpxtab.prg","",;
	
	MORE INFORMATION
	================
	
	If you choose the Ignore or Ignore all options from the error message, the
	project continues to build. If you choose the Locate option and add any Visual
	class library to the project, whether it is the correct Visual class library or
	not, it will be added without being checked if it already exists in the project.
	Therefore, you could end up with multiple instances of the Visual class library
	in the project, and it does not prevent the error from occurring on the next
	build.
	
	Steps to Reproduce the Error
	
	1. Create a new project, add a form and then modify the form.
	
	2. From the Tools menu, choose Component Gallery.
	
	3. Locate and open the Foundation Classes folder.
	
	4. Open the Automation folder and add the Graph by Record class to the form.
	
	5. Save and close the form.
	
	6. Build the project.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600bug kbFFC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
