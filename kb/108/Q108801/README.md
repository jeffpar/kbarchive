---
layout: page
title: "Q108801: Loading NetBEUI or NetPopup in Conventional Memory"
permalink: /kb/108/Q108801/
---

## Q108801: Loading NetBEUI or NetPopup in Conventional Memory

	Article: Q108801
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NET START /NOHI and NET START /NETBEUI do not prevent NetBEUI and POPUP from
	loading in the upper memory area (UMA). Adding LoadHigh=No to the [Network]
	section of the SYSTEM.INI file also does not prevent NetBEUI and POPUP from
	loading in the UMA.
	
	CAUSE
	=====
	
	NET START /NOHI prevents device drivers from being loaded in the UMA. For
	example, NET START /NOHI prevents PROTMAN.DOS, <netcard driver>.DOS,
	NDISHLP.SYS, and IFSHLP.SYS from loading in the UMA.
	
	Network services, such as the redirector (Redir), NetBEUI, and POPUP,
	automatically attempt to load into the UMA. There is no way to change this
	behavior.
	
	KBCategory: kbnetwork kbtool kbenv
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.11 conventional memory pop-up pop up
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
