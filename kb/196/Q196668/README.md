---
layout: page
title: "Q196668: WD97: Find/Replace Command Doesn't Ignore Deleted Text"
permalink: /kb/196/Q196668/
---

## Q196668: WD97: Find/Replace Command Doesn't Ignore Deleted Text

{% raw %}

	Article: Q196668
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Track Changes feature in Microsoft Word, if you click Find or
	Replace on the Edit menu and search for specific text, Word may not find the
	text specified in the Find what box if that text contains deleted characters.
	
	For example, if you type "Forget me not" (without the quotation marks), turn on
	Track Changes, and then delete the word "me", one of the following occurs when
	you attempt to do either a Find or a Replace action.
	
	With the "Highlight Changes on Screen" Option Turned On:
	
	Word does not find "Forget not".
	
	With the "Highlight Changes on Screen" Option Turned Off:
	
	When you do a Find action, Word finds "Forget not"; however, when you do a
	Replace action, Word does not find "Forget not".
	
	
	WORKAROUND
	==========
	
	To work around this problem, either accept or reject the changes in your Word
	document. To do this, follow these steps:
	
	1. On the Tools menu, point to Track Changes and click Accept or Reject Changes.
	
	2. In the Accept or Reject Changes dialog box, do one of the following:
	
	   - Click Find and click either Accept or Reject to accept or reject
	     individual changes to your Word document.
	
	     -or-
	
	   - Click either Accept All or Reject All to accept or reject the changes that
	     were made to your Word document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To use Track Changes in your Word document, follow these steps:
	
	1. On the Tools menu, point to Track Changes, and click Highlight Changes.
	
	2. In the Highlight Changes dialog box, select the "Track changes while editing"
	  check box.
	
	  NOTE: The "Highlight changes on screen" and "Highlight changes in printed
	  document" check boxes are selected by default and should remain selected.
	
	3. Click OK.
	
	For more information about Track Changes, click "Contents and Index" on the Help
	menu, click the Index tab in Microsoft Word Help, type the following text
	
	  track changes
	
	and then double-click the selected text to go to the "Ways to add comments and
	keep track of changes" topic. If you are unable to find the information you
	need, ask the Office Assistant.
	
	Additional query words: edit find search revision marks delete deleted text line
	
	======================================================================
	Keywords          : kbdta kbproof word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
