---
layout: page
title: "Q128256: UT1x: Upsizing Tools Requires Local Installation of MS Access"
permalink: /kb/128/Q128256/
---

## Q128256: UT1x: Upsizing Tools Requires Local Installation of MS Access

{% raw %}

	Article: Q128256
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup for the Microsoft Access Upsizing Tools version 1.0 on a
	computer with a network installation of Microsoft Access version 2.0, you may
	receive the following error message:
	
	  Setup could not find Microsoft Access 2.0 installed locally on your system.
	  Please install Microsoft Access 2.0 before installing this application.
	
	RESOLUTION
	==========
	
	The Upsizing Tools requires a local installation of Microsoft Access in order to
	be installed and to function properly.
	
	MORE INFORMATION
	================
	
	You cannot perform an administrative installation of Microsoft Access to a
	network server (with the SETUP /A command), perform workstation installations of
	Microsoft Access from the server, and then install and use the Microsoft Access
	Upsizing Tools on the workstations. You must install Microsoft Access locally on
	the workstations before you can install the Upsizing Tools. A local Minimum or
	Laptop installation of Microsoft Access is sufficient to enable you to install
	the Upsizing Tools.
	
	Additional query words: wizard
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAccessSearch kbAccessUpsizingTools100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
