---
layout: page
title: "Q128910: WFW Does Not Prompt for a Domain Password"
permalink: kb/128/Q128910/
---

## Q128910: WFW Does Not Prompt for a Domain Password

	Article: Q128910
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows for Workgroups you are prompted for a Domain and local
	password if you have not selected the "Save this password in your password list"
	check box. If your Domain password is about to expire, you are given the
	opportunity to change it before it expires. If you change the Domain password,
	Windows for Workgroups caches the password even though you have not selected the
	"Save this password in your password list" check box.
	
	WORKAROUND
	==========
	
	For computers running Windows for Workgroups 3.11, use ADMINCFG.EXE to disable
	password caching. After doing this, you are prompted only for your Domain
	password when you start Windows for Workgroups. For more information about
	ADMINCFG.EXE, please refer to the Windows for Workgroups Resource Kit.
	
	As a temporary workaround you can either delete the .PWL file or use the Password
	List Editor to edit the .PWL file and remove the cached Domain password. The
	Password List Editor is shipped with the Windows for Workgroups Resource Kit.
	The problem will, however, reoccur the next time the Domain password expires.
	
	Adding the following line to the [NETWORK] section of the System.ini file will
	disable password caching and prevent your PWL file from being accessed:
	
	  PasswordCaching=no
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.10 3.11 security admin
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
