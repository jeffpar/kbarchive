---
layout: page
title: "Q193018: INFO: Java and Visual C++ Cannot Access Hidden VB Interface"
permalink: /kb/193/Q193018/
---

## Q193018: INFO: Java and Visual C++ Cannot Access Hidden VB Interface

{% raw %}

	Article: Q193018
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Java and Visual C++ programs cannot access hidden Visual Basic interfaces that
	are defined with an underscore ( _ ) as the first letter in the name, such as
	the Visual Basic Collection interface declared in MSVBVM60.DLL. Problems that
	arise from this issue include the following:
	
	- The interface is hidden (with underscore as the first letter in the name) so
	  that tools such as JCOM will skip over it.
	
	- The interface is only declared in the Visual Basic run-time and there are no
	  *.h files and *.java files existing for cross-language implementation.
	
	- A Visual C++ or Java component cannot return a VB-style collection to a
	  Visual Basic component.
	
	MORE INFORMATION
	================
	
	If you want to gain access to a server that returns a public Visual Basic
	collection from Visual C++/Java (which is a very common scenario for in- proc
	servers), you have to construct your own Header file or Java file.
	
	Alternatively, you can use an externally-defined interface that does not contain
	an underscore as the first letter in the name. Although you cannot use the
	components defined in Visual Basic or provided as part of Visual Basic (such as
	the Collection object), you can still enable all necessary functionality.
	
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbVC kbJava kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
