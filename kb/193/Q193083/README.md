---
layout: page
title: "Q193083: PRB: &quot;User-Defined Type Not Defined&quot; Error with Shdocvw.dll Enum"
permalink: /kb/193/Q193083/
---

## Q193083: PRB: &quot;User-Defined Type Not Defined&quot; Error with Shdocvw.dll Enum

	Article: Q193083
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbIE400bug kbVBp kbVBp300 kbVBp400 kbVBp600 kbVS600bug kbWebBrowser kbGrpDSV
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run code that uses the BrowserNavConstants or RefreshConstants
	enumeration variables (Enums) on a computer that has Internet Explorer 4.x
	installed, you receive the following error message:
	
	  Compiler error:
	
	  User-defined type not defined
	
	However, the same code works on a computer that has Internet Explorer 3.x
	installed.
	
	CAUSE
	=====
	
	The BrowserNavConstants and RefreshConstants Enums are found in the older
	versions of Shdocvw.dll that shipped with Internet Explorer 3.x. However, the
	newer versions of Shdocvw.dll that come with Internet Explorer 4.x (and Visual
	Studio 6.0) do not contain those Enums.
	
	Therefore, the following code will work on a machine with Internet Explorer 3.x:
	
	     Dim x As BrowserNavConstants
	
	However, if you compile the code on a machine with either Visual Studio 6.0 or
	Internet Explorer 4.x installed, you will get the "User-defined type not
	defined" error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbIE400bug kbVBp kbVBp300 kbVBp400 kbVBp600 kbVS600bug kbWebBrowser kbGrpDSVB kbDSupport kbie550bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
