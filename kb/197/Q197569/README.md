---
layout: page
title: "Q197569: BUG: CRITICAL_SECTION is Defined Incorrectly in API Text Viewer"
permalink: /kb/197/Q197569/
---

## Q197569: BUG: CRITICAL_SECTION is Defined Incorrectly in API Text Viewer

{% raw %}

	Article: Q197569
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbKernBase kbThread kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The API Text Viewer definition for CRITICAL_SECTION is incorrect and will cause
	an access violation or corrupt the memory directly following any variables of
	this type.
	
	CAUSE
	=====
	
	The API Text Viewer defines CRITICAL_SECTION as follows:
	
	     Type CRITICAL_SECTION
	        dummy As Long
	     End Type
	
	If you use this definition, you may receive access violations or you may notice
	that the variables declared directly after a critical section are overwritten or
	corrupted when you call any of the critical section APIs.
	
	RESOLUTION
	==========
	
	The following is a proper definition for CRITICAL_SECTION:
	
	     Type CRITICAL_SECTION
	        Reserved1 As Long
	        Reserved2 As Long
	        Reserved3 As Long
	        Reserved4 As Long
	        Reserved5 As Long
	        Reserved6 As Long
	     End Type
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You should never access the members of the CRITICAL_SECTION structure directly.
	An object of this type is designed to be manipulated through the following Win32
	APIs:
	
	     InitializeCriticalSection()
	     EnterCriticalSection()
	     LeaveCriticalSection()
	     DeleteCriticalSection()
	
	For more information, refer to the MSDN documentation for critical sections.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbKernBase kbThread kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
