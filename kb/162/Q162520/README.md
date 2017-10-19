---
layout: page
title: "Q162520: WD97: GetAllSettings Returns Type Mismatch"
permalink: /kb/162/Q162520/
---

## Q162520: WD97: GetAllSettings Returns Type Mismatch

	Article: Q162520
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Visual Basic for Applications GetAllSettings function
	to return a list of key settings and their respective values, you may receive
	the following error message:
	
	  Run-time error '13': Type Mismatch
	
	CAUSE
	=====
	
	If the value for "appname" or "section" does not exist in the registry, the
	variable is uninitialized, and the Visual Basic Editor returns the "Type
	Mismatch" error.
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To work around this error, use a Visual Basic for Applications macro similar to
	the following to verify that registry values exist:
	
	  Sub GetAllSettingsExample()
	     Dim vMySet As Variant
	     Dim iCount As Integer
	     ' Get registry settings.
	     vMySet = GetAllSettings(AppName:="MyProjectName", _
	        Section:="MySection")
	     ' Make sure the variable is not empty.
	     If Not IsEmpty(vMySet) Then
	        'Display the Key Names and Values.
	        For iCount = LBound(vMySet, 1) To UBound(vMySet, 1)
	           MsgBox vMySet(iCount, 0), vMySet(iCount, 1)
	        Next
	     End If
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Visual Basic for Applications GetAllSettings function returns a list of key
	settings and their respective values (originally created with SaveSetting) from
	a user-defined entry in the Windows registry. This list is returned to a Variant
	two-dimensional array, whose contents are a set of strings containing all the
	key settings in the specified section and their corresponding values.
	
	Syntax
	------
	
	GetAllSettings (appname, section)
	
	The GetAllSettings function syntax has these named arguments:
	
	Part      Description
	-----------------------------------------------------------------
	appname   Required. String expression containing the name of the
	         application or project whose key settings are requested.
	
	section   Required. String expression containing the name of the section
	         whose key settings are requested. GetAllSettings returns a
	         Variant whose contents are a two-dimensional array of strings
	         containing all the key settings in the specified section and
	         their corresponding values.
	
	For more information about GetAllSettings, click the Office Assistant while in
	the Visual Basic Editor, type "GetAllSettings", click Search, and then click to
	view GetAllSettings Function.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If the Assistant is not able to answer your query, please see
	the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q176476 OFF: Office Assistant Not Answering Visual Basic Questions
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
