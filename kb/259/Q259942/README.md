---
layout: page
title: "Q259942: HOWTO: Set Where .tmp Files Are Created with the VFP ODBC Driver"
permalink: kb/259/Q259942/
---

## Q259942: HOWTO: Set Where .tmp Files Are Created with the VFP ODBC Driver

	Article: Q259942
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0,2.0,3.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	- Microsoft ODBC Driver for Visual FoxPro, versions 1.0, 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, when Visual FoxPro tables that are accessed by using the Visual
	FoxPro ODBC driver from a Web page, files with the .tmp extension are created in
	the Microsoft Windows NT System32 or the Microsoft Windows 9x System
	sub-directory on the server. This is usually not the desired directory for these
	files. In order to control this behavior, the System temp environment variable
	needs to be set on the Server computer.
	
	MORE INFORMATION
	================
	
	To set the System temp environment variable, do the following:
	
	1. On your computer desktop, right-click on My Computer.
	
	2. Choose Properties and select the Environment tab.
	
	3. Click an entry in the System Variables list box (the one on top).
	
	4. In the Variable and Value Edit control, type the following:
	
	" Variable = TEMP
	Value = C:\Temp" (without the quotation marks)
	
	5. Click the Set button, and note that TEMP has been added to the list of system
	  variables. Repeat the process for the TMP variable.
	
	6. Log off and restart the computer.
	
	REFERENCES
	==========
	
	For additional information about using Visual FoxPro through the Internet, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q165492 HOWTO: Use ADO with a Visual FoxPro Database
	
	  Q168053 HOWTO: Use VFP Automation Servers with Active Server Pages
	
	  Q150073 How to Query FoxPro Data on the Web Using ODBC
	
	  Q165775 HOWTO: Set up a Visual FoxPro Internet Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100 kbODBCVFP200 kbODBCVFP300 kbODBCVFP400 kbODBCVFP500 kbODBCVFP600828100
	Version           : WINDOWS:1.0,2.0,3.0,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
