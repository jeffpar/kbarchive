---
layout: page
title: "Q120391: Err Msg Sharing ClipBook: ClipBook Viewer Cannot Currently..."
permalink: /kb/120/Q120391/
---

## Q120391: Err Msg Sharing ClipBook: ClipBook Viewer Cannot Currently...

{% raw %}

	Article: Q120391
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you share very large objects using ClipBook, you receive the following two
	error messages:
	
	  ClipBook viewer cannot currently access the information.
	
	  -and-
	
	  The Clipboard information is not available in this format.
	
	CAUSE
	=====
	
	This problem occurs when there is a network dynamic data exchange (NDDE)
	time-out and you have Novell NetWare installed as a secondary network.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem by putting MSExtensions=0 in the
	[nwnblink] section of the SYSTEM.INI file.
	
	Additional query words: 3.11 clip book
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
