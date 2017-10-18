---
layout: page
title: "Q176323: SMS: How to Install Internet Explorer 4.0 with SMS"
permalink: kb/176/Q176323/
---

## Q176323: SMS: How to Install Internet Explorer 4.0 with SMS

	Article: Q176323
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINF
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	Microsoft Internet Explorer 4.0 Setup is based on an ActiveX engine named Active
	Setup, which runs on the client's computer. You can create a custom setup
	package without rewriting Internet Explorer 4.0 Setup. To do that, you create a
	custom version of IE4setup.exe using the Microsoft Internet Explorer
	Administration Kit (IEAK).
	
	After creating an IE4setup.exe file that fits the needs of your organization, you
	can use Systems Management Server to deploy that file to your clients. Do not
	use the Microsoft Systems Management Server Installer to deploy Internet
	Explorer 4.0. For more information about the Internet Explorer Administrator
	Kit, review the information on the Microsoft Web site at
	
	  http://ieak.microsoft.com/.
	
	MORE INFORMATION
	================
	
	With IEAK, you can create a hands-free customized installation of Microsoft
	Internet Explorer 4.0 that fits the needs of your organization. You can use this
	kit to accomplish various tasks.
	
	Customize the Setup Program
	---------------------------
	
	- Customize the appearance of the Setup program and configure types of
	  installation (such as Standard, Minimal, and Full).
	
	- Bundle Internet Explorer and components into a single download package.
	
	- Point users to Internet or intranet servers to download the latest product
	  versions with Active Setup.
	
	- Roll out internal programs, custom scripts, or maintenance scripts when your
	  users install Internet Explorer.
	
	- Specify the language version of Internet Explorer to include in the
	  installation package. You must run the IEAK wizard once for each language
	  version you want to create.
	
	Customize the Browser and Windows Desktop Update
	------------------------------------------------
	
	- Specify the Start, Search, and Support Pages you want to use.
	
	- Load links and folders into the Favorites list.
	
	- Change the title bar and logos of the browser.
	
	- Configure and control the Windows Desktop Update, including Active Desktop
	  items, desktop toolbars, Control Panel, and My Computer.
	
	- Control which channels appear on your corporate desktops.
	
	- Update software dynamically throughout your corporation with software update
	  channels.
	
	- Create a default desktop for your organization and determine which settings a
	  user can change.
	
	Manage Security and Ratings
	---------------------------
	
	- Pre-install certificates on a user's computer and block users from
	  downloading other certificates.
	
	- Preset your users' ratings configurations to adhere to your organization's
	  policies.
	
	- Set a corporate standard disclaimer for any newsgroup postings created by
	  users in your organization.
	
	- Use security zones to establish different levels of security and zones of
	  trust.
	
	- Specify proxy settings for addresses and ports.
	
	NOTE: Some features may not be available, depending on your license agreement.
	For more information, consult your contract.
	
	Additional query words: smsinst ie40 IE
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbinfo
	
	=============================================================================
	
