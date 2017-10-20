---
layout: page
title: "Q143239: 5250 Applet Defaults To a French Canadian Host Code Page"
permalink: /kb/143/Q143239/
---

## Q143239: 5250 Applet Defaults To a French Canadian Host Code Page

{% raw %}

	Article: Q143239
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the 5250 applet on a Windows or Windows NT computer and the
	Country code is configured to Canada (Canadian English), the Host Code Page
	defaults to French Canadian.
	
	In Windows 95, the Host Code Page defaults to French Canadian if the Country code
	in Control Panel Regional Settings is set to English (Canadian).
	
	RESOLUTION
	==========
	
	Apply SNA Server 2.11 Service Pack 1.
	
	WORKAROUND
	==========
	
	Select Session Configuration from the Session menu in the 5250 applet and change
	the Host Code Page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1 and
	2.11. This problem has been resolved in SNA Server 2.11 Service Pack 1.
	
	Additional query words: prodsna 2.10 2.11 3.50 3.51 keyboard language
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
