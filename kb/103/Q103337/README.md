---
layout: page
title: "Q103337: EdtInfo.exe Retrieves Text Box Status w/Win Messages"
permalink: /kb/103/Q103337/
---

## Q103337: EdtInfo.exe Retrieves Text Box Status w/Win Messages

{% raw %}

	Article: Q103337
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbCtrl kbEditCtrl kbGrpDSUser kbOSWin310 kbOSWin311
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EdtInfo.exe is a sample file that demonstrates how to access retrieval
	information from a Microsoft(R) Visual Basic(TM) application. It uses Microsoft
	Windows(TM) functions to retrieve information about the status of a text box.
	The Visual Basic language does not provide this capability.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	EdtInfo.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	EDIT_INFO allows you to use the Windows message constants listed below for the
	following tasks:
	
	- EM_GETLINE: Copy a specific line of text from the edit control.
	
	- EM_GETLINECOUNT: Retrieve the number of lines within the edit control.
	
	- EM_GETSEL: Position the cursor at a specific character location.
	
	- EM_LINEFROMCHAR: Retrieve the line number of a specific character location.
	
	- EM_LINEINDEX: Retrieve the number of lines prior to a specified character
	  position.
	
	- EM_LINELENGTH: Retrieve the number of characters in a specified line.
	
	- EM_REPLACESEL: Replace the specified text with another text string.
	
	For information on specifying the amount of text allowed within a text control,
	search the Knowledge Base for EM_LIMITTEXT.
	
	For information on setting tab stops within a control, search the Knowledge Base
	for EM_SETTABSTOPS.
	
	EDIT_INFO was built and tested under Microsoft Windows version 3.1 and Visual
	Basic version 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbCtrl kbEditCtrl kbGrpDSUser kbOSWin310 kbOSWin311 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
