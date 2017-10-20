---
layout: page
title: "Q317478: HOW TO: Prevent IIS from Accepting Anon Requests During Install"
permalink: /kb/317/Q317478/
---

## Q317478: HOW TO: Prevent IIS from Accepting Anon Requests During Install

{% raw %}

	Article: Q317478
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Introduction
	- Disable Anonymous Access on the Default Web Site
	
	SUMMARY
	=======
	
	This step-by-step article describes how to install Windows 2000 and Internet
	Information Services (IIS) version 5.0 from a network share without leaving the
	server vulnerable until you can install service packs and fixes.
	
	NOTE: This procedure works only if you install IIS from a network share. It does
	not work if you perform the installation directly from the Windows 2000 CD.
	
	Introduction
	------------
	
	When you install Windows 2000 and IIS 5.0 across a network, you may need to
	prevent IIS from serving anonymous requests until you have installed a service
	pack or fix. To do this, you must disable anonymous access on the default Web
	site during installation by modifying the Iis.inf file before you run the setup
	file. When you do this, the server is less likely to be compromised before it
	can be patched.
	
	Disable Anonymous Access on the Default Web Site
	------------------------------------------------
	
	1. Open a command prompt and browse to the i386 folder of the shared Windows
	  2000 installation.
	
	2. Run the following command to expand the Iis.inf file:
	
	  expand.exe iis.in_ iis.inf
	
	3. After the file is expanded, delete the Iis.in_ file.
	
	  NOTE: Do not delete the expanded Iis.inf file.
	
	4. Open the Iis.inf file in Notepad or any other text editor.
	
	5. In the [WWW_REG] section of the Iis.inf file, locate the following line:
	
	  1 0 HKLM System\CurrentControlSet\Services\W3SVC\Parameters Authorization
	  LM/W3SVC 6000 0x1 2 1 4 0x5
	
	6. Change the last parameter (0x5) of the line to 0x4. This configures the
	  server so that only Windows Integrated Authentication (NTLM) is enabled on
	  the server. The line should now resemble the following:
	
	  1 0 HKLM System\CurrentControlSet\Services\W3SVC\Parameters Authorization
	  LM/W3SVC 6000 0x1 2 1 4 0x4
	
	Other options for this parameter are as follows:
	
	   - 0x0 = No authentication (all access denied)
	
	   - 0x2 = Basic authentication only
	
	   - 0x6 = Basic and Windows Integrated (NTLM) authentication
	
	   - 0x16 = Digest authentication only
	
	   - 0x18 = Basic and Digest authentication
	
	   - 0x20 = Windows Integrated (NTLM) and Digest authentication
	
	7. After you have made the changes, save and close the file. Now, when you
	  install Windows 2000 from this share, these changes are applied when IIS is
	  configured during the installation process.
	
	8. Install IIS and all necessary service packs and fixes.
	
	9. Enable Anonymous authentication by using one of the following methods:
	
	   - From a command prompt on the server, run the following command:
	
	  C:\inetpub\adminscripts\cscript.exe adsutil.vbs set w3svc/AuthAnonymous True
	
	   - Use the IIS Management Console. To do this, follow these steps:
	
	     a. In the IIS Management Console, right-click the Computer node and then
	        click Properties.
	
	     b. Select WWW Service and then click Edit.
	
	     c. On the Directory Services tab, click Edit under Anonymous access and
	        authentication control.
	
	Additional query words: iis 5 secure install
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
