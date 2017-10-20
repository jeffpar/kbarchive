---
layout: page
title: "Q271455: Releasing a DHCP-Assigned IP Address at Shutdown in Windows NT"
permalink: /kb/271/Q271455/
---

## Q271455: Releasing a DHCP-Assigned IP Address at Shutdown in Windows NT

{% raw %}

	Article: Q271455
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5,3.51 (all service packs),4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 (all service packs), 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 (all service packs), 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be situations in which you want to have the IP address that was
	assigned to your computer by Dynamic Host Configuration Protocol (DHCP)
	automatically released when you shut down your Windows NT-based computer.
	
	There is no built-in functionality in Windows NT 3.x or 4.0 to automatically
	perform this task.
	
	MORE INFORMATION
	================
	
	For mobile users with laptop computers, Microsoft recommends using a hardware
	profile to eliminate any conflicts with the DHCP-assigned address that is bound
	to the local network adapter and the new DHCP-assigned address on the
	Point-to-Point Protocol (PPP) NDISWAN adapter for remote dial-up clients.
	
	However, there may be some situations in which a hardware profile may not
	accomplish this result (for example, if you have a docking-type laptop
	computer). When you are in the office, the DHCP-assigned address for the
	corporate network is bound to the network adapter in the docking station. When
	you travel to remote corporate sites, you may still want to have the ability to
	plug the laptop computer into a corporate Ethernet network connection. This
	requires an additional PC Card network adapter to be installed in the laptop
	computer. Rather than simply installing the PC Card network adapter, you can
	install a network adapter and modem combination PC Card. In this case, it may be
	difficult to configure a hardware profile that eliminates the PC Card network
	adapter that does not also eliminate the PC Card modem from the profile. In
	these types of situations, you need to release the DHCP-assigned IP address that
	is bound to the network adapter instead of eliminating the network adapter as a
	whole by using a hardware profile.
	
	In Microsoft Windows 95 and Microsoft Windows 98, there is a registry setting
	that you can use to release the IP address at shutdown. The registry value is
	named ReleaseLeaseOnShutdown.
	
	
	No such functionality exists for Windows NT. One possible method for releasing
	the IP address is to use the "ipconfig /release" command in a batch file,
	followed by the shutdown.exe command. Shutdown.exe is a Windows NT 4.0 Resource
	Kit utility. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q158388 Useful Resource Kit Utilities for Domain Administrators
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1,3.5,3.51 (all service packs),4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
