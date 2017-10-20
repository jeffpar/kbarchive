---
layout: page
title: "Q92578: ClipBook: Paste Link with Ami Pro May Paste Corrupt Data"
permalink: /kb/092/Q92578/
---

## Q92578: ClipBook: Paste Link with Ami Pro May Paste Corrupt Data

{% raw %}

	Article: Q92578
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows for Workgroups ClipBook Viewer program with Lotus Ami
	Pro, you may see raw rich text format (RTF) data when data is paste-linked into
	Ami Pro.
	
	CAUSE
	=====
	
	Ami Pro appears to have a timing problem with network dynamic data exchange
	(DDE) and the Paste Link command. If the Network DDE is delayed due to network
	traffic, Ami Pro may interpret incoming RTF data as text.
	
	WORKAROUND
	==========
	
	The only workaround is to try the Paste Link command again.
	
	For more information, please contact Lotus Development Corporation's Ami Pro
	technical support.
	
	Ami Pro is manufactured by Lotus Development Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
