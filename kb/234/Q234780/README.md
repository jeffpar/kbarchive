---
layout: page
title: "Q234780: FP98: How to Create a Link to a Worksheet in an Excel Workbook"
permalink: /kb/234/Q234780/
---

## Q234780: FP98: How to Create a Link to a Worksheet in an Excel Workbook

{% raw %}

	Article: Q234780
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to link a Web page to a specific worksheet in an
	Excel workbook.
	
	MORE INFORMATION
	================
	
	When you create a link to an Excel workbook, it will open to the last worksheet
	that was viewed. To create a link to a specific worksheet follow these steps:
	
	1. Open the workbook to the worksheet you want to link to. Click to select cell
	  A1.
	
	2. On the Insert menu, point to Name, and click Define.
	
	3. Type a name that contains only letters and numbers. Click OK.
	
	4. Save the workbook into the FrontPage Web by clicking Save on the File menu.
	
	5. Open a Web in FrontPage Explorer, and select the page you want the hyperlink
	  to appear on. Open that page in the FrontPage Editor and select the text or
	  image you want to hyperlink from.
	
	6. Click Hyperlink from the Insert menu. Choose the Excel workbook created
	  earlier from the list of files.
	
	7. In the URL line, put your cursor after (workbook).xls and type #(name), where
	  (name) represents the name you defined in step two.
	
	For example, if the workbook you created was entitled 'Workbook' and the Name you
	defined in step two was 'worksheet', the URL line would read:
	Workbook.xls#worksheet
	
	8. Click OK. On the File menu, click Save.
	
	Note: Additional links can be created in a single worksheet. Repeat the previous
	steps replacing cell A1 in step one with the cell you would like to link to.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
