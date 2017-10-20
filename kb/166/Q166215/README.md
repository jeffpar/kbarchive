---
layout: page
title: "Q166215: INFO: Modifying VTables with AddressOf Is Not Supported"
permalink: /kb/166/Q166215/
---

## Q166215: INFO: Modifying VTables with AddressOf Is Not Supported

{% raw %}

	Article: Q166215
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbpolicy kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the March 1997 issue of the Visual Basic Programmer's Journal, an article by
	Matthew Curland and William Storage was published which featured a technique for
	simulating the calling of function pointers in Microsoft Visual Basic 5.0.
	
	MORE INFORMATION
	================
	
	As described in the article, the technique requires modification of a class's
	VTable through the use of the AddressOf operator and the CopyMemory and
	VirtualProtect Win32 API functions.
	
	Modifying VTables and the technique described in the article are not supported by
	Microsoft.
	
	Visual Basic Programmer's Journal is published by Fawcette Technical
	Publications, a publisher independent of Microsoft; we make no warranty, implied
	or otherwise, regarding this publication's content or reliability.
	
	
	REFERENCES
	==========
	
	Visual Basic Programmer's Journal
	Fawcette Technical Publications
	March 1997, Volume 7, No. 3
	"Modifying vtables with AddressOf." (pgs 131-133)
	
	Additional query words: Vtables pointer recursive recursion hack sort qsort compare void overwrite
	
	======================================================================
	Keywords          : kbpolicy kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
