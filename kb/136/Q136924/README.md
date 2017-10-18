---
layout: page
title: "Q136924: Visual FoxPro 3.0 Undocumented Properties"
permalink: kb/136/Q136924/
---

## Q136924: Visual FoxPro 3.0 Undocumented Properties

	Article: Q136924
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
	
	Visual FoxPro uses internal, hidden properties to accomplish some of its tasks.
	The DoCreate, ErasePage, ReleaseErase, and ReleaseWindows properties are not
	documented in the online Help. They are described in this article.
	
	NOTE: These properties are undocumented, so they may be changed or omitted
	without notice from future releases of Visual FoxPro. Their reliability is not
	guaranteed.
	
	MORE INFORMATION
	================
	
	Visual FoxPro uses tables to store data that defines different file types. For
	example, Form files (.scx) and Visual Class Library files (.vcx) are tables.
	Because these files are actually tables, you can use and browse them in the same
	way that you browse any .dbf file.
	
	In a Form or Visual Class Library file, the Properties field stores the
	properties of objects in the Form or Visual Class Library. Some of the
	properties listed are hidden and used internally only, so a description of their
	functionality is not included in the documentation that comes with Visual
	FoxPro. These properties are described in the following table:
	
	Property          Description
	
	DoCreate          Hidden property of a form used for internal purposes
	                 only. When DoCreate is encountered, form load
	                 performance and memory utilization is optimized. If not
	                 encountered, there is slightly more memory usage by the
	                 form.
	
	ErasePage         Used to support FoxPro 2.6 READ compatible forms. When
	                 set to false (.F.), it specifies that objects remain
	                 visible from other active READ levels.
	
	ReleaseErase      Used to support FoxPro 2.6 READ compatible forms. It
	                 determines whether a control remains on a form after a
	                 READ terminates.
	
	ReleaseWindows    Used to support FoxPro 2.6 READ compatible forms.
	                 It specifies whether Release Windows was activated in the
	                 FoxPro 2.6 Generate or Project Manager dialogs.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
