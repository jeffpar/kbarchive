---
layout: page
title: "Q126159: Lmscript.pif and the SMSLS Logon Script"
permalink: kb/126/Q126159/
---

## Q126159: Lmscript.pif and the SMSLS Logon Script

	Article: Q126159
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smshowto
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMSLS logon script stop responding (hangs) when it is used with some
	computers running Microsoft Windows 3.1 or Microsoft Windows for Workgroups 3.1
	or 3.11.
	
	CAUSE
	=====
	
	When a Windows system logs on to a network, Lmscript.exe is run on the client to
	parse and run the logon script. In some Windows configurations, applications
	that are run from the logon script can cause Lmscript.exe to stop responding.
	This problem usually occurs because of a timing problem with the background and
	foreground processes.
	
	Because Lmscript.exe is an MS-DOS-based program, a Lmscript.pif file is used to
	describe its required environment. Other drivers or processes that are running
	under Windows can take processor cycles away from Lmscript.exe. This can hang
	the Lmscript process or cause applications that are run from within the logon
	script to fail.
	
	RESOLUTION
	==========
	
	You may be able to reduce or eliminate this problem by modifying the
	Windows\System\Lmscript.pif file or by creating a batch file.
	
	Modify the Lmscript.pif File
	----------------------------
	
	1. Run PIF Editor (Pifedit.exe) and open the Windows\System\Lmscript.pif file.
	
	2. Ensure that the Execution Background check box is selected. It should be,
	  because this is the default setting.
	
	3. Select the Execution Exclusive check box.
	
	4. Save your changes and quit PIF editor.
	
	Modify the Process Priorities
	-----------------------------
	
	If the preceding steps do not resolve the problem, perform the following steps to
	modify the process priorities.
	
	1. Run PIF Editor (Pifedit.exe) and open the Windows\System\Lmscript.pif file.
	
	2. Choose Advanced, and then increase the Background Priority and Foreground
	  Priority values.
	
	3. Save your changes and quit PIF editor.
	
	Create a Batch File
	-------------------
	
	Create a batch file called Ntlogon.bat with the following entries:
	
	     Net Time
	     Net Use <network drive>: \\<ServerName>\<SMS Share>
	     <network drive>:
	     SMSLS.BAT  (SMSLS logon script)
	     <local drive C>:
	
	Additional query words: sms prodsms wfw wfwg program information file hang hangs hung
	
	======================================================================
	Keywords          : kbnetwork smshowto 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
