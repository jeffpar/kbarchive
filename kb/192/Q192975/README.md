---
layout: page
title: "Q192975: BUG: ClassWizard Parsing Error with MBCS Helpstring in .odl File"
permalink: kb/192/Q192975/
---

## Q192975: BUG: ClassWizard Parsing Error with MBCS Helpstring in .odl File

	Article: Q192975
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbVC500bug kbVC600bug kbClassWizard kbGrpDSTools kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding a multibyte character set (MBCS) helpstring to a property in an
	.odl file, a dialog box appears before displaying the ClassWizard:
	
	  
	
	  Parsing error. Illegal line encountered. Input line [id(1),
	  helpstring("b .)] short test
	
	CAUSE
	=====
	
	ClassWizard has problems handling MBCS characters.
	
	RESOLUTION
	==========
	
	Use #define macros for the MBCS string. Add the #define statements either
	directly to the .odl file, or #include them from another file. For example:
	
	     #define MyHelp "MBCS characters"
	     .
	     .
	     [id(1), helpstring(MyHelp)] short test
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	There are other workarounds possible, but they are not recommended:
	
	- Add any MBCS helpstrings after adding all the custom properties.
	
	- Move the property definition in the .odl file outside of the ClassWizard
	  AFX_ODL_PROP markers. In your source code files, move the property outside of
	  ClassWizard markers around any maps that reference it.
	
	These workarounds do not permit you to maintain variables with MBCS helpstrings
	using ClassWizard. They may be acceptable since the only things you would
	normally do with a property after creating it are add attributes (like a
	helpstring) that ClassWizard doesn't maintain, or delete the variable.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an MFC ActiveX control using the MFC ActiveX Control Wizard (accept
	  the default settings).
	
	2. Open ClassWizard. Add a custom property named "test" of type Short to the
	  base class on the Automation tab. Click OK.
	
	3. Open the .odl file for the project.
	
	4. Edit the custom property, which is enclosed between ClassWizard AFX_ODL_PROP
	  markers. Add a 'helpstring' keyword containing any MBCS character on this
	  property.
	
	  Example:
	
	        [id(1), helpstring("MBCS characters")] short test;
	
	5. Save the .odl file.
	
	6. Open Class Wizard and add another custom property named "test2" of type
	  Short.
	
	7. Click OK; Visual C++ appears to freeze.
	
	8. Maximize a window on the desktop and then minimize it. The following
	  ClassWizard error message is now visible:
	
	  Parsing error. Illegal line encountered. Input line [id(1), helpstring("b .)]
	  short test
	
	9. Click OK on the error dialog box.
	
	10. Look at the .odl file. The property lines appear similar to the following:
	
	        [id(1), helpstring("b .)] short test;
	        [id(2)] short test2;
	
	If the helpstring has an MBCS character at the end, ClassWizard replaces the
	second quote character and the MBCS character with one or more dots. If the MBCS
	character is not at the end of the string, the next character to the right
	disappears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbVC500bug kbVC600bug kbClassWizard kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
