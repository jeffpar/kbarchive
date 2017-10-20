---
layout: page
title: "Q234840: MOD2000: &quot;Get Object from SourceSafe&quot; Command Gets New Object"
permalink: /kb/234/Q234840/
---

## Q234840: MOD2000: &quot;Get Object from SourceSafe&quot; Command Gets New Object

{% raw %}

	Article: Q234840
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you click the "Get Object from SourceSafe" command to get an object that is
	already in your local copy of the current project, another copy of the object is
	retrieved, renamed, and treated like a new object that is not yet under source
	code control. For example, Sheet1 would be renamed Sheet11.
	
	CAUSE
	=====
	
	The VBA Source Code Control add-in allows you to get an object from the
	controlling Visual SourceSafe project even though the object is already in the
	current VBA project.
	
	RESOLUTION
	==========
	
	Do not invoke the "Get Object from SourceSafe" command to update an object that
	is already in the current project. If you need a new copy of an existing object,
	right-click the object in the Project Explorer, and then click Get Latest
	Version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install Microsoft Visual SourceSafe and Microsoft Excel 2000.
	
	2. Create new workbook in Excel.
	
	3. In the new workbook, create a new sheet named Test.
	
	4. Open the Visual Basic Editor (ALT+F11).
	
	5. If VBA Source Code Control is on the Add-ins menu, go to step 5. If it is
	  not, do the following:
	
	  a. On the Add-ins menu, click Add-in Manager.
	
	  b. In the Add-in Manager dialog box, click VBA Source Code Control.
	
	  c. Under Load Behavior, click to select the Loaded/Unloaded check box.
	
	  d. Click OK.
	
	6. On the Add-ins menu, point to VBA Source Code Control, and then click Add
	  Project to SourceSafe. In SourceSafe, add all of the objects. After the
	  project is added, quit SourceSafe.
	
	7. On the Add-ins menu, point to VBA Source Code Control, and click "Get Object
	  from SourceSafe".
	
	8. In SourceSafe, select the Test sheet, and then click Get. The "Add Files to
	  SourceSafe" dialog box appears with the object Test1 listed.
	
	9. Click Add. Note that the object is retrieved with the new name, Test1, and is
	  now an extra object in the SourceSafe project.
	
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : :; WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
