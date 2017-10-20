---
layout: page
title: "Q193676: PC DirSync: Problem using Outlook Journaling on MSMail PO"
permalink: /kb/193/Q193676/
---

## Q193676: PC DirSync: Problem using Outlook Journaling on MSMail PO

{% raw %}

	Article: Q193676
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dirsync constantly fails with Fatal 203 errors. Using the Outlook client with
	Journaling enabled on a Microsoft Mail for PC Networks postoffice can cause
	directory synchronization to fail with the following error message:
	
	  Fatal [203] GAL Rebuild problem accessing files
	  Global Address List not installed on this Postoffice
	
	CAUSE
	=====
	
	The Journaling feature polls the postoffice every 2 minutes to get information
	updates for the client. If the user does not close the Outlook client when
	rebuild is running, this error will occur.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Close all Outlook clients that use Journaling before dirsync occurs.
	
	-or-
	
	- Do not use the Journaling feature on the Microsoft Mail (PC) postoffice.
	
	Additional query words: fatal, [203], dirsync, Outlook
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
