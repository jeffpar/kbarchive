---
layout: page
title: "Q195584: PRB: Create New Catalog Shows the Name of the Catalog and Path"
permalink: /kb/195/Q195584/
---

## Q195584: PRB: Create New Catalog Shows the Name of the Catalog and Path

{% raw %}

	Article: Q195584
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a new catalog in the Component Gallery, the newly created catalog
	name and path is listed in the catalog list box. Additionally, the Global and
	Default check boxes are dimmed.
	
	CAUSE
	=====
	
	Each time you create a new catalog, the filename is first stored in an array.
	The catalog is not created until you close the Component Gallery Options dialog
	box. The Global and Default check boxes are enabled and the path to the catalog
	is removed for the next time when the Options dialog box opens again.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Launch Component Gallery.
	
	2. Click the Component Gallery Options button.
	
	3. Select the Catalog tab in the Component Gallery Options dialog box.
	
	4. Click the New button to create a new catalog.
	
	5. In the Save As dialog box, type in the name of the new catalog, and click the
	  Save button.
	
	6. Once you are back to the Component Gallery Options dialog box, the name of
	  the new catalog shows up, including the path.
	
	7. Select the newly created catalog name in the list box.
	
	  NOTE: The Global and Default check boxes are both unavailable.
	
	8. Next, click the OK button to close the Component Gallery Options dialog box.
	
	9. Click the Component Gallery Options button to open the Component Gallery
	  Options dialog box again.
	
	10. Select the Catalogs tab. The path for the newly created catalog name is
	  gone. Select the catalog name in the list box. The Global and Default check
	  boxes are now available.
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "Component Gallery Options"; topic: "Component
	Gallery Options dialog box"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
