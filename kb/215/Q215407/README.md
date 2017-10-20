---
layout: page
title: "Q215407: DOC: Index Property Incorrectly Defined"
permalink: /kb/215/Q215407/
---

## Q215407: DOC: Index Property Incorrectly Defined

{% raw %}

	Article: Q215407
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,3.0
	Operating System(s): 
	Keyword(s): kbdocfix kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVBDB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Index property is incorrectly defined in the Windows CE Toolkit for Visual
	Basic 6.0 documentation.
	
	MORE INFORMATION
	================
	
	The syntax for the Index property is documented as follows:
	
	  Index
	
	This property returns or sets the number that uniquely identifies an object in a collection.
	
	Syntax
	object.Index
	
	The documentation should actually read as follows:
	
	  Index
	
	This property returns or sets the number that uniquely identifies an object in a collection.
	
	Syntax
	object.Index = [number]
	
	REFERENCES
	==========
	
	Windows CE Toolkit for Visual Basic 6.0 Online Help
	
	eMbedded Visual Basic 3.0 Online Help
	
	Additional query words: wince vbce6 kbdse vbce kbGrpVB eVB
	
	======================================================================
	Keywords          : kbdocfix kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600 kbVBeMb300
	Version           : :1.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
