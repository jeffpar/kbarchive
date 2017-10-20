---
layout: page
title: "Q189922: PRB: Copying Folder in Component Gallery Copies Folder Only"
permalink: /kb/189/Q189922/
---

## Q189922: PRB: Copying Folder in Component Gallery Copies Folder Only

{% raw %}

	Article: Q189922
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
	
	When you drag a folder in a catalog in the Component Gallery, it only copies the
	folder. The contents of the folder are not copied.
	
	RESOLUTION
	==========
	
	The items inside the folder must be copied individually.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Component Gallery.
	
	2. In the Visual FoxPro Catalog, drag the Data folder into the Tools folder.
	
	3. Open the Tools folder.
	
	RESULT: The Tools folder contains a new folder named "Copy of Catalogs," but this
	folder is empty.
	
	Additional query words: kbVFp600 kbXBase kbTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
