---
layout: page
title: "Q169540: Error Message: Too Many Outstanding Commands"
permalink: /kb/169/Q169540/
---

## Q169540: Error Message: Too Many Outstanding Commands

	Article: Q169540
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork osr2 win95kbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Vnetbios.vxd virtual device included with Windows 95 is limited to 38 posted
	Listens. Some programs that use the NetBIOS Application Programming Interface
	(API) in Windows 95 may need to post more than 38 Listens. The following error
	message may be displayed if this is attempted:
	
	  Too many outstanding commands.
	
	Note that posting other commands to the NetBIOS interface may also result in this
	error message. This occurs mostly with asynchronous commands, but may also occur
	with synchronous commands. As a general rule, a command uses space for one
	network control block (NCB) in the device's internal buffer. This buffer is
	separate from, and does not affect, the number of sessions available to NetBIOS.
	
	CAUSE
	=====
	
	The Vnetbios.vxd virtual device runs out of internal storage for NCBs when 38
	Listens are posted. A key available in the Microsoft Windows 3.11 System.ini
	file (the "NumHCBs=" line in the [386Enh] section of the file) that allows the
	internal storage buffer to be expanded is not implemented in Windows 95.
	
	RESOLUTION
	==========
	
	A supported fix for Windows 95 and OEM Service Release 2 that corrects this
	problem is now available from Microsoft, but has not been fully regression
	tested and should be applied only to computers experiencing this specific
	problem. To resolve this problem immediately, contact Microsoft Technical upport
	to obtain the fix.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix for Windows 95 and OEM Service Release 2 should have the following file
	attributes (or later):
	
	  File name     Version    Date      Time     Size
	  --------------------------------------------------------
	  Vnetbios.vxd  4.00.953   12/16/97  9:53am   27,245 bytes
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2).
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	After you obtain and install the update, add one of the values listed below for
	the "NumHCBs=" line in the System.ini file. Note that the number of Listens is
	not an exact correlate of the value set for the "NumHCBs=" line. This occurs
	because the Vnetbios.vxd internal command buffer is allocated in pages, rather
	than the exact value on the "NumHCBs=" line.
	
	  [386Enh]
	  NumHCBs=32      ; this is the default value, yields 38 listens
	  ;NumHCBs=41      ; yields up to 77 listens
	  ;NumHCBs=80      ; yields up to 117 listens
	
	NOTE: The semicolon (;) character shown at the beginning of the sample entries
	begins commented text. Windows 95 ignores all text that follows the semicolon.
	Include only one of the lines in the System.ini file, and make sure that the
	leading semicolon has been removed so that the value is used.
	
	Additional query words: netbios NumHCBs maximum listens
	
	======================================================================
	Keywords          : kberrmsg kbnetwork osr2 win95 kbfixlist
	Technology        : kbWin95search kbWin98search kbOPKSearch kbZNotKeyword3 kbWin98 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
