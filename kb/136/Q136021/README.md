---
layout: page
title: "Q136021: HOWTO: Move or Rename Files Used with Visual C++"
permalink: kb/136/Q136021/
---

## Q136021: HOWTO: Move or Rename Files Used with Visual C++

	Article: Q136021
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbVC400
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0 
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual C++ is tightly coupled with the Source Code Control Provider, such as
	Visual SourceSafe. This tight integration means that changes made within Visual
	SourceSafe explorer will be reflected immediately within the Visual C++
	Developer Studio.
	
	MORE INFORMATION
	================
	
	The Visual C++ Developer Studio uses glyphs and different colored icons to
	represent the status of any given file within Source Code Control. Specifically,
	if a given file within FileView is under Source Code Control, that file's icon
	is gray in color. If it is not under source code control, it is white in color.
	
	You can add files to a project under source code control. On the Tools menu,
	click Source Control and then click Add To Source Control. You can also remove
	files from source code control. On the Tools menu, click Source Control, and
	then click Remove From Source Control.
	
	Within the Visual SourceSafe Explorer, you can rename a file or a project that
	the file is in. If you do so while the Visual C++ Developer Studio is running,
	the glyphs will probably change to reflect the new state of either the file or
	project.
	
	If you just moved or renamed a single file or subset of files within a project
	workspace, the checkmark glyphs, if present, for those files will disappear, and
	the file icon will shift from gray (under source code control) to white (not
	under source code control). If you moved or renamed the entire project, all
	glyphs will change to indicate this.
	
	If you restore the original file name or move it back to its original location
	within the Visual SourceSafe Explorer project tree, Visual C++ will detect this
	and restore the glyphs as necessary to reflect the current state of that file.
	
	This tight coupling allows Visual C++ and a source code control provider to work
	together seamlessly.
	
	REFERENCES
	==========
	
	For additional information on how glyphs are used to represent that state of a
	project under source code control within the Visual C++ Developer Studio, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q136020 How to Use Glyphs in Visual C++ 4.0 with Source Code Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbVC400 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	
