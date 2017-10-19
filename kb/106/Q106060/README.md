---
layout: page
title: "Q106060: FIX: No &quot;Save Changes&quot; Prompt After Editing a String Table"
permalink: /kb/106/Q106060/
---

## Q106060: FIX: No &quot;Save Changes&quot; Prompt After Editing a String Table

	Article: Q106060
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbResourceEd kbVC kbVC100bug kbVC150fixkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - Microsoft Visual C++, version 1.0 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some situations, App Studio does not detect that a string table resource or
	cursor hotspot has been modified, and therefore fails to display a "Save
	Changes" prompt. The problem occurs when the user exits App Studio from either
	the File or the System menu. If the user has not explicitly saved the string
	table or cursor, any changes made to it are lost.
	
	RESOLUTION
	==========
	
	To ensure that changes are saved, explicitly save them by choosing Save from the
	File menu or by closing the string table editor or cursor editor after making
	changes. When you close the string table editor or cursor editor before exiting,
	App Studio will display the Save Changes prompt as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This bug was corrected in App Studio version 1.5, included with
	Microsoft Visual C++ for Windows version 1.5.
	
	MORE INFORMATION
	================
	
	Perform the following four steps to demonstrate the problem:
	
	1. Open a project with a string table or cursor resource.
	
	2. Invoke App Studio and modify one of the string table entries or change the
	  cursor hotspot.
	
	3. Choose Exit from the File menu or Close from the System menu without closing
	  the string table editor or cursor editor. Note that no "Save Changes" prompt
	  is displayed.
	
	4. Reopen App Studio and observe that the string table or hotspot change was
	  lost.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbResourceEd kbVC kbVC100bug kbVC150fix kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
