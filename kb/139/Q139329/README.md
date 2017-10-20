---
layout: page
title: "Q139329: Windows NT LUA Application Hangs After 32767 SLI_SEND Commands"
permalink: /kb/139/Q139329/
---

## Q139329: Windows NT LUA Application Hangs After 32767 SLI_SEND Commands

{% raw %}

	Article: Q139329
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
	
	When you run an LUA/SLI application on Windows NT, the application stops
	responding (hangs) after issuing 32767 SLI_SEND commands. The next SLI_SEND
	command is never sent to the Host.
	
	CAUSE
	=====
	
	The SLI_SEND hangs because an internal counter in the RUI library is being
	incremented for each send, but never being decremented. Because the counter is a
	2 byte integer, it is wrapping to zero after 32,767 sends.
	
	If the SNA Server RUI library and the server are receiving large inbound RUs from
	the host, then the RUI library never decrements its internal send credit. This
	can cause two possible errors:
	
	- If the SNA Server does return a credit message after receiving data from the
	  RUI library, eventually the RUI library's send credit is incremented so much
	  that it becomes zero, causing the RUI library to stop sending data because it
	  thinks it has run out of credit.
	
	- If the RUI application is pumping data to the node (for example, transferring
	  a file to the host), then it floods the node, because the RUI library always
	  believes that it has enough credit.
	
	RESOLUTION
	==========
	
	Microsoft has updated the files, WINRUI.DLL ,for 16-bit clients, and
	WINRUI32.DLL, for 32-bit clients, and ACSRUI.DLL for OS/2 clients to correct
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 winrui credit sli_send
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
