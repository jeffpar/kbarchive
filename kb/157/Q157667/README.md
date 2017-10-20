---
layout: page
title: "Q157667: WD97: Float Over Text Objects Cut Off in Online Layout View"
permalink: /kb/157/Q157667/
---

## Q157667: WD97: Float Over Text Objects Cut Off in Online Layout View

{% raw %}

	Article: Q157667
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdisplay kbualink97 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In online layout view, floating objects may appear to be cut off.
	
	NOTE: Floating objects are not cut off in page layout or print preview, or when
	the document is printed. You cannot see floating objects in normal view.
	
	CAUSE
	=====
	
	Online layout view optimizes a document to make it easier to read it online.
	Text appears larger and wraps to fit the window, rather than to show the way it
	will actually be printed. Online layout view presents a layout based on the top
	text boundary of the document, and its page and section breaks.
	
	Floating objects will be truncated in either of the following cases.
	
	Case 1:
	
	The object extends above the text boundary of a page and is preceded by a page
	break. In this case, the top of the floating object will be cut off.
	
	Case 2:
	
	The object extends below the page break on a page. In this case, the bottom of
	the floating object will be cut off.
	
	WORKAROUND
	==========
	
	Case 1
	------
	
	Method 1:
	
	Switch to Page Layout view and move the floating object so it does not extend
	above the top text boundary for the page.
	
	Method 2:
	
	Select the floating object. On the Format menu, click AutoShape. On the Position
	tab, change the Vertical setting to a positive value, and then click OK.
	
	Case 2
	------
	
	Method 1:
	
	Switch to page layout view and move the page break to below floating object by
	inserting additional blank lines.
	
	Method 2:
	
	Switch to page layout view and move the page break to below the Float Over Text
	object by increasing the space below the last paragraph on the page. Use the
	following steps to adjust the spacing:
	
	1. From the View menu, click Page Layout.
	
	2. Select the last paragraph mark before the page break. To show the paragraph
	  marks and page break, on the Tools menu, click Options. On the View tab,
	  under Non-Printing Characters, select All, then click OK.
	
	3. On the Format menu, click Paragraph.
	
	4. On the Indents and Spacing tab, under spacing, change the After setting to a
	  larger value and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: 8.0 clipped partial incomplete
	
	======================================================================
	Keywords          : kbdisplay kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
