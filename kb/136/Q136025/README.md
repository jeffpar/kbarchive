---
layout: page
title: "Q136025: How to Use Class Browser to Move Objects from Class to Class"
permalink: kb/136/Q136025/
---

## Q136025: How to Use Class Browser to Move Objects from Class to Class

	Article: Q136025
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Class Browser to copy objects from one class library to another
	by using the drag and drop feature.
	
	MORE INFORMATION
	================
	
	A typical drag and drop interface allows you to move or copy an object by
	dragging it from one editing region to another. However, the Class Browser
	included with Visual FoxPro requires that you first select the object to be
	moved or copied, and then drag an icon that appears above the editing region
	from one instance of the Class Browser to another. The following procedure
	describes how to move an object from one class to another.
	
	1. Open or switch to Visual FoxPro, and launch two instances of the Class
	  Browser. The first instance should be looking at the source class (the class
	  containing the object to be copied) and the second should be looking at the
	  destination class (the class into which the object is to be placed).
	
	2. Select the object in the source class that you want to copy. Note that upon
	  selection, an icon appears above the edit region (or class list) that
	  represents the selected object.
	
	3. Drag the icon into the region between the toolbar and the edit region (class
	  list) of the instance of the Class Browser containing the target class. This
	  will cause the selected object to be copied.
	
	NOTE: You may also copy entire library files from one project to another using
	drag and drop functionality between project windows.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
