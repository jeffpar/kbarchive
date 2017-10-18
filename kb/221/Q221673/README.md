---
layout: page
title: "Q221673: FIX: Black Cursor in ControlSource Not Supported in Korean VFP"
permalink: kb/221/Q221673/
---

## Q221673: FIX: Black Cursor in ControlSource Not Supported in Korean VFP

	Article: Q221673
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbVS600sp3fix kbGrpDSFox
	Last Modified: 08-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The cursor does not work correctly, when typing Korean characters into a
	textbox's ControlSource property.
	
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
	
	Running Visual FoxPro 6.0 on a Korean Operating system, such as Korean version
	of Windows 95, when Korean characters are typed, the cursor changes to a solid
	black square for certain characters. For example, when typing Korean Characters
	in the command window, the cursor will change to a solid black square for some
	of the characters. But, when Korean characters are typed in a TextBox's
	ControlSource, the cursor does not change into a solid black square for any of
	the characters.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a textbox into the form.
	
	3. Go to the Properties windows and select the textbox's ControlSource property.
	
	4. Type Korean characters into the ControlSource box, on the Properties window.
	  For example, type "RK SK EK FK" (without the quotation marks) (without
	  spaces).
	
	Note that as you type the characters, the cursor in the ControlSource box on the
	Properties window does not turn to a solid black square. If you type the same
	characters in the command window, then the cursor will change to a solid black
	square.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
