---
layout: page
title: "Q170914: WD97: File Open Reverts to Program Folder Not Network Location"
permalink: /kb/170/Q170914/
---

## Q170914: WD97: File Open Reverts to Program Folder Not Network Location

{% raw %}

	Article: Q170914
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the Documents path in the Options dialog box (on the Tools menu,
	click Options), to a Network location on a Banyan Vines or NetWare network, the
	Open and Save As dialog boxes may revert to the Word program directory.
	
	NOTE: The Word program directory is the current location of the Winword.exe file.
	Mapping a Network Drive Letter or using UNC pathing doesn't seem to change this
	behavior.
	
	WORKAROUND
	==========
	
	Change the Open or Save As dialog boxes to the correct network location before
	you open or save your file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem does not occur in Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q152771 "Directory Not Valid" Error Message Using Banyan or Pathworks
	
	  Q153787 Can't Set Workgroup Template Location on Banyan Vines Network
	
	  Q119138 Cannot Set Default Printer to Network Print Queue from Word
	
	Additional query words: 8.0 novell fileopen filesaveas saveas
	
	======================================================================
	Keywords          : kb3rdparty kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
