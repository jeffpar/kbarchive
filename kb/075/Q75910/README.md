---
layout: page
title: "Q75910: TimeSmp.exe - High-Resolution Timing Services"
permalink: /kb/075/Q75910/
---

## Q75910: TimeSmp.exe - High-Resolution Timing Services

{% raw %}

	Article: Q75910
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbTimer
	Last Modified: 25-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TimeSmp.exe is a file that demonstrates how to use the high-resolution timer
	services provided by the Microsoft Multimedia Windows graphical environment.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  TimeSmp.exe
	  (http://download.microsoft.com/download/platformsdk/sample74/3.1/W31/EN-US/TimeSmp.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The timer services provided by Multimedia Windows allow an application to
	schedule timed periodic interrupts or one-time interrupt events at a higher
	resolution than is available through the standard Windows timer services.
	
	Unlike the Windows timer services, the Multimedia timer services are
	interrupt-based. Rather than posting WM_TIMER messages to a message queue, the
	Multimedia service calls a specified function at interrupt time. Because the
	callback code is accessed at interrupt time, it must adhere to strict
	programming guidelines. In particular, only a very limited set of system
	function calls may be made, and the callback function must reside in a
	fixed-code dynamic-link library (DLL).
	
	The Multimedia timer services are useful for applications that demand
	high-resolution timing, such as a MIDI sequencer. For less demanding
	synchronization tasks, use the SetTimer function provided by Windows.
	
	The sample application TIMESMP demonstrates using the timer services and a
	callback function residing in a fixed code DLL.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbTimer 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
