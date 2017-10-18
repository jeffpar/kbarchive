---
layout: page
title: "Q185993: BUG: Public Friend Properties Break Binary Compatibility"
permalink: kb/185/Q185993/
---

## Q185993: BUG: Public Friend Properties Break Binary Compatibility

	Article: Q185993
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling an ActiveX DLL or ActiveX EXE using Binary Compatibility, the
	following error message might occur:
	
	In Visual Basic 5.0:
	
	  <property name> in the <class name> class module has a procedure
	  ID that differs from a similar declaration in the version-compatible
	  component.
	
	In Visual Basic 6.0:
	
	  The <Property Name> member was found in the <Class Name> class
	  module of the version-compatible component, but not in the current project.
	
	This problem occurs even if you have not modified any interface within the
	ActiveX Server.
	
	CAUSE
	=====
	
	When descriptions are added to a Let property declared as Friend and having a
	corresponding Public Get property, the above error message might occur during
	compilation.
	
	RESOLUTION
	==========
	
	Open the code window for that class module. Then from the Tools menu, select
	Procedure Attributes. Then find the property name in the Name drop-down list box
	and delete any text in the description box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Using the Visual Basic Class Builder Utility Add-In, you have the option of
	adding "Descriptions" to properties of the ActiveX Server object that is being
	developed. These descriptions are useful in tools such as the Object Browser,
	when other programmers are using the ActiveX Servers in their projects.
	
	After the Visual Basic Class Builder Utility builds the class, it is common to
	modify the function stubs generated to suit the purpose of the class. When
	descriptions are added to a Let property declared as "Friend" and having a
	corresponding "Public" Get property, the above error message might occur during
	compilation.
	
	REFERENCES
	==========
	
	Books Online for Microsoft Visual Basic, version 5.0
	
	Additional query words: kbDSupport kbdss
	
	======================================================================
	Keywords          : kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
