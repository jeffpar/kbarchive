---
layout: page
title: "Q288146: WD97: Font Size Lost for Hebrew Characters in Round-Tripped Doc"
permalink: /kb/288/Q288146/
---

## Q288146: WD97: Font Size Lost for Hebrew Characters in Round-Tripped Doc

{% raw %}

	Article: Q288146
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you do the following
	
	1. Use Microsoft Word 2000 to open a document that was created in Hebrew Word 97
	  SR-2
	
	2. Save the document in Word 2000 format
	
	3. Reopen the document in Hebrew Word 97
	
	the Hebrew characters all appear the same size.
	
	CAUSE
	=====
	
	This behavior results from new formatting features introduced in Word 2000 that
	are incompatible with the Hebrew Word 97 format.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods.
	
	Method 1
	--------
	
	In Word 2000, save the document in RTF format instead of Word 2000 format. Move
	any macros that are currently in the document to a template.
	
	Method 2
	--------
	
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
	
	Use a Visual Basic for Applications macro to update the SizeBi property of the
	text to be the same as the Size property.
	
	  Sub SizeEqSizeBi()
	
	      Dim i As Integer, iStart As Integer, iSizeBi As Integer
	      Dim dCharCount As Double
	      Dim rgCurrent As Range
	      Dim ch As Characters
	      Dim sTab As String
	
	      dCharCount = ActiveDocument.Characters.Count
	      iStart = 1
	      iSizeBi = ActiveDocument.Characters(iStart).Font.SizeBi
	      sTab = Chr(9)
	      
	      If dCharCount > 1 Then
	
	          For i = 1 To dCharCount
	          
	              Set rgCurrent = ActiveDocument.Characters(i)
	   
	              If rgCurrent.Font.SizeBi <> iSizeBi Or i = dCharCount Then
	                  'ActiveDocument.Range(iStart - 1, i - 1).Select
	                  ActiveDocument.Range(iStart - 1, i - 1).Font.Size = iSizeBi
	                  iStart = i
	                  iSizeBi = rgCurrent.Font.SizeBi
	              End If
	     
	          Next
	
	      End If
	
	  End Sub
	
	You can replace ActiveDocument with a document object passed in as an argument to
	the sub. This works with a batch conversion process.
	
	MORE INFORMATION
	================
	
	Bi-directional (BiDi) products allow the user to type both left-to-right text
	and text in right-to-left languages such as Arabic, Farsi, Hebrew, and Urdu.
	
	Additional query words: word97 wd97 word2000 wd2000 wd2k hebrew roundtrip fontsize bi-di bidi bidirectional
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
