---
layout: page
title: "Q176782: Err Msg: Multicast Detector Failed Initialization"
permalink: /kb/176/Q176782/
---

## Q176782: Err Msg: Multicast Detector Failed Initialization

{% raw %}

	Article: Q176782
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.51 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install or connect to MSN, The Microsoft Network, you may
	receive the following error message:
	
	  Multicast detector failed initialization.
	
	CAUSE
	=====
	
	This behavior can occur if you previously installed a Platform Preview version
	of Microsoft Internet Explorer 4.0 with the minimal installation option.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove MSN and Internet Explorer 4.0, and then reinstall
	MSN and Internet Explorer 4.0 from the MSN 2.51 CD-ROM. To do so, use the
	following steps:
	
	Remove MSN and Internet Explorer 4.0
	------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click any of the following entries, and then
	  click Add/Remove:
	
	  Connection Manager
	  Microsoft Chat 2.0
	  MSN Optional Controls
	  MSN v2.5
	  Real Player 4.0
	  Microsoft Netshow Player 2.0
	  Microsoft Outlook Express
	  Microsoft Internet Explorer 4.0
	
	4. If you are prompted to delete the component's files, click Yes.
	
	5. Repeat steps 3-4 to remove every program component.
	
	  NOTE: You must also remove any MSN components that you have installed that do
	  not appear on the list above.
	
	6. On the Windows Setup tab, click the The Microsoft Network check box to clear
	  it, and then click OK.
	
	7. Close Control Panel.
	
	8. Click Start, point to Programs, and then click Windows Explorer.
	
	9. Right-click the Program Files\OnMSN folder, and then click Delete.
	
	10. Close Windows Explorer.
	
	11. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	12. Right-click any of the following Dial-Up Networking connections, and then
	  click Delete:
	
	  MSN
	  MSN Backup (for advanced use only)
	  The Microsoft Network
	  The Microsoft Network (Backup)
	
	13. Repeat step 12 for each of the connections listed above.
	
	14. Close the Dial-Up Networking window.
	
	15. Restart the computer.
	
	Reinstall MSN and Internet Explorer 4.0
	---------------------------------------
	
	Insert the MSN 2.51 CD-ROM into the CD-ROM drive. If the Welcome To MSN window
	opens on the desktop, click Setup MSN to install MSN and Internet Explorer 4.0.
	If the Welcome To MSN window does not open, follow these steps:
	
	1. Double-click My Computer.
	
	2. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	3. Double-click the Setup.exe file.
	
	When the Welcome To MSN window opens on the desktop, click Setup MSN to install
	MSN and Internet Explorer 4.0.
	
	Additional query words: 4.0 msnet msnetwork microsoft-net m.s.n. outexw95
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbIEsearch kbMSNSearch kbIE95Search kbZNotKeyword3 kbIE400Win95 kbMSN251
	Version           : WINDOWS:2.51,4.0
	
	=============================================================================
	

{% endraw %}
