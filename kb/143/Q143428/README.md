---
layout: page
title: "Q143428: DOCERR: SetWindowPos Declaration Incorrect in On-Line Help"
permalink: kb/143/Q143428/
---

## Q143428: DOCERR: SetWindowPos Declaration Incorrect in On-Line Help

	Article: Q143428
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article corrects a documentation error for the SetWindowPos function call
	as described in the Microsoft Visual Basic on-line help file (WIN31API.HLP) that
	shipped with Microsoft Visual Basic version 3.0 for Windows. In Example 1 for
	the hWnd property, if you run the code example, the following error message
	displays:
	
	  Bad DLL calling convention
	
	MORE INFORMATION
	================
	
	The declaration is incorrectly documented as the following:
	
	  Declare Sub SetWindowPos Lib "User" (ByVal h1 As Integer,
	                                       ByVal h2 As Integer,
	                                       ByVal x As Integer,
	                                       ByVal y As Integer,
	                                       ByVal cx As Integer,
	                                       ByVal cy As Integer,
	                                       ByVal f As Long)
	
	The correct declaration is as follows:
	
	  Declare Sub SetWindowPos Lib "User" (ByVal h1 As Integer,
	                                       ByVal h2 As Integer,
	                                       ByVal x As Integer,
	                                       ByVal y As Integer,
	                                       ByVal cx As Integer,
	                                       ByVal cy As Integer,
	                                       ByVal f As Integer)
	
	NOTE: Each Declare statement must be entered as one, single line.
	
	Please note that the last parameter (ByVal f As Long) is incorrectly defined as
	Long. It should be defined as Integer.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
