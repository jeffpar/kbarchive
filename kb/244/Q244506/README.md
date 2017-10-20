---
layout: page
title: "Q244506: XCLN: Error Message: Directory Change Failed. Defaulting to ..."
permalink: /kb/244/Q244506/
---

## Q244506: XCLN: Error Message: Directory Change Failed. Defaulting to ...

{% raw %}

	Article: Q244506
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Outlook, when you click Tools, click Forms, click Choose Form, and then set
	Outlook to look in the User Templates in File System folder, you may get the
	following error message:
	
	  Directory change failed. Defaulting to previous directory.
	
	CAUSE
	=====
	
	The Templates in File System folder may be set incorrectly. To troubleshoot this
	error, check the following:
	
	- Is the folder location correct?
	
	- Are there templates in the folder?
	
	- Does the folder exist?
	
	- Is the folder read-only?
	
	- Is the folder on a network location that is not accessible?
	
	RESOLUTION
	==========
	
	To resolve this problem, do any of the following:
	
	- To check or change the folder location, do the following within Microsoft
	  Word.
	
	  1. On the Tools menu, click Options, and then click the File Locations tab.
	
	  2. For the User Templates option, specify the folder where the Outlook .oft
	     files are located or copy your templates to the location specified.
	
	- If there are no templates in the folder, you need to move a template to this
	  location, or create a template, and save it to this location.
	
	- If the folder does not exist, you need to create a folder location, and copy
	  the templates you want to use to this folder.
	
	- If the folder is read-only, you need to change the attributes to this folder
	  to read-write access.
	
	- For network access, you need contact your system administrator or try again
	  later.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
