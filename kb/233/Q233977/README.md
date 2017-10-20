---
layout: page
title: "Q233977: WD97: Cannot Go to Bookmark in Unprotected Section of Document"
permalink: /kb/233/Q233977/
---

## Q233977: WD97: Cannot Go to Bookmark in Unprotected Section of Document

{% raw %}

	Article: Q233977
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
	
	When you create a macro that runs on exit from a form field, and the following
	conditions are all true:
	
	- Your forms document contains an unprotected section.
	
	- You have set a bookmark in the unprotected section of the forms document.
	
	- The macro uses a command or set of commands to go to the bookmark in the
	  unprotected section of the forms document.
	
	The insertion point does not go to the bookmark you set in the unprotected
	section of your document.
	
	
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
	
	To work around this problem, you can use the Visual Basic for Applications OnTime
	method.
	
	The following example Visual Basic for Applications macros demonstrate this
	workaround:
	
	This workaround requires two macros. The first macro, OnExitMacro, runs the
	OnTime method, which calls the second macro, GotoBookMark. The GotoBookMark
	macro moves the insertion point to the bookmarked location in the unprotected
	section of the forms document.
	
	  Sub OnExitMacro()
	     Application.OnTime When:=Now + TimeValue("00:00:01"), _
	        Name:="GotoBookMark"
	  End Sub
	
	  Sub GotoBookMark()
	     Selection.GoTo wdGoToBookmark, Name:="<Replace with Your Bookmark Name>"
	     System.Cursor = wdCursorNormal ' Changes cursor from
	                                    ' hourglass to normal cursor
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: vba
	
	======================================================================
	Keywords          : kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
