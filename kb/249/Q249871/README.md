---
layout: page
title: "Q249871: BUG: Errors when Switching to a New MSDN Library Collection"
permalink: /kb/249/Q249871/
---

## Q249871: BUG: Errors when Switching to a New MSDN Library Collection

{% raw %}

	Article: Q249871
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMSDN kbVS600bug kbDSupport
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- Microsoft Visual Studio 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After changing the active MSDN Library collection, you may experience the
	following problems when launching Help from within Visual Studio:
	
	- The Start page for the MSDN Library is from the previous collection.
	- Launching Help from the Index tab displays content from the previous
	  collection.
	- The Help window title still names the previous collection.
	
	CAUSE
	=====
	
	These problems may occur when the MSDN Library and Visual Studio products are
	running when the active collection is changed.
	
	RESOLUTION
	==========
	
	Close the MSDN Library and any Visual Studio products before switching to a new
	collection. If the active collection was changed without doing this, closing and
	reopening the Visual Studio products should fix any of the problems described
	above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The active MSDN Library Collection is the one that Visual Studio 6.0 uses when
	Help is launched. There are two main ways to change the active collection. The
	first is through Visual C++ by clicking Options on the Tools menu. The Help
	System tab of the Options dialog box allows the user to change the active
	collection.
	
	As of the October 1999 MSDN Library, a new Collection Settings tool is available.
	On the Start menu, point to Programs. Under Microsoft Developer Network, click
	MSDN Library - Collection Settings.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following information provides specific information on how to reproduce each
	problem described in the SYMPTOMS section of this article:
	
	The Start Page for the MSDN Library is from the Previous Collection
	
	1. Install any Visual Studio 6.0 product.
	
	2. Install the MSDN Library - Visual Studio 6.0a.
	
	3. Install one of the other MSDN Library collections (for example October 1999
	  or January 2000).
	
	4. Use the Collection Settings tool to set the active collection to MSDN Library
	  - Visual Studio 6.0a.
	
	5. Launch the Visual Studio product.
	
	6. On the Help menu, click Contents. Note that the contents pane shows the
	  correct Start page for the MSDN Library - Visual Studio 6.0a.
	
	7. Close the MSDN Library, but leave the Visual Studio product open.
	
	8. Use the Collection Settings tool to set the active collection to a different
	  collection.
	
	9. On the Visual Studio product's Help menu, click Contents. Note that the
	  contents pane still shows the Start page for MSDN Library -Visual Studio
	  6.0a. However, the title bar and the table of contents match the active
	  collection setting.
	
	Launching Help from the Index Tab Displays Content from the Previous Collection
	
	1. Install Visual C++ 6.0.
	
	2. Install the MSDN Library - Visual Studio 6.0a.
	
	3. Install the MSDN Library January 2000.
	
	4. Use the Collection Settings tool to set the active collection to MSDN Library
	  - Visual Studio 6.0a.
	
	5. Create a Visual C++ project that contains the word "DialogBox".
	
	6. Without closing MSDN Library, use the Collection Settings tool to set the
	  active collection to MSDN Library - January 2000.
	
	7. In MSDN Library, select the Index tab, and then type "DialogBox". Click the
	  Display button. Note that the content displayed is from the previous MSDN
	  Library - Visual Studio 6.0a instead of the new MSDN Library - January 2000.
	  Note that F1 Help for DialogBox brings up the correct page from the new
	  active collection.
	
	The Help Window Title Still names the Previous Collection.
	
	1. Install Visual C++ 6.0.
	
	2. Install the MSDN Library - Visual Studio 6.0a.
	
	3. Install the MSDN Library January 2000.
	
	4. Use the Collection Settings tool to set the active collection to MSDN Library
	  - Visual Studio 6.0a.
	
	5. Create a Visual C++ project that contains the word "DialogBox".
	
	6. Click on the text "DialogBox" and press F1. The title of the MSDN Library
	  window is "MSDN Library Visual Studio 6.0".
	
	7. Without closing the MSDN Library, use the Collection Settings tool to set the
	  active collection to MSDN Library - January 2000.
	
	8. Repeat step 6. The title of the MSDN Library window is "MSDN Library -
	  January 2000".
	
	9. Without closing MSDN Library, use the Collection Settings tool to set the
	  active collection to MSDN Library - Visual Studio 6.0a.
	
	10. Repeat step 6. Note that the title still remains the same ("MSDN Library -
	  January 2000").
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMSDN kbVS600bug kbDSupport 
	Technology        : kbVSsearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbVS600 kbVS600Search
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
