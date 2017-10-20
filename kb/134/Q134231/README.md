---
layout: page
title: "Q134231: SNA Server Setup Resets CA400 Settings in WNAP"
permalink: /kb/134/Q134231/
---

## Q134231: SNA Server Setup Resets CA400 Settings in WNAP

{% raw %}

	Article: Q134231
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run SNA Client Win3x Setup after installing Client Access, you may lose
	Client Access Connectivity.
	
	CAUSE
	=====
	
	After you set up the SNA Client for CA400 support, the following lines are in
	the [wnap] section of your WIN.INI:
	
	  CA400=YES
	  CA400SharedFolders=YES
	
	When you re-run the SNA Client Setup to change a client value such as network
	protocol, Setup sets these entries back to their default value of "NO." This
	causes CA400 support to fail.
	
	RESOLUTION
	==========
	
	To correct this problem, open your WIN.INI file with a text editor, such as
	Notepad, and manually edit these entries back to "YES".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.11 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
