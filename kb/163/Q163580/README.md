---
layout: page
title: "Q163580: WD97: Error Creating Pre-Existing Custom Document Property"
permalink: /kb/163/Q163580/
---

## Q163580: WD97: Error Creating Pre-Existing Custom Document Property

	Article: Q163580
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbwordvba word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Visual Basic for Applications to create a new custom document
	property, the following error message may appear:
	
	  Run-time error '-2147467259(80004005):
	  Automation error
	
	CAUSE
	=====
	
	This error is returned if the custom document property you are creating already
	exists.
	
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
	
	To avoid this error, check the Custom Documents Property collection to see
	whether the document property already exists. The following sample Visual Basic
	for Applications macros demonstrate how this can be accomplished. This first
	macro calls the SetProp subroutine. It is a separate macro so that you can
	insert the single command line into a larger macro.
	
	  Sub SetCustomPropertyName()
	     ' **************************************************
	     ' This SubRoutine passes the Custom Property Name,
	     ' Value and Property Type to the SetProp subroutine.
	     ' **************************************************
	     ' Set the custom property "MyCustomPropertyName" equal
	     ' to "MyCustomValue". The msoPropertyTypeString constant
	     ' specifies the type of property, and must be included.
	     SetProp "MyCustomPropertyName", "MyCustomValue", _
	     msoPropertyTypeString
	  End Sub
	
	For more information about the Type property, from the Visual Basic for
	Applications Editor, click the Office Assistant, type "Type Property", click
	Search, and then click to view "Type Property(Microsoft Office Reference)."
	
	  Sub SetProp(CDPName As String, CDPValue As Variant, Optional _
	  CDPType As Long)
	     ' ***********************************************
	     ' The SetProp routine checks to see if the Custom
	     ' Document Property pre-exists. If it exists, then
	     ' it adds the new value. If it does not exist,
	     ' it creates the new property and adds the new value.
	     ' ***********************************************
	     ' Make sure the optional argument CDPType is set.
	     ' If it is missing, make it a string value.
	     Dim oCDP, oProp, msg
	     If IsMissing(CDPType) Then
	        CDPType = msoPropertyTypeString
	     End If
	     Set oCDP = ActiveDocument.CustomDocumentProperties
	     ' Compare each custom document property to the
	     ' property you want to create to see if it exists.
	     For Each oProp In oCDP
	        ' If the Custom Property exists...
	        If oProp.Name = CDPName Then
	           With oProp
	              ' ...the custom property Type you are setting
	              ' must match the pre-existing custom property.
	              If .Type <> CDPType Then
	                 msg = "The custom property types do not match."
	                 msg = msg + " Custom property not set."
	                 MsgBox msg
	                 ' End the routine.
	                 Exit Sub
	              End If
	              .LinkToContent = False
	              ' Set the new value.
	              .Value = CDPValue
	           End With
	           ' A match was found, so exit the routine.
	           Exit Sub
	        End If
	     Next oProp
	     ' No match was found. Create a new property and value.
	     oCDP.Add Name:=CDPName, Value:=CDPValue, Type:=CDPType, _
	     LinkToContent:=False
	  End Sub
	
	For more information about setting custom properties, from the Visual Basic for
	Applications Editor, click the Office Assistant, type
	"CustomDocumentProperties", click Search, and then click to view
	"CustomDocumentProperties Property."
	
	MORE INFORMATION
	================
	
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
	Keywords          : kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
