---
layout: page
title: "Q163192: WD97: &quot;String Too Long&quot; Using Over 255 Characters"
permalink: /kb/163/Q163192/
---

## Q163192: WD97: &quot;String Too Long&quot; Using Over 255 Characters

{% raw %}

	Article: Q163192
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbwordvba
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to assign the value of a variable containing more than 255
	characters to a FormField object, you will receive the following error:
	
	  Run-time error '4609': "String too long"
	
	CAUSE
	=====
	
	The following example macro causes the error described in the Symptoms section
	of this article:
	
	     Sub StringTooLongError()
	        Dim sMyVar As String
	        sMyVar = String(256, "x")
	        ActiveDocument.FormFields(1).Result = sMyVar
	     End Sub
	
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
	
	The following example Visual Basic for Applications code sets text greater than
	255 characters in length to the form field named Text1:
	
	     Sub WorkAround255Limit()
	        ' Set Text1 form field to a unique string.
	        ActiveDocument.FormFields("text1").Result = "****"
	        If ActiveDocument.ProtectionType <> wdNoProtection Then
	            ActiveDocument.Unprotect
	        End If
	        Selection.GoTo What:=wdGoToBookmark, Name:="Text1"
	        Selection.Collapse
	        Selection.MoveRight wdCharacter, 1
	        Selection.TypeText (String(256, "W"))
	        Selection.GoTo what:=wdGoToBookmark, Name:="Text1"
	        ' Remove unique characters from Text1 form field.
	        With Selection.Find
	           .Execute findtext:="*", replacewith:="", replace:=wdReplaceAll
	        End With
	        ActiveDocument.Protect Password:="", NoReset:=True, Type:= _
	           wdAllowOnlyFormFields
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q127743 GetFormResult$() Function Does Not Return Complete Text String
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon kbcode kbmacro vba
	
	======================================================================
	Keywords          : kbdta kbdtacode kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
