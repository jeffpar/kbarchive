---
layout: page
title: "Q181937: Latest SGC-Enabled Schannel.dll Breaks IIS 3.0 Key Manager"
permalink: kb/181/Q181937/
---

## Q181937: Latest SGC-Enabled Schannel.dll Breaks IIS 3.0 Key Manager

	Article: Q181937
	Product(s): Internet Information Server
	Version(s): WINNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the latest Server Gated Cryptography (SGC)-enabled export
	version of Schannel.dll (01/22/98, 161.040 bytes) on a Microsoft Internet
	Information Server (IIS) 3.0 computer and enable SGC by setting the EnableSGC
	Registry Key, Key Manager hangs while generating a SGC certificate request.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q148427 : Generic SSL (PCT/TLS) Updates for IIS and MS Internet Products
	
	CAUSE
	=====
	
	This behavior occurs because Key Manager is not working correctly with the
	SGC-enabled export version of Schannel.dll (01/22/98, 161.040 bytes).
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Use the SGC-enabled export version of Schannel.dll (11/18/97, 160.528 bytes)
	  that comes with Internet Explorer 4.0x with the version of Key Manager that
	  comes with Internet Information Server 3.0 to generate SGC certificate
	  requests.
	
	- Use the version of Key Manager (version 4.02.0622) that comes with Internet
	  Information Server 4.0 to generate SGC certificate requests. This version of
	  Key Manager works without problems when you use it with the latest version of
	  Schannel.dll (01/22/98, 161.040 bytes) or with the version of Schannel.dll
	  (11/18/97, 160.528 bytes) that comes with Internet Explorer 4.0x.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 3.0
	Key Manager. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: SCHANNEL KEYRING Q148427
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WINNT:3.0
	Issue type        : kbbug
	
	=============================================================================
	
