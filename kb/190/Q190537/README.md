---
layout: page
title: "Q190537: PRB: Adding Active Document to the Office Binder Fails"
permalink: /kb/190/Q190537/
---

## Q190537: PRB: Adding Active Document to the Office Binder Fails

{% raw %}

	Article: Q190537
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to add a Visual FoxPro Active Document application to the Office
	Binder results in the following error:
	
	  Office Binder cannot add the section to the binder. This type of file may not
	  be supported by Office Binder. An unexpected error has occurred.
	
	CAUSE
	=====
	
	Visual FoxPro does not support the file storage mechanism that is required by
	the Office Binder.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Office Binder.
	
	2. From the Section menu, select Add.
	
	3. Select Microsoft Visual FoxPro Application and then click OK.
	
	The error message appears.
	
	Additional query words: kbVFp600 kbInterOp KBActiveDocs
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
