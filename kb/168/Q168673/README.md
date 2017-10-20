---
layout: page
title: "Q168673: MSN Err Msg: A Required .dll file, Ragui32.dll, Was Not Found"
permalink: /kb/168/Q168673/
---

## Q168673: MSN Err Msg: A Required .dll file, Ragui32.dll, Was Not Found

{% raw %}

	Article: Q168673
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5 (OEM Release),95
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 (OEM Release) 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to play RealAudio files using Microsoft Internet Explorer version
	3.x, you may receive the following error message:
	
	  A Required .dll file, Ragui32.dll, was not found.
	
	CAUSE
	=====
	
	This file is part of the RealAudio ActiveX components that are installed with
	Internet Explorer. The Ragui32.dll file may be damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall Internet Explorer by following
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click VRML Add-In 3.0, and then click
	  Remove.
	
	4. In the list of installed programs, click Internet Explorer 3.x, and then
	  click Remove.
	
	5. Reinstall Internet Explorer from the MSN CD-ROM. To do this, follow these
	  steps for your version of MSN:
	
	MSN 2.0
	-------
	
	1. Insert the MSN CD-ROM into the CD-ROM drive. If the Auto Insert Notification
	  option is turned on, close the Welcome To MSN window that opens on the
	  desktop.
	
	2. Double-click My Computer.
	
	3. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	4. Double-click the Msnsetup folder.
	
	5. Double-click the Compnts folder.
	
	6. Double-click the Msie301.exe file.
	
	7. Follow the instructions on the screen. When you are prompted to restart the
	  computer, click Yes.
	
	MSN 2.5
	-------
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "msie302.exe" (without quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, double-click the Msie302.exe file.
	
	4. Follow the instructions on the screen. When you are prompted to restart the
	  computer, click Yes.
	
	Additional query words: 2.00 2.50 msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN250OEM
	Version           : WINDOWS:2.0,2.5 (OEM Release),95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
