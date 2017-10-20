---
layout: page
title: "Q246313: BUG: Certain Icons May Cause Error with FoxPro"
permalink: /kb/246/Q246313/
---

## Q246313: BUG: Certain Icons May Cause Error with FoxPro

{% raw %}

	Article: Q246313
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbXBase kbGrpDSFox kbDSupport
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Icon files (*.ICO) usually have two or more resources contained within them.
	Each resource can be built with a different number of colors. Viewing an icon
	file that has a 32x32 resource that was built with greater than 256 colors
	causes the Visual FoxPro (VFP) versions mentioned above to exit. This occurs
	when Visual FoxPro is running on Microsoft Windows NT.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	From Visual FoxPro, you can get a dialog to view an icon in a number of ways:
	assigning an .ico to a project, through the PICTURE property of an image
	control, and so forth. The easiest way to reproduce this, however, is with
	GETPIC().
	
	1. Using Impact Software's Microangelo (information available on their Web site
	  at: http://www.impactsoft.com/muangelo/muangelo.html), or some other icon
	  editor, create an icon. Include a 32x32 resource with more than 256 colors.
	
	2. Open one of the Visual FoxPro versions listed above and execute the following
	  command from the Command window:
	
	  ? GETPIC()
	
	3. When the dialog box appears, locate the icon created in step 1. Select the
	  icon and PREVIEW it (using either the preview checkbox or button).
	
	Using Visual FoxPro 6.0 (no service pack), the following error might occur and
	then Visual FoxPro exits:
	
	  Fatal error: Exception code=C0000005
	
	Using Visual FoxPro 5.0x and Visual FoxPro 6.0 SP3, the following error might
	occur and FoxPro exits or VFP shuts down without reporting an error:
	
	  APPLICATION ERROR. The instruction at <memory address> referenced
	  memory at <memory address>. The memory could not be "read".
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
