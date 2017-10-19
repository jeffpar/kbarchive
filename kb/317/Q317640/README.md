---
layout: page
title: "Q317640: PRB: IIS4: &quot;The Document Is Damaged and Cannot Be Repaired&quot;"
permalink: /kb/317/Q317640/
---

## Q317640: PRB: IIS4: &quot;The Document Is Damaged and Cannot Be Repaired&quot;

	Article: Q317640
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is generated when you attempt to open an Adobe .pdf file by
	using the Microsoft Internet Explorer ActiveX control or the Netscape Navigator
	plug-in for Adobe Acrobat Reader if the .pdf file is located on a server that is
	running Microsoft Internet Information Server (IIS) with Sygate Personal
	Firewall 4.0 installed:
	
	  The document is damaged and cannot be repaired.
	
	CAUSE
	=====
	
	The Sygate Personal Firewall dynamic link library, Wps.dll, is modifying the
	HTTP response from the IIS server after the server attempts to transmit the
	proper response.
	
	The embedded Adobe Acrobat Reader requests portions of the file rather than
	downloading the entire file. It does this by requesting byte ranges that are
	based on the HTTP RFC. IIS correctly calculates the file offsets from which to
	read and attempts to transmit those byte ranges. Wps.dll changes the file offset
	to 0 for each byte range that is requested.
	
	Wps.dll is loaded in the IIS address space.
	
	RESOLUTION
	==========
	
	Sygate Technical support reports this behavior as resolved in Sygate Personal
	Firewall 5.0. Contact Sygate Technical Support for information about removing
	Sygate Personal Firewall 4.0 and obtaining Sygate Personal Firewall 5.0.
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
