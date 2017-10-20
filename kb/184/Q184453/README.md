---
layout: page
title: "Q184453: IE 4 Technical Support Training Comments and Corrections"
permalink: /kb/184/Q184453/
---

## Q184453: IE 4 Technical Support Training Comments and Corrections

{% raw %}

	Article: Q184453
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Internet Explorer 4 Technical Support Training Kit ISBN 1-57231-828-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Internet Explorer 4 Technical
	Support Training Kit," ISBN 1-57231-828-7.
	
	Contents
	--------
	
	- Ambiguous LabFiles folder references
	
	- Page xviii - xxii: Discrepancies in where to find specific skills in the book
	
	- Page xxv: Publish Files Instructions Are Unclear
	
	- Lab File Installation Instructions Unclear for Chapters 2-6 and 10
	
	- Chapter 6: Lab Files Are Incorrectly Configured
	
	- Page 55: SelectC.htm is not included on CD-ROM
	
	- Page 56: Code Error
	
	- Page 100: Incorrect Reference to Network Neighborhood
	
	- Page 182: IEAK 4.0 License and Registration availability
	
	- \Labfiles\chapter2\test.htm Shows a Blank Web Page
	
	- CD-ROM: \Labfiles\Chapter3\Answer Is Incomplete
	
	- Online Book: ClassComp.cdf URL Inaccurate
	
	MORE INFORMATION
	================
	
	Ambiguous LabFiles Folder References
	------------------------------------
	
	There are many references to files throughout this book using the
	LabFiles\ChapterX\<filename> format. This format assumes the files are in
	the C:\LabFiles folder.
	
	Correction:
	
	Change all LabFiles\Chapter... references to C:\LabFiles\Chapter...
	
	
	Page xviii - xxii: Discrepancies in where to find specific skills in the book
	-----------------------------------------------------------------------------
	
	The table on page xviii states that information on "... replacing other Internet
	browsers. ...Explorer 3.x and Netscape Navigator ..." can be referenced in
	"Chapter 1, Lesson 2". However, it is not referenced at all in the book. The
	same is true on page xxi, and similarly on page xxii, where it states that
	Chapter 10 Lesson 1 contains information on appropriate tools for
	troubleshooting "IP configuration, PING, Trace route, Network Monitor, and
	Nslookup".
	
	
	Page xxv: Publish Files Instructions Are Unclear
	------------------------------------------------
	
	Page xxv states "Publish the following files as Web pages using Internet
	Information Server (IIS)." However, there are no instructions telling the reader
	how to publish the files using IIS.
	
	Step 8 on page xxiv instructs the reader to copy the \LabFiles folder to the Web
	site folder. This step is all that is needed to publish the lab files mentioned
	on page xxv.
	
	Page xxv: Remove the first sentence "Publish the following files as Web pages
	using Internet Information Server (IIS)."
	
	Page xxv: Remove the two-column table containing the list of Files and Publish
	as.
	
	
	Lab File Installation Instructions Unclear for Chapters 2-6 and 10
	------------------------------------------------------------------
	
	Chapters 2, 3, 4, 5, 6, and 10 all use lab files from the CD-ROM; however the
	installation instructions are not clear for these chapters.
	
	CORRECTIONS
	-----------
	
	Page xxv, below file list: Add the following text below the text on page xxv (the
	first line is bold with an arrow bullet):
	
	  To install the practice lab files to the hard disk:
	
	1. Copy the \LabFiles folder and all subfolders from the CD-ROM to C:\LabFiles
	  on your hard disk.
	
	This assumes that the lab files are installed to the C:\ folder. Adjust the steps
	in this book if you installed to a different hard disk or folder.
	
	Page 23, second to last sentence: Change "...as described in the "About This
	book" section." To "...as described near the end of the "About This Book"
	section."
	
	Page 43, last sentence: Change "...on your computer." To "...to C:\LabFiles on
	your hard disk (as described at the end of the "About This Book" section of this
	book)."
	
	Page 61, last sentence: Change "...on your computer." To "...to C:\LabFiles on
	your hard disk (as described at the end of the "About This Book" section of this
	book)."
	
	Page 77, last sentence: Change "...on your computer." To "...to C:\LabFiles on
	your hard disk (as described at the end of the "About This Book" section of this
	book)."
	
	Page 92, last bullet: Change "...on your computer." To "...to C:\LabFiles on your
	hard disk (as described at the end of the "About This Book" section of this
	book)."
	
	Page 181, below last sentence: Add the following sentence in a new paragraph
	below the last sentence:
	
	  Install the Chapter 10 Lab files from the Course Materials CD-ROM in the
	  LabFiles\Chap10 folder to C:\LabFiles on your hard disk (as described at the
	  end of the "About This Book" section of this book)."
	
	
	Chapter 6: Lab Files Are Incorrectly Configured
	-----------------------------------------------
	
	Chapter 6 relies on Classcomp.cdf and Classcomp.htm, but these files are not in
	the proper location and need additional changes to work properly.
	
	
	Corrections: Correct \demos\chapter6\classcomp.htm to contain the Day2.htm
	content.
	
	Move Classcomp.htm from \demos\chapter6 to \labfiles\chapter6.
	
	Correct \Labfiles\chapter6\Classcomp.cdf by changing the two
	
	   //Instructor/component/ references to //Instructor/labfiles/chapter6/.
	
	Page xxv, list of files: Remove the row referencing the \component folder and
	/component Web share.
	
	Page 92: Remove the first bullet referencing Day1.htm and Day2.htm.
	
	Page 92: Replace the fourth bullet referencing the /component Web share with:
	Edit the \labfiles\chapter6\classcomp.cdf file using Notepad and change the two
	//Instructor/ references to
	
	   //your_machine_name.
	
	NOTE: The online book also contains the text for pages xxv and 92 and should have
	the same text changes applied.
	
	Day2.htm can be added to Classcomp.htm, but several minor changes are necessary
	for the HTML to work properly. Microsoft Press has prepared a downloadable patch
	file that will resolve this problem.
	
	The following file is available for download from the Microsoft Download Center:
	
	  ie4tkfix.exe
	  (http://download.microsoft.com/download/ie4095/MSPRESS/2.0/W9X2KMe/EN-US/ie4tkfix.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Page 55: SelectC.htm is not included on CD-ROM
	----------------------------------------------
	
	Page 55, exercise 5, step 1 asks you to open the file
	\Labfiles\Chapter3\SelectC.htm. However, SelectC.htm is not included on the
	CD-ROM.
	
	Microsoft has confirmed this to be a problem in "Microsoft Internet Explorer 4
	Training."
	
	
	Page 56: Code Error
	-------------------
	
	Page 56, Exercise 6:
	Change:
	For nCounter = 1 to 30
	Document.Write "This is a loop" & counter & "<BR>"
	Next
	
	To:
	For nCounter = 1 to 30
	Document.Write "This is a loop" & nCounter & "<BR>"
	Next
	
	
	Page 100: Incorrect Reference to Network Neighborhood
	-----------------------------------------------------
	
	Correction:
	Page 100, paragraph 2, sentence 1:
	Change "Netscape Navigator"
	To "Network Neighborhood"
	
	
	Page 182: IEAK 4.0 License and Registration availability
	--------------------------------------------------------
	
	The License and Registration for IEAK 4.0 is still available at
	http://ieak.microsoft.com, even though this site now features IEAK 5.0.
	To obtain the IEAK 4 code you need to register for IEAK 5.0 as a new user, or
	have an existing account.
	If you register as a new user, you can use your registration ID and password to
	review your registration information, and then select the option to get the 4.x
	code.
	
	
	\Labfiles\chapter2\test.htm Shows a Blank Web Page
	--------------------------------------------------
	
	When Step 2 on page 28 is performed, the hyperlink
	http://your_machine_name/labfiles/chapter2/test.htm displays a blank page. Upon
	further inspection, the title for this page contains the entire HTML page
	contents and several HTML tags.
	
	This behavior is caused by an error in \labfiles\chapter2\test.htm. There is no
	</TITLE> tag to end the page title.
	
	Correction:
	
	In \labfiles\chapter2\Test.htm: Change "<TITLE>Welcome!<TITLE>" To
	"<TITLE>Welcome!</TITLE>"
	
	
	CD-ROM: \Labfiles\Chapter3\Answer Is Incomplete
	-----------------------------------------------
	
	The answers for the exercises in Chapter 3 are contained in
	\Labfiles\Chapter3\Answer. However, exercises 5 and 6 are not included in this
	directory.
	
	Microsoft has confirmed this to be a problem in "Microsoft Internet Explorer 4
	Training."
	
	
	Online Book: ClassComp.cdf URL Inaccurate
	-----------------------------------------
	
	In the Online book (\Ebook\IE4TST.chm), the classcomp.cdf URL for Chapter 6,
	Exercise 2 is inaccurate.
	
	Correction:
	Change "http://your_machine_name/labfiles/ClassComp.cdf"
	
	To "http://your_machine_name/labfiles/Chapter6/ClassComp.cdf"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: press tkbook> ms_press ie40
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
