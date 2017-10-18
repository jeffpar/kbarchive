---
layout: page
title: "Q151980: SMS: Error Trying to Remote Control a French Windows NT Client"
permalink: kb/151/Q151980/
---

## Q151980: SMS: Error Trying to Remote Control a French Windows NT Client

	Article: Q151980
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Remote Control to control a client running French
	Windows NT (that has standard French regional settings) from a computer running
	English Systems Management Server, you will receive the following error
	message:
	
	  Cannot establish a security context with the client.
	
	When the server and the workstation have another configuration (regional
	settings), it works without difficulty.
	
	CAUSE
	=====
	
	By a decree of the French government, when you run Windows NT in the French
	locale, you must disable encryption. Therefore, Systems Management Server, and
	in particular the Remote Helpdesk functions, cannot establish a secure context
	in which to operate.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. A supported fix is available, but is not fully regression
	tested and should be applied only to systems experiencing this specific problem.
	Unless you are severely impacted by this specific problem, Microsoft recommends
	that you wait for the service pack release containing this fix. Contact
	Microsoft Technical Support for more information.
	
	If you are outside of the United States, contact the Microsoft Subsidiary in your
	area. To locate your subsidiary, see the Microsoft World Wide Offices Web site
	at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	This fix is also available on the Multi-Lingual Client Pack compact disc for
	Systems Management Server 1.2, which you can obtain by calling the Microsoft
	Order Desk at (800) 360-7561.
	
	
	The fix is provided with the following instructions (Readme.wri):
	
	Remote Control for French Windows NT clients from a US SMS Server
	-----------------------------------------------------------------
	
	French Windows NT uses different encryption settings than US Windows NT. In order
	to use Remote Control on a French NT client from a US SMS Server, you must patch
	the four files provided in this directory into the US SMS Site Server
	installation.
	
	Copy _WUSER32.DLL into the :
	SMS\SITE.SRV\MAINCFG.BOX\CLIENT.SRC\<platform>.BIN\00000409\ directory.
	Where <platform> is the platform of your French NT client (ALPHA, MIPS or
	X86).
	
	Copy MULTIPROT.DLL into the : SMS\SITE.SRV\<platform>.BIN directory. Where
	<platform> is the platform of your US SMS Server (ALPHA, MIPS or X86).
	
	Copy SIGHTNT.DLL into the : SMS\SITE.SRV\<platform>.BIN directory. Where
	<platform> is the platform of your US SMS Server (ALPHA, MIPS or X86).
	
	Copy WUSER32.EXE into the :
	SMS\SITE.SRV\MAINCFG.BOX\CLIENT.SRC\<platform>.BIN directory. Where
	<platform> is the platform of your French NT Client (ALPHA, MIPS or X86).
	
	Wait until the files have been replicated into the LOGON.SRV shared directory and
	then re-install or upgrade the SMS Client software in the French Windows NT
	Client.
	
	The French version of Systems Management Server 1.2 already contains the fixed
	components.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
