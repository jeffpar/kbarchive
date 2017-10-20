---
layout: page
title: "Q172267: SAMPLE: RECEDIT.VBP Demonstrates File I/O in Visual Basic"
permalink: /kb/172/Q172267/
---

## Q172267: SAMPLE: RECEDIT.VBP Demonstrates File I/O in Visual Basic

{% raw %}

	Article: Q172267
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbtophit KbVBA kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This sample demonstrates how to do file input and output using Visual Basic. The
	sample creates a new database file and allows you to view, add, or delete
	records in this database.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Recedit.exe
	  (http://download.microsoft.com/download/vb60pro/samp4/1/WIN98/EN-US/Recedit.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	The techniques in this sample file can be used to view, access, and write to
	sequential, random, and binary files. After you download and run the
	self-extracting file, the following files are created:
	
	- Fileproc.bas(4.30Kb)--The module containing Public Sub and Function
	  procedures for opening files.
	
	- Readme.txt--The readme file that contains the text of this article.
	
	- Recedit.bas(309 bytes)--The module containing Public type definitions.
	
	- Recedit.frm(13.4Kb)--The main form for the sample.
	
	- Recedit.vbp(516 bytes)--The project file for the sample.
	
	To Run This Project
	-------------------
	
	1. Start Visual Basic. The New Project dialog box appears.
	
	2. In the New Project dialog box, click the existing tab and go to the directory
	  with the extracted files. Choose recedit.vbp.
	
	3. Press the F5 key to run the project.
	
	For more information about file input/output, please see "Processing Files" in
	the Programmer's Guide.
	
	Additional query words: Recedit Dir EOF FileCopy FileDateTime FileLen FreeFile GetAttr Loc LOF Seek SetAttr Close Get Input Input# Open Put Write Write#
	
	======================================================================
	Keywords          : kbfile kbsample kbtophit KbVBA kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
