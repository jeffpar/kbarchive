---
layout: page
title: "Q316387: FP: &quot;Unable to Run Text Converter&quot; Err Msg When Pasting Text"
permalink: kb/316/Q316387/
---

## Q316387: FP: &quot;Unable to Run Text Converter&quot; Err Msg When Pasting Text

	Article: Q316387
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta ocsso
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to paste text into a document in Microsoft FrontPage, you may
	receive the following error message:
	
	  Unable to run text converter.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall the text converter feature of
	FrontPage. To do this, follow these steps.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click "Add or Remove Programs".
	
	3. In the list of currently installed programs, click "Microsoft Office XP
	  Professional with FrontPage", and then click Change.
	
	  NOTE: A different version of Microsoft Office or FrontPage may be installed on
	  your computer. Click the corresponding item on the list.
	
	4. In the "Microsoft Office XP Setup" dialog box, click "Add or Remove
	  Features", and then click Next.
	
	5. Double-click Office Shared Features to expand its features, and then
	  double-click "Converters and Filters".
	
	6. Click the Text Converters arrow to display the list, and then click Not
	  Available.
	
	7. Click Update to remove the text converters, click OK, and then click Close.
	
	8. Right-click Start, and then click Explore.
	
	9. In Windows Explorer, browse to the following folder
	
	  <drive>:\Program Files\Common Files\Microsoft Shared
	
	  where <drive> is the letter of the drive where your program files are
	  installed.
	
	10. In the Microsoft Shared folder, right-click the TextConv folder, and then
	  click Delete.
	
	  Click Yes to confirm your intention to delete the folder and to move all its
	  contents to the Recycle Bin.
	
	11. In Control Panel, double-click "Add or Remove Programs".
	
	12. In the list of currently installed programs, click "Microsoft Office XP
	  Professional with FrontPage" (or the item that corresponds to the version
	  that is installed on your computer), and then click Change.
	
	13. Click "Add or Remove Features", and then click Next.
	
	14. Double-click Office Shared Features to expand its features, and then
	  double-click "Converters and Filters".
	
	15. Click the Text Converters arrow to display the list, and then click "Run
	  from My Computer".
	
	16. Click Update to reinstall the text converters, and then click OK.
	
	17. Close the "Add or Remove Program" dialog box, and then close Control Panel.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q205684 FP2000: How FrontPage Handles Document Conversion to HTML
	
	  Q235928 WD2000: Supported File and Graphics Formats
	
	Additional query words: front page prb
	
	======================================================================
	Keywords          : kberrmsg kbdta ocsso 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
