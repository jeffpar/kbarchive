---
layout: page
title: "Q173709: Header.exe Lists Microsoft Outlook 97 Constants"
permalink: /kb/173/Q173709/
---

## Q173709: Header.exe Lists Microsoft Outlook 97 Constants

{% raw %}

	Article: Q173709
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbvfp300 kbvfp500 kbvfp600 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Header.exe is a file that defines all the Microsoft Outlook constants for you,
	which allows you to make calls to the Outlook object model without having to
	define all the constants yourself.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Header.exe
	  (http://download.microsoft.com/download/vfox60/sample21/1/WIN98/EN-US/Header.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This file contains the constant definitions for the Outlook Object Model. The
	information comes from the VBA Outlook Help file that is shipped in the
	Valuepack for Office 97.
	
	After you've downloaded Header.exe, run the program. The following two files will
	be extracted:
	
	- Outlook.h
	
	- Readme.txt
	
	Move the Outlook.h file into your project directory.
	
	To use this file, you can issue the #Include command in a .prg file, which would
	look like the following:
	
	     #INCLUDE OUTLOOK.H
	
	Or you can include the file in your form or class by clicking the Form menu or
	the Class menu and selecting Include File. Then click the Outlook.h file. This
	allows your code to access any of the constants that are used in Outlook.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David
	Botzenhart, Microsoft Corporation
	
	
	Additional query words: Header
	
	======================================================================
	Keywords          : kbfile kbvfp300 kbvfp500 kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
