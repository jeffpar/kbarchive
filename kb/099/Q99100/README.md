---
layout: page
title: "Q99100: Reasons Why WFWG Workstations Can't Browse LM Servers"
permalink: /kb/099/Q99100/
---

## Q99100: Reasons Why WFWG Workstations Can't Browse LM Servers

	Article: Q99100
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article supplements Chapter 8 of the "Windows for Workgroups Resource Kit,"
	which discusses integrating WFWG clients into LAN Manager domains. Page 8-7 of
	the Resource Kit states:
	
	  Once a Windows for Workgroups workstation is a member of the LAN Manager
	  domain, this workstation will distribute the names of the LAN Manager servers
	  defined in the domain to other Windows for Workgroups workstations on the
	  network.
	
	This article discusses conditions that prevent a WFWG workstation from browsing a
	LAN Manager domain.
	
	MORE INFORMATION
	================
	
	Here are some reasons why a WFWG workstation defined in a LAN Manager domain
	might be unable to act as browsemaster for that domain:
	
	- The workstation has been explicitly disallowed from becoming a browsemaster
	  by setting the MaintainServerList= parameter in the [network] section of
	  SYSTEM.INI to NO. The default value for this parameter is AUTO. If RAS 1.0a
	  has been installed on the workstation, the RAS Setup program sets
	  MaintainServerList=NO.
	
	- The browser service has been disabled by removing VBROWSE.386 from the
	  network= line of the [386Enhanced] section of SYSTEM.INI. The most common
	  reason for this is that the "Sharing Enabled" checkbox in the Network Control
	  Panel has been unselected, removing both VBROWSE.386 and VSERVER.386 from the
	  network= line. VBROWSE.386 cannot be loaded if VSERVER.386 is not present, so
	  a machine with sharing disabled cannot act as browsemaster.
	
	- The workstation is running the real mode redirector instead of the protected
	  mode redirector (VREDIR.386). This can occur because:
	
	   - The machine in question is an 80286.
	
	   - The real mode redirector was started before entering Windows (by issuing a
	     NET START WORKSTATION command) and was not stopped before entering
	     Windows. This issues a warning dialog when Windows is started.
	
	   - Windows for Workgroups has been started in standard mode. This issues a
	     warning dialog if the real mode redirector has NOT been started before
	     entering Windows.
	
	REFERENCES
	==========
	
	"Microsoft Windows for Workgroups Resource Kit," Chapter 8: "Network Integration
	with Microsoft LAN Manager and Novell NetWare"
	
	Additional query words: wfw wfwg 3.10 3.1
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
