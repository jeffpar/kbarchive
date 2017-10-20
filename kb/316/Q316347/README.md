---
layout: page
title: "Q316347: IIS 5: HiSecWeb Potential Risks and the IIS Lockdown Tool"
permalink: /kb/316/Q316347/
---

## Q316347: IIS 5: HiSecWeb Potential Risks and the IIS Lockdown Tool

{% raw %}

	Article: Q316347
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the uses and risks of the HiSecWeb security template.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Hisecweb.exe
	
	The HiSecWeb security template is a Microsoft Windows 2000 and Microsoft Windows
	XP security template that is designed to help secure Internet Information
	Services (IIS) at the operating system level. HiSecWeb is a baseline security
	template that is not intended to work with every configuration and has not been
	tested with all applications. You should not apply this template before you
	install applications on your computer, because some settings may prevent
	software installation and proper configuration.
	
	The possible effects and ramifications of security templates are vast and
	wide-ranging. It is vital that you understand security templates before you
	apply a security template to a server, especially if the server is in
	production. The templates are very successful at securing a server, but may
	cause unwanted results and render the server inoperable.
	
	NOTE: Microsoft does not recommend that you install HiSecWeb on a domain
	controller. HiSecWeb is not designed to operate seamlessly on a domain
	controller, and is known to cause serious domain problems if IIS is installed on
	a domain controller.
	
	Before you apply the HiSecWeb security template, you should complete the
	following actions:
	
	- Open the security template in the Security Templates Microsoft Management
	  Console (MMC) and review the changes that the template is designed to make to
	  the server. Compare the settings of the HiSecWeb security template to the
	  current settings of your computer to determine the changes that will be made
	  and to make sure that the potential changes are acceptable. For more
	  information about how to do this, see the following Microsoft Web site:
	
	  From Blueprint to Fortress: A Guide to Securing IIS 5.0
	  http://www.microsoft.com/technet/treeview/default.asp?url=/TechNet/prodtechnol/iis/deploy/depovg/securiis.asp
	
	- Test all portions of your application to ensure proper behavior and
	  configuration.
	
	To apply the HiSecWeb template, follow these steps:
	
	1. Download and install Hisecweb.exe.
	
	2. Copy the Hisecweb.inf file to the %SystemRoot%\Security\Templates folder.
	
	For detailed instructions on how to install the HiSecWeb security template, see
	the following Microsoft Web site:
	
	  From Blueprint to Fortress: A Guide to Securing IIS 5.0
	  http://www.microsoft.com/technet/treeview/default.asp?url=/TechNet/prodtechnol/iis/deploy/depovg/securiis.asp
	
	For additional information about using Windows 2000 security templates, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q309689 HOW TO: Apply Predefined Security Templates
	
	If you are only securing IIS without using operating system-level modifications,
	the recommended method is to apply the IIS Lockdown tool. The Lockdown tool
	makes IIS-specific changes (such as changes to the metabase and URLScan); it
	does not make underlying operating system changes as does the security
	template.
	
	
	The IIS Lockdown tool is available for download from the following Microsoft Web
	site:
	
	  The Microsoft Security Tool Kit
	  http://www.microsoft.com/technet/treeview/default.asp?url=/technet/security/tools/stkintro.asp
	
	REFERENCES
	==========
	
	For more information, see the following Knowledge Base articles:
	
	
	  Q310725 HOW TO: Run the IIS Lockdown Wizard Unattended
	
	  Q311862 How to Use The IIS Lockdown Tool with Small Business Server
	
	For additional information about IIS security and planning, see the following
	Knowledge Base article:
	
	  Q311184 HOW TO: Perform Security Planning for Internet Information Services
	  5.0
	
	For the latest security information, see the following Microsoft Web site:
	
	  Security
	  http://www.microsoft.com/technet/security
	
	Additional query words: iis 5 security harden attack access
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
