---
layout: page
title: "Q201851: Server Configuration Error: Parameter Md_Anonymous_User_Name..."
permalink: /kb/201/Q201851/
---

## Q201851: Server Configuration Error: Parameter Md_Anonymous_User_Name...

	Article: Q201851
	Product(s): Internet Information Server
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Personal Web Server version 4.0 for NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Publishing wizard, the following error occurs:
	
	  Server Configuration Error:
	  parameter md_anonymous_user_name (6020) has an invalid value.
	
	CAUSE
	=====
	
	On the server, the IUSR_<computername> user account is either disabled,
	locked out, or does not exist.
	
	-OR-
	
	The Anonymous Access account does not have Automatic Password Synchronization
	enabled.
	
	RESOLUTION
	==========
	
	To work around this issue, use one of the following resolutions:
	
	Verify that the Account Is Not Disabled/Locked Out and the Password Has Not Expired
	-----------------------------------------------------------------------------------
	
	1. Open the Windows NT User Manager (or User Manager for Domains).
	
	2. Verify that the IUSR_<computername> user account exists.
	
	3. Verify that the Password Never Expires option is selected.
	
	4. Verify that the "Account Disabled" and "Account Locked Out" options are NOT
	  selected.
	
	-OR-
	
	The IUSR_<computername> User Account Does Not Exist
	-------------------------------------------------
	
	1. Use the User Manager to create the IUSR_<computername> user account.
	
	2. Select the Password Never Expires check box.
	
	3. Verify that the "Account Disabled" and "Account Locked Out" check boxes are
	  NOT selected.
	
	4. Follow the instructions in the "Resolution 3: Use IUSR_<computername>
	  for Anonymous Access & Synchronize Passwords" section below to use this
	  account.
	
	-OR-
	
	Use IUSR_computername for Anonymous Access and Synchronize Passwords
	--------------------------------------------------------------------
	
	If the IUSR_computername user account exists, is not disabled or locked out, and
	the password has not expired, perform the following steps:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. In the Scope pane, open "Internet Information Server", and then select the
	  computer name.
	
	3. Right-click the Web site that generates the error, and then click Properties.
	  Click the Directory Security tab.
	
	4. Under "Anonymous Access and Authentication Control", click the Edit button.
	
	5. Select the Allow Anonymous Access option, and then click the Edit button.
	
	6. Type the IUSR_<computername> user account name (or browse to it), and
	  then select Enable Automatic Password Synchronization.
	
	7. Click OK three times to return to the MMC.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: pws ntop usermgr anonymous access wkz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbFrontPageSearch kbiis400 _IKkbZNotKeyword4 kbFrontPage98Search kbPersWebServSearch kbZNotKeyword3 kbPersWebServ400NTW400
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
