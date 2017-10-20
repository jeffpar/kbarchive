---
layout: page
title: "Q186115: WD97: Macro to Check for Multiple Instances of Word"
permalink: /kb/186/Q186115/
---

## Q186115: WD97: Macro to Check for Multiple Instances of Word

{% raw %}

	Article: Q186115
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have one instance of Word running and you start Word again, you will have
	two instances of Word running rather than one.
	
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
	
	The following Visual Basic for Applications macro, when named AUTOEXEC, will
	check to see if any other instances of Word are running. If it finds another
	instance of Word, it will give you the option of closing one instance or
	allowing the new instance.
	
	     Sub AutoExec()
	        Dim tApp As Task
	        ' Loop through all running applications.
	        For Each tApp In Tasks
	           ' If application is Word...
	           If InStr(1, tApp.Name, "Microsoft Word") Then
	              ' Display choice to close or not close
	              Select Case MsgBox("Close (" & tApp.Name & ")?", vbYesNoCancel)
	                 Case vbYes
	                    ' Switch to the Word instance in case a dialog box or
	                    ' message is being displayed that prevents you from
	                    ' closing the instance of Word.
	                    tApp.Activate
	                    tApp.Close
	                 Case vbCancel
	                    Exit For
	                 Case Else
	              End Select
	           End If
	        Next
	     End Sub
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	
	Additional query words: copies copy two determine session sessions multiple already running second instance
	
	======================================================================
	Keywords          : kbdta kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
