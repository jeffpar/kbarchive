---
layout: page
title: "Q180310: XCLN: Outlook Cannot View Replica of Nested Public Folder"
permalink: /kb/180/Q180310/
---

## Q180310: XCLN: Outlook Cannot View Replica of Nested Public Folder

{% raw %}

	Article: Q180310
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Outlook client to view a nested replica of a public folder, you
	may not be able to view the information even though you have proper permissions
	to the folder. The following error may occur:
	
	  Unable to expand the folder. The Set of folders could not be opened.
	  The contents of this public folder are currently unavailable. Either
	  the Microsoft Exchange Server computer servicing this public folder
	  is down or the public folder has not been replicated to this site.
	  See your Administrator.
	
	WORKAROUND
	==========
	
	To be able to view and use the public folders properly, you may use either of
	the following methods:
	
	  Install and use the Exchange client to view and post messages to the nested
	  public folder(s). The Exchange Server client allows access to the nested
	  replica of the public folder(s), assuming permissions are correct.
	
	  -or-
	
	  From the Exchange Administrator program, replicate the entire public folder
	  hierarchy that contains the nested public folder(s) from the original
	  Exchange site to your other Exchange site(s). This will allow Outlook clients
	  in this Exchange site to access the nested public folder(s) replicas.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : WINDOWS:8.0; :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
