---
layout: page
title: "Q169191: RAS Server Registry Settings for IP Header Compression"
permalink: /kb/169/Q169191/
---

## Q169191: RAS Server Registry Settings for IP Header Compression

{% raw %}

	Article: Q169191
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IP header compression is enabled by default on Windows NT 3.51 and 4.0 Remote
	Access Service (RAS) servers. However, no option exists in the graphical user
	interface to enable or disable IP header compression for the RAS server itself.
	In order to enable IP header compression on the RAS server, you will need to
	make appropriate changes in the Windows NT Registry.
	
	You should not normally need to disable IP header compression. This should only
	be disabled on the RAS server if you have many RAS clients that do not correctly
	negotiate IP header compression.
	
	MORE INFORMATION
	================
	
	IP header compression is also known as Van Jacobson or VJ header compression as
	described in RFC 1144. This feature can be enabled or disabled for the Windows
	NT RAS client using the TCP/IP settings dialog in Dial-Up Networking for Windows
	NT 4.0 and the Remote Access Phone Book Entry for Windows NT 3.51.
	
	IP header compression is enabled by default on a Windows NT RAS server, and to
	disable the feature you need to add one or both of these values:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To modify the settings on the RAS server that disable IP header compression,
	perform the following steps:
	
	1. Run Registry Editor (Regedt32.exe)and find the following key in the
	  registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rasman\PPP\IPCP
	
	2. On the Edit menu, click Add Value and use the following entries:
	
	     Value Name:   AcceptVJCompression
	     Data Type:    REG_DWORD
	     DefaultValue: 1 (enabled, set to 0 to disable)
	
	     Value Name:   RequestVJCompression
	     DataType:     REG_DWORD
	     DefaultValue: 1 (enabled, set to 0 to disable)
	
	The above entries will not normally appear in the registry, and will use their
	default settings (which enables IP header compression). By setting the REG_DWORD
	data to 0 for these values in the Registry, you will disable IP header
	compression on the RAS server.
	
	VJ header compression is discussed in the help file for the PPP TCP/IP Settings
	dialog found in the Dial-Up Networking interface for Windows NT 4.0 and in the
	Network option of the Edit Phone Book entry dialog for Windows 3.51.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q161986 Troubleshooting Internet Service Provider Login Problems
	
	Additional query words: vjheader vj-compression
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	
	=============================================================================
	

{% endraw %}
