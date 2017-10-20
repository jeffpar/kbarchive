---
layout: page
title: "Q287594: W3SVC Log Reflects Wrong Size with SF_NOTIFY_SEND_RAW_DATA Flag"
permalink: /kb/287/Q287594/
---

## Q287594: W3SVC Log Reflects Wrong Size with SF_NOTIFY_SEND_RAW_DATA Flag

{% raw %}

	Article: Q287594
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ISAPI filter is registered with a SF_NOTIFY_SEND_RAW_DATA flag,
	Microsoft Internet Information Services (IIS) does not log the correct value for
	the number of bytes that are sent. IIS only logs the size of the header and not
	the size of both the header and the data that is being sent.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  
	
	  Date      Time     Version        Size     Filename    Platform
	  -------------------------------------------------------------
	  2/15/2001  07:26p  5.0.2195.3264  357,648  W3svc.dll   x86
	
	This hot fix is also available for the following languages:
	
	  Chinese (PRC)
	  Chinese (Taiwan)
	  Czech
	  German (Germany)
	  Spanish (Spain - Traditional Sort)
	  French (France)
	  Hungarian
	  Korean
	  Italian (Italy)
	  Japanese
	  Dutch (Netherlands)
	  Polish
	  Portuguese (Brazil)
	  Portuguese (Portugal)
	  Russian
	  Swedish
	  Turkish
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Server
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbDSupport kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
