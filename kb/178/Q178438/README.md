---
layout: page
title: "Q178438: Microsoft FrontPage 98 Step by Step Comments and Corrections"
permalink: /kb/178/Q178438/
---

## Q178438: Microsoft FrontPage 98 Step by Step Comments and Corrections

{% raw %}

	Article: Q178438
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 10-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft FrontPage 98 Step by Step ISBN 1-57231-636-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft FrontPage 98 Step by Step," ISBN
	1-57231-636-5.
	
	Contents:
	
	- Other Titles Page: Text Incorrect
	
	- Page xix: Incorrect URL For Microsoft Press Support
	
	- Pages 19 & 21: Screen Shot Incorrect
	
	- Page 30: Screen Shot Confusing
	
	- Lesson 3: Cannot Open Lesson (Printings 2 and 3)
	
	- Pages 70 & 96: Shared Borders Aren't Displayed
	
	- Page 81: Step Missing
	
	- Page 109: Movie Controls May Not Appear In Preview Or Browser
	
	- Frame Page Naming Scheme Inconsistent with Other Pages
	
	MORE INFORMATION
	================
	
	Other Titles Page: Text Incorrect
	---------------------------------
	
	Bottom of the Other Titles page:
	Change: "These books are approved couseware"
	To: "These books are approved courseware"
	
	
	Page xix: Incorrect URL For Microsoft Press Support
	---------------------------------------------------
	
	On page xix, line 5, the URL for accessing Microsoft Press Support is incorrect.
	
	Change:
	http://mspress.microsoft.com/mspress/support
	
	To:
	http://mspress.microsoft.com/support
	
	
	Pages 19 & 21: Screen Shot Incorrect
	------------------------------------
	
	The screen shots on page 19 and 21 show Default.htm as a page with frames.
	Default.htm is actually a frameless page with text only. The text begins:
	
	"Morgan Park Zoo is celebrating its 65th anniversary!"
	
	Note that you should be able to complete all of the steps in the lesson despite
	the difference between what you will see on the screen and the screen shot.
	
	
	Page 30: Screen Shot Confusing
	------------------------------
	
	The screen shot on page 30 includes paragraph marks. However, paragraph marks are
	not turned on by default in the FrontPage Editor. The text does not explain how
	to turn on paragraph marks until page 31.
	
	
	Lesson 3: Cannot Open Lesson (Printings 2 and 3)
	------------------------------------------------
	
	Symptoms
	
	After following the directions on page 46, under the subheading Start The Lesson,
	you receive the following error:
	
	  Server error: Cannot open file
	  C:\\WebShare\wwwroot\lesson3\_vti_pvt\service.lck for writing.
	
	Resolution
	
	If you have not already done so, delete the lesson3 folder that was copied from
	the "Microsoft FrontPage 98 Step by Step" CD-ROM to your Wwwroot folder. To do
	this, please follow these steps:
	
	1. On the Desktop, right-click the My Computer icon, and then click Explore.
	
	2. In the All Folders pane, double-click drive C.
	
	3. Double-click the Webshare folder, and then double-click the Wwwroot folder.
	  (In Windows NT, the Wwwroot folder is in C:\InetPub.)
	
	4. Select the Lesson3 folder, and then from the File menu choose Delete.
	
	5. Click Yes, and the click Yes To All to confirm the deletion of the Lesson3
	  folder.
	
	6. Close the Exploring Window.
	
	To install the corrected Lesson3 folder, please follow these steps:
	
	1. Download FP98SBS.exe into a temporary directory.
	
	  If your software is not capable of downloading the file into a particular
	  directory, download the file and copy or move it to a temporary directory.
	
	2. Double-click (or run) FP98SBS.exe to extract the necessary files.
	
	3. Click Unzip if C:\webshare\wwwroot is the location of your Wwwroot folder. If
	  your Wwwroot folder is in different location, change the path in the Unzip To
	  Location box to match the location of your Wwwroot folder, and then click
	  Unzip.
	
	4. Click OK, and then click Close.
	
	5. Delete FP98SBS.exe.
	
	The following file is available for download from the Microsoft Download Center:
	
	  FP98SBS.EXE
	  (http://download.microsoft.com/download/fp98/MMSPRESS/1.0/WIN98Me/EN-US/FP98SBS.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Begin Lesson 3 from the beginning.
	
	
	Pages 70 & 96: Shared Borders Aren't Displayed
	----------------------------------------------
	
	In several places in the book, the screenshots and directions assume that shared
	borders will be enabled. However, shared borders are not enabled by default in
	the FrontPage Webs.
	
	This error occurs on page 70 and page 96.
	
	Correction:
	Insert the following directions just after the "Start The Lesson" section.
	
	To enable shared borders on these pages, follow these steps.
	
	1. In the Navigation pane, make sure that Default.htm is selected.
	
	2. On the Tools menu, select Shared Borders.
	
	3. In the Shared Borders dialog box, select the Top, Left, and Bottom check
	  boxes.
	
	4. Click OK.
	
	The directions will now work correctly.
	
	
	Page 81: Step Missing
	---------------------
	
	Page 81:
	Add step after step 2: 3. Select the Plain Bullets tab.
	
	
	Page 109: Movie Controls May Not Appear In Preview Or Browser
	-------------------------------------------------------------
	
	Page 109 has instructions to enable the Show Controls property of a video file.
	When you enable Show Controls you should see the Play button and progress bar
	below the video. If these controls do not appear in Preview or Browser mode use
	the following procedure to correct the problem.
	
	1. In FrontPage Editor, open the page on which you inserted the video.
	
	2. On the Insert menu, point to Advanced and then click Plug-in.
	
	3. In the Plug-In Properties dialog box, click Browse and select the video file.
	
	4. Click OK.
	
	5. Click OK again.
	
	6. Save the page.
	
	7. Click the Preview button on the Standard toolbar.
	
	
	Frame Page Naming Scheme Inconsistent with Other Pages
	------------------------------------------------------
	
	The step-by-step instructions for creating and naming frames for Frpachyd.htm are
	correct, but inconsistent with the copy of Frpachyd.htm in the other lesson
	folders.
	
	  Corrections:
	  Page 149, Step 2:
	  Change: "In the Name box, type exhibits"
	  To: "In the Name box, type top"
	
	  Page 150, Chart:
	  Second row, first column:
	  Change: "Name: contents"
	  To: "Name: exhibits"
	
	  Third row:
	  Change: "Name: navigate"
	  To: "Name: bottom"
	
	  Page 151, step 4:
	  Change: "The name of the frame, "contents,"..."
	  To: "The name of the frame, "exhibits,"..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: press ms_press 1-57231-636-5 EUBook EUSBS FP
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
