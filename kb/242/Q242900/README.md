---
layout: page
title: "Q242900: XWEB: HTTP/1.0 Server Error Message When You Attach Files in OWA"
permalink: /kb/242/Q242900/
---

## Q242900: XWEB: HTTP/1.0 Server Error Message When You Attach Files in OWA

	Article: Q242900
	Product(s): Microsoft Exchange
	Version(s): 5,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Internet Explorer version 5 for Windows 95 
	- Microsoft Internet Explorer version 5 for Windows 98 
	- Microsoft Internet Explorer version 5 for Windows NT 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	When you attempt to attach a file to a new message in Outlook Web Access (OWA),
	you may receive the following error message:
	
	  HTTP/1.0 500 Server Error (A dynamic link library (DLL) initialization
	  routine failed.)
	
	The only option available is to close the dialog box, which cancels the message
	you are attempting to send.
	
	After this occurs, the following error appears in the application event log on
	the Exchange Server computer:
	
	  Event ID: 19
	  Source W3SVC
	  Type: Error
	  Category: None
	  Description: The HTTP server was unable to load the ISAPI application
	  'c:\exchsrvr\webdata\exupload.dll'. The data is the error.
	
	CAUSE
	=====
	
	This error is caused by registry restrictions that prevent guest access; it
	occurs when OWA is using Internet Explorer 5. This error occurs if the following
	registry key is enabled with a value of 1:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Eventlog\Application\RestrictGuestAccess
	
	This registry key prevents guests or anonymous users from viewing event logs on
	the server.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Internet Explorer 5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time       Version         Size     File name    Platform
	  --------------------------------------------------------------------
	  6/18/1999  7:08:33PM  5.00.2614.3300  459,024  Wininet.dll  x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q235513 Internet Explorer 5 Cannot Attach File into OWA Message
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbIEsearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbIENT400Search kbIE95Search kbIE500Search kbZNotKeyword3 kbIE98Search kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbIE500Win95 kbIE500Win98 kbIE500WinNT400
	Version           : :5,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
