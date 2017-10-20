---
layout: page
title: "Q181392: PRB: Some Keywords Are Not Highlighted"
permalink: /kb/181/Q181392/
---

## Q181392: PRB: Some Keywords Are Not Highlighted

{% raw %}

	Article: Q181392
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Visual FoxPro keywords, like Release in ThisForm.Release, do not show up
	has highlighted words in the object's code window or the Command window.
	
	RESOLUTION
	==========
	
	The color of text in Visual FoxPro code can be changed using the Syntax Coloring
	tab of the Options dialog box that is accessed from the Tools menu. The Area
	drop-down list box in the Syntax color settings section is used to select
	different parts of the Visual FoxPro language for setting syntax coloring.
	
	To get keywords such as RELEASE and WHATSTHISHELP to use the same color as other
	Visual FoxPro keywords, set the Area to Variables and set the Foreground to Blue
	or to the color that the Keywords area is using.
	
	NOTE: After setting the Variables item to the specified color, all custom
	variables that are created will be the same color as the keywords and commands.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a command button.
	
	2. Double-click the command button to open the code window for the Click event.
	
	3. Type the following commands:
	
	        thisform.RELEASE
	        thisform.WHATSTHISHELP
	        thisform.WHATSTHISBUTTON
	        thisform.REFRESH
	        thisform.ACTIVATE
	
	4. The properties or events of the first three commands are not properly
	  highlighted in the code window. However, the last two commands are properly
	  highlighted.
	
	5. Close and do not save the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
