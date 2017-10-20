---
layout: page
title: "Q183377: Official MS HTML Help Authoring Kit Comments and Corrections"
permalink: /kb/183/Q183377/
---

## Q183377: Official MS HTML Help Authoring Kit Comments and Corrections

{% raw %}

	Article: Q183377
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr kbHTMLHelp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Official Microsoft HTML Help Authoring Kit ISBN 1-57231-603-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Official Microsoft HTML Help Authoring
	Kit," ISBN 1-57231-603-9.
	
	Contents:
	
	- Readme.txt: Support Text is Localized for US Only
	
	- Page 8: Text Incorrect
	
	- Page 31: Text Incorrect
	
	- Page 61: Text Incorrect
	
	- Page 62: Screenshot Incorrect
	
	- Page 63: Screenshot Incorrect
	
	- Page 64: Default Help Topic Does Not Match Book
	
	- Page 65: Step 7 "Inconsistencies" should be "Definition"
	
	- Page 71: Step 3 - Click Save (not OK)
	
	- Page 73: Create the keyword Basics not Basic Concepts
	
	- Page 79: Step 3 Text Incorrect
	
	- Page 80: Extra Steps Needed
	
	- Page 121: Technical Correction
	
	- Page 121: Text Incorrect
	
	- Page 138: Text Incorrect
	
	- Page 154: Popup Source Parameters Incorrectly Defined
	
	- Page 167: Step 1 Open Backup.hhp, Not Backup.chm
	
	- Page 174: Chapter 6 FAQ Includes Questions from Chapter 5
	
	MORE INFORMATION
	================
	
	Readme.txt: Support Text is Localized for US Only
	-------------------------------------------------
	
	Under "HTML Help Support," the support clause describes options for customers in
	the United States only. Outside the United States, please contact your local
	Microsoft subsidiary for further support information. A list of all Microsoft
	subsidiaries worldwide is available from the following Web site:
	
	  http://www.microsoft.com/
	
	
	Page 8: Text Incorrect
	----------------------
	
	Page 8, under the subheading What Needs To Be Installed:
	Change: "Follow the instructions with included with the CD"
	To: "Follow the instructions included with the CD" (without the quotation marks)
	
	
	Page 31: Text Incorrect
	-----------------------
	
	Page 31, third paragraph, last sentence:
	Change: "the user most scroll"
	To: "the user must scroll" (without the quotation marks)
	
	
	Page 61: Text Incorrect
	-----------------------
	
	Page 61, second Step 2:
	Change: "Choose Project and click Next."
	To: "Choose Project and click OK." (without the quotation marks)
	
	
	Page 62: Screenshot Incorrect
	-----------------------------
	
	Page 62, screenshot:
	Just under the [OPTIONS] header, the following line should appear:
	Compatibility = 1.1
	
	
	Page 63: Screenshot Incorrect
	-----------------------------
	
	Page 63, screenshot:
	In the file listing on the screen shot, main.htm is listed twice.
	This will not occur on your screen.
	
	
	Page 64: Default Help Topic Does Not Match Book
	-----------------------------------------------
	
	The ICECREAM.CHM default page displayed after completing step 4 on page 64 might
	not match the "Guide to Using YUM" page shown in the book.
	
	The order of the files in the [FILES] list is determined by how you added the
	files. If the first HTM file is selected and then the last file is Shift
	selected to accomplish step 3 on page 63, then WORKING.HTM will be the top file
	instead of MAIN.HTM. Specifying a default page overrides the file order.
	
	Add the following text to page 63 after screen capture:
	
	  " Specify a Default Topic File
	
	  1. Click the Change Project Options button (located directly below the Project
	  tab).
	
	  2. Click the General tab and then the Default File box.
	
	  3. Type MAIN.HTM and then click OK.
	
	  MAIN.HTM will now be the default file that is displayed first whenever the
	  compiled HTML Help file is opened. " (without the quotation marks)
	
	Page 65: Step 7 "Inconsistencies" should be "Definition"
	--------------------------------------------------------
	
	Page 65, Step 7:
	Change: "The Resolve Window Inconsistencies wizard will appear."
	To: "The Resolve Window Definition wizard will appear." (without the quotation
	marks)
	
	
	Page 71: Step 3 - Click Save (not OK)
	-------------------------------------
	
	Page 71: Step 3
	Change: "click OK."
	To: "click Save." (without the quotation marks)
	
	
	Page 73: create the keyword Basics not Basic Concepts
	-----------------------------------------------------
	
	Page 73, Practice Exercise:
	The instructions indicate that you should create a keyword "Basic Concepts". The
	illustration that follows on page 75 shows the keyword created as "Basics".
	
	Change:
	"On your own, create a keyword 'Basic Concepts' that..."
	
	To:
	"On your own, create the keyword 'Basics' that..." (without the quotation marks)
	
	
	Page 79: Step 3 Text Incorrect
	------------------------------
	
	Page 79, step 3:
	Change: "Change the title to Guide to Using YUM and the default window to Main,
	as shown below."
	To: "Change the title to Guide to using YUM, the default file to main.htm, and
	the default window to Main." (without the quotation marks)
	
	
	Page 80: Extra Steps Needed
	---------------------------
	
	On page 80, insert the following steps before step 1 in the "Recompiling and
	Viewing the Results" section:
	
	  "
	
	- If you have not already done so, close the already-compiled HTML Help window.
	
	- Click Add/Modify Window Definitions.
	
	- On the Files tab, make sure that the TOC is Icecream.hhc and the Index is
	  Index.hhk.
	
	  " (without the quotation marks)
	
	
	Page 121: Technical Correction
	------------------------------
	
	Page 121, answer #2:
	Change answer from "With HTML Help 1.1 you can only define one Category...." to
	read as follows:
	
	"Yes. You can define as many Categories as you want using HTML Help 1.1."
	(without the quotation marks)
	
	
	Page 121: Text Incorrect
	------------------------
	
	Page 121, paragraph 9:
	Change: "They also allow you write for"
	To: "They also allow you to write for" (without the quotation marks)
	
	
	Page 138: Text Incorrect
	------------------------
	
	Page 138, Step 4:
	Change: "accrec.chm::/accrec.hhc"
	To: "accrec.chm::\accrec.hhc" (without the quotation marks)
	
	
	Page 154: Popup Source Parameters Incorrectly Defined
	-----------------------------------------------------
	
	Page 154: "Understanding the Popup Source Code"
	
	Parameters for this line of code:
	
	  <A HREF=javascript:hhctrl.TextPopup(PopupValue, "Arial,9",10,10,10,10)>back up set</A>
	
	Read:
	
	  ...and the margins for the popup, (left margin of 10 pixels, right margin of
	  10 pixels, top margin of 10 pixels, bottom margin of 10 pixels).
	
	Correction:
	The last two parameters control foreground and background colors.
	
	Change code to:
	
	  <A HREF=javascript:hhctrl.TextPopup(PopupValue, "Arial,9",10,10,-1,-1)>back up set</A>
	
	Change parameter definition to:
	
	  ...and the margins for the popup, (left margin of 10 pixels, right margin of
	  10 pixels, -1 for default foreground color, -1 for default background color).
	
	
	Page 167: Step 1 Open Backup.hhp, Not Backup.chm
	------------------------------------------------
	
	Page 167: "To Apply a Custom Icon to a Content Entry"
	
	Change:
	1. With BACKUP.CHM open, click the Contents tab.
	
	To:
	"1. With BACKUP.HHP open, click the Contents tab. " (without the quotation
	marks)
	
	
	Page 174: Chapter 6 FAQ Includes Questions from Chapter 5
	---------------------------------------------------------
	
	The Frequently Asked Questions section of chapter 6, on page 174, includes two
	questions that are identical to those in the chapter 5 Frequently Asked
	Questions section.
	
	Here is the Frequently Asked Questions section that should have been included on
	page 174:
	
	Question: I think it's great that I can have text popups in HTML Help, but there
	are cases where I need to have more complex topics, specifically popups that
	contain graphics. Is there any way I can do this?
	
	Answer: Eventually, you will be able to create HTML Help popups that contain rich
	text and graphics. In the meantime, if you must have rich popups (and if you
	know your system will be run under Windows), you can create jumps that display
	WinHelp popups.
	
	Question: When creating WinHelp files, I used the EP macro to allow the user to
	run other applications by clicking a hotspot. I understand that I can do
	something similar with HTML Help's shortcut feature, but I don't know what this
	Message, Wparam, Lparam stuff is all about. Can I produce the equivalent of the
	EP macro?
	
	Answer: Yes. The Shortcut command gives you the ability to launch another
	program, plus send messages to that program. If you don't know what these
	messages are or how to use them, don't worry: no one is going to force you to
	use them.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: press ms_press htmlhelp
	
	======================================================================
	Keywords          : kbdocerr kbHTMLHelp 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
