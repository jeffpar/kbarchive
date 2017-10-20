---
layout: page
title: "Q175315: Err Msg: Connection Manager Requires Some Components That Are..."
permalink: /kb/175/Q175315/
---

## Q175315: Err Msg: Connection Manager Requires Some Components That Are...

{% raw %}

	Article: Q175315
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6,4.0,95
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN you may receive the following error message:
	
	  Connection Manager requires some components that are not installed on your
	  computer. Do you want Connection Manager to install these?
	
	When you click yes, MSN does not establish a connection.
	
	You may also receive the following error message when you attempt to connect to
	MSN:
	
	  Connection Manager requires some components that are not installed on your
	  computer. Run Connection Manager to install these.
	
	CAUSE
	=====
	
	This behavior can occur if the Internet Connection wizard is damaged or not
	installed.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you need to remove the Connection Manager and
	reinstall Internet Explorer from your MSN CD-ROM.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs, and then on the Install/Uninstall tab,
	  click to select Connection Manager.
	
	3. Click Add/Remove, click OK, and then close the Control Panel.
	
	4. Insert the MSN CD into the CD-ROM drive while holding down the left Shift Key
	  on the keyboard.
	
	5. Click Start, point to Find, and then click "Files or Folders".
	
	6. Click the drop-down arrow next to the Look in box and select your CD-ROM
	  drive.
	
	7. Type IE4 setup.exe in Named box, and then double-click IE4 setup.exe when it
	  appears.
	
	8. Click OK to the message stating "Internet Explorer on your computer is newer
	  than the version you about to install".
	
	9. Click Next, and then click I Accept to the license agreement.
	
	10. Select Full installation, and then click Next.
	
	11. Make sure the destination folder is C:\Program Files\Internet Explorer, and
	  then click Next.
	
	12. After the Installation is complete and the computer restarts, click Start,
	  point to Find, and then click "Files or Folders".
	
	13. Click the drop-down arrow next to Look In and change it to your CD-ROM
	  drive.
	
	14. Type MsnSvc.exe in the Named box and click Find Now.
	
	15. Double-click msnsvc.exe to reinstall Connection Manager.
	
	16. Once Connection Manager is reinstalled, restart the computer.
	
	17. Double-click the MSN icon and connect.
	
	Additional query words: 4.0 msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbIEsearch kbWin95search kbMSNSearch kbIE95Search kbZNotKeyword3 kbWin95 kbIE400Win95 kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6,4.0,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
