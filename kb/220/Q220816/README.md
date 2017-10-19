---
layout: page
title: "Q220816: FILE: Application Wizard License Not Found"
permalink: /kb/220/Q220816/
---

## Q220816: FILE: Application Wizard License Not Found

	Article: Q220816
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbVBp500bug kbVBp600bug kbLEdition kbGrpDSVB
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to use the Visual Basic Application Wizard in Visual Basic 6.0
	Learning Edition, you receive the following message:
	
	  You do not have the proper license to load the VB 98 Application Wizard. You
	  must have the Learning, Professional, or Enterprise edition of Visual Basic
	  installed.
	
	This problem only occurs when both the Visual Basic 6.0 Learning Edition and the
	Visual Basic 5.0 Control Creation Edition are installed on the same system.
	
	Microsoft has created the following application that allows you to switch back
	and forth between the Visual Basic 5.0 CCE and the Visual Basic 6.0 Learning
	Editions. The following files are available for download from the Microsoft
	Download Center:
	
	  Q220816.exe
	  (http://download.microsoft.com/download/vb60learn/Utility/1/WIN98/EN-US/Q220816.exe)
	
	Release Date: Apr-05-1999
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Microsoft Visual Basic Control Creation Edition for Windows, version
	  5.0 on the target system.
	
	2. Install Microsoft Visual Basic Learning Edition for Windows, version 6.0 on
	  the target system.
	
	3. Start Visual Basic 6.0 and select Visual Basic 98 Application Wizard in the
	  New Project dialog. You will receive the specified error message.
	
	Steps to Correct the Behavior
	-----------------------------
	
	1. Download Q220816.exe and run it on your system.
	
	2. You will be presented with the option of using Visual Basic 5.0 CCE or Visual
	  Basic 6.0 Learning Edtion with the option set to the currently active
	  configuration. Select the appropriate option and click Exit.
	
	3. Run the appropriate program and observe that you now have normal
	  functionality.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbVBp500bug kbVBp600bug kbLEdition kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
