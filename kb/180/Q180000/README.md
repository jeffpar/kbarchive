---
layout: page
title: "Q180000: WD97: OLE Objects Print Incorrectly with Float Over Text"
permalink: /kb/180/Q180000/
---

## Q180000: WD97: OLE Objects Print Incorrectly with Float Over Text

	Article: Q180000
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have more than one OLE object in a document and you make a change to the
	second OLE object, that object will appear twice when you print the document.
	For example, if you insert three charts (on the Insert menu, click Object, and
	click Microsoft Graph 97 Chart) in a document, and you make a change to the
	second chart, the printout will contain two instances of the second chart.
	
	Note that the document will be displayed correctly on the screen.
	
	CAUSE
	=====
	
	This problem occurs because of a conflict when the Float Over Text option is
	used in conjunction with background printing.
	
	WORKAROUND
	==========
	
	This printing problem does not occur if Background Printing is turned off for
	the document or if Float Over Text is deactivated for each of the objects. To
	work around this problem, use any of the following methods.
	
	Method 1: Turn Off Background Printing
	--------------------------------------
	
	To turn off background printing, follow these steps::
	
	1. On the Tools menu, click Options.
	
	2. Click the Print tab, and under Printing Options, click to clear the
	  Background Printing check box.
	
	3. Click OK.
	
	Method 2: Turn Off Float Over Text
	----------------------------------
	
	To deactivate the Float Over Text attribute, follow these steps:
	
	1. Click once on the chart (or object) to select it.
	
	2. On the Format menu, click Object.
	
	3. Click the Position tab, and click to clear the Float Over Text check box.
	
	4. Click OK to view your document and print as expected.
	
	5. Repeat Steps 1-4 above for each object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: graph excel Chart97
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
