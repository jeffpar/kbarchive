---
layout: page
title: "Q168196: PRB: Error Setting Partition of Grid Too Wide at Design Time"
permalink: /kb/168/Q168196/
---

## Q168196: PRB: Error Setting Partition of Grid Too Wide at Design Time

{% raw %}

	Article: Q168196
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro version 3.0 for Windows or Macintosh, sizing the partition of a
	Grid in the Form Designer beyond a certain size, usually in the range of 300 to
	330 pixels, causes one of the following errors to occur at run time:
	
	  Error loading file - Partition - record number <n>. Expression
	  evaluated to an illegal value.
	
	  -or-
	
	  The partition number is reset to zero and a normal Grid is displayed at run
	  time.
	
	If you're using Visual FoxPro 5.0 for Windows, no error is returned, but if the
	partition is above the threshold, the partition is set to zero.
	
	RESOLUTION
	==========
	
	If the partition needs to be set to a large number in the range between 300 to
	350 pixels, set the Partition property of the Grid in the Init event of the
	Grid. For example, use the following code to set the partition at half the width
	of the Grid:
	
	     Thisform.Grid1.Partition = Thisform.Grid1.Width / 2
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Partition property specifies whether or not a Grid control is split into two
	panels and specifies where the split is relative to the left edge of the Grid.
	
	Once the above error is received, the form cannot be opened even in the Form
	Designer without receiving the error again. To work around this error, the form
	must opened as a table by issuing USE <formname>.scx in the Command
	window. Then go to the record listed in the error message and open the
	Properties memo field and change the "Partition = " line to 0 or at least a
	smaller value.
	
	NOTE: Setting the form[ASCII 146]s ScaleMode to foxels from pixels has no effect
	on this problem
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form and add a Grid.
	
	2. Set the width of the Grid to 400.
	
	3. Click on the Grid and set the partition width to a 350.
	
	4. Run the form.
	
	Repeat the above steps, but set the Partition property to around 305 and note
	that the property resets to 0.
	
	In testing, the error seems to occur around when the partition size is set in the
	vicinity of 300 to 330. This error does not seem to depend upon screen
	resolution and the font used in the Grid.
	
	REFERENCES
	==========
	
	For more information about the Grid control and Partition property, please refer
	to the Visual FoxPro Help.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
