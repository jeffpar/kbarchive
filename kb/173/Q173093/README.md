---
layout: page
title: "Q173093: BUG: Moving .VBP File Can Corrupt References with Long Paths"
permalink: /kb/173/Q173093/
---

## Q173093: BUG: Moving .VBP File Can Corrupt References with Long Paths

{% raw %}

	Article: Q173093
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When moving a Visual Basic 5.0 or 6.0 project from one folder to another, you
	may see corruption to references that include a path longer than approximately
	40 characters (such as DAO 3.5) in the project's .vbp file. On the same drive,
	this problem can occur when one of the folders is at least one level lower in
	the directory tree structure than the other. This problem does not occur when
	saving the project to a different folder within the IDE.
	
	This corruption may also occur when checking a VBP file out of Visual SourceSafe,
	if the file was previously saved and then checked in from a different computer,
	even if the directory structure used to store the project on the other machine
	is identical to that used on your computer.
	
	RESOLUTION
	==========
	
	Avoid moving .vbp files, or save them through the IDE to their new location
	using File | Save As. Attempting to edit and correct the corrupt .vbp file in
	Notepad does not work because the file becomes corrupt again the next time it is
	saved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Corruption of the .vbp file may occur when the project is moved to a different
	directory.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two new directories as follows: C:\aaaTestThisBug
	  C:\aaaFirstLevel\SecondLevel One of the directories needs to be two or more
	  levels down.
	
	2. Start a new Visual Basic Standard EXE project, Project1.
	
	3. On the Project menu, click References and add at least one reference whose
	  path is longer than approximately 40 characters (The reference to Microsoft
	  DAO 3.5 or 3.51 (Visual Basic 6.0) Object Library is a good one).
	
	4. Save Project1 to C:\aaaTestThisBug and exit Visual Basic. Using Windows
	  Explorer, move the .vbp, .vbw, and .frm files associated with this project to
	  C:\aaaFirstLevel\SecondLevel.
	
	5. Open the .vbp file in Notepad and note that the all of the paths for the
	  references are still correct.
	
	6. Close Notepad.
	
	7. Open Project1 with Visual Basic.
	
	8. Save and Close Project1. Answer "yes" when prompted to save changes.
	
	9. Examine the .vbp file in Notepad. Note that any reference that includes a
	  path longer than approximately 40 characters is likely to be corrupted.
	
	Examples of sections from good and bad .vbp files
	-------------------------------------------------
	
	DAO 3.5 reference from a good file:
	
	  Reference=*\G{00025E01-0000-0000-C000-000000000046}#4.0#0#..\Program
	  Files\Common Files\Microsoft Shared\DAO\DAO350.DLL#Microsoft
	  DAO 3.5 Object Library
	
	DAO 3.5 reference from a bad file:
	
	  Reference=*\G{00025E01-0000-0000-C000-000000000046}#4.0#0#..\..\..\ 
	  Program Files\Common Files\Microsoft Shared\DC:\Program Fi#Microsoft
	  DAO 3.5 Object Library
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
