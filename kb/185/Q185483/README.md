---
layout: page
title: "Q185483: WD97: Compare Documents Reinserts Deleted Paragraph Marks"
permalink: /kb/185/Q185483/
---

## Q185483: WD97: Compare Documents Reinserts Deleted Paragraph Marks

{% raw %}

	Article: Q185483
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbdtacode kbmacroexample word97
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you compare editing revisions between an original document and its revised
	counterpart (on the Tools menu, point to Track Changes, and click Compare
	Documents), the layout of the document may change. For example, additional lines
	and page breaks may appear, and line wrapping may change.
	
	For an example of this behavior, see the "More Information" section later in this
	article.
	
	CAUSE
	=====
	
	This behavior is by design of Microsoft Word.
	
	When comparing documents, if revisions include deleted paragraph marks or manual
	line breaks, new lines may appear to indicate lines that were deleted. Word must
	display any paragraph marks that were deleted to accurately display the
	differences between the compared documents.
	
	Also, the word immediately preceding the deleted paragraph mark or manual line
	break is listed as part of the revision, and therefore appears twice (as being
	deleted and then added back).
	
	WORKAROUND
	==========
	
	Although you cannot work around this behavior, you can quickly turn revision
	marks on and off. To do this, use either of the following methods.
	
	Method 1: Create a Macro
	------------------------
	
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
	
	For additional information about getting help with Visual Basic for Applications,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	To quickly turn revision marks on and off, use the following sample Visual Basic
	for Applications macro:
	
	     Sub ToggleShowRevisions()
	        ActiveDocument.ShowRevisions = Not ActiveDocument.ShowRevisions
	     End Sub
	
	You can also assign this macro to a toolbar or menu for quick access.
	
	For more information about adding a command to a menu, click Contents And Index
	on the Help menu, click the Index tab in Word Help, type the following text
	
	  menus
	
	and then double-click the selected text to go to the "Add a command or other item
	to a menu" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	Method 2: Use the Highlight Changes Command
	-------------------------------------------
	
	To manually turn revision marks on and off, follow these steps:
	
	1. On the Tools menu point to Track Changes and click Highlight Changes.
	
	2. In the Highlight Changes dialog box, click to clear (uncheck) or select
	  (check) the "Highlight changes on screen" check box.
	
	MORE INFORMATION
	================
	
	The following sample text demonstrates this behavior.
	
	NOTE: <p> denotes a paragraph mark.
	
	Original Document (Document 1) - Before Revisions
	-------------------------------------------------
	
	  The Title.<p>
	  More Title.<p>
	  SubTitle.<p>
	
	Copy of Original Document (Document 2) - After Revisions
	--------------------------------------------------------
	
	  The Title.More Title.<p>
	  SubTitle.<p>
	
	After Comparing Documents
	-------------------------
	
	  The Title.(<- Red Strikethrough: Deletion)<p>(<-Red: Deletion)
	  The Title.(<- Red Underline: Addition)More Title.<p>
	  SubTitle.<p>
	
	NOTE: Although it is not shown here, the deleted paragraph mark would be
	displayed as red, given default Track Changes settings (on the Tools menu, click
	Options; then click the Track Changes tab). Additional text around the deleted
	paragraph mark may be displayed as strikethrough and/or underlined.
	
	To reproduce this behavior, follow these steps:
	
	1. In Word, create a new document.
	
	2. In the new blank document, type "Title." and press ENTER.
	
	3. Type "More Title." and press ENTER.
	
	4. Type "SubTitle."
	
	5. Save the document as Before.Doc.
	
	6. Delete the paragraph mark you created when pressing ENTER in step 1.
	
	  Your text should now appear as follows:
	
	  Title.MoreTitle.
	  SubTitle.
	
	7. Save your changes as After.Doc.
	
	8. On the Tools menu, point to Track Changes, and click Compare Documents.
	
	9. In the "Select File to Compare With Current Document" dialog box, select the
	  "Before.Doc" that you created in step 5, and click Open.
	
	If Show/Hide is turned on, you should see the deleted paragraph mark.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q112165 WD: Separate Modifications Marked as a Single Revision
	
	  Q121919 WD: Formatting/Drawing Layer Change Unmarked in Compare
	
	Additional query words: add chop disk file markings marks redline redlining remove review revision screen strikeout workgroup unmarked first untracked
	
	======================================================================
	Keywords          : kbdta kbdtacode kbmacroexample word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
