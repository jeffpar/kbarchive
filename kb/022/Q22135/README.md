---
layout: page
title: "Q22135: INFO: Windows DEVICEDATA Escape Usage"
permalink: /kb/022/Q22135/
---

## Q22135: INFO: Windows DEVICEDATA Escape Usage

{% raw %}

	Article: Q22135
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 02-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following provides information about the usage of the DEVICEDATA escape.
	
	MORE INFORMATION
	================
	
	The term "#define DEVICEDATA 19" was previously called PASSTHROUGH; however, it
	was later renamed. Using the DEVICEDATA escape, which is essentially a
	"pass-through" to the device, will make an application absolutely device
	dependent.
	
	The primary use of the DEVICEDATA escape is to download information that needs to
	be in the printer (that is, information that should be there, however, the
	programmer knows is not there) or to set the printer state. The DEVICEDATA
	escape will not interact with the GDI in a reasonable way; however, it allows
	device-driver writers to provide escapes directly into a printer for functions
	supported there. In particular, if the state in a printer is set to something
	other than what GDI thinks it to be, the results could be unpredictable. For
	example, a simple dump of text strings could be sent to a device. However, the
	programmer must be sure that the printer is in text mode (that is, not in
	graphics mode) before the programmer attempts this procedure.
	
	A better way to perform a "quick and dirty" print is to set the requested print
	quality to Draft. Time-conscious drivers would probably use intrinsic fonts for
	draft-quality printing (no assertion has been made that there are any drivers
	out there that actually do this; it is part of the semantics of draft-quality
	printing).
	
	To summarize this information, the DEVICEDATA escape provides a simple way to
	send a string of bytes to a device; however, it does not provide a simple way to
	print to the device. It is device-dependent as to whether those bytes get
	printed, are interpreted as a downloaded font, reset printer characteristics,
	and so on. The DEVICEDATA escape should not be considered a substitute for using
	the GDI interface. For these reasons, Microsoft recommends that this escape
	never be used by well-behaved applications.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
