---
layout: page
title: "Q164893: SNA Server Client Can Overwrite SNA Server Installation"
permalink: /kb/164/Q164893/
---

## Q164893: SNA Server Client Can Overwrite SNA Server Installation

{% raw %}

	Article: Q164893
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0; winnt:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 
	- Microsoft SNA Workstation, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install Windows NT or Windows 95 SNA Server Client on a system that has
	SNA Server or SNA Workstation installed, Setup may overwrite existing SNA Server
	files and registry parameters, and cause both applications to fail.
	
	CAUSE
	=====
	
	The Setup program for the Windows NT and Windows 95 SNA Server client does not
	check for the existence of SNA Server or SNA Workstation during the installation
	process.
	
	The SNA Server software and the Windows NT and Windows 95 SNA Server client use
	the same file names and several of the same registry entries. The Windows NT SNA
	Server client and SNA Server also use the same default installation path
	(C:\Sna). The default installation path for the Windows 95 SNA Server client is
	C:\Sna95.
	
	RESOLUTION
	==========
	
	To easily work around this problem, do not install the Windows NT or Windows 95
	SNA Server clients on the same system as SNA Server or SNA Workstation.
	
	The Setup programs for Windows NT and Windows 95 SNA Server 3.0 clients have been
	updated to check for a previous installation of SNA Server or SNA Workstation
	prior to beginning the installation process. Setup will fail if either SNA
	Server or SNA Workstation is detected.
	
	The updated modules are:
	
	  \<snaroot>\Snasetup.dll
	  \<snaroot>\Setup\Client\Snasetup.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11. and 3.0.
	This problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snawinnt snawin95 snasetup sna30
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAW210 kbSNAW211 kbSNAW300 kbSNAW200 kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0; winnt:2.0,2.1,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
