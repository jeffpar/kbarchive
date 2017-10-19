---
layout: page
title: "Q259205: APPC TP_STARTED Does Not Verify Local LU Alias By Default"
permalink: /kb/259/Q259205/
---

## Q259205: APPC TP_STARTED Does Not Verify Local LU Alias By Default

	Article: Q259205
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-APR-2000
	
	This article discusses a Beta release of a Microsoft product. The information in this article is provided as-is and is subject to change without notice.
	
	No formal product support is available from Microsoft for this Beta product. For information about how to obtain support for a Beta release, see the documentation that is included with the Beta product files, or check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Host Integration Server 2000, an APPC application receives an AP_OK
	return code when it calls TP_STARTED with an invalid local APPC LU alias.
	However, the subsequent [MC_]ALLOCATE call fails with the following error
	message:
	
	  primary_rc = 0xF004 (AP_COMM_SUBSYSTEM_NOT_LOADED) secondary_rc = x020000F0
	
	Unlike previous versions of SNA Server, Host Integration Server 2000 defers the
	client-server resource location until the APPC application issues the
	[MC_]ALLOCATE request when a local LU is provided to TP_STARTED. This change has
	been implemented in Host Integration Server 2000 to improve client-server
	resource location and load-balancing support. However, you can still configure a
	registry parameter to revert to the previous behavior in earlier versions of SNA
	Server.
	
	For additional information about the AP_COMM_SUBSYSTEM_NOT_LOADED secondary
	return codes, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q148359 SNA Server APPC Error: F004 AP_COMM_SUBSYSTEM_NOT_LOADED
	
	MORE INFORMATION
	================
	
	By default, when an APPC application provides a local LU alias to the TP_STARTED
	call, Host Integration Server 2000 no longer verifies that the local LU has been
	configured. Instead, the APPC application now contacts the Host Integration
	Server when the [MC_]ALLOCATE request is issued to improve resource location and
	load-balancing support.
	
	This change has a side effect for APPC applications that require two-phase commit
	support (if an APPC application issues TP_STARTED with syncpoint_rqd = AP_YES,
	and [MC_]ALLOCATE with sync_level = AP_SYNCPT). By default, such applications
	are not able to retrieve a valid Logical Unit of Work ID (luw_id) until after
	the [MC_]ALLOCATE request is issued. In other words, such applications should
	not call TP_STARTED followed by GET_TP_PROPERTIES to retrieve the luw_id until
	after the [MC_]ALLOCATE request is issued.
	
	However, to disable this behavior and enforce local LU alias verification for
	TP_STARTED, or to receive a valid luw_id immediately after calling TP_STARTED,
	the following registry parameter can be configured:
	
	On the computer running Host Integration Server or on the Admin client:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters\Client\
	  GenerateLUWIDonTPSTARTED: REG_SZ: YES
	
	-OR-
	
	On the Host Integration Server end-user client:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SnaBase\Parameters\Client\
	  GenerateLUWIDonTPSTARTED: REG_SZ: YES
	
	NOTE: Unlike SNA Server, Host Integration Server 2000 does not support the
	LUWIDSUP registry entry. Instead, this registry entry has been replaced with
	GenerateLUWIDonTPSTARTED.
	
	Also, the GetAPPCReturnCode function has been updated to return the following
	error message when F004/020000F0 occurs:
	
	  Local LU not configured on an active Node. Either the Local LU has not been
	  configured, or its Node is not started.
	
	Therefore, any APPC application that uses the GetAPPCReturnCode function to
	convert the APPC error to a text string receives the correct error message.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	
	=============================================================================
	
