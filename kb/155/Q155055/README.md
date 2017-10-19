---
layout: page
title: "Q155055: PRB: Problem Adding VB File from Other Drive to VSS Project"
permalink: /kb/155/Q155055/
---

## Q155055: PRB: Problem Adding VB File from Other Drive to VSS Project

	Article: Q155055
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbVBp400
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Basic Forms and other files can be located anywhere on any machine. The
	.VBP file contains pointers to these files wherever they may be located. Visual
	SourceSafe needs to have the project files somewhere in the working directory
	structure in order to make the mapping association with the project. If this
	mapping association is not followed, the glyphs that represent file status may
	be incorrect.
	
	For example, a file's glyph in the SourceSafe Explorer may indicate that the file
	is under source code control and not checked out (for instance, the file is
	read-only) while the Visual Basic glyph may say that the file is writable. This
	behavior occurs because the .VBP file is looking at one file and Visual
	SourceSafe is looking at a different copy of the same file.
	
	CAUSE
	=====
	
	The Form on the different drive is a read/write file. The form in the working
	directory is a read-only file. Visual Basic is still looking at the file on the
	different drive while Visual SourceSafe is looking at the file in the working
	directory.
	
	RESOLUTION
	==========
	
	Save the project (File, Save Project), and then refresh the project (Add- Ins,
	SourceSafe, Refresh File Status). These two steps update the .VBP file so it is
	looking at the file written for that project in the SourceSafe Working
	Directory. The original file still exists in the location where it was
	originally saved, but the Visual Basic project no longer points to it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. Start up the Source Code Control Options (Add-Ins, SourceSafe, Options). Set
	  "Add files to source control when adding them to Visual Basic" to NO.
	
	3. Open a Visual Basic project that is under source code control. Check the
	  files out. Add a new form to the Visual Basic project and save this new form
	  to a different drive.
	
	4. Run the following SourceSafe command:
	
	  "Add-Ins, SourceSafe, Add files to SourceSafe..."
	
	  and select the newly-saved form.
	
	  The following informational message will be displayed:
	
	  File <path on different drive>\<newform>.frm could not be mapped
	  to the SourceSafe project $/<SourceSafe Project>. Copy the file to
	  <working directory path>?
	
	5. Answer YES to the message. The following message is then displayed:
	
	  "Please save and check-in your Visual Basic project file. Otherwise your
	  project will contain references to the remapped files in their old locations
	  instead of their current locations."
	
	  NOTE: The glyph for the form shows that the form is under source code control
	  but its checkin/checkout status is not defined.
	
	6. Save the project. Check in the project file. At this point, the glyphs
	  display as they should.
	
	The original copy of the form is still located on the different drive. In
	addition, the new copy of the form is located in the project working directory.
	Only the new copy of the form is pointed to by the .VBP and updated with Visual
	SourceSafe. The old copy will need to be deleted manually.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbVBp400 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
