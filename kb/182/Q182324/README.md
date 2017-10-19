---
layout: page
title: "Q182324: FIX: Component Gallery Errors with Read-Only Project Files"
permalink: /kb/182/Q182324/
---

## Q182324: FIX: Component Gallery Errors with Read-Only Project Files

	Article: Q182324
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbide kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Component Gallery, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When inserting a standard MFC component from the Component Gallery, a message
	box appears with the following text:
	
	  Errors encountered:
	
	  <a long list with no filenames>
	
	  Continuing may render your project unbuildable. Continue?
	
	Clicking Yes causes the Visual C++ IDE (Integrated Development Environment) to
	hang.
	
	Other components may provide other errors indicating that the insertion failed.
	Some state that the control has probably already been added to the project.
	
	CAUSE
	=====
	
	Source file permissions are read-only, perhaps due to source control.
	
	RESOLUTION
	==========
	
	Change the source file permissions to permit write access. In a source control
	environment, this may require checking out the file, or having the file's
	current owner check it back in.
	
	STATUS
	======
	
	In Visual C++ version 6.0, the IDE no longer hangs when the Yes button in the
	previous error message is clicked. However, the inability to add controls to
	read-only files is a restriction of the operating system and is by-design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC AppWizard (exe) project.
	
	2. Change the file permissions to read-only for all files except the .ncb file.
	
	3. On the Project menu, click Add to Project, and then click Components and
	  Controls.
	
	4. Select Visual C++ Components, and insert a status bar (select "use the system
	  defaults" in the wizard).
	
	  NOTE: The message box described in the SYMPTOMS section appears.
	
	5. Click Yes.
	
	RESULTS: The Visual C++ IDE will hang in versions before Visual C++ version 6.0.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182323 BUG: ClassView Add... Errors with Read-Only Project Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbide kbVC420bug kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbCompGallery
	Version           : winnt:4.2,5.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
