---
layout: page
title: "Q136667: PRB: Action Diagram Does Not Show Graphic Lines"
permalink: kb/136/Q136667/
---

## Q136667: PRB: Action Diagram Does Not Show Graphic Lines

	Article: Q136667
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Documenting Wizard and select the Action Diagram in Step 5, the
	text of the file created (Test.act, for example), displays ASCII characters
	instead of the actual graphic lines.
	
	CAUSE
	=====
	
	The font selected in your text editor or the screen font in Visual FoxPro does
	not support the extended ASCII character set.
	
	RESOLUTION
	==========
	
	Hold down the SHIFT key as you click Font on the Format menu. Select FoxFont as
	the screen font and make it 9 points. If you recreate the Action Diagram file
	now, the font selection will remain with the file as long as you open it in
	Visual FoxPro.
	
	If you want this to remain your default font for each session of Visual FoxPro,
	click Options on the Tools menu. Then click the Edit tab, and click the Set as
	Default button in the bottom-left corner of the Options dialog box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Some text editors only support TrueType Fonts. FoxFont is not a TrueType Font.
	An alternative font is Microsoft LineDraw, which does support the extended ASCII
	character set.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Documenting Wizard to create an Action Diagram.
	
	2. Modify the .act file from the Command window to verify that the text of the
	  file displays ASCII characters instead of the actual graphic lines.
	
	3. Close the file.
	
	4. Hold the SHIFT key down as you click Font on the Format menu, and select
	  FoxFont 9.
	
	5. Modify the .act file again. You should now see the expected graphic lines.
	
	Alternative Resolution
	----------------------
	
	Set your text editor up with Microsoft LineDraw as the default font and open the
	appropriate action diagram file. You may have to open the document first,
	highlight the text, and then change the font.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
