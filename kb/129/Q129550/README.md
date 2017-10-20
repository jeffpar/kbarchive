---
layout: page
title: "Q129550: Unable to Install SMS Client Software with VSAFE"
permalink: /kb/129/Q129550/
---

## Q129550: Unable to Install SMS Client Software with VSAFE

{% raw %}

	Article: Q129550
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install Systems Management Server client software on a computer running
	Windows 3.1, and VSafe was started from the AUTOEXEC.BAT file, WIN.INI LOAD=
	entry, WIN.INI RUN= entry, or from the Startup group, several error messages
	appear referring to the Systems Manager Server client software files. The
	following is one of the error messages that appears on a Windows 3.1 computer:
	
	  SMS caused a fatal exception error at <mem address> in VXD VMM
	
	WORKAROUND
	==========
	
	To work around this problem, change the entry of VSafe to "VSAFE /8-" (without
	the quotation marks), or:
	
	1. Clean boot to MS-DOS and run VSafe (Detect and Clean).
	
	2. Run SMSLS and exit Windows. You may receive an error message from VSafe.
	  Choose the Update option and reboot the computer.
	
	3. When the following error message appears, run VSafe (Detect and Clean) again:
	
	  Access to the specified device, path or file is denied.
	
	4. If you receive errors during verification of files, choose Update on all
	  files and reboot the computer.
	
	5. Install the Systems Management Server client software again.
	
	
	Additional query words: prodsms sms wfw wfwg
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
