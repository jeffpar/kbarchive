---
layout: page
title: "Q158018: SMS: How to Deploy Microsoft Internet Explorer 3.0"
permalink: /kb/158/Q158018/
---

## Q158018: SMS: How to Deploy Microsoft Internet Explorer 3.0

	Article: Q158018
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbPCM smshowto smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To deploy Microsoft Internet Explorer 3.0 or 3.01 with Systems Management
	Server, download Ie30.pdf from ftp.microsoft.com. The file is located in the
	Bussys\Winnt\Sms-public directory. After downloading the file, copy it to the
	SMS\Primsite.srv\Import.src\Enu directory on your Systems Management Server site
	server. During the package creation, import the Ie30.pdf file.
	
	The Ie30.pdf file supports both an automated installation of Internet Explorer
	and a custom installation, in which the user provides setup information. Be
	aware that if you choose the automated installation, the client computer will be
	restarted during the Internet Explorer Setup process.
	
	MORE INFORMATION
	================
	
	You can customize Internet Explorer 3.0 before using Systems Management Server
	to deploy it. With the Internet Explorer Administration Kit 3.0 (IEAK), you can
	do any of the following:
	
	- Customize the look of Microsoft Internet Explorer with a company name or
	  logo.
	
	- Create a single, one-click installation package of all Microsoft Internet
	  Explorer components, including Microsoft Internet Explorer, NetMeeting
	  conferencing software, and Internet Mail and News for distribution or
	  download.
	
	- Preconfigure and control options for users within corporations.
	
	- Manage browser settings and user options on an ongoing basis from a single,
	  central server location within an intranet.
	
	You can obtain the new version of the IEAK from Microsoft by completing the
	online request form at http://www.microsoft.com/ie/ieak/.
	
	Additional query words: IE prodsms
	
	======================================================================
	Keywords          : kbinterop kbusage kbPCM smshowto smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbhowto
	
	=============================================================================
	
