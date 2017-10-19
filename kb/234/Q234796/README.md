---
layout: page
title: "Q234796: FP: How to Create a Link to a Worksheet in an Excel Workbook"
permalink: /kb/234/Q234796/
---

## Q234796: FP: How to Create a Link to a Worksheet in an Excel Workbook

	Article: Q234796
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to link a web page to a particular worksheet in an
	Excel workbook.
	
	MORE INFORMATION
	================
	
	When you create a link to an Excel workbook, it will open by default to the last
	worksheet that was viewed. To create a link to a specific worksheet follow these
	steps:
	
	1. Open the workbook to the worksheet you want to link to. Click to select cell
	  A1.
	
	2. On the Insert menu, point to Name, and click Define.
	
	3. Type a name that contains only letters and numbers. Click OK.
	
	4. Save the workbook into the FrontPage web by clicking Save on the File menu.
	
	5. Open a Web in FrontPage Explorer, and double-click the page you want the
	  hyperlink to appear on.
	
	6. Select the text or image you want to create a hyperlink for.
	
	7. On the Insert menu, click Hyperlink.
	
	8. In the Hyperlink dialog box, browse to the Excel workbook created earlier,
	  and click to select it.
	
	9. In the URL box, put your insertion point after (workbook).xls and type
	  #(name), where (name) represents the name you defined in step two.
	
	For example, if the workbook you created was entitled 'Workbook' and the Name you
	defined in step two was 'worksheet', the URL line would read:
	Workbook.xls#worksheet
	
	10. Click OK. On the File menu, click Save.
	
	Note: Additional links can be created in a single worksheet. Repeat the previous
	steps replacing cell A1 in step one with the cell you would like to link to.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	
	=============================================================================
	
