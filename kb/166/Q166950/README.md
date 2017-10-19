---
layout: page
title: "Q166950: WD97: Can't Fax When Recipient Name Is Blank"
permalink: /kb/166/Q166950/
---

## Q166950: WD97: Can't Fax When Recipient Name Is Blank

	Article: Q166950
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbusage
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Word 97 Fax wizard to create a fax, and you enter a fax number
	but not a fax recipient name, you will receive the following error message when
	you try to send the fax:
	
	  The wizard could not fax the document, object has been deleted.
	
	CAUSE
	=====
	
	The Fax wizard is unable to handle a fax with a blank recipient name.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1) or
	download the updated Fax wizard from the Microsoft Web site.
	
	The following file is available for download from the Microsoft Download Center:
	
	  wdtlupd.exe
	  (http://download.microsoft.com/download/word97win/wizard/1/win98/EN-US/wdtlupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To work around this problem, do one of the following:
	
	- Either enter a fax recipient name or type a space in place of the fax
	  recipient name.
	
	  -or-
	
	- Print to Microsoft Fax by changing the printer to Microsoft Fax and printing
	  the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Note that the Fax wizard is not available in all versions of SR-1. To obtain the
	updated Fax wizard template only, you can download it from the Microsoft
	Technical Support Web site. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q172492 WD: Templates and Wizards Not in Version of SR-1 on the Web
	
	MORE INFORMATION
	================
	
	You will also have the problem if you use the fax wizard to create a fax
	(without a fax recipient name) and then add a fax recipient name to the fax
	cover sheet. In order to avoid the problem, add the fax recipient name from
	within the fax wizard.
	
	REFERENCES
	==========
	
	For more information about faxing, click the Office Assistant, type "faxing,"
	click Search, and then click "Create and send a fax with the fax wizard."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For more information on troubleshooting faxing problems, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q137161 Isolating Fax Problems in Word
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbprint kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
