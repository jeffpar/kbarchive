---
layout: page
title: "Q153738: BUG:Properties Sheet/Project Manager Ignore SET MACDESKTOP OFF"
permalink: /kb/153/Q153738/
---

## Q153738: BUG:Properties Sheet/Project Manager Ignore SET MACDESKTOP OFF

{% raw %}

	Article: Q153738
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using SET MACDESKTOP OFF, user-defined windows are confined to the limits
	of the Visual FoxPro screen. This is analogous to the application window in
	Visual FoxPro for Windows. However, the Properties sheet and Project Manager are
	special elements of the Visual FoxPro development environment and are handled
	differently. There are situations where the Properties sheet or Project Manager
	may not behave consistently with other windows in respect to SET MACDESKTOP OFF.
	This may result in the Properties sheet or Program Manager being obscured by the
	Visual FoxPro Screen.
	
	CAUSE
	=====
	
	Properties Sheet:
	
	This limitation is a result of the Properties sheet being shared by multiple
	windows, and the need to guarantee its accessibility to all designers. For
	instance, if one designer is activated IN MACDESKTOP and another is not, there
	may be a chance for the Properties sheet to be hidden when using the designer.
	
	Project Manager:
	
	This behavior is due to the hybrid sense of the Project Manager. It shares
	behavior with both toolbars and windows. Therefore, if the Project Manager were
	confined to the Visual FoxPro Screen, it would not be dockable.
	
	WORKAROUND
	==========
	
	1. Use the configuration file special setting MACSCREEN = OFF or SET MACDESKTOP
	  ON, then close the Visual FoxPro screen.
	
	2. Use the pushpin on the Properties sheet to secure it at the topmost level.
	
	3. Dock the Project Manager, or tear off a tab and use the pushpin to bring it
	  forward.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Properties sheet:
	
	1. SET MACDESKTOP OFF.
	
	2. Modify a new or existing form.
	
	3. Open the properties sheet and unpin it, making sure that the sheet overlaps
	  the Visual FoxPro Screen.
	
	4. Click on the Visual FoxPro Screen, causing it to come forward.
	
	  The Properties sheet will fall behind the Visual FoxPro Screen, even though
	  the MACDESKTOP is set to OFF.
	
	Project Manager:
	
	1. SET MACDESKTOP OFF.
	
	2. Modify a new or existing project.
	
	3. Make sure the project is not docked and partially overlaps the Visual FoxPro
	  Screen.
	
	4. Click on the Visual FoxPro Screen, causing it to come forward.
	
	  The Project Manager will fall behind the Visual FoxPro Screen, even though
	  MACDESKTOP is set to OFF.
	
	Additional query words: vfoxmac
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
