---
layout: page
title: "Q187994: XWEB: File Attachments in OWA Append 2 Extra Bytes CR/LF"
permalink: /kb/187/Q187994/
---

## Q187994: XWEB: File Attachments in OWA Append 2 Extra Bytes CR/LF

{% raw %}

	Article: Q187994
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access to send a message with a file attachment, the
	attached file always has two extra characters appended, that is, CR/LF.
	
	CAUSE
	=====
	
	The Exupload code missed two hyphens while parsing the HTTP header information.
	The delimiter used in computation is "\r\n", as opposed to "\r\n--", ignoring
	the double hyphen and resulting in two extra bytes.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access,
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: CR/LF File Attachment
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
