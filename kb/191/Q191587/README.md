---
layout: page
title: "Q191587: HOWTO: Remove a Catalog from Component Gallery View"
permalink: /kb/191/Q191587/
---

## Q191587: HOWTO: Remove a Catalog from Component Gallery View

{% raw %}

	Article: Q191587
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can remove a catalog from the Component Gallery
	view.
	
	MORE INFORMATION
	================
	
	When you are creating a catalog in the Component Gallery, a table (.dbf &
	.fpt) is actually created. There are three ways in which you can remove the
	catalog from the view of the Component Gallery.
	
	- Select the catalog and right-click to open the shortcut menu, and then select
	  Remove. This removes the catalog from the current view of Component Gallery.
	
	  -or-
	
	- Select the Options button on the toolbar to go into the Component Gallery
	  Options dialog box. Select the Catalogs tab. In the list box, select the name
	  of the catalog you wish to remove. Select the Default check box to clear the
	  check box, then click OK to exit from the Component Gallery Options dialog.
	  The catalog is removed from the view of the Component Gallery the next time
	  you re-start Component Gallery. This option disables the auto-load of the
	  catalog the next time you start Component Gallery.
	
	  -or-
	
	- Deleting the catalog table from the computer's hard drive permanently removes
	  the catalog from the component Gallery.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, version 6.0; search on "Catalogs Tab"; "Component Gallery
	Options Dialog Box"
	
	Additional query words: kbVFp600 kbXBase kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
