---
layout: page
title: "Q244590: WD97: ErrMsg: &quot;Word Has Insufficient Memory&quot; Updating TOC"
permalink: /kb/244/Q244590/
---

## Q244590: WD97: ErrMsg: &quot;Word Has Insufficient Memory&quot; Updating TOC

{% raw %}

	Article: Q244590
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbmacroexample word8 kbwordvba kbfield word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit your document and update the table of contents, you may receive
	the following error message:
	
	  Word has insufficient memory. You will not be able to undo this action once
	  it is completed. Do you want to continue?
	
	CAUSE
	=====
	
	There are too many hidden bookmarks in the document. This problem usually occurs
	when you delete and reinsert the table of contents.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, you must remove the hidden bookmarks in your Word
	document and then update or replace the table of contents. To do this, follow
	these steps.
	
	1. Use one of the following methods to remove the hidden bookmarks from your
	  Word document.
	
	  Method 1: Delete the Hidden Bookmarks:
	
	  a. On the Insert menu, click Bookmarks.
	
	  b. In the Bookmark dialog box, click to select the "Hidden bookmarks" check
	     box.
	
	  c. In the "Bookmark name" list, click to select a hidden bookmark, and then
	     click Delete.
	
	     NOTE: A hidden bookmark name appears that is similar to the following
	     example:
	
	  _Toc486730372
	
	  d. Repeat step c to delete each hidden bookmark in your Word document.
	
	  Method 2: Run a Macro to Remove the Hidden Bookmarks:
	
	  Microsoft provides programming examples for illustration only, without
	  warranty either expressed or implied, including, but not limited to, the
	  implied warranties of merchantability and/or fitness for a particular
	  purpose. This article assumes that you are familiar with the programming
	  language being demonstrated and the tools used to create and debug
	  procedures. Microsoft support professionals can help explain the
	  functionality of a particular procedure, but they will not modify these
	  examples to provide added functionality or construct procedures to meet your
	  specific needs. If you have limited programming experience, you may want to
	  contact a Microsoft Certified Partner or the Microsoft fee-based consulting
	  line at (800) 936-5200. For more information about Microsoft Certified
	  Partners, please visit the following Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	  For more information about the support options that are available and about
	  how to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	  For more information about how to use the sample code in this article, click
	  the article number below to view the article in the Microsoft Knowledge
	  Base:
	
	  Q212536 OFF2000: How to Run Sample Code from Knowledge Base Articles
	
	  Create and run the following macro to automatically delete each of the hidden
	  bookmarks in your Word document:
	
	  Sub StripHiddenBookmarks()
	     Dim i As Long
	     ActiveDocument.Bookmarks.ShowHidden = True
	     For i = ActiveDocument.Bookmarks.Count To 1 Step -1
	        If Left$(ActiveDocument.Bookmarks(i).Name, 4) = "_Toc" Then
	           ActiveDocument.Bookmarks(i).Delete
	        End If
	        Application.ActiveDocument.UndoClear
	     Next i
	     ActiveDocument.Bookmarks.ShowHidden = False
	  End Sub
	
	  NOTE: When using this macro, you may be prompted a few times with the error
	  message listed in the "Symptoms" section of this article. Click Yes to
	  continue the macro.
	
	
	2. Use one of the following methods to update or replace your table of
	  contents.
	
	  NOTE: Before you use any of the following methods to update or replace your
	  table of contents, use one of the methods listed in step 1 of this article to
	  remove the hidden bookmarks in your Word document.
	
	  Method 1: Update the Table of Contents:
	
	  a. Place your insertion point in the table of contents, and press F9.
	
	  b. In the "Update Table of Contents" dialog box, click to select "Update
	     entire table" and click OK.
	
	  Method 2: Replace the Table of Contents:
	
	  1. On the Insert menu, click Index and Tables.
	
	  2. On the Table of Contents tab, select how you want your table of contents
	     to appear. Then click Options.
	
	  3. In the "Table of Contents Options" dialog box, click to select how to
	     build your table of contents ("Build table of contents from": Styles or
	     "Table entry fields" or both).
	
	  4. Click OK to close the "Table of Contents Options" dialog box.
	
	  5. Click OK to close the "Indexes and Tables" dialog box.
	
	  6. Click Yes to the following message:
	
	  Do you want to replace the selected table of contents?
	
	Additional query words: toc tableofcontents book mark marks
	
	======================================================================
	Keywords          : kbdta kbmacroexample word8 kbwordvba kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
