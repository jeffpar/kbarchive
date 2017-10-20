---
layout: page
title: "Q221622: FIX: Hang When Resizing a ToolBar With ASELOBJ at Design-Time"
permalink: /kb/221/Q221622/
---

## Q221622: FIX: Hang When Resizing a ToolBar With ASELOBJ at Design-Time

{% raw %}

	Article: Q221622
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFo
	Last Modified: 02-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to interactively resize a toolbar in the Class Designer might hang
	Visual FoxPro if the ASELOBJ() function was used to programmatically select the
	toolbar object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This behavior does not occur in Visual FoxPro 3.0b for the Macintosh.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  CREATE CLASS toolz AS TOOLBAR OF test NOWAIT
	  = ASELOBJ(aToolBar,1)
	  aToolBar[1].ADDOBJECT('b1','commandbutton')
	  aToolBar[1].b1.HEIGHT = 22
	  aToolBar[1].b1.WIDTH = 22
	  aToolBar[1].b1.CAPTION = ''
	  aToolBar[1].b1.AUTOSIZE = .T.
	
	2. Using the mouse, attempt to resize the toolbar in the Class Designer.
	
	3. Visual FoxPro will hang, and the mouse pointer will remain the resize cursor,
	  which is the double-headed arrow by default.
	
	4. You must end the task to shut down Visual FoxPro.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
