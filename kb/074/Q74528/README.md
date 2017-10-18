---
layout: page
title: "Q74528: INFO: &quot;Power-Friendly&quot; Applications"
permalink: kb/074/Q74528/
---

## Q74528: INFO: &quot;Power-Friendly&quot; Applications

	Article: Q74528
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Power-managed personal computers, such as some battery-powered notebook
	computers, are designed to conserve power during periods of CPU inactivity or
	"idle time." Although most power-saving measures should occur transparently to
	an application, developers should be aware of several attributes that make an
	application "power friendly."
	
	To qualify as "power-friendly," an application must use the PeekMessage and Yield
	functions carefully, preferably only for temporary background tasks. As long as
	an application is in a PeekMessage loop, the Windows system cannot go idle.
	Therefore, an application should not remain in a PeekMessage loop after its
	background processing has completed.
	
	MORE INFORMATION
	================
	
	Traditionally, an application running in the Windows multitasking environment
	needed only to ensure that once it was finished with its processing it yielded
	the processor to other applications in the system. However, the increased
	popularity of battery-powered systems imposes another responsibility on
	applications: to allow Windows to "go idle" as often as possible.
	
	To Windows, the system appears idle when all executing programs are awaiting
	input. All applications have called the GetMessage or WaitMessage function, and
	no pending messages are in any application queue. At such times, the Windows
	kernel broadcasts an idle notification by using an MS-DOS interrupt. A
	power-managed PC can use this notification as a signal to take power-saving
	measures.
	
	When an application is in a PeekMessage or Yield loop, it prevents Windows from
	going idle, thus thwarting attempts by power-managed PCs to save power.
	
	An application's main message handler should use a GetMessage loop or equivalent
	structure (such as the combined use of the PeekMessage and WaitMessage
	functions) when no background processing is required. This allows Windows to go
	idle and power-saving measures to take effect.
	
	Applications that must periodically service a task (for example, a communications
	connection) should poll, in response to a message from a timer, if there is no
	other way to determine when the status of the device changes.
	
	Additional query words: 3.00 3.10 APM
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
