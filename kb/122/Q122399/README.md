---
layout: page
title: "Q122399: Enabling Help Desk Options for MS-DOS Clients"
permalink: kb/122/Q122399/
---

## Q122399: Enabling Help Desk Options for MS-DOS Clients

	Article: Q122399
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Help Desk Options for MS-DOS clients are disabled by default. This article
	discusses proper methods to enable Help Desk Options for an MS-DOS Remote
	client.
	
	MORE INFORMATION
	================
	
	Help Desk Options can be enabled by an MS-DOS client using the -v option of
	USERTSR and USERIPX, or by modifying the SMS.INI on the client. Help Desk
	Options enabled using the -v option of USERTSR and USERIPX (USERIPX is used only
	with Novell IPX clients) are not saved, so the next reboot results in selected
	options being disabled again. Help Desk Options enabled by modifying the SMS.INI
	are permanent.
	
	Method 1: Using -v Option of USERTSR and USERIPX
	------------------------------------------------
	
	To enable options using the -v command of USERTSR or USERIPX:
	
	1. Make sure USERTSR or USERIPX has already been loaded in the CLIENT.BAT file
	  because the -v options are not available until USERTSR or USERIPX has already
	  been loaded.
	
	2. Run USERTSR or USERIPX with a -v option for every Help Desk Option you would
	  like to enable. Available options are:
	
	  VIEW - Allows Remote Control of the client
	  FILEXFER - Allows File Transfer to/from the client
	  EXECUTE - Allows Remote Execution of commands on the client
	  REBOOT - Allows Remote Reboot of the client
	
	  Example:
	
	  USERTSR -vVIEW -vREBOOT -vEXECUTE
	
	  NOTE: To disable a Help Desk Option, enter a -v option preceded by NO. For
	  example:
	
	  USERTSR -vNOVIEW -vNOREBOOT -vNOEXECUTE
	
	Method 2: Modifying SMS.INI File
	--------------------------------
	
	To enable options in the SMS.INI:
	
	1. Change the properties of the SMS.INI file from read-only, hidden, and system
	  using the following MS-DOS command:
	
	  attrib c:\sms.ini -r -h -s
	
	2. Open the SMS.INI file in Notepad and change the entries in the Sight section
	  from "No" to "Yes" (without the quotation marks):
	
	        [Sight]
	        Allow Takeover= <No | Yes>
	        Allow Reboot= <No | Yes>
	        Allow File Transfer= <No | Yes>
	        Allow Remote Execute= <No | Yes>
	
	3. Save the changes and set the properties of the SMS.INI to read-only, hidden,
	  and system using the following MS-DOS command:
	
	  attrib c:\sms.ini +r +h +s
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
