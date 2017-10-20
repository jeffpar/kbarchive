---
layout: page
title: "Q228519: SBS: Settings for Internet Explorer Client Configuration"
permalink: /kb/228/Q228519/
---

## Q228519: SBS: Settings for Internet Explorer Client Configuration

{% raw %}

	Article: Q228519
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	BackOffice Small Business Server (SBS) 4.5 provides custom Internet
	communications settings during the installation of SBS client computers. The
	Setup Computer Wizard uses the Install.ins template source file to set custom
	options and configuration settings in Microsoft Internet Explorer version 5
	during client installation.
	
	By default, when Internet Explorer 5 is installed on a client computer, the
	automated client Setup process configures the browser with custom settings for
	SBS as follows:
	
	- Adds the following pages to your collection of favorites:
	
	   - Microsoft Small Business Web site
	     http://www.microsoft.com/smallbiz
	
	   - My Internet Home Page
	     http://<sbsserver>
	
	   - My Intranet Home Page
	     http://<sbsserver>/intranet
	
	   - SBS User Guide
	     http://<sbsserver>/intranet/sbsclienthelp/default.asp
	
	- Changes your home page to the SBS User Guide page when you first start
	  Internet Explorer.
	
	- Configures your client computer to use the SBS computer as a proxy server for
	  Internet access, configuring all protocols to use and address of
	  http://<sbsserver> and port 80.
	
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
