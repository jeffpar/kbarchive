---
layout: page
title: "Q171569: FP: How to Create Custom Web Templates"
permalink: /kb/171/Q171569/
---

## Q171569: FP: How to Create Custom Web Templates

	Article: Q171569
	Product(s): Word Front Page
	Version(s): windows:97; macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205694.
	
	For a Microsoft FrontPage 98 version of this article, see Q194153.
	
	SUMMARY
	=======
	
	This article describes how to create a Web template from any Web and make it
	available in the Template Or Wizard list in the New FrontPage Web dialog box.
	(To locate the Template Or Wizard list, point to New on the File menu, and then
	click New FrontPage Web.)
	
	MORE INFORMATION
	================
	
	To create a Web template, use the appropriate method for your version of
	FrontPage.
	
	Microsoft FrontPage 97
	----------------------
	
	1. Start FrontPage Explorer.
	
	2. Open or create the Web that you want to use for the Web template.
	
	3. Publish the Web to a disk-based Web, using these steps:
	
	  a. On the File menu, click Publish FrontPage Web.
	
	  b. In the "Destination Web Server or File Location" box, type the path of an
	     existing folder on your hard disk. For example, type "c:\disk_based_Web"
	     (without the quotation marks).
	
	  c. In the "Name of Destination FrontPage Web" box, type a name for your Web.
	     For example, type "sub_Web" (without the quotation marks).
	
	  d. Click to clear the "Add to an Existing FrontPage Web" check box.
	
	  e. Click OK.
	
	4. In Windows Explorer, select the disk-based Web you created.
	
	5. On the Edit menu, click Copy.
	
	6. Open the <FrontPageRoot>\Webs folder, where <FrontPageRoot> is
	  the folder in which you installed FrontPage 97. By default, FrontPage 97 is
	  installed in the \Program Files\Microsoft FrontPage\ folder. This folder
	  contains several folders with the .tem and .wiz extensions.
	
	7. On the Edit menu, click Paste.
	
	8. Open the new folder. On the File menu, point to New and then click Text
	  Document. Name the new document, "<template>.inf" (without the
	  quotation marks), where <template> is the name of the folder you
	  created in step 7.
	
	9. Using a text editor such as Notepad, open the <template>.inf file and
	  type the following information:
	
	     [info]
	     title=Custom Web Template
	     description=My first Custom Web Template
	
	10. Save and close the file.
	
	Microsoft FrontPage for the Power Macintosh, version 1.0
	--------------------------------------------------------
	
	1. Copy the Web to the Macintosh HD:FrontPage Webs folder.
	
	2. Rename the copied Web to "<webname>.tem" (without the quotation marks)
	  where <webname> is the original folder name.
	
	3. Using a text editor, create a file called "<webname>.inf" (without the
	  quotation marks) in the <webname>.tem folder that you created in step
	  2. The text file should contain the following information:
	
	     [info]
	     title=Custom Web Template
	     description=My first Custom Web Template
	
	4. Save the file.
	
	When you open the New FrontPage Web dialog box, your custom template will be
	listed in the Template Or Wizard list as Custom Web Template. When you select
	your custom template, the "My first Custom Web Template" will appear in the
	Description box. When you click OK, the \_private and \images folders will be
	created in the new Web.
	
	Additional query words: 97 Web template tmp
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97; macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
