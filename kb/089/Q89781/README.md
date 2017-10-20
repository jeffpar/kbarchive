---
layout: page
title: "Q89781: IPX Not Listed in Available Protocols in Control Panel"
permalink: /kb/089/Q89781/
---

## Q89781: IPX Not Listed in Available Protocols in Control Panel

{% raw %}

	Article: Q89781
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Novell NetWare protocol IPX is not listed in the Available Protocols dialog
	box in the Network options in Control Panel when you choose the Adapters button
	and then choose the Setup button.
	
	MORE INFORMATION
	================
	
	Because Novell NetWare is the only network that uses the IPX protocol, Windows
	for Workgroups does not allow IPX to be added as a standalone protocol. IPX must
	be added by installing Novell NetWare Connectivity through Windows for
	Workgroups. To add Novell NetWare Connectivity take the following steps:
	
	1. From the Main group, start Control Panel.
	
	2. Choose the Network icon.
	
	3. Choose the Networks button.
	
	4. Novell NetWare should appear on the left in the Available Network Types list.
	  Select Novell NetWare and choose the Add button, then choose the OK button.
	
	This also adds the Novell NetWare button to File Manager and Print Manager. If
	IPX were added alone, the NetWare button(s) would not be present in File Manager
	or Print Manager, and thus not be possible to map drives or capture printers
	from within Windows for Workgroups for the Novell file servers in use.
	
	IPX is a proprietary Novell NetWare protocol. The Windows for Workgroups
	implementation of IPX is in two parts: MSIPX.SYS and MSIPX.COM. These two files
	replace the single Novell NetWare file IPX.COM.
	
	Additional query words: 3.10 gerb 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
