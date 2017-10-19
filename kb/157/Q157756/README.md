---
layout: page
title: "Q157756: Remote Control Problem with Matrox MGA Millennium PowerDesk"
permalink: /kb/157/Q157756/
---

## Q157756: Remote Control Problem with Matrox MGA Millennium PowerDesk

	Article: Q157756
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remotely control a Windows 95 workstation that has the Matrox MGA
	Millennium PowerDesk drivers (version 4.03.00.3110) installed, and you run
	either File Manager (Winfile) or Windows Explorer, the video display does not
	update properly.
	
	CAUSE
	=====
	
	When you run File Manager (or another application), the screen is not correctly
	repainted, although the colors and/or fonts are correctly displayed. Some areas
	of File Manager are mixed with some other part of the background screen.
	
	If you use the Matrox MGA Millennium drivers dated 08/24/95 (version 1.00.006),
	everything appears normally.
	
	
	WORKAROUND
	==========
	
	Disable "Bitmap Caching" and "Power GDI Options" for the MATROX drivers by going
	to Display Properties, click on MGA Setting, click on Advanced and disable
	"Bitmap Caching".
	
	-or-
	
	Use the Matrox MGA Millennium drivers, version 1.00.006, dated 08/24/95. The
	following list shows the file names and sizes of these drivers:
	
	Mga95x64.vxd      22329    08/24/95
	Mga95x64.dll      62688    08/24/95
	Mga95x64.drv      78640    08/24/95
	
	Refer to Bug#2521 in the SMSBug1 database for more information.
	
	Additional query words: sms SP1 Quick Viewer
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
