---
layout: page
title: "Q266075: Modifying Files with Name &quot;Neu&quot; Does Not Display Content"
permalink: /kb/266/Q266075/
---

## Q266075: Modifying Files with Name &quot;Neu&quot; Does Not Display Content

	Article: Q266075
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDS
	Last Modified: 01-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the German Windows operating system with the localized version of Visual
	FoxPro 5.x or 6.x, save a program file whose name starts with "Neu," such as
	NeuTest.prg. When you open the file again, you do not see the previously saved
	code in the editor; instead, a new file opens. Similar behavior occurs when you
	are saving files of type form and class.
	
	RESOLUTION
	==========
	
	Rename the VFP6deu.dll file to VFP6enu.dll. This allows the previously saved
	code to be opened in the editor again. However, with VFP6enu.dll, the Visual
	FoxPro menu is in English rather than in German.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install localized German version of Visual FoxPro 6.x on a German OS
	  computer.
	
	2. Create a new project named "p1."
	
	3. Create a new program.
	
	4. In the .prg file, type in the following command:
	
	  WAIT WINDOW "TEST"
	  X=1
	
	5. Close the .prg file and save it as Neutest.prg.
	
	6. In the Command window, issue the following command:
	
	  MODIFY COMMAND NEUTEST.PRG
	
	Note that you do not see the previously saved code in the editor. Instead, a new
	file opens.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
