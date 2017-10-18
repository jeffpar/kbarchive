---
layout: page
title: "Q295016: SMS: Cannot Save .mif Files Created by the MIF Entry Tool in Win"
permalink: kb/295/Q295016/
---

## Q295016: SMS: Cannot Save .mif Files Created by the MIF Entry Tool in Win

	Article: Q295016
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbConfig kbSecurity kbsms200 kbsms200bug kbsms200fix kbsmsUtil KbSECTools
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MIF Entry tool (MifWin.exe) that is included in the Back Office
	4.5 Resource Kit to extend a Systems Management Server (SMS) client computer
	inventory, a Windows 2000 user may be unable to save the .mif file that is
	created by Mifwin.exe.
	
	CAUSE
	=====
	
	This issue can occur if the Windows 2000 user does not have the appropriate
	permissions to save the file. The Mifwin.exe tool saves the .mif file to the
	<Windows_folder>\Ms\Sms\Noidmifs folder on the client by default. The
	Windows 2000 default permissions on this folder prevent a user who has low-level
	permissions from writing files to this folder.
	
	WORKAROUND
	==========
	
	To work around this issue, use either of the following methods:
	
	- Modify permissions on the <Windows_folder>\Ms\Sms\Noidmifs folder so
	  that users who have low-level permissions can write files to this folder.
	
	  -or-
	
	- Use SMS software distribution to configure the program to run with
	  Administrative rights. To do so, open Program properties, and then click "Run
	  with Administrative Rights".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For more information, refer to the "Discovery and Inventory Tools" topic in the
	Back Office 4.5 Resource Kit.
	
	Additional query words: prodsms mifwin mifgen uinfo.xnf
	
	======================================================================
	Keywords          : kbConfig kbSecurity kbsms200 kbsms200bug kbsms200fix kbsmsUtil KbSECTools 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
