---
layout: page
title: "Q169270: IIS Running with Open File Manager  Will Blue Screen"
permalink: /kb/169/Q169270/
---

## Q169270: IIS Running with Open File Manager  Will Blue Screen

{% raw %}

	Article: Q169270
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Windows NT Server Challenge response authentication) to
	access a secured site, and if Open File Manager (OFM) (by St. Bernard Software
	written for Seagate Backup Exec.) is in use, Internet Information Server (IIS)
	running on Windows NT version 4.0 with Service Pack 1 (SP1) or Service Pack 2
	(SP2) will blue screen.
	
	NOTE: This only occurs if the Open File Manager service is running.
	
	WORKAROUND
	==========
	
	Either stop the OFM service, or use Basic authentication for your security.
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
