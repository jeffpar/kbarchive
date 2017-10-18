---
layout: page
title: "Q167465: WD97: Inserting a Graphic Over Hyperlink Retains Hyperlink Style"
permalink: kb/167/Q167465/
---

## Q167465: WD97: Inserting a Graphic Over Hyperlink Retains Hyperlink Style

	Article: Q167465
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; winnt:3.51
	Operating System(s): 
	Keyword(s): kbother kbusage winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Word 97 for Windows to create a Web page, if you select a hyperlink
	and then insert a graphic image over the hyperlink, the graphic image will
	retain the hyperlink style and a blue underline will be displayed below it.
	
	CAUSE
	=====
	
	This problem occurs only when you run Word 97 for Windows on Microsoft Windows
	NT 3.51. This problem does not occur when you use Microsoft Windows NT 4.0 or
	Windows 95.
	
	WORKAROUND
	==========
	
	To add the hyperlink to a graphic, use the following steps:
	
	1. In your HTML document, select the hyperlink, and click Cut on the Edit menu.
	
	2. On the Insert menu, point to Picture, and then click From File.
	
	3. In the Insert Picture dialog box, click the desired picture. Click to clear
	  the Float Over Text check box, and then click Insert.
	
	4. Right-click the graphic, and then click Hyperlink.
	
	5. Type the hyperlink, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother kbusage winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97; winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	
