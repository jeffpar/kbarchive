---
layout: page
title: "Q259353: Must Enter Password Manually After You Toggle Password Sync"
permalink: kb/259/Q259353/
---

## Q259353: Must Enter Password Manually After You Toggle Password Sync

	Article: Q259353
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Internet Information Server (IIS) version 4.0, when you clear the Enable
	Automatic Password Synchronization check box (or the Allow IIS to control
	password check box in IIS version 5.0), use the Browse button to browse to the
	IUSR_<computer> account, and then click to reselect the check box, the
	password field is blank and you must enter the password manually. However, when
	you just clear, select, and clear this setting, and you do not browse to the
	IUSR_<computer> account, the password field retains the entry, and you are
	not required to enter the password manually.
	In addition, if the password is not entered, the Event Viewer logs may contain
	the following error message:
	
	  The server was unable to logon the Windows NT account
	  'IUSR_<machinename>' due to the following error: Logon failure: unknown
	  user name or bad password.
	
	CAUSE
	=====
	
	By default, when in IIS you clear the Enable Automatic Password Synchronization
	or Allow IIS to control password check boxes, you are required to enter the
	password manually and anonymous authentication will fail until you do.
	
	MORE INFORMATION
	================
	
	The following information details what occurs when you choose whether you want
	IIS to control the anonymous user password:
	
	1. On a new installation of IIS, the following metabase entries are created:
	
	   - AnonymousPasswordSync = 1
	   - AnonymousUserName = "IUSR_<COMPUTER>"
	   - AnonymousUserPass = "<Random Password>"
	
	2. When you clear the Enable Automatic Password Synchronization or the Allow IIS
	  to control password check box, the AnonymousPasswordSync value is set to 0.
	  However, because the IIS metabase already contains the AnonymousUserPass
	  setting, you are not required to enter the password.
	
	3. When you next select the Enable Automatic Password Synchronization or the
	  Allow IIS to control password check box, IIS sets the AnonymousPasswordSync
	  setting to 1 and then deletes the AnonymousUserPass setting from the
	  metabase.
	
	4. When you clear the Enable Automatic Password Synchronization or the Allow IIS
	  to control password check box again, the AnonymousPasswordSync value is set
	  back to 0. However, because the metabase no longer contains the
	  AnonymousUserPass setting, you must enter the password manually.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q253204 PRB: Error Message: The Server Was Unable to Logon the Windows NT
	  Account IUSR_machinename
	
	  Q184730 Password Sync and IIS 4.0 Return FrontPage Error Message
	
	Additional query words: iis 5 4
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
