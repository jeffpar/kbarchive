---
layout: page
title: "Q142860: Unattended Setup of Internet Information Server"
permalink: /kb/142/Q142860/
---

## Q142860: Unattended Setup of Internet Information Server

{% raw %}

	Article: Q142860
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server provides an option for unattended setup
	mode. By using a small script, you can set up multiple information servers
	quickly and easily. This is useful for large numbers of servers or to install
	servers with identical setups for distribution.
	
	MORE INFORMATION
	================
	
	You can start an unattended setup for the Microsoft Internet Information Server
	from the Internet Server compact disc, however, only the default configuration
	can be installed in this case.
	
	You can customize the unattended setup for several servers or to provide a simple
	process for over-the-network installations for Internet Explorer users. To
	customize the unattended setup, the file, UNATTEND.TXT, (located on the Internet
	Server compact disc) must first be copied to your hard drive and modified to
	meet your configuration requirements. The file contains more specific
	instructions on what values are configurable.
	
	You can mark options to be installed by setting the value for the option to 1
	(True); or you can mark options not to be installed by setting the value for the
	option to 0 (False).
	
	To start unattended mode Setup, at the command prompt, first change to the
	directory containing both the SETUP.EXE and UNATTEND.TXT. Then, type:
	
	  setup -b unattend.txt
	
	Please see the UNATTEND.TXT file for more information.
	
	Additional query words: prodiis1 iis
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
