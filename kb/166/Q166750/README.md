---
layout: page
title: "Q166750: ARP Cache Entries May Not Time Out for 10 Minutes"
permalink: /kb/166/Q166750/
---

## Q166750: ARP Cache Entries May Not Time Out for 10 Minutes

	Article: Q166750
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the media access control address changes for an IP address that a Windows NT
	computer is communicating with, the Windows NT computer may not be able to
	communicate to or through the device for up to 10 minutes.
	
	CAUSE
	=====
	
	Windows NT 4.0 offers a configurable ArpCacheLife registry parameter. This
	parameter controls the arpcache life for entries that are not being referenced
	in the arpcache. Windows NT computers reference an arpcache entry each time an
	outbound IP packet is sent to the address described by the entry.
	
	Entries being referenced time out after 10 minutes, and this time out value is
	not adjustable. If you are communicating with a device that has some form of
	hardware fail-over capability that does not update the arpcache on the other
	devices on the network, its media access control address may change, and if
	there is a steady stream of traffic being directed at it by applications on a
	Windows NT computer, the arpcache entry may not time out for this 10 minute
	period.
	
	RESOLUTION
	==========
	
	To resolve this problem, either obtain the hotfix mentioned in the STATUS
	section of this article, or wait for the next Windows NT service pack.
	
	NOTE: Service Pack 3 must be applied to Windows NT 4.0 before applying the
	hotfix.
	
	The hotfix should have the following timestamp:
	
	  (i386)  12/01/97  04:24p    143,632 Tcpip.sys
	  (alpha) 12/01/97  04:21p    263,472 Tcpip.sys
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	With the hotfix, a new version of Tcpip.sys is available, that allows greater
	control over arpcache life, as described below:
	
	Value: ArpCacheMinReferencedLife
	Key:
	Hkey_Local_Machine\System\CurrentControlSet\Services\ 
	\Tcpip\Parameters
	
	Value Type: REG_DWORD
	Valid Range: 0-0xffffffff
	Default: 600 seconds (10 minutes)
	
	Description: ArpCacheMinReferencedLife controls the minimum time that a
	referenced arpcache entry will expire in. This parameter can be used in
	combination with the ArpCacheLife parameter, as follows:
	
	If ArpCacheLife >= ArpCacheMinReferencedLife, referenced and unreferenced
	arpcache entries will expire in "ArpCacheLife" seconds.
	
	If ArpCacheLife < ArpCacheMinReferencedLife, unreferenced entries will expire
	in "ArpCacheLife" seconds, and referenced entries will expire in
	"ArpCacheMinReferencedLife" seconds.
	
	For additional information about the ArpCacheLife registry parameter, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q139415 New TCP/IP ArpCacheLife Parameter in Windows NT
	
	Additional query words: arp cache proxy MAC resolution protocol
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
