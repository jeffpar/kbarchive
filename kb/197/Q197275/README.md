---
layout: page
title: "Q197275: FIX: _urlcombobox Class Closes Any Current Work Area"
permalink: kb/197/Q197275/
---

## Q197275: FIX: _urlcombobox Class Closes Any Current Work Area

	Article: Q197275
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The table in the selected work area closes after you run a form with a combo box
	based on the _urlcombobox class.
	
	RESOLUTION
	==========
	
	Open the _urlcombobox class and add SELECT 0 in line 14 of the OpenURLHistory
	method. After you make this change, the code should look as follows:
	
	  lcFileName=LOWER(FULLPATH(this.cURLHistoryTable))
	  SELECT 0
	  IF NOT EMPTY(SYS(2000,lcFileName))
	
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
	
	1. Create a form.
	
	2. Add the _internet class to the Form Control Tool bar by clicking View Classes
	  on the toolbar and clicking Add. The _internet.vcx is in the FFC folder.
	
	3. Open the Data Sessions window and open a table in the first work area. Make
	  sure it is selected. Leave the Data Session window open.
	
	4. Position the form so you can see both the form and the Data Session window.
	
	5. Add the _urlcombobox class to the form.
	
	6. Save and run the form.
	
	RESULT: The table in work area one closes and the table Urlhistory replaces it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
