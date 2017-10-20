---
layout: page
title: "Q321807: Err Msg: 800a01ad' ActiveX Component Can't Create Object"
permalink: /kb/321/Q321807/
---

## Q321807: Err Msg: 800a01ad' ActiveX Component Can't Create Object

{% raw %}

	Article: Q321807
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set any properties for the NewMail object in Collaboration Data
	Objects for Windows NT Server (CDONTS), you may receive the following error
	message:
	
	  '800a01ad' ActiveX component can't create object
	
	CAUSE
	=====
	
	This behavior may occur if the operating system files or installed components of
	Microsoft Internet Explorer have changed because of the installation of Service
	Pack 6 (SP6) for Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To resolve this issue, install Microsoft Outlook Express, or remove and then
	reinstall Internet Explorer 5.5 and Outlook Express.
	
	NOTE: You must have administrative privileges to perform the following
	procedures. This includes having administrative privileges the first time that
	you start your computer after you install or remove Internet Explorer 5.5.
	
	To install Outlook Express on a Windows NT 4.0-based system, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Install/Uninstall tab, click "Microsoft Internet Explorer 5.5 and
	  Internet Tools", and then click Add/Remove.
	
	4. Click "Add a Component", and then click OK.
	
	5. In the Windows Update dialog box, click to select the check boxes next to
	  Outlook Express.
	
	NOTE: Components in bold are already installed and do not have to be updated.
	
	6. Click Next, and then follow the instructions on your screen.
	
	For additional information about how to obtain and install Outlook Express, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q270696 OLEXP: How to Obtain and Install Outlook Express
	
	To remove Internet Explorer 5.5 on a Windows NT 4.0-based system, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs, and then click the Install/Uninstall tab.
	
	3. In the list of installed programs, click Microsoft Internet Explorer 5.5 and
	  Internet Tools, and then click Add/Remove.
	
	4. Click "Restore the previous Windows configuration", or click Advanced to
	  specify any additional components that you want to remove.
	
	5. Click OK.
	
	  The Internet Explorer 5 and Internet Tools Setup screen appears.
	
	6. When prompted to restart the computer, click Yes.
	
	For additional information about how to install Internet Explorer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q265453 Description and Availability of Internet Explorer 5.5
	
	To install Internet Explorer 5.5 SP2 on a Windows NT 4.0-based system, follow
	these steps:
	
	1. Start Internet Explorer, and then visit the following Microsoft Download
	  Center Web site:
	
	  http://www.microsoft.com/downloads/search.asp
	
	2. Click the "Internet Explorer 5.5 Service Pack 2" link.
	
	3. Follow the instructions to download and install Internet Explorer 5.5 SP2.
	
	For additional information about how to install additional components, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q171229 How to Add and Remove Internet Explorer Components
	
	For additional information about how to install Internet Explorer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q258893 Information About How to Reinstall Internet Explorer
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search
	Version           : :4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
