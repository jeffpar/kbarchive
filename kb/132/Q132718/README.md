---
layout: page
title: "Q132718: SNA Server DISPLAY verb may return DISPLAY_INVALID_CONSTANT"
permalink: /kb/132/Q132718/
---

## Q132718: SNA Server DISPLAY verb may return DISPLAY_INVALID_CONSTANT

{% raw %}

	Article: Q132718
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application calls DISPLAY API (included in the SNA Server APPC
	Management Verb support) that application receives
	
	  DISPLAY_INVALID_CONSTANT.
	
	The SNA Server APPC interface returns DISPLAY_INVALID_CONSTANT if you do NOT set
	following values.
	
	                  NS/2     IBM EE    NS/2 format        EE format
	                  format   format (Windows NT only)  (Windows NT only)
	  --------------------------------------------------------------------
	  init_sect_len    50         44         52                 48
	  num_sections     16          9         16                  9
	
	DISPLAY_INVALID_CONSTANT is also returned when you do not set the following
	values:
	
	  reserv2 : NULL
	  am_info : AP_NO
	  tp_info : AP_NO
	  adapter_info : AP_NO (if NS/2 format)
	  ms_info : AP_NO (if NS/2 format)
	
	Also, for the DISPLAY verb to work, a specific connection must be defined in the
	SNA Server Admin program Display Verb dialog box. IBM originally defined the
	DISPLAY verb with the IBM OS/2 Extended Edition product which assumed a single
	connection. However, because SNA Server supports multiple connections, the
	specific connection associated with the DISPLAY verb must be configured.
	
	Additional query words: prodsna administrator
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
