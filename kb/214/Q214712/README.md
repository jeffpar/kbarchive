---
layout: page
title: "Q214712: XWEB: MMP Files are Locked and Cannot be Deleted"
permalink: /kb/214/Q214712/
---

## Q214712: XWEB: MMP Files are Locked and Cannot be Deleted

{% raw %}

	Article: Q214712
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Files with the extension *.mmp accumulate in the Webtemp directory when you
	connect to Microsoft Exchange Server through Outlook Web Access (OWA) and do not
	log out properly. If you try to delete these files, you may receive an error
	message similar to the following:
	
	  Cannot delete <temp file name>: Access is Denied.
	  Make sure the disk is not full or write-protected and that the file is not
	  currently in use.
	
	
	CAUSE
	=====
	
	If you do not log out of OWA properly, the *.mmp files will be locked because
	the system thinks that the process is still using these temporary files.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	  
	
	- Stop and re-start the WWW Service.
	
	  -or-
	
	- Restart the OWA server.
	
	STATUS
	======
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
