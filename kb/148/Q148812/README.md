---
layout: page
title: "Q148812: HOWTO: Configure Visual SourceSafe Explorer to Use System Font"
permalink: kb/148/Q148812/
---

## Q148812: HOWTO: Configure Visual SourceSafe Explorer to Use System Font

	Article: Q148812
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Visual SourceSafe Explorer, it will typically use the MS Sans
	Serif font. However, if you have configured Windows to use only True Type fonts,
	it will use the System font.
	
	MORE INFORMATION
	================
	
	When the Visual SourceSafe Explorer is using the System font, text displayed in
	column headers, tool tips, and other visual elements may appear to be bolder and
	slightly larger than expected. To configure Windows to use only True Type fonts,
	follow one of the following sets of steps depending on your operating system:
	
	Windows 3.x
	-----------
	
	1. Open the Fonts icon located in Windows Control Panel, and click the True Type
	  button.
	
	2. Select the "Show Only True Type Fonts in Applications" check box and close
	  the Fonts dialog box.
	
	Windows 95 and Windows NT
	-------------------------
	
	1. Open the Fonts icon located in Windows Control Panel.
	
	2. Choose Options from the View menu, and click the True Type tab. Select the
	  "Show only True Type fonts in the programs on my computer" check box, and
	  close the Fonts dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
