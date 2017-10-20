---
layout: page
title: "Q247729: XCLN: Error Message: The Command You Specified Could Not Be..."
permalink: /kb/247/Q247729/
---

## Q247729: XCLN: Error Message: The Command You Specified Could Not Be...

{% raw %}

	Article: Q247729
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Client, you may encounter the following
	error message:
	
	  Microsoft Exchange Error
	  The command you specified could not be carried out. The object could not be
	  found. Microsoft Windows Messaging System Forms Registry- [8004010F]
	
	CAUSE
	=====
	
	The error message occurs under the following conditions.
	
	You are using a system with Microsoft Exchange Client and then upgrade to Outlook
	2000. Later, you uninstall Outlook 2000 and use the Exchange Client only. The
	error message occurs because while you were uninstalling Outlook 2000, the
	Frmcache.dat file that was in use with Outlook 2000 is not removed, and the
	original Frmcache.bak file is not renamed Frmcache.dat. This causes the Exchange
	Client to be unable to call correctly-cached messaging form information.
	
	WORKAROUND
	==========
	
	After you uninstall Outlook 2000, do either of the following:
	
	- Rename the Frmcache.bak file to Frmcache.dat, then double-click the Mlset32
	  file in the Program Files\Microsoft Exchange folder to reregister the
	  Exchange Client in the registry.
	
	-or-
	
	- Manually delete the Frmcache.dat file, and then reinstall the Exchange Client
	  software from the original CD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information on resetting the Frmcache.dat file, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q181930 XCLN: Form Required to View This Message Cannot Be Displayed
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
