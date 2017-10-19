---
layout: page
title: "Q268419: HOWTO: Enable Password Change Functionality for OWA"
permalink: /kb/268/Q268419/
---

## Q268419: HOWTO: Enable Password Change Functionality for OWA

	Article: Q268419
	Product(s): Internet Information Server
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server 5.5 and 2000 include a component called Outlook Web
	Access (OWA) that enables clients to (among other tasks) read e-mail through a
	Web browser. Another function that the component can facilitate is changing of
	domain passwords. For this to work with Microsoft Internet Information Services
	(IIS) 5.0, you must create and configure a virtual directory.
	
	MORE INFORMATION
	================
	
	You can use the following steps to enable the IISADMPWD directory for password
	changes under Outlook Web Access.
	
	NOTE: By default, this directory is installed as a physical folder under Windows
	2000 but not as a virtual directory under Internet Information Services 5.0.
	This means that for all intents and purposes, the directory doesn't exist as far
	as IIS is concerned.
	
	1. From Windows Explorer, verify that the physical directory exists at
	  C:\WINNT\System32\Inetsrv\Iisadmpwd. It should contain nine *.htr files.
	
	2. From within the IIS Microsoft Management Console (MMC) snap-in, open the
	  default Web site.
	
	3. Right-click the default Web site and point to New on the pop-up menu, and
	  then click Virtual Directory.
	
	4. On the second screen of the wizard, give the virtual directory an alias of
	  "IISADMPWD" (without the quotation marks). On the third screen, give the
	  folder a physical directory location of "C:\WINNT\System32\Inetsrv\Iisadmpwd"
	  (without the quotation marks). On the fourth screen, select Read, Run Script,
	  and Execute Access privileges. Click finish on the fifth screen of the wizard
	  to prompt creation of the folder.
	
	5. At this point, you can change user passwords through Outlook Web Access.
	  Passwords must be entered in a DOMAIN\Username format to be changed.
	  Additionally, all password complexity and history requirements must be met
	  when you change a password or an error will be returned.
	
	NOTE: The IISADMPWD requires a secure sockets layer (SSL) connection to work.
	This is designed to avoid changing passwords across a network through HTTP,
	which is clear text. After you click the submit button, the protocol is changed
	from HTTP to HTTPS. If necessary, follow the steps in Help to obtain a server
	certificate for the Web server
	(http://localhost/iishelp/iis/htm/core/iiocrsc.htm on a server with IIS
	installed). You can also use Microsoft Certificate Services 2.0 (which is
	included with Windows 2000) to sign a server certificate that can be used by IIS
	to enable an SSL session.
	
	For additional information on securing IIS for SSL, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q228821 Generating a Certificate Request File Using Certificate Wizard
	
	  Q228836 Installing a New Certificate for Use in SSL/TLS
	
	Additional query words: iis 5 owa outlook access exchange 5.5 2000 password change web
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbOutlookSearch kbiisSearch kbiis500 kbOWASearch kbOWA550
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
