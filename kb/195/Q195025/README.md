---
layout: page
title: "Q195025: BUG: VFP: &quot;SCC API error &quot;Reload File&quot; occurred on file&quot;"
permalink: kb/195/Q195025/
---

## Q195025: BUG: VFP: &quot;SCC API error &quot;Reload File&quot; occurred on file&quot;

	Article: Q195025
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbSSafe600bug kbvfp500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to check in a .prg file into Visual SourceSafe that contains Visual
	SourceSafe keywords, you might get the following error:
	
	  SCC API error "Reload File" occurred on file <Path to the working
	  folder\*****.prg>
	
	CAUSE
	=====
	
	This bug has only been seen when using Visual FoxPro 5.0 with Visual SourceSafe
	6.0.
	
	RESOLUTION
	==========
	
	Make sure that you have compatible versions of Visual SourceSafe and Visual
	FoxPro. This problem can't be duplicated in Visual FoxPro 5.0 and Visual
	SourceSafe 5.0 or Visual FoxPro 6.0 and Visual SourceSafe 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If Keyword Expansion is enabled and the .prg file contains a keyword, Visual
	FoxPro generates the error while doing a check in.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Visual SourceSafe 6.0 Administrator.
	
	2. Under the Tools menu, click Options, and then click the General tab in the
	  Options dialog box.
	
	3. Add *.prg in the list of "Expand keywords in files of type:" text box if it
	  is not there.
	
	4. Close Visual SourceSafe Administrator.
	
	5. Open Visual FoxPro 5.0. and create a new blank project, Proj1, and save it
	  under C:\proj1.
	
	6. Save the .prg file as Program1.prg under C:\Proj1.
	
	7. Add the project to Visual SourceSafe under $/proj1 and update the project
	  list.
	
	  NOTE: The padlock glyph will indicate that the .prg file is added to Visual
	  SourceSafe.
	
	8. Check out Program1.prg.
	
	9. Modify Program1.prg and add the following lines:
	
	        * $History:   $
	
	10. Save and check in Program1.prg.
	
	RESULT: The following error message appears:
	
	  SCC API error "Reload File" occurred on file C:\Proj1\Program1.prg
	
	REFERENCES
	==========
	
	  Q141504 HOWTO: Make SourceSafe Keyword Expansion Work in Text Docs
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbSSafe600bug kbvfp500 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP500 kbSSafe600
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
