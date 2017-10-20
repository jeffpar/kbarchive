---
layout: page
title: "Q158436: WD97: Sample VB Code to Assign Clipboard Text to String Variable"
permalink: /kb/158/Q158436/
---

## Q158436: WD97: Sample VB Code to Assign Clipboard Text to String Variable

{% raw %}

	Article: Q158436
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word8 kbwordvba word97kbfaq
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article provides a Microsoft Visual Basic for Applications macro example
	that uses the GetFromClipboard and GetText methods, to retrieve text stored on
	the Clipboard and assigns the contents to a string variable.
	
	MORE INFORMATION
	================
	
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
	
	The following example Visual Basic for Applications subroutine uses the
	GetFromClipboard and GetText methods, to retrieve the Clipboard contents to a
	string variable.
	
	  Sub GetClipBoardText()
	        Dim MyData As DataObject
	        Set MyData = New DataObject
	        Dim sClipText As String
	        On Error GoTo NotText
	        ' Get data from the clipboard.
	        MyData.GetFromClipboard
	        ' Assign clipboard contents to string variable.
	        sClipText = MyData.GetText(1)
	        MsgBox sClipText
	     NotText:
	        If Err <> 0 Then
	           MsgBox "Data on clipboard is not text."
	        End If
	     End Sub
	
	For information about how to do this in earlier versions of Word, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q82111 WordBasic Macro to Assign Clipboard Text to a String Variable
	
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
	Keywords          : kbdta kbdtacode kbmacroexample word8 kbwordvba word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
