---
layout: page
title: "Q216482: How to Control the Ciphers for SSL and TLS"
permalink: /kb/216/Q216482/
---

## Q216482: How to Control the Ciphers for SSL and TLS

	Article: Q216482
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Secure Socket Layer (SSL) and Transport Layer Security (TLS) both have the
	ability to use different ciphers, depending on the abilities of the connecting
	client. By default, all ciphers can be used; however, you can also choose the
	ciphers you want to allow (for example, only allowing RC4 using 64/128 and
	Skipjack for Fortezza). It is important to note that changing these values will
	affect ciphers on the entire computer. Internet Explorer, for example, uses the
	same registry entries to determine the ciphers that are available for use.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To choose the ciphers you want to allow, perform the following steps:
	
	1. Click Start, point to Run, and type "Regedt32.exe" (without the quotation
	  marks).
	
	2. Locate the following registry key:
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProvid
	  ers\SCHANNEL\Ciphers
	
	3. In the list of available ciphers, select one of the ciphers you do not want
	  to use. In the right pane, view the "Enabled" value for this entry. The value
	  can be one of the following:
	
	  0xffffffff (enabled)
	  0x0 (disabled)
	
	4. Click Enabled, choose Edit, and then choose Modify.
	
	5. In the "Edit DWORD Value" window, make sure that the Value is set to Enabled
	  and that the Base Value is set to Hexadecimal.
	
	6. In the Value Data box, delete the previous value and change it to enabled or
	  disabled by entering 0 (zero) for disabled, or "ffffffff" (without the
	  quotation marks) for enabled.
	
	7. Click OK.
	
	8. Restart the Internet Information Services for the changes to take effect.
	
	Additional query words: cipher algorithm ssl tls
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
