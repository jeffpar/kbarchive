---
layout: page
title: "Q172346: FIX: Unable to Disable IME Box in a Grid at Runtime"
permalink: /kb/172/Q172346/
---

## Q172346: FIX: Unable to Disable IME Box in a Grid at Runtime

{% raw %}

	Article: Q172346
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbVS97sp2fix
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.x, the Input Method Editor (IME) box can be disabled in the
	development environment but cannot be disabled at runtime in an executable
	(.exe) file.
	
	CAUSE
	=====
	
	When a text box is in a grid, the grid code overwrites the text box object's
	IMEMode property and causes this behavior.
	
	RESOLUTION
	==========
	
	Two workarounds exist for this problem. First, place the following code in the
	GotFocus event of each individual text box in a grid to reset the IMEMode
	property:
	
	     This.IMEMode = 2
	
	Second, you can create a text box class that has the above code in the GotFocus
	event, and subclass all the text box objects in the grid from the text box
	class.
	
	Setting the IMEMode property in the Properties window for each individual text
	box does not work.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The IME box allows the user to input Double Byte Character Set (DBCS) characters
	into a character field. You can enable and disable the IME box automatically by
	selecting Tools and Options from the main menu and then selecting the "Browse
	IME Control" check box located on the General tab. Once the "Browse IME Control"
	is checked, the IME box is automatically enabled as you move into a character
	field in a grid.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure the Browse IME Control check box is selected by selecting Options
	  from the Tools menu, and then clicking the General tab.
	
	2. Create a project named "imeproj."
	
	3. Create a form named "imeform."
	
	4. Add a table (for example, customer) to the DataEnvironment of the form, and
	  drag the table to the form to create a grid.
	
	5. Go into each individual text box and set the IMEMode property to "2 - Close
	  IME."
	
	6. Add a command button to the form and put the following code in the Click
	  event:
	
	        RELEASE Thisform
	        CLEAR EVENTS
	
	7. Create a main program name "imemain," with the following code:
	
	        DO FORM imeform
	        READ EVENTS
	
	  Mark this program file as the main file in the project.
	
	8. Create and run the executable file.
	
	NOTE: The IME box still appears even though the IMEMode property is already set
	to "2 - Close IME."
	
	NOTE: The IME box only works on operating system platforms that support DBCS,
	such as Microsoft Windows 95 Traditional Chinese version.
	
	Additional query words: IME DBCS
	
	======================================================================
	Keywords          : kbvfp kbVS97sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
