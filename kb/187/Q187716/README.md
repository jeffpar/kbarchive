---
layout: page
title: "Q187716: DOC: Incorrect API Text Viewer Declaration of GetVersionEx API"
permalink: /kb/187/Q187716/
---

## Q187716: DOC: Incorrect API Text Viewer Declaration of GetVersionEx API

{% raw %}

	Article: Q187716
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error occurs when you use the GetVersionEx API function
	declaration from the API Text Viewer.
	
	  Compiler Error: User defined type may not be passed ByVal
	
	MORE INFORMATION
	================
	
	The Declare statement for GetVersionEx in the API Text Viewer incorrectly passes
	a user-defined data type using the ByVal keyword. To correct this problem,
	remove the ByVal modifier. The correct declaration is:
	
	     Private Declare Function GetVersionEx Lib "kernel32" Alias _
	        "GetVersionExA" (lpVersionInformation As OSVERSIONINFO) As Long
	
	You can also change the statement in the file win32api.txt so the next time you
	use the API Text Viewer, the Declare statement will be correct.
	
	REFERENCES
	==========
	
	For more information on using GetVersionEx, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q189249 HOWTO: Determine Which 32-bit Operating System Is Being Used
	
	To learn more about the Windows API and the API Text Viewer, please see:
	
	  Visual Basic Books Online; search on: "API"; topic: Accessing the Microsoft
	  Windows API
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Richard T.
	Edwards, Microsoft Corporation
	
	
	STATUS
	======
	
	This documentation error has been fixed in Visual Basic 6.0.
	
	The win32api.txt that ships with Visual Basic version 6.0 has been updated with
	the correct declaration for GetVersionEx.
	
	Additional query words: kbAPI kbVBp400bug kbVBp500bug kbDSupport kbDSD kbVBp600fix
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	
	=============================================================================
	

{% endraw %}
