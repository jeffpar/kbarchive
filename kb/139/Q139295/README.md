---
layout: page
title: "Q139295: FIX: Local File Is Not Saved with Save All"
permalink: kb/139/Q139295/
---

## Q139295: FIX: Local File Is Not Saved with Save All

	Article: Q139295
	Product(s): Microsoft C Compiler
	Version(s): 2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.2, 4.0, 4.1, 4.2 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Save All will not save a file loaded into the Developer's Studio editing
	environment if all of the following are true:
	
	- The loaded file is not modified in the editor.
	
	- The copy of the file stored on disk is modified.
	
	- The modified version is not reloaded.
	
	Subsequent builds will use the version on disk that does not match the one in the
	editor. Debugging will display in the loaded version, but the debug information
	will be from the version on disk.
	
	CAUSE
	=====
	
	The Developer's Studio does not recognize that an unchanged file may need to be
	saved. It assumes that this would have no effect, so the save does not occur.
	
	WORKAROUND
	==========
	
	If a change you do not want occurs with an external file and you want the local
	copy of the file to replace the one on disk, use Save rather than Save All.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Microsoft Developer's Studio, and load a project.
	
	2. Open a file containing code, but make no changes.
	
	3. On the Tools menu, click Options, and then click the Editor tab. Turn off the
	  'Automatic reload of externally modified files' switch.
	
	4. Using the Notepad editor, load the same file you are editing in the
	  Developer's Studio. Introduce a compile time error, and save the file.
	
	5. Switch back to the Developer's Studio.
	
	6. Answer No when you're asked "This file has been modified outside the source
	  editor. Do you want to reload it?"
	
	7. On the File menu, click Save All. This should replace the modified file on
	  disk with the copy previously loaded into Developer's Studio, but it does
	  not.
	
	8. Build the project. The compiler will report the errors you introduced. Click
	  the error or press the F4 key to jump to a line in the file (which does not
	  contain the error) that is loaded in Developer's Studio.
	
	Example Workaround
	------------------
	
	To work around the problem, replace step 7 with this:
	
	1. On the Window menu, select the file that was modified externally. Then on the
	  File menu, click Save. This will replace the modified copy on disk with the
	  copy currently loaded in the Developer's Studio.
	
	Additional query words: kbVC400bug update
	
	======================================================================
	Keywords          : kbide kbVC kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbVC220 kbVC410 kbVC420 kbFORTRANPower32400NT
	Version           : :2.2,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
