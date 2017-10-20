---
layout: page
title: "Q107384: RUI Interface Enhancement to Avoid Duplicate Signon Screens"
permalink: /kb/107/Q107384/
---

## Q107384: RUI Interface Enhancement to Avoid Duplicate Signon Screens

{% raw %}

	Article: Q107384
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If an SLI_OPEN follows immediately after an SLI_CLOSE statement the SSCP Welcome
	message screen may appear twice under some certain timing conditions.
	
	An SNA Server 2.11 update is available which closes a timing window where this
	can occur. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q137482 LUA Program Receives Host Sign-On Screen Twice and then Hangs
	
	However, with this update applied, this problem can still occur under certain
	timing conditions described in this article.
	
	An Additional Update Is Available
	---------------------------------
	
	Another update to SNA Server 2.11 now supports the ability to put a small
	configurable delay between the SLI_CLOSE completion and issuing the new SLI_OPEN
	statement. Microsoft has updated the following file to include this feature:
	
	  <snaroot>\system\WINRUI32.DLL
	
	This update is for Win32 clients only and is implemented in the WIN32 RUI
	Interface and exported as a new registry value.
	
	Implementing the Update
	-----------------------
	
	To set this delay you have to obtain the update and add the new registry value
	INITDELAY under the HKEY_LOCAL_MACHINE subtree under the following subkey:
	
	  SYSTEM\CurrentControlSet\Services\SnaBase\Parameters\Client
	
	Use the following information when adding the new value:
	
	  Value Name: INITDELAY
	  Data Type:  REG_DWORD
	  Data:       0-10 (decimal)
	
	  Default:    0 seconds
	
	This variable sets an optional delay in seconds in processing RUI_INIT requests.
	If you do not specify an entry for data, there is no delay. If you configure a
	value greater than 10, then a value of 10 is used.
	
	MORE INFORMATION
	================
	
	When an LUA session is closed and immediately reopened, the SNA Server may
	resend the host SSCP welcome message twice to the LUA application. The following
	diagram explains what is happening:
	
	Message flow as the node sees it.       Message flow as the host sees it.
	   Host                Node                Host             Node
	   ====                ====                ====             ====
	
	     NOTIFY unavailable                      NOTIFY unavailable
	       (SLU disabled)                         (SLU disabled)
	    <--------------------                   <----------------
	
	         NOTIFY +rsp                           NOTIFY +rsp
	    -------------------->                   ----------------->
	
	       NOTIFY available                        logon banner
	    <--------------------                   ----------------->
	
	       logon banner                           NOTIFY available
	                                               (SLU enabled)
	    -------------------->                   <-----------------
	
	       NOTIFY +rsp                             NOTIFY +rsp
	    -------------------->                   ----------------->
	
	       logon banner                            logon banner
	    -------------------->                   ----------------->
	
	When the host receives the first NOTIFY it sends a logon screen. At the same
	time, the node is sending the second NOTIFY. In this case by the time that the
	logon screen reaches the node, the node has passed on the second NOTIFY to the
	link service. In that situation the node is not able to determine whether the
	logon screen was sent due to the first NOTIFY, or the second NOTIFY, and so it
	passes it up to the application. Shortly thereafter, the second logon screen
	arrives, and the node also passes that up to the application.
	
	This is because the underlying SSCP-LU session on which the NOTIFYs and the logon
	screens flow is not brought down when the SLI session is brought down and a new
	SLI session is started. Therefore, the node cannot tell that a particular
	message on the SSCP-LU session is associated with the SLI session which has been
	terminated.
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This feature is also included in SNA Server versions 3.0 (all Service Packs) and
	4.0.
	
	Additional query words: prodsna SLI
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	
	=============================================================================
	

{% endraw %}
