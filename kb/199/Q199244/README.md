---
layout: page
title: "Q199244: HOWTO: Retrieve the Regional Settings Currency Symbol"
permalink: /kb/199/Q199244/
---

## Q199244: HOWTO: Retrieve the Regional Settings Currency Symbol

{% raw %}

	Article: Q199244
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	32-bit Visual Basic applications that are distributed in more than one country
	must rely upon the Regional Settings specifications of the Windows Control Panel
	for retrieving the appropriate currency symbol to display to the user.
	Retrieving the currency symbol involves calling the GetLocaleInfo function from
	the 32-bit Windows API function library.
	
	MORE INFORMATION
	================
	
	The following code can be used to retrieve the currency symbol as specified in
	the Regional Settings of the Windows Control Panel. The GetUserDefaultLCID()
	function retrieves the default locale for the current user and the
	GetLocaleInfo() function retrieves information relating to the specified locale.
	Keep in mind that Visual Basic 6.0 has built in functions to automatically
	format numbers with the currency symbol as specified in the Control Panel's
	Regional Settings. While this code works in Visual Basic 6.0, the primary
	audience for this article are 32-bit Visual Basic 4.0 and Visual Basic 5.0
	developers.
	
	Executing this code stores the user default currency symbol in the Symbol
	string:
	
	     Option Explicit
	     Private Declare Function GetLocaleInfo Lib "kernel32" _
	        Alias "GetLocaleInfoA" (ByVal Locale As Long, _
	        ByVal LCType As Long, ByVal lpLCData As String, _
	        ByVal cchData As Long) As Long
	     Private Declare Function GetUserDefaultLCID% Lib "kernel32" ()
	     Private Const LOCALE_SCURRENCY = &H14
	
	     Dim Symbol As String
	     Dim iRet1 As Long
	     Dim iRet2 As Long
	     Dim lpLCDataVar As String
	     Dim Pos As Integer
	     Dim Locale as Long
	     
	     Locale = GetUserDefaultLCID() 
	     iRet1 = GetLocaleInfo(Locale, LOCALE_SCURRENCY, lpLCDataVar, 0)
	     
	     Symbol = String$(iRet1, 0)
	     iRet2 = GetLocaleInfo(Locale, LOCALE_SCURRENCY, Symbol, iRet1)
	     Pos = InStr(Symbol, Chr$(0))
	     If Pos > 0 Then
	        Symbol = Left$(Symbol, Pos - 1)
	     End If
	
	REFERENCES
	==========
	
	For additional information about how to use API functions from within Visual
	Basic, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q145679 HOWTO: Use the Registry API to Save and Retrieve Setting
	
	
	For information on how to use the API Viewer add-in that ships with Visual Basic,
	please see "Accessing The Microsoft Windows API" in the Visual Basic Books
	Online.
	For more information about locale identifiers, please see "Visual Basic
	Programmer's Guide to the Win32 API", by Daniel Appleman, PC Magazine Press
	
	Additional query words: currency symbol regional settings locale
	
	======================================================================
	Keywords          : kbAPI kbVBp kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
