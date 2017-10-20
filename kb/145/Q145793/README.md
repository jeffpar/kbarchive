---
layout: page
title: "Q145793: SUR and 16-bit Clients Must Run Separate Versions of TEST"
permalink: /kb/145/Q145793/
---

## Q145793: SUR and 16-bit Clients Must Run Separate Versions of TEST

{% raw %}

	Article: Q145793
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smsappscripts smspcm kbSMSAppScripts
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your network enterprise consists of Windows NT 3.5, 3.51, and 4.0 client
	computers, Windows 95 client computers and 16-bit client computers and you want
	to send application scripts using Package Command Manager (PCM), it is
	recommended that you run separate versions of the Test application.
	
	MORE INFORMATION
	================
	
	For Windows NT version 4.0 client computers, use the VTest 4.0 application only.
	For Windows NT 3.5 and 3.51, Windows 95 and 16-bit client computers, you may use
	either MSTest 2.0 (Wbrun20.exe) or MSTest 3.0 (Mtrun.exe). However, you may send
	VTest 4.0 *.pcd files to non-Windows NT 4.0 32-bit client computers if you have
	you necessary VTest 4.0 *.dll files and Mtrun.exe in the PCM source directory.
	
	NOTE: It is recommended that you install Systems Management Server version 1.2 on
	a Windows NT Server 4.0.
	
	Additional query words: prodsms SUR
	
	======================================================================
	Keywords          : kbnetwork kbPCM smsappscripts smspcm kbSMSAppScripts 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
