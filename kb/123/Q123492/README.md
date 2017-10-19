---
layout: page
title: "Q123492: FIX: Link /SECTION Option Does Not Check for Name Errors"
permalink: /kb/123/Q123492/
---

## Q123492: FIX: Link /SECTION Option Does Not Check for Name Errors

	Article: Q123492
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVC400fix
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), included with:
	   - Microsoft Visual C++ 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The /SECTION option for the linker does not check:
	
	- The name specified to determine the existence of that section.
	
	- The case of the name even though the documentation for the /SECTION option
	  states that the name is case sensitive.
	
	- The attributes following the section name for errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.0.
	
	REFERENCES
	==========
	
	The following information is taken from Visual C++ version 2.0 Books Online,
	Appendix B regarding the /SECTION linker option:
	
	     /SECTION:name,attributes
	
	  This option changes the attributes of a section, overriding the attributes
	  set when the object file for the section was compiled.
	
	  Specify a colon (:) and a section name. The name is case sensitive.
	
	  Specify one or more attributes for the section. The attribute characters are
	  E, R, W, and S and are not case sensitive. You must specify all attributes
	  that you want the section to have; an omitted attribute character causes that
	  attribute bit to be turned off. Attribute characters have the following
	  meanings:
	
	  Character       Attribute       Meaning
	  E               execute         Allows code to be executed
	  R               read            Allows read operations on data
	  W               write           Allows write operations on data
	  S               shared          Shares the section among all
	
	  processes that load the image
	
	A section that does not have E, R, or W set is probably invalid.
	
	NOTE: Under Win32s, the DLL data sections are loaded as "shared" even if that
	attribute is not set, because Windows has this requirement.
	
	Additional query words: 2.50
	
	======================================================================
	Keywords          : kbVC400fix 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
