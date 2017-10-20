---
layout: page
title: "Q258189: IIS Log Contains Wrong Data When ISAPI Uses Default File Size"
permalink: /kb/258/Q258189/
---

## Q258189: IIS Log Contains Wrong Data When ISAPI Uses Default File Size

{% raw %}

	Article: Q258189
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ISAPI application uses the HSE_TF_INFO data structure to issue a
	ServerSupportFunction(HSE_REQ_TRANSMIT_FILE), it is allowed to specify 0 as the
	value of the HSE_TF_INFO::BytesToWrite meaning, "send all file." If zero is
	specified, then the sc-bytes value in the Internet Information Services (IIS)
	log file is invalid, because it reflects only the headers and not the entire
	transfer size.
	
	CAUSE
	=====
	
	IIS does not log the total size of the file that is actually transferred, but
	uses the size argument transmitted to the TransmitFile API.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 1.
	
	MORE INFORMATION
	================
	
	The symptoms may be different in IIS 4.0. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q248819 IIS 4.0 Logs Incorrect Values for Bytes Sent Field in W3C Extended
	  Log
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
