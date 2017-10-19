---
layout: page
title: "Q184452: IE Training Kit: Chapter 10 Lab Files Not On CD-ROM"
permalink: /kb/184/Q184452/
---

## Q184452: IE Training Kit: Chapter 10 Lab Files Not On CD-ROM

	Article: Q184452
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Internet Explorer 4 Technical Support Training Kit ISBN 1-57231-828-7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Chapter 10 refers to several lab files that are not provided on the CD-ROM. The
	files include:
	
	PAGE  FILENAME
	--------------
	
	- 195 Setup.bmp
	
	- 204 Toolbar.bmp
	
	- 222 Ldap.bmp
	
	- 224 Welcome.htm
	
	WORKAROUND
	==========
	
	Microsoft Press has prepared a patch file containing the missing files. The
	following file is available for download from the Microsoft Download Center:
	
	  Ie4tkfix.exe
	  (http://download.microsoft.com/download/ie4095/MSPRESS/2.0/W9X2KMe/EN-US/Ie4tkfix.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Install the Additional Files
	----------------------------
	
	To work around this problem, follow these steps:
	
	1. Download Ie4tkfix.exe into a temporary folder.
	
	  If your software is not capable of downloading the file into a particular
	  folder, download the file and copy or move it to a temporary folder.
	
	2. Double-click (or run) Ie4tkfix.exe to extract the necessary files.
	
	3. If you are asked to confirm the replacement of files, confirm the file
	  replacement.
	
	4. Delete Ie4tkfix.exe.
	
	5. Copy these files to the following locations in your Internet Explorer 4
	  Technical Support Training Kit practice folder:
	
	     \Labfiles\Test.htm
	     \LabFiles\Chapter6\Classcomp.htm
	     \LabFiles\Chapter6\Classcomp.cdf
	     \Labfiles\Chap10\Setup.bmp
	     \Labfiles\Chap10\Toolbar.bmp
	     \Labfiles\Chap10\Ldap.bmp
	     \Labfiles\Chap10\Welcome.htm
	
	If you are asked to confirm the replacement of files, confirm the file
	replacement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in "Microsoft Internet Explorer 4
	Technical Support Training Kit."
	
	MORE INFORMATION
	================
	
	An additional text correction will be needed to use these files correctly:
	
	Page 224, Step 2:
	Change "C:\Welcome.htm"
	To "C:\LabFiles\Chap10\Welcome.htm"
	
	
	Additional query words: press ms_press ie40 1-57231-828-7
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
