---
layout: page
title: "Q316327: IIS: Errmsg: This Server Was Already Configured..."
permalink: /kb/316/Q316327/
---

## Q316327: IIS: Errmsg: This Server Was Already Configured...

{% raw %}

	Article: Q316327
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some situations, you may not be able to install the Internet Information
	Services (IIS) Lockdown Tool 2.1 on a server and the following option is
	displayed in the Internet Information Services Lockdown Wizard:
	
	  "undo previous configuration and restore metabase to original configuration"
	
	When you attempt to apply the IIS Lockdown Tool, the wizard fails and it cannot
	perform a successful uninstall nor can it remove the configuration. You also
	receive the following error message:
	
	  This Server Was Already Configured
	
	  This server was already configured using the Internet Information Services
	  Lockdown Wizard. To view the current settings, open the OBLT-Log.Log file in
	  the <Windows>\system32\inetsrv directory.
	
	  To restore the original settings, click Next. After these settings have been
	  restored, run this wizard again.
	
	NOTE: This is an expected behavior if you have previously installed the tool, but
	not if you have never installed it.
	
	CAUSE
	=====
	
	This behavior occurs because when you run the IIS Lockdown Tool 2.1, the
	following events occurs during the installation that allow the tool to reverse
	itself in the future:
	
	- The Oblt-rep.log file is created in the <Windows>\System32\Inetsrv
	  folder. This file contains a summary of the installation process and it is
	  generated after the installation.
	
	- The following two metabase backup files are created and placed in
	  <Windows>\System32\Inetsrv\Metaback folder:
	
	   - Oblt-once.md0
	
	   - Oblt-mb.md0
	
	RESOLUTION
	==========
	
	To allow the wizard to run disregarding any previous installations, locate the
	following files and delete them (or move them to a different location):
	
	- Oblt-rep.log
	- Oblt-once.md0
	- Oblt-mb.md0
	
	NOTE: This folder also houses any manually created backup files by default. You
	should only delete or move the files that start with the following string:
	
	  oblt
	
	By deleting or moving these files, the wizard should be able to run successfully
	thereby allowing changes to the metabase.
	
	Additional query words: iis 5 lockdown harden security wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
