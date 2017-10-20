---
layout: page
title: "Q156872: BUG: Errors Checking In or Out a Custom Resource File (.RES)"
permalink: /kb/156/Q156872/
---

## Q156872: BUG: Errors Checking In or Out a Custom Resource File (.RES)

{% raw %}

	Article: Q156872
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbVBp400bug
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Visual Basic project uses a Resource (.RES) file and is under Source
	Code Control with Visual SourceSafe, you may receive the following error message
	when checking in just the .RES file:
	
	  Can't load file <path>\<filename>.RES in the Visual Basic
	  project. Ensure the Visual Basic project file is checked out.
	
	CAUSE
	=====
	
	Visual Basic fails to reload the file when Visual SourceSafe calls the reload
	method on the project template item for .RES file.
	
	WORKAROUND
	==========
	
	If the .VBP file is checked out when the .RES file is being checked in, the
	error message can be ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a Visual Basic project that contains a custom Resource File (.RES).
	
	2. Add the project to Source Code Control.
	
	3. Check out the entire project (including the .VBP).
	
	4. Check in just the .RES file. The following error message will display:
	
	  Can't load file <path>\<filename>.RES in the Visual Basic
	  project. Ensure the Visual Basic project file is checked out.
	
	5. Click OK. The .RES file is checked in and everything else is still checked
	  out.
	
	6. Check out just the .RES file. The above error message will display again.
	
	7. Click OK. The .RES file is checked out and everything else is still checked
	  out.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbVBp400bug 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
