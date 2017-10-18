---
layout: page
title: "Q303000: IIS5: FTP Logon Fails for Passwords w/ Beginning Space or Spaces"
permalink: kb/303/Q303000/
---

## Q303000: IIS5: FTP Logon Fails for Passwords w/ Beginning Space or Spaces

	Article: Q303000
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a password that contains a beginning space or spaces to
	log on to a File Transfer Protocol (FTP) site, you may receive the following
	error message:
	
	  530 The user cannot login
	
	CAUSE
	=====
	
	FTP server removes all the spaces between the command (PASS) and its argument
	(password), which leads to the removal of the beginning space or spaces of the
	password. Because a wrong password is passed into local security agent, the
	logon fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time     Version        Size      File name
	  --------------------------------------------------------------
	  7/17/2001    05:48p   5.0.2195.3875  117,008  Ftpsvc2.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Microsoft Windows 2000 Service Pack 2 and Internet Information
	  Services (IIS) 5.0.
	
	2. Create a user account and set the password so that it does not begin with a
	  space.
	
	3. Attempt to log on to the FTP server with this account. The attempt is
	  successful.
	
	4. Reset the password to contain a space as the first character.
	
	5. Attempt to log on to the FTP server. It fails with the 530 error message.
	
	REFERENCES
	----------
	
	For additional information on how to obtain a hotfix for Windows 2000 Datacenter
	Server, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For more information on how to install multiple hotfixes with only one reboot,
	see the following Knowledge Base article:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For more information on how to install Windows 2000 and Windows 2000 hotfixes at
	the same time, see the following Knowledge Base article:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: kbIISCom FTP login password
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
