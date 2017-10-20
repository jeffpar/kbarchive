---
layout: page
title: "Q246311: Err Msg: An Error Occurred Getting or Setting a Configuration..."
permalink: /kb/246/Q246311/
---

## Q246311: Err Msg: An Error Occurred Getting or Setting a Configuration...

{% raw %}

	Article: Q246311
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to set a Web site or virtual directory as an application, you may
	receive the following error message:
	
	  An error occurred getting or setting a configuration parameter 0x80110401
	
	RESOLUTION
	==========
	
	There are several possible resolutions to this error. After each of these steps
	verify that you are still receiving the error before proceeding to the next
	step.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Use the Mdutil.exe file from the Windows NT Option Pack (NTOP) CD to check
	  the consistency of the metabase. This executable file is available on the CD,
	  but is not installed. Copy this file to the hard drive of the Web server
	  though Windows Explorer. Use the following command line to enumerate and
	  display the information in the metabase:
	
	  
	
	  "mdutil.exe enum_all"
	
	  If this command fails or returns an error, then the metabase is corrupt and
	  you should restore from a known backup, or remove and reinstall the NTOP. For
	  more information , please consult: For additional information on backing up
	  of the metabase, click the article number below to view the article in the
	  Microsoft Knowledge Base:
	
	  Q234429 How to Manually Restore the Metabase When No Backup Exists
	
	2. Change the system package in Transaction Server from the Interactive User to
	  a user that has Local Administrators access:
	
	  a. On the IIS computer, in the scope (left-hand) pane of the MMC, go to the
	     following branch:
	
	  
	
	  Microsoft Transaction Server
	           Computers
	            My Computer
	              Packages Installed
	
	  b. Right-click the system package, and then click Properties on the Context
	     menu.
	
	  c. Click the Identity tab.
	
	  d. Select the This user radio button, and then provide the user account and
	     password.
	
	     Note: Make sure to include the domain in the user text box, followed by a
	     backslash before the user's name (for example DomainName\UserName).
	
	3. Verify the permissions on the noted registry key:
	
	  a. Start Registry Editor (Rededt32.exe).
	
	  b. Locate and highlight the following registry key:
	
	  HKEY Local Machine\Software\Microsoft\Transaction Server
	
	  c. With this registry key highlighted, choose Permissions from the Security
	     menu and verify that the following permissions (or greater) are set:
	
	      - Creator Owner: Full Control
	
	      - Administrators: Full Control
	
	      - Everyone: Special Access
	
	  Query Value Set Value
	  Create Subkey
	  Enumerate Subkey
	  Notify
	  Delete
	  Read Control
	
	      - System: Full Control
	
	4. Synchronize the IWAM(computer_name) account using the steps in the following
	  article:
	
	  Q195956 Cannot Set AppRoot OutProc MTS Package Identity Set to Y
	
	  You may also have to create a new account and use Adsutil.vbs to set
	  WAMUserName and WAMUserPass to the new account.
	
	5. Verify in Dcomcnfg.exe that IUSR(computer_name) and IWAM(computer_name) (or
	  their equivalents) have access permission and launch permission on the
	  Security tab.
	
	6. Try the following Transaction Server utilities:
	
	  %program files%\mts\mtxrereg.exe
	  %program files%\mts\mtxstop.exe
	
	7. Save or export, and then delete the following registry key:
	
	  Hkey_Current_User\Software\Microsoft\Cryptography\Userkeys\MS_IIS_DCOM_CLIENT
	
	  After you do this, restart the computer to reinitialize the registry.
	
	8. Re-apply the current service pack.
	
	9. Check to see if the Guest group (for which the IUSR and IWAM accounts are
	  members) is disabled.
	
	  To work around this, enable the Guest account or disable Authorization
	  Checking in Transaction Server using the MMC:
	
	  a. In Transaction Server, select Packages Installed.
	
	  b. Select IIS in-process applications, select Components, and then choose
	     IISWAM1_ROOT_IISADMIN.
	
	  c. Right-click Properties, click the Security tab, and then disable
	     Authorization Checking.
	
	  Note: This can also be caused by a missing IIS in-process application from
	  Transaction Server. If you find that the IIS in-process application is
	  missing from the Transaction Server installed packages, follow the steps in
	  the following article:
	
	  Q246309 How to Replace a Missing IIS in Process Applications in Transaction
	  Server
	
	If this error persists, you we will need to remove and reinstall the NTOP to
	resolve this issue.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
