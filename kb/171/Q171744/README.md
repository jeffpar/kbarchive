---
layout: page
title: "Q171744: FIX: DragIcon Property with Cursor Files Does Not Work in an EXE"
permalink: /kb/171/Q171744/
---

## Q171744: FIX: DragIcon Property with Cursor Files Does Not Work in an EXE

{% raw %}

	Article: Q171744
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Including certain cursor files (.cur) in a project causes the DragIcon property
	to malfunction in a Visual FoxPro for Windows 5.0a executable. The cursor files
	work properly, however, in the form or the application when run under the
	development environment of Visual FoxPro 5.0a.
	
	RESOLUTION
	==========
	
	Do not include the cursor files in the project. Using the Project Manager, mark
	the cursor files as Excluded. If the cursor files are excluded from the project,
	the cursor files need to be supplied with the executable by another means.
	
	A second option is to assign the DragIcon property at runtime.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available. This has been corrected in
	Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	When using certain cursor files that shipped with Visual Studio 97, the
	executable version of an application ignores the DragIcon property. The cursor
	files that do not work with the DragIcon property in an executable file follow:
	
	- 4way01.cur
	
	- 4way02.cur
	
	- 4way03.cur
	
	- 4way06.cur
	
	- 4way07.cur
	
	- 4way08.cur
	
	- 4way09.cur
	
	- C_wait02.cur
	
	- Ew_06.cur
	
	- Normal02.cur
	
	Cursor files 4way04.cur, 4way05.cur, and Cross04.cur do function properly.
	
	NOTE: This is not intended as a comprehensive list of cursor files and their
	suitability for usage with the DragIcon property.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project called Test.
	
	2. Add a main program file to the project that contains the following code:
	
	        DO FORM Test
	        READ EVENTS
	
	3. Create a form called Test and add a shape to the form. Set the following
	  properties of the shape object:
	
	        BackColor=255,0,0
	        DragMode=1
	        DragIcon=devstudio\Samples\graphics\cursor\4way01.cur
	
	  ** NOTE: The above path to 4way01.cur may need to be changed.
	
	4. Add a command button containing the following code in the Click event:
	
	        ThisForm.Release
	        CLEAR EVENTS
	
	5. Build an application file and execute under it Visual FoxPro development
	  environment.
	
	6. Drag the shape object and notice the DragIcon is the specified cursor.
	
	7. Now build an executable file and run it outside of Visual FoxPro.
	
	8. Drag the shape and notice that no icon appears.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : WINDOWS:5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
