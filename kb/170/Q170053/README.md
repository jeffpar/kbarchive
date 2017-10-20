---
layout: page
title: "Q170053: Netscape Unable to Find a Plug-in for Application/octet-stream"
permalink: /kb/170/Q170053/
---

## Q170053: Netscape Unable to Find a Plug-in for Application/octet-stream

{% raw %}

	Article: Q170053
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbinterop
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft PowerPoint Animation Player with Netscape clients,
	you may get the following error message:
	
	  Netscape was unable to find a plug-in for
	  application/octet-stream.
	
	CAUSE
	=====
	
	If you use Netscape Navigator, the Web server must send the PowerPoint Animation
	files as a special type of file to avoid the above error message.
	
	WORKAROUND
	==========
	
	Ask your server administrator to add the following MIME mapping to the server:
	
	.PPT -> application/mspowerpoint
	
	.PPZ -> application/mspowerpoint
	
	.PPS -> application/mspowerpoint
	
	.POT -> application/mspowerpoint
	
	If you use the Microsoft Internet Information Server (IIS), add the following
	registry entries on your server:
	
	[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\InetInfo\Parameters\MimeMap]
	application/vnd.ms-powerpoint,ppt,,5
	application/ms-powerpoint,ppz,,5
	application/ms-powerpoint,pps,,5
	application/ms-powerpoint,pot,,5
	
	MORE INFORMATION
	================
	
	For more information about adding MIME mapping, refer to the documentation for
	the particular server being used.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft. We make no warranty, implied or otherwise, regarding performance
	or reliability of these products.
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbinterop 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
