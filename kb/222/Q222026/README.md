---
layout: page
title: "Q222026: MAPI_E_NOT_FOUND Error In Sample For Programming OutlooK"
permalink: /kb/222/Q222026/
---

## Q222026: MAPI_E_NOT_FOUND Error In Sample For Programming OutlooK

{% raw %}

	Article: Q222026
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Microsoft Outlook and Microsoft Exchange ISBN 0-7356-0509-2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set up and test the Project sample application included on the companion
	CD-ROM, and you have Microsoft Exchange Service Pack 2 installed, you may
	receive the following error message in Microsoft Internet Explorer 4.0 or later,
	when you click a link to a project:
	
	  Collaboration Data Objects error '000004f7' [Collaboration Data Objects -
	  [MAPI_E_NOT_FOUND(8004010F)]] /project/projectmain.asp, line 178
	
	CAUSE
	=====
	
	The semantics for the GetFolder method (Session object) changed from Service
	Pack 1 to Service Pack 2 of Exchange Server 5.5. If the GetFolder method is not
	called properly, a MAPI_E_NOT_FOUND error may be displayed.
	
	RESOLUTION
	==========
	
	To correct this problem, specify a value for the second parameter of the
	GetFolder method. The second parameter can be either the EntryID for the
	information store the application is trying to access or NULL, which corresponds
	to the default information store.
	
	To correct the Project sample application, follow these steps:
	
	1. Open Project\ProjectMain.asp in Notepad
	
	2. Locate the line:
	
	  set oProjectFolder = oSession.GetFolder(strProjectFolderID)
	
	3. Change the line to:
	
	  set oProjectFolder = oSession.GetFolder(strProjectFolderID, NULL)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The second parameter of the GetFolder method allows you to specify the
	information store the application is trying to access.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press 0-7356-0509-2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
