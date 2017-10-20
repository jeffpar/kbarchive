---
layout: page
title: "Q190361: XWEB: IIS Hangs When File Upload Is Cancelled from Browser"
permalink: /kb/190/Q190361/
---

## Q190361: XWEB: IIS Hangs When File Upload Is Cancelled from Browser

{% raw %}

	Article: Q190361
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access to send an attachment of a large file (for
	example, 30 MB), click "Add attachment now", click Close, and then click OK to
	cancel the task, Internet Information Server (IIS) stops responding (90% to 100%
	CPU utilization). The file must be large enough, or the link slow enough, that
	the client can cancel the upload before the whole file is sent up.
	
	
	CAUSE
	=====
	
	Exupload.dll failed to test that the client had terminated the task and looped
	infinitely.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component:
	
	  File Name     Platform  Date     Time    Size
	  ----------------------------------------------------
	  Exupload.dll (Intel)    5/27/98  10:51a  17,680
	  Exupload.dll (Alpha)    5/27/98  10:44a  29,456
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5.
	
	Additional query words: iiswww iisgeneral owa
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbiisSearch kbiis400 kbOWASearch kbOWA550
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
